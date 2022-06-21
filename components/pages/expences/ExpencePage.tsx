import React, { FC } from "react";
import { ExpencePagePresenter } from "./ExpencePagePresenter";
import { expencesMockData } from "./__dev__/mockData";

export const ExpencePage: FC = () => {
  return <ExpencePagePresenter {...expencesMockData} />;
};
