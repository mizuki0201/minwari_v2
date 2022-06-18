import React, { FC } from "react";
import { chakra } from "@chakra-ui/react";

export const FooterNavBarPresenter: FC = () => (
  <chakra.div
    display="flex"
    height="90px"
    width="100%"
    p="10px 0"
    position="fixed"
    bottom="0"
    zIndex="999"
    borderTop="1px solid #DEDDDD"
  >
    <chakra.div
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100%"
      width="50%"
      onClick={() => console.log("トップページへ遷移")}
    >
      <img src="/images/TOP.svg" width="30px" height="30px" />
      <chakra.p>TOP</chakra.p>
    </chakra.div>
    <chakra.div
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100%"
      width="50%"
      borderLeft="1px solid #DEDDDD"
      onClick={() => console.log("マイページへ遷移")}
    >
      <img src="/images/MyPage.svg" width="30px" height="30px" />
      <chakra.p>MyPage</chakra.p>
    </chakra.div>
  </chakra.div>
);
