import { Swiper } from "swiper/react";
import { ReactNode } from "react";
import { Navigation, Pagination, A11y, Thumbs } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useWindow } from "@hooks/useWindow";

type ISwiperComponentProps = {
  children: ReactNode;
  className?: string;
};

export default function SwiperComponent({
  children,
  className
}: ISwiperComponentProps) {
  const renderSwiper = () => {
    const { width } = useWindow();

    return (
      <Swiper
        draggable
        grabCursor
        modules={[Navigation, Pagination, A11y, Thumbs]}
        spaceBetween={width >= 768 ? 0 : 4}
        slidesPerView={width >= 1800 ? 3.1 : 2}
        className={`relative h-fit w-screen -left-10 ${className}`}
      >
        {children}
      </Swiper>
    );
  };

  return renderSwiper();
}
