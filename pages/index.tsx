import type { NextPage } from "next";
import { Group } from "../components/pages/groups";
import { Header } from "../components/shared/Header";
import { FooterNavBar } from "../components/shared/FooterNavBar";

const Home: NextPage = () => {
  return (
    <>
      <Header
        title={"グループ一覧"}
        onClickPlusButton={() => console.log("グループ作成!!!!!")}
      />
      <Group />
      <FooterNavBar />
    </>
  );
};

export default Home;
