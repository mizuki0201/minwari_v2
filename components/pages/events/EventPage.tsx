import React, { FC } from "react";
import { EventPagePresenter } from "./EventPagePresenter";
import { eventsMockData } from "./__dev__/mockData";

export const EventPage: FC = () => {
  return <EventPagePresenter {...eventsMockData} />;
};
