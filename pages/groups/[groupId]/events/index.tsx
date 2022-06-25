import type { NextPage } from "next";
import { EventPage } from "components/pages/events/";
import { Head } from "components/shared/Head";

const Event: NextPage = () => {
  return (
    <>
      <Head pageName="イベント一覧" />
      <EventPage />
    </>
  );
};

export default Event;
