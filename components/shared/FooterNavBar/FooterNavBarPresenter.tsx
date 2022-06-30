import React, { FC } from "react";
import NextLink from "next/link";
import { chakra } from "@chakra-ui/react";
import { path } from "routes/path";

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
    <NextLink href={path.top()} passHref>
      <chakra.a href="dummy" display="block" width="50%">
        <chakra.div
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          height="100%"
        >
          <img src="/images/TOP.svg" width="30px" height="30px" />
          <chakra.p>TOP</chakra.p>
        </chakra.div>
      </chakra.a>
    </NextLink>
    <NextLink href={path.mypages("1")} passHref>
      <chakra.a href="dummy" display="block" width="50%">
        <chakra.div
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          height="100%"
          borderLeft="1px solid #DEDDDD"
        >
          <img src="/images/MyPage.svg" width="30px" height="30px" />
          <chakra.p>MyPage</chakra.p>
        </chakra.div>
      </chakra.a>
    </NextLink>
  </chakra.div>
);
