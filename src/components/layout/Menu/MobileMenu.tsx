import { useMobileMenu } from "@hooks/useMobileMenu";
import { MenuItem } from "./MenuItem";

interface MobileMenuProps {
  isOpen?: boolean;
}

export function MobileMenu({ isOpen }: MobileMenuProps) {
  const pathsArray = [
    {
      route: "/",
      routeName: "Início",
    },
    {
      route: "/about",
      routeName: "Sobre",
    },
  ];

  const openNavBarAnimation = () =>
    isOpen === true ? "translate-x-0" : "-translate-x-64";

  const linkStyle = `
    w-full transition-all duration-300 ease-in-out
    text-white font-default font-semibold
    hover:text-white/60`;

  return (
    <nav
      className={`overflow-hidden bg-dark/95 -top-0
      flex sm:hidden absolute -left-10 py-24 pl-[5.5rem]
      h-screen w-72 transition-all duration-300 ease-in-out
      ${openNavBarAnimation()}
    `}
    >
      <div className={`flex flex-col leading-10 w-full justify-between`}>
        <div>
          {pathsArray.map((link, i) => (
            <MenuItem
              key={i}
              path={link.route}
              url={link.route}
              text={link.routeName}
              className={linkStyle}
            />
          ))}
        </div>
      </div>
    </nav>
  );
}
