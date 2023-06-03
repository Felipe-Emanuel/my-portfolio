import Prismic from "@prismicio/client";
import { AboutMe } from "@layout/AbouteMe";
import { RichText } from "prismic-dom";
import { Container } from "@container/Container";
import { AboutType } from "@models/prismic";
import { GuestUser } from "@models/guestUser";
import { parseCookies } from "nookies";
import { getPrismicClient } from "@services/prismic";
import { GetServerSideProps } from "next";

interface AboutProps {
  stringfyGuest: string;
  content: AboutType;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const prismic = getPrismicClient(context.req);
  const cookies = parseCookies(context);
  const stringfyGuest = cookies._guest || "";

  const response = await prismic.query(
    [Prismic.predicates.at("document.type", "about")],
    {
      fetch: [
        "about.name",
        "about.subtitle",
        "about.image",
        "about.graduation",
        "about.graduation_link",
        "about.graduation_subtitle",
        "about.graduation_image",
        "about.description",
        "about.linkedin",
        "about.github",
      ],
    }
  );

  const data = response.results[0].data;

  const content = {
    name: RichText.asText(data.name),
    subtitle: RichText.asText(data.subtitle),
    image: data.image.url,
    graduation: RichText.asText(data.graduation),
    graduationLink: data.graduation_link.url,
    graduationSubtitle: RichText.asText(data.graduation_subtitle),
    graduationImage: data.graduation_image.url,
    linkedin: data.linkedin.url,
    github: data.github.url,
    description: data.description.map((paragraph: { paragraph: string }) =>
      RichText.asText(paragraph.paragraph)
    ),
  };

  return {
    props: {
      content,
      stringfyGuest,
    },
  };
};

export default function about({ stringfyGuest, content }: AboutProps) {
  const parsedGuest: GuestUser = stringfyGuest && JSON.parse(stringfyGuest);

  return (
    <Container guest={parsedGuest} pageTitle="Sobre Felipe Emanuel">
      <AboutMe content={content} />
    </Container>
  );
}
