import { ReactNode } from "react";
interface ContentProps {
  children?: ReactNode;
}

export function Section({ children }: ContentProps) {
  return (
    <section
      className={`mx-auto relative w-full h-fit`}
    >
      {children}
    </section>
  );
}
