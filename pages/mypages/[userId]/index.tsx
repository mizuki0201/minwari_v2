import type { NextPage } from "next";
import { MyPage } from "../../../components/pages/mypages";
import { Head } from "../../../components/shared/Head";

const UserMyPage: NextPage = () => {
  return (
    <>
      <Head pageName="マイページ" />
      <MyPage />
    </>
  );
};

export default UserMyPage;
