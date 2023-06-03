import { Text } from "@util/texts/Text";
import { Project } from "@models/project";
import { Cookies } from "@functions/Cookies";
import { useEffect } from "react";
import { prismicProjectDetail } from "@models/prismic";
import { useRecentlySeenContext } from "@hooks/useRecentlySeenContext";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  data?: prismicProjectDetail & Project;
}

export function Button({ text, data, onClick }: ButtonProps) {
  const { SetCookie } = Cookies();
  const { setIsLoading, updateCookie, projectCookie } =
    useRecentlySeenContext();

  useEffect(() => {
    SetCookie("_projectCookie", projectCookie);
  }, [projectCookie]);

  const checkFunction = () => {
    if (data) {
      updateCookie(data), setIsLoading(true);
    } else if (onClick) {
      onClick();
      setIsLoading(true);
    }
  };

  return (
    <button
      onClick={checkFunction}
      className="bg-dark p-1 py-2 px-4 rounded-md
      hover:animate-jump hover:bg-orangeDark pointer-events-none"
    >
      <Text className="text-[8px] sm:text-xs lg:text-base hover:text-white pointer-events-auto">
        {text}
      </Text>
    </button>
  );
}
