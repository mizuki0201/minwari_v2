import React, { FC } from "react";
import { chakra } from "@chakra-ui/react";

type Props = Array<{
  id: number;
  name: string;
  amount: number;
}>;

export const UserListPresenter: FC<{ users: Props }> = ({ users }) => (
  <chakra.ul
    width="100%"
    height="calc(100vh - 200px)"
    overflow="scroll"
    whiteSpace="nowrap"
    cursor="pointer"
  >
    {users.map(({ id, name, amount }) => (
      <chakra.li
        key={id}
        p="15px"
        borderBottom="1px solid #CECECE"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <chakra.p>{name}</chakra.p>
        <chakra.div display="flex">
          <chakra.p mr="6px" display="flex" alignItems="center">
            {amount}円
          </chakra.p>
          <chakra.button
            p="6px 14px"
            borderRadius="5px"
            disabled={amount >= 0}
            color={amount >= 0 ? "#333333" : "#ffffff"}
            backgroundColor={amount >= 0 ? "#EBEBEB" : "#489FF0"}
            onClick={() => console.log("精算！")}
          >
            精算
          </chakra.button>
        </chakra.div>
      </chakra.li>
    ))}
  </chakra.ul>
);
