import React, { FC } from "react";
import { chakra, useDisclosure } from "@chakra-ui/react";
import { path } from "routes/path";
import { Header } from "../../shared/Header";
import { FooterNavBar } from "../../shared/FooterNavBar";
import { ExpenceLists } from "./components/ExpenceLists";
import { UserLists } from "./components/UserLists";
import { ExpenceCreateModal } from "./components/ExpenceCreateModal";

type Props = {
  group: {
    id: number;
  };
  event: {
    name: string;
  };
  expences: Array<{
    id: number;
    name: string;
    description: string;
    amount: number;
    user_name: string;
  }>;
  users: Array<{
    id: number;
    name: string;
    amount: number;
  }>;
};

export const ExpencePagePresenter: FC<Props> = ({
  group,
  event,
  expences,
  users,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selected, setSelected] = React.useState<"expence" | "user">("expence");
  return (
    <>
      <Header title={event.name} onClickPlusButton={onOpen} />
      <chakra.div padding="5px" backgroundColor="#EFEFEF">
        <chakra.a
          href={path.events(String(group.id))}
          fontSize="14px"
        >{`< イベント一覧に戻る`}</chakra.a>
      </chakra.div>
      <chakra.div width="100%" display="flex">
        <chakra.div
          width="50%"
          height="50px"
          display="flex"
          alignItems="center"
          justifyContent="center"
          backgroundColor={selected === "expence" ? "#DADADA" : "#C4C4C4"}
          cursor="pointer"
          onClick={() => setSelected("expence")}
        >
          支出一覧
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
      {selected === "expence" ? (
        <ExpenceLists expences={expences} />
      ) : (
        <UserLists users={users} />
      )}
      <ExpenceCreateModal isOpen={isOpen} onClose={onClose} />
      <FooterNavBar />
    </>
  );
};
