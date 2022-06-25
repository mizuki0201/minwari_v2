import type { NextPage } from "next";
import { ExpencePage } from "components/pages/expences/";
import { Head } from "components/shared/Head";

const Event: NextPage = () => {
  return (
    <>
      <Head pageName="支出一覧" />
      <ExpencePage />
    </>
  );
};

export default Event;
