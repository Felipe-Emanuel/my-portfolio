import { Title } from "@util/texts/Title";
import { Project } from "@models/project";
import { RecentlySeenItem } from "./RecentlySeenItem";
import { SwiperComponent, SwiperSlide } from "@layout/sliders/swiper";

interface RecentlySeenProps {
  projects: Project[];
}

export function RecentlySeen({ projects }: RecentlySeenProps) {
  if (projects.length === 0)
    return <div className="mt-8 pt-12 h-full bg-gradiant-to-b w-screen" />;

  const sortedProjects = projects
    .slice(0, 3)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className="pb-8 pt-16 sm:py-8 bg-gradient-black-transparent w-screen">
      <Title as="h2" title="Continue sua navegação" className="py-4" />
      <SwiperComponent>
        {sortedProjects.map((item, i) => (
          <SwiperSlide key={i} className="lg:px-10">
            <RecentlySeenItem
              alt={item.subtitle}
              id={item.id}
              image={item.image}
              title={item.title}
              responsive={item.responsive}
              linkDetails={`/projectDetail/${item.title}/${item.id}`}
            />
          </SwiperSlide>
        ))}
      </SwiperComponent>
    </div>
  );
}
