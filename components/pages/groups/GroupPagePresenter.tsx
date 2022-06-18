import React, { FC } from "react";
import { chakra, useDisclosure } from "@chakra-ui/react";
import { Header } from "../../shared/Header";
import { FooterNavBar } from "../../shared/FooterNavBar";
import { GroupItem } from "./components/GroupItem";
import { GroupCreateModal } from "./components/GroupCreateModal";

type GroupsProps = Array<{
  id: number;
  name: string;
  users: Array<{
    id: number;
    name: string;
  }>;
}>;

type FriendsProps = Array<{
  id: number;
  name: string;
}>;

export const GroupPresenter: FC<{
  groups: GroupsProps;
  friends: FriendsProps;
}> = ({ groups, friends }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Header title={"グループ一覧"} onClickPlusButton={onOpen} />
      <chakra.ul
        width="100%"
        height="calc(100vh - 150px)"
        overflow="scroll"
        whiteSpace="nowrap"
      >
        {groups.map((group) => (
          <GroupItem key={group.id} {...group} />
        ))}
      </chakra.ul>
      <GroupCreateModal isOpen={isOpen} onClose={onClose} friends={friends} />
      <FooterNavBar />
    </>
  );
};
