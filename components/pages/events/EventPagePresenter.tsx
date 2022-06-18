import React, { FC } from "react";
import { chakra, useDisclosure } from "@chakra-ui/react";
import { Header } from "../../shared/Header";
import { FooterNavBar } from "../../shared/FooterNavBar";
import { EventLists } from "./components/EventLists";
import { UserLists } from "./components/UserLists";

type Props = {
  group: {
    name: string;
  };
  events: Array<{
    id: number;
    name: string;
    description: string;
  }>;
  users: Array<{
    id: number;
    name: string;
    amount: number;
  }>;
};

export const EventPagePresenter: FC<Props> = ({ group, events, users }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selected, setSelected] = React.useState<"event" | "user">("event");
  return (
    <>
      <Header title={group.name} onClickPlusButton={onOpen} />
      <chakra.div width="100%" display="flex">
        <chakra.div
          width="50%"
          height="50px"
          display="flex"
          alignItems="center"
          justifyContent="center"
          backgroundColor={selected === "event" ? "#DADADA" : "#C4C4C4"}
          cursor="pointer"
          onClick={() => setSelected("event")}
        >
          イベント一覧
        </chakra.div>
        <chakra.div
          width="50%"
          height="50px"
          display="flex"
          alignItems="center"
          justifyContent="center"
          backgroundColor={selected === "user" ? "#DADADA" : "#C4C4C4"}
          cursor="pointer"
          onClick={() => setSelected("user")}
        >
          割り勘リスト
        </chakra.div>
      </chakra.div>
      {selected === "event" ? (
        <EventLists events={events} />
      ) : (
        <UserLists users={users} />
      )}
      <FooterNavBar />
    </>
  );
};
