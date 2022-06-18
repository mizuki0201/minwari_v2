import React, { FC } from "react";
import { chakra } from "@chakra-ui/react";

type Props = Array<{
  id: number;
  name: string;
  description: string;
}>;

export const EventListsPresenter: FC<{ events: Props }> = ({ events }) => (
  <chakra.ul
    width="100%"
    height="calc(100vh - 200px)"
    overflow="scroll"
    whiteSpace="nowrap"
    cursor="pointer"
  >
    {events.map((event) => (
      <chakra.li key={event.id} p="15px" borderBottom="1px solid #CECECE">
        <chakra.p
          mb="8px"
          fontSize="18px"
          fontWeight="bold"
          width="100%"
          textOverflow="ellipsis"
          whiteSpace="nowrap"
          overflow="hidden"
        >
          {event.name}
        </chakra.p>
        <chakra.p
          fontSize="14px"
          width="100%"
          textOverflow="ellipsis"
          whiteSpace="nowrap"
          overflow="hidden"
        >
          {event.description}
        </chakra.p>
      </chakra.li>
    ))}
  </chakra.ul>
);
