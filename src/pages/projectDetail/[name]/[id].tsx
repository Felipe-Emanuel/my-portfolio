import { Project } from "@models/project";
import { Section } from "@container/Section";
import { RichText } from "prismic-dom";
import { GuestUser } from "@models/guestUser";
import { Container } from "@container/Container";
import { parseCookies } from "nookies";
import { ProjectDetails } from "@layout/sliders/projectDetails/ProjectDetails";
import { GetServerSideProps } from "next";
import { getPrismicClient } from "@services/prismic";
import { postersType, prismicProjectDetail } from "@models/prismic";

interface ProjectDetailProps {
  content: prismicProjectDetail & Project;
  stringfyGuest: string;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const prismic = getPrismicClient(context.req);
  const cookies = parseCookies(context);
  const stringfyGuest = cookies._guest || "";
  const stringfyProject = cookies._projectCookie || "";

  if (!context?.params?.name) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  if (context.params) {
    const { name } = context.params || "";
    const normalizedName = String(name).replaceAll(" ", "-").toLowerCase();

    const response = await prismic.getByUID("project", normalizedName, {});

    const content = {
      id: response.id,
      title: RichText.asText(response.data.title),
      image: response.data.main_image.url,
      posters: response.data.posters.map(
        (poster: postersType) => poster.poster.url
      ),
      acess: response.data.acess.url,
      github: response.data.github.url,
      description: RichText.asText(response.data.description),
      subtitle: RichText.asText(response.data.subtitle),
      stacks: response.data.stacks.map((tech: any) =>
        RichText.asText(tech.tech)
      ),
      owner: RichText.asText(response.data.project_by),
      ownerRefere: response.data.project_by_link.url,
      responsive: response.data.responsive,
    };

    return {
      props: { stringfyGuest, stringfyProject, content },
    };
  }

  return {
    props: {},
  };
};

export default function ProjectDetail({
  stringfyGuest,
  content,
}: ProjectDetailProps) {
  const parsedGuest: GuestUser = stringfyGuest && JSON.parse(stringfyGuest);

  return (
    <Container pageTitle={`Portfólio Felipe | Projeto`} guest={parsedGuest}>
      <Section>
        <ProjectDetails project={content} />
      </Section>
    </Container>
  );
}
