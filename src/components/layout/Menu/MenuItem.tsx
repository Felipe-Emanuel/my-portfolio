import Link from "next/link";
import { ReactNode } from "react";
import { useRouter } from "next/router";

interface MenuItemProps {
  url?: string;
  text: string;
  className?: string;
  path?: string;
  icon?: ReactNode;
  onClick?: (e: any) => void;
}

export function MenuItem({
  path,
  url,
  text,
  className,
  icon,
  onClick,
}: MenuItemProps) {
  const router = useRouter();
  const paths = router.pathname;
  const checkPath = () => paths === path && "text-white/60";
  const checkCursor = () =>
    paths === path ? `cursor-default` : `cursor-pointer`;

  return (
    <Link
      onClick={onClick}
      href={url ?? "#"}
      className={`text-white hover:text-white/60 flex justify-start items-center
          transition-all duration-300 font-default font-semibold
          ${checkPath()}
          ${checkCursor()}
          ${className}
        `}
    >
      <span
        className={`flex justify-between items-center ${
          icon && "w-full pr-10"
        }`}
      >
        {text} {icon}
      </span>
    </Link>
  );
}
