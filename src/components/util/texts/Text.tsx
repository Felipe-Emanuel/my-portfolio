import { ReactNode } from "react";

interface TextProps {
  className?: string;
  children: ReactNode;
  as?: "span";
  size?: "xs" | "sm" | "base" | "lg" | "xl";
  hover?: boolean;
}

export function Text({ children, as, className, size, hover }: TextProps) {
  const Comp = as ?? "p";
  const textSize = size ?? "sm";
  const isHover = hover ? "hover:text-white/75" : "";

  return (
    <Comp
      className={`transition-all 
            font-default text-${textSize}
            ${isHover}
            text-orangeDark 
            ${className}
        `}
    >
      {children}
    </Comp>
  );
}
