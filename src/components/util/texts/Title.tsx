interface TitleProps {
  as?: "h2" | "h3" | "h4" | "h5" | "h6";
  title?: string;
  className?: string;
}

export function Title({ title, className, as }: TitleProps) {
  const Comp = as ?? "h1";

  return (
    <Comp
      className={`
        font-black font-default text-white text-2xl md:text-3xl
          ${className}
      `}
    >
      {title}
    </Comp>
  );
}
