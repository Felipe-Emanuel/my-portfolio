import { Text } from "@util/texts/Text";
import { useState } from "react";
import { LinkIcon } from "@icons/index";
import { OwnerList } from "@util/lists/OwnerList";

interface OwnerButtonProps {
  owner: string;
  ownerRefere: string;
}

export function OwnerButton({ owner, ownerRefere }: OwnerButtonProps) {
  const [hovered, setHovered] = useState(false);

  const setHoverIcon = () => setHovered((hovered) => !hovered);

  return (
    <div
      className={`bg-white transition-all ${
        hovered ? "w-36" : "w-8"
      } flex gap-2 items-center
        rounded-full overflow-hidden
        ring-1 ring-orangeDark`}
      onMouseEnter={setHoverIcon}
      onMouseLeave={setHoverIcon}
    >
      <div className="flex items-center justify-center">{OwnerList[owner]}</div>
      <Text className="flex items-center gap-2">
        <a
          href={ownerRefere}
          target="_blank"
          className="transition-all duration-100 hover:font-bold"
        >
          {owner}
        </a>
        <LinkIcon />
      </Text>
    </div>
  );
}
