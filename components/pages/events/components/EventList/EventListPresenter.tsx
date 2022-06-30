import React, { FC } from "react";
import NextLink from "next/link";
import { chakra } from "@chakra-ui/react";
import { path } from "routes/path";

type Props = Array<{
  id: number;
  name: string;
  description: string;
}>;

export const EventListPresenter: FC<{ events: Props }> = ({ events }) => (
  <chakra.ul
    width="100%"
    height="calc(100vh - 200px)"
    overflow="scroll"
    whiteSpace="nowrap"
    cursor="pointer"
  >
    {events.map((event) => (
      <chakra.li key={event.id} borderBottom="1px solid #CECECE">
        <NextLink href={path.expences("1", "1")} passHref>
          <chakra.a href="dummy" display="block" p="15px">
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
          </chakra.a>
        </NextLink>
      </chakra.li>
    ))}
  </chakra.ul>
);
