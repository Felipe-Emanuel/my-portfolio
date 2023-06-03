import Image from "next/image";

interface ModalImageProps {
  onClick: () => void;
  image: string;
  subtitle: string;
}

export function ModalImage({ onClick, image, subtitle }: ModalImageProps) {
  return (
    <div
      onClick={onClick}
      className="w-full h-screen fixed overflow-hidden bg-black/75 inset-0 z-[200] flex justify-center items-center"
    >
      <Image
        onClick={(e) => e.stopPropagation()}
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOMDYutBwADuQGRo8ohBwAAAABJRU5ErkJggg=="
        src={image}
        width={1980}
        height={920}
        alt={subtitle}
        className="ring-1 sm:ring-2 m-2 p-2 ring-orangeDark w-full max-w-6xl h-fit rounded-lg"
      />
    </div>
  );
}
