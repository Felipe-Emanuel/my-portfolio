import { parseCookies } from "nookies";
import { createContext } from "react";
import { prismicProjectDetail } from "@models/prismic";
import { Project, recentlySeenCookie } from "@models/project";
import { Dispatch, ReactNode, SetStateAction, useState } from "react";

interface RecentlySeenProviderProps {
  children: ReactNode;
}

type RecentlySeenContextType = {
  updateCookie: (data: Project | undefined) => void;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  isLoading: boolean;
  projectCookie: prismicProjectDetail | Project;
};

const recentlyCookiet = {
  id: "",
  image: "",
  title: "",
  subtitle: "",
  acess: "",
  github: "",
  stacks: [],
  owner: "",
  ownerRefere: "",
  description: "",
  posters: [],
  responsive: false,
  date: new Date(),
};

export const RecentlySeenContext = createContext<RecentlySeenContextType>({
  setIsLoading: () => {},
  updateCookie: () => {},
  isLoading: false,
  projectCookie: recentlyCookiet,
});

export const RecentlySeenProvider = ({
  children,
}: RecentlySeenProviderProps) => {
  const [isLoading, setIsLoading] = useState(true);

  const cookies = parseCookies();
  const parsedCookie =
    cookies._projectCookie && JSON.parse(cookies._projectCookie);
  const parsedCookieUser = cookies._guest && JSON.parse(cookies._guest);
  const { guestId } = parsedCookieUser || "";

  const [projectCookie, setProjectCookie] = useState(parsedCookie || []);

  const updateCookie = (data: Project | undefined) => {
    const { id, title, image, acessLlink, responsive, subtitle } = data || {};

    const newRecentlySeenCookie: recentlySeenCookie = {
      id,
      guestId,
      title,
      image,
      acessLlink,
      responsive,
      date: new Date(),
      subtitle,
    };

    const currentTime = new Date();
    newRecentlySeenCookie.date.setHours(currentTime.getHours());
    newRecentlySeenCookie.date.setMinutes(currentTime.getMinutes());
    newRecentlySeenCookie.date.setSeconds(currentTime.getSeconds());

    setProjectCookie((prevCookie: recentlySeenCookie[]) => {
      const existingProject = prevCookie.find(
        (project) => project.id === newRecentlySeenCookie.id
      );

      if (existingProject) {
        existingProject.date = newRecentlySeenCookie.date;
        existingProject.guestId = newRecentlySeenCookie.guestId;
        return [...prevCookie];
      } else {
        return [...prevCookie, newRecentlySeenCookie];
      }
    });
    setTimeout(() => setIsLoading(false), 250);
  };

  return (
    <RecentlySeenContext.Provider
      value={{
        setIsLoading,
        updateCookie,
        isLoading,
        projectCookie,
      }}
    >
      {children}
    </RecentlySeenContext.Provider>
  );
};
