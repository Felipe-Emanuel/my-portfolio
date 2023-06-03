import { Text } from "../texts/Text";
import { Project } from "@models/project";
import { Cookies } from "@functions/Cookies";
import { useRecentlySeenContext } from "@hooks/useRecentlySeenContext";
import { ReactNode, useEffect, useState } from "react";
import { DoorIcon, GitHubIcon, HoveredDoorIcon } from "@icons/index";

interface ButtonProps {
  text: ReactNode;
  href: string;
  className?: string;
  data?: Project;
  noBlank?: boolean;
  github?: boolean;
}

export function LinkButton({
  text,
  href,
  className,
  data,
  noBlank,
  github,
}: ButtonProps) {
  const { SetCookie } = Cookies();
  const { setIsLoading, updateCookie, projectCookie } =
    useRecentlySeenContext();
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    SetCookie("_projectCookie", projectCookie);
  }, [projectCookie]);

  const changeHoveredState = () => setIsHovered((isHovered) => !isHovered);
  const checkIsGovered = isHovered ? "text-white" : "";

  return (
    <button>
      <Text className="font-light pointer-events-auto">
        <a
          onMouseEnter={changeHoveredState}
          onMouseLeave={changeHoveredState}
          onClick={() => {
            updateCookie(data);
            setIsLoading(true);
          }}
          className={`bg-dark py-2 px-4 transition-all rounded-lg flex gap-1 items-center
            hover:bg-orangeDark hover:animate-jump ring-1 ring-white/25 ${checkIsGovered} ${className}`}
          target={noBlank ? "" : "_blank"}
          href={href}
        >
          {text}
          {github ? (
            <span>
              <GitHubIcon />
            </span>
          ) : (
            <>
              {isHovered ? (
                <span>
                  <HoveredDoorIcon />
                </span>
              ) : (
                <span>
                  <DoorIcon />
                </span>
              )}
            </>
          )}
        </a>
      </Text>
    </button>
  );
}
