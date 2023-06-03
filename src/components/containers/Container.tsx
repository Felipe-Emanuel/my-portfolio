import Head from "next/head";
import { v4 as uuidv4 } from "uuid";
import { TopBar } from "@layout/Menu/TopBar";
import { MenuAnimation } from "@animations/menu/MenuAnimation";
import { useMobileMenu } from "@hooks/useMobileMenu";
import { useEffect, useState } from "react";
import { CookieMessage } from "@layout/CookieMessage";
import { GuestUser } from "@models/guestUser";
import { Cookies } from "@functions/Cookies";

interface ContainerProps {
  pageTitle: string;
  children?: any;
  guest: GuestUser;
}

export function Container({ children, pageTitle, guest }: ContainerProps) {
  const { SetCookie } = Cookies();
  const { isOverlayActive, openMenu, isMenuOpen } = useMobileMenu();

  const [isCookieAccepted, setIsCookieAccepted] = useState(
    guest && guest.acceptCookies
    );
    
    const guestId = {
      guestId: uuidv4(),
      acceptCookies: false,
    };
    const verifyGuestCookie = () => {
    if (guest) {
      return;
    }

    SetCookie("_guest", guestId);
  };

  useEffect(() => {
    verifyGuestCookie();
  }, []);

  const checkOverlay =
    isOverlayActive === true
      ? "overflow-hidden"
      : "overflow-y-auto overflow-x-hidden";

  const acceptCookie = () => {
    setIsCookieAccepted((isCookieAccepted) => !isCookieAccepted);

    const updatedCookie = {
      ...guestId,
      acceptCookies: !isCookieAccepted,
    };

    SetCookie("_guest", updatedCookie);
  };
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <main>
        {!isCookieAccepted && <CookieMessage acceptCookie={acceptCookie} />}
        <div
          className={`bg-orange-flash
          p-10 relative flex flex-col h-screen w-screen
          ${checkOverlay}
          `}
          >
          {isMenuOpen && <div className="absolute inset-0 bg-black/50 z-50" />}
          <TopBar
            hamburger={
              <MenuAnimation isClose={isMenuOpen} onClick={() => openMenu()} />
            }
          />
          {children}
        </div>
      </main>
    </>
  );
}
