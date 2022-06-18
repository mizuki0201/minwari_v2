import React, { FC } from "react";
import { chakra } from "@chakra-ui/react";

type Props = {
  name: string;
  users: Array<{
    name: string;
  }>;
};

export const GroupCardPresenter: FC<Props> = ({ name, users }) => (
  <chakra.li width="100%" p="20px 15px" borderBottom="1px solid #DEDDDD">
    <chakra.p
      width="100%"
      fontSize="18px"
      fontWeight="bold"
      mb="10px"
      textOverflow="ellipsis"
      whiteSpace="nowrap"
      overflow="hidden"
    >
      {name}
    </chakra.p>
    <chakra.ul
      width="100%"
      textOverflow="ellipsis"
      whiteSpace="nowrap"
      overflow="hidden"
    >
      {users.map(({ name }) => (
        <chakra.li
          key={name}
          width="100%"
          listStyleType="none"
          display="inline"
        >
          {`${name}, `}
        </chakra.li>
      ))}
    </chakra.ul>
  </chakra.li>
);
