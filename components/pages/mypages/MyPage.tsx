import React, { FC } from "react";
import { MyPagePresenter } from "./MyPagePresenter";
import { mockData } from "./__dev__/mockData";

export const MyPage: FC = () => {
  return <MyPagePresenter {...mockData} />;
};
