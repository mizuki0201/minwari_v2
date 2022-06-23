import React, { FC } from "react";
import { chakra } from "@chakra-ui/react";

export const HeaderPresenter: FC<{
  title: string;
  onClickPlusButton?: () => void;
}> = ({ title, onClickPlusButton }) => (
  <>
    <chakra.div
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      backgroundColor="#489FF0"
      color="#ffffff"
      height="60px"
      width="100%"
      padding="11px 15px"
      position="fixed"
      top="0"
      zIndex="999"
    >
      <chakra.h1 fontSize="20px" fontWeight="bold">
        {title}
      </chakra.h1>
      {onClickPlusButton ? (
        <chakra.button
          display="block"
          height="30px"
          width="30px"
          fontSize="20px"
          fontWeight="bold"
          onClick={onClickPlusButton}
        >
          ＋
        </chakra.button>
      ) : (
        <></>
      )}
    </chakra.div>
    <chakra.div height="60px"></chakra.div>
  </>
);
