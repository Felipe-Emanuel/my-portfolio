import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id, name } = context.query;

  if (!id || !name) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: { id },
  };
};

export default function ProjectDetail() {
  return <></>;
}
