import { NavBar } from "./NavBar";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import { MobileMenu } from "./MobileMenu";
import { useMobileMenu } from "@hooks/useMobileMenu";

interface TopBarProps {
  hamburger: ReactNode;
}

export function TopBar({ hamburger }: TopBarProps) {
  const { isMenuOpen, openMenu } = useMobileMenu();
  const path = useRouter();

  const checkPath =
    path.asPath !== "/about" &&
    path.asPath !== "/profile" &&
    path.asPath !== "/settings"
      ? "bg-transparent"
      : "bg-light/50";

  function renderMenuButton() {
    return (
      <div
        onBlur={() => openMenu()}
        onClick={() => openMenu()}
        className="flex sm:hidden z-50"
      >
        {hamburger}
      </div>
    );
  }

  function renderNavBar() {
    return (
      <div className="hidden sm:flex gap-4 items-center">
        <NavBar />
      </div>
    );
  }

  return (
    <div
      className={`
        left-0 px-10 top-0 py-3 w-full bg-gradiant-to-b
        justify-between flex items-center z-50 fixed ${checkPath}
      `}
    >
      {renderMenuButton()}
      <MobileMenu isOpen={isMenuOpen} />
      {renderNavBar()}
    </div>
  );
}
