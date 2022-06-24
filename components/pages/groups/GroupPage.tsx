import React, { FC } from "react";
import { GroupPagePresenter } from "./GroupPagePresenter";
import { groupsMockData, friendsMockData } from "./__dev__/mockData";

export const GroupPage: FC = () => {
  return (
    <GroupPagePresenter groups={groupsMockData} friends={friendsMockData} />
  );
};
