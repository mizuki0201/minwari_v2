import React, { FC } from "react";
import { chakra } from "@chakra-ui/react";
import { Header } from "../../shared/Header";
import { FooterNavBar } from "../../shared/FooterNavBar";
import { FriendLists } from "./components/FriendLists";
import { Profile } from "./components/Profile";
import { SearchFriend } from "./components/SearchFriend";

type Props = {
  user: {
    userId: string;
    name: string;
    email: string;
    phone: string;
  };
  friends: Array<{ id: number; name: string }>;
};

export const MyPagePresenter: FC<Props> = ({ user, friends }) => {
  const [selected, setSelected] =
    React.useState<"profile" | "friends" | "search">("profile");
  return (
    <>
      <Header title="マイページ" />
      <chakra.div width="100%" display="flex">
        <chakra.div
          width="34%"
          height="50px"
          display="flex"
          alignItems="center"
          justifyContent="center"
          backgroundColor={selected === "profile" ? "#DADADA" : "#C4C4C4"}
          cursor="pointer"
          onClick={() => setSelected("profile")}
        >
          プロフィール
        </chakra.div>
        <chakra.div
          width="33%"
          height="50px"
          display="flex"
          alignItems="center"
          justifyContent="center"
          backgroundColor={selected === "friends" ? "#DADADA" : "#C4C4C4"}
          cursor="pointer"
          onClick={() => setSelected("friends")}
        >
          友達一覧
        </chakra.div>
        <chakra.div
          width="33%"
          height="50px"
          display="flex"
          alignItems="center"
          justifyContent="center"
          backgroundColor={selected === "search" ? "#DADADA" : "#C4C4C4"}
          cursor="pointer"
          onClick={() => setSelected("search")}
        >
          友達検索
        </chakra.div>
      </chakra.div>
      {selected === "profile" && <Profile user={user} />}
      {selected === "friends" && <FriendLists friends={friends} />}
      {selected === "search" && <SearchFriend />}
      <FooterNavBar />
    </>
  );
};
