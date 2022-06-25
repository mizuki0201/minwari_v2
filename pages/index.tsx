import type { NextPage } from "next";
import { GroupPage } from "../components/pages/groups";
import { Head } from "../components/shared/Head";

const Home: NextPage = () => {
  return (
    <>
      <Head pageName="グループ一覧" />
      <GroupPage />
    </>
  );
};

export default Home;
