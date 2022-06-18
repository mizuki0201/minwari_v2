import React, { FC } from "react";
import { chakra } from "@chakra-ui/react";
import { GroupCard } from "./components/GroupCard";

type Props = Array<{
  id: number;
  name: string;
  users: Array<{
    id: number;
    name: string;
  }>;
}>;

export const GroupPresenter: FC<{ groups: Props }> = ({ groups }) => (
  <chakra.ul
    width="100%"
    height="calc(100vh - 150px)"
    overflow="scroll"
    whiteSpace="nowrap"
  >
    {groups.map((group) => (
      <GroupCard key={group.id} {...group} />
    ))}
  </chakra.ul>
);
