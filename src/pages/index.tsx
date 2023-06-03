import Prismic from "@prismicio/client";
import { useEffect, useState } from "react";
import { Container } from "@container/Container";
import { Section } from "@container/Section";
import { MainSlider } from "@layout/sliders/MainSlider";
import { Project } from "@models/project";
import { RecentlySeen } from "@layout/RecentlySeen";
import { GetServerSideProps } from "next";
import { parseCookies } from "nookies";
import { GuestUser } from "@models/guestUser";
import { LastProject } from "@layout/LastProject";
import { useRecentlySeenContext } from "@hooks/useRecentlySeenContext";
import { getPrismicClient } from "@services/prismic";
import { RichText } from "prismic-dom";
import { postersType, prismicProjectDetail } from "@models/prismic";

interface HomeProps {
  stringfyGuest: string;
  stringfyProject: string;
  projects: prismicProjectDetail[] & Project[];
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const cookies = parseCookies(context);
  const stringfyGuest = cookies._guest || "";
  const stringfyProject = cookies._projectCookie || "";

  const prismic = getPrismicClient();

  const response = await prismic.query(
    [Prismic.Predicates.at("document.type", "project")],
    {
      orderings: "[document.last_publication_date desc]",
      fetch: [
        "project.title",
        "project.main_image",
        "project.posters",
        "project.acess",
        "project.github",
        "project.description",
        "project.subtitle",
        "project.stacks",
        "project.responsive",
        "project.project_by",
        "project.project_by_link",
      ],
    }
  );

  const projects = response.results.map((project) => {
    return {
      id: project.id,
      title: RichText.asText(project.data.title),
      image: project.data.main_image.url,
      posters: project.data.posters.map(
        (poster: postersType) => poster.poster.url
      ),
      acess: project.data.acess.url,
      github: project.data.github.url,
      description: RichText.asText(project.data.description),
      subtitle: RichText.asText(project.data.subtitle),
      stacks: project.data.stacks.map((tech: any) =>
        RichText.asText(tech.tech)
      ),
      owner: RichText.asText(project.data.project_by),
      ownerRefere: project.data.project_by_link.url,
      responsive: project.data.responsive,
    };
  });

  return {
    props: { stringfyGuest, stringfyProject, projects },
  };
};

export default function Home({
  stringfyGuest,
  stringfyProject,
  projects,
}: HomeProps) {
  const { isLoading } = useRecentlySeenContext();

  const parsedGuest: GuestUser = stringfyGuest && JSON.parse(stringfyGuest);
  const parsedProject: Project[] =
    stringfyProject && JSON.parse(stringfyProject);

  const [recentrlySeen, setRecentrlySeen] = useState(parsedProject || []);

  useEffect(() => {
    const cookies = parseCookies();
    const stringfyProject = cookies._projectCookie || "";
    const parsedProject: Project[] =
      stringfyProject && JSON.parse(stringfyProject);

    setRecentrlySeen(parsedProject);
  }, [isLoading]);

  return (
    <Container pageTitle="Projetos | Portfólio" guest={parsedGuest}>
      <Section>
        <MainSlider projects={projects} currentId={0} />
      </Section>
      <Section>
        <RecentlySeen projects={recentrlySeen} />
      </Section>
      <Section>
        <LastProject projects={projects} />
      </Section>
    </Container>
  );
}
