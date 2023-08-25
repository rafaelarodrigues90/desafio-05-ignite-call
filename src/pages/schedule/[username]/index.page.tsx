import { Avatar, Heading, Text } from "@ignite-ui/react";
import { GetStaticPaths, GetStaticProps } from "next";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { ToastComponent } from "../../../components/Toast";
import { prisma } from "../../../lib/prisma";
import { ScheduleForm } from "./ScheduleForm";
import { Container, UserHeader } from "./styles";
import dayjs from "dayjs";
import { capitalizeLetter } from "../../../utils/string";

interface ScheduleProps {
  user: {
    name: string;
    bio: string;
    avatarUrl: string;
  };
}

export default function Schedule({ user }: ScheduleProps) {
  const router = useRouter();
  const [scheduledDate, setScheduledDate] = useState<string | null>(null);

  useEffect(() => {
    if (router.query.scheduledDate) {
      const queryScheduledDate = Array.isArray(router.query.scheduledDate)
        ? router.query.scheduledDate[0]
        : router.query.scheduledDate;

      const dayName = dayjs(queryScheduledDate).format("dddd");
      const capitalizedDayName = capitalizeLetter(dayName);
      
      const formattedDate = dayjs(queryScheduledDate).format(
        "D [de] MMMM [às] HH[h]"
      );
      const finalFormattedDate = `${capitalizedDayName}, ${formattedDate}`;

      setScheduledDate(finalFormattedDate);
    }
  }, [router.query]);

  return (
    <>
      <NextSeo title={`Agendar com ${user.name} | Ignite Call`} />
      <Container>
        <UserHeader>
          <Avatar src={user.avatarUrl} />
          <Heading>{user.name}</Heading>
          <Text>{user.bio}</Text>
        </UserHeader>

        <ScheduleForm />
      </Container>
      {scheduledDate && (
        <ToastComponent
          title="Agendamento realizado"
          message={scheduledDate}
          onClose={() => setScheduledDate(null)}
        />
      )}
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const username = String(params?.username);

  const user = await prisma.user.findUnique({
    where: {
      username,
    },
  });

  if (!user) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      user: {
        name: user.name,
        bio: user.bio,
        avatarUrl: user.avatar_url,
      },
    },
    revalidate: 60 * 60 * 24,
  };
};
