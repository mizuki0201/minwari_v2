import React, { FC } from "react";
import { Button, chakra } from "@chakra-ui/react";

type Props = Array<{
  id: number;
  name: string;
}>;

export const FriendListsPresenter: FC<{ friends: Props }> = ({ friends }) => (
  <chakra.ul
    width="100%"
    height="calc(100vh - 200px)"
    overflow="scroll"
    whiteSpace="nowrap"
    cursor="pointer"
  >
    {friends.map(({ id, name }) => (
      <chakra.li
        key={id}
        p="18px 20px"
        borderBottom="1px solid #CECECE"
        display="flex"
        alignItems="center"
      >
        <chakra.p
          fontSize="18px"
          fontWeight="bold"
          width="100%"
          textOverflow="ellipsis"
          whiteSpace="nowrap"
          overflow="hidden"
        >
          {name}
        </chakra.p>
        <Button
          colorScheme="red"
          fontWeight="normal"
          onClick={() => console.log("友達減ったよ！")}
        >
          友達解除
        </Button>
      </chakra.li>
    ))}
  </chakra.ul>
);
