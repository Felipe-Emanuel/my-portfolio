import * as Tooltip from "@radix-ui/react-tooltip";
import { ReactNode } from "react";
import { Normalize } from "@functions/normalized";

interface TooltipCompProps {
  children: ReactNode;
  text: string;
}

export function TooltipComp({ children, text }: TooltipCompProps) {
  const { capitalizeName } = Normalize();

  return (
    <Tooltip.Provider delayDuration={0}>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <div className="overflow-hidden z-40 inline-flex w-6 h-6 items-center justify-center rounded-full shadow-[0_2px_10px] outline-none focus:shadow-[0_0_0_2px] focus:shadow-black">
            {children}
          </div>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content
            className="z-40 font-bold data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade
                data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade text-black bg-white select-none
                rounded-[4px] px-[15px] py-[10px] text-[15px] leading-none shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px]
                will-change-[transform,opacity] font-default"
            sideOffset={0}
          >
            {capitalizeName(text)}
            <Tooltip.Arrow className="fill-white" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}
