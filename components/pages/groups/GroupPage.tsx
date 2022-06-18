import React, { FC } from "react";
import { GroupPresenter } from "./GroupPagePresenter";
import { groupsMockData, friendsMockData } from "./__dev__/mockData";

export const Group: FC = () => {
  return <GroupPresenter groups={groupsMockData} friends={friendsMockData} />;
};
