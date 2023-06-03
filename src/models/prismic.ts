export interface prismicProjectDetail {
  id: string;
  image: string;
  title: string;
  subtitle: string;
  acess: string;
  github: string;
  stacks: string[];
  owner: string;
  ownerRefere: string;
  description: string;
  posters: string[];
  responsive: boolean;
}

export type postersType = {
  poster: {
    dimensions: {};
    alt: string | undefined;
    copyright: null;
    url: string;
  };
};

export type AboutType = {
  name: string;
  subtitle: string;
  image: string;
  graduation: string;
  graduationLink: string;
  graduationSubtitle: string;
  graduationImage: string;
  linkedin: string;
  github: string;
  description: string[];
};
