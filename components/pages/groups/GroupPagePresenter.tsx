import React, { FC } from "react";
import { chakra } from "@chakra-ui/react";
import { GroupCard } from "./components/GroupCard";

type Props = Array<{
  name: string;
  users: Array<{
    name: string;
  }>;
}>;

export const GroupPresenter: FC<{ groups: Props }> = ({ groups }) => (
  <chakra.ul
    width="100%"
    height="calc(100vh - 180px)"
    overflow="scroll"
    whiteSpace="nowrap"
  >
    {groups.map((group) => (
      <GroupCard key={group.name} {...group} />
    ))}
  </chakra.ul>
);
