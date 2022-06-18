import React, { FC } from "react";
import { GroupPresenter } from "./GroupPagePresenter";

export const Group: FC = () => {
  const mockData = [
    {
      name: "グループ1",
      users: [{ name: "ユーザー1" }, { name: "ユーザー2" }],
    },
    {
      name: "グループ2",
      users: [
        { name: "ユーザー3" },
        { name: "ユーザー4" },
        { name: "ユーザー5" },
      ],
    },
    {
      name: "グループ3",
      users: [
        { name: "ユーザー6" },
        { name: "ユーザー7" },
        { name: "ユーザー8" },
        { name: "ユーザー9" },
      ],
    },
    {
      name: "すごく長い名前をテストするためのグループですよ。ちゃんと省略されて表示されるかな。",
      users: [
        { name: "ユーザー10" },
        { name: "ユーザー11" },
        { name: "ユーザー12" },
        { name: "ユーザー13" },
        { name: "ユーザー14" },
        { name: "ユーザー15" },
        { name: "ユーザー16" },
        { name: "ユーザー17" },
      ],
    },
    {
      name: "グループ4",
      users: [{ name: "ユーザー18" }],
    },
    {
      name: "グループ5",
      users: [{ name: "ユーザー19" }],
    },
    {
      name: "グループ6",
      users: [{ name: "ユーザー20" }],
    },
  ];
  return <GroupPresenter groups={mockData} />;
};
