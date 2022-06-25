import type { NextPage } from "next";
import { SigninPage } from "components/pages/signin";
import { Head } from "components/shared/Head";

const Signin: NextPage = () => {
  return (
    <>
      <Head pageName="サインイン" />
      <SigninPage />
    </>
  );
};

export default Signin;
