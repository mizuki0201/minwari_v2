import React, { FC } from "react";
import { chakra } from "@chakra-ui/react";

type Props = Array<{
  id: number;
  name: string;
  description: string;
  amount: number;
  user_name: string;
}>;

export const ExpenceListsPresenter: FC<{ expences: Props }> = ({
  expences,
}) => (
  <>
    <chakra.ul
      width="100%"
      height="calc(100vh - 200px)"
      overflow="scroll"
      whiteSpace="nowrap"
      cursor="pointer"
    >
      {expences.map(({ id, name, description, amount, user_name }) => (
        <chakra.li
          key={id}
          p="15px"
          borderBottom="1px solid #CECECE"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <chakra.div>
            <chakra.p fontSize="18px" fontWeight="bold" mb="10px">
              {name}
            </chakra.p>
            <chakra.p fontSize="14px">{user_name}</chakra.p>
          </chakra.div>
          <chakra.div display="flex">
            <chakra.p mr="6px" display="flex" alignItems="center">
              {amount}円
            </chakra.p>
          </chakra.div>
        </chakra.li>
      ))}
    </chakra.ul>
    {/* TODO: 詳細を見れるモダールを出したい（そのためにdescriptionもpropsで受け取るままにしている） */}
  </>
);
