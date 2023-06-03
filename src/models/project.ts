export interface Project {
  date: Date;
  title: string;
  id: number;
  image: string;
  posters: string[];
  acessLlink: string;
  gitLlink: string;
  description: string;
  subtitle: string;
  stacks: string[];
  original: boolean;
  responsive: boolean;
  goal: string;
  collaborators: string;
}

export interface recentlySeenCookie {
  id: number | undefined;
  subtitle: string | undefined;
  guestId: string | undefined;
  title: string | undefined;
  image: string | undefined;
  acessLlink: string | undefined;
  responsive: boolean | undefined;
  date: Date;
}
