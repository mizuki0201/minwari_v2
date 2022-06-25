import type { NextPage } from "next";
import { SignupPage } from "components/pages/signup";
import { Head } from "components/shared/Head";

const Signup: NextPage = () => {
  return (
    <>
      <Head pageName="サインアップ" />
      <SignupPage />
    </>
  );
};

export default Signup;
