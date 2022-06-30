import React, { FC } from "react";
import NextLink from "next/link";
import { chakra } from "@chakra-ui/react";
import { path } from "routes/path";

type Props = {
  id: number;
  name: string;
  users: Array<{
    id: number;
    name: string;
  }>;
};

export const GroupItemPresenter: FC<Props> = ({ id, name, users }) => (
  <chakra.li width="100%" borderBottom="1px solid #DEDDDD">
    <NextLink href={path.events("1")} passHref>
      <chakra.a href="dummy" display="block" p="20px 15px">
        <chakra.p
          width="100%"
          fontSize="18px"
          fontWeight="bold"
          mb="10px"
          textOverflow="ellipsis"
          whiteSpace="nowrap"
          overflow="hidden"
        >
          {name}
        </chakra.p>
        <chakra.ul
          width="100%"
          textOverflow="ellipsis"
          whiteSpace="nowrap"
          overflow="hidden"
        >
          {users.map(({ id, name }) => (
            <chakra.li
              key={id}
              width="100%"
              listStyleType="none"
              display="inline"
            >
              {`${name}, `}
            </chakra.li>
          ))}
        </chakra.ul>
      </chakra.a>
    </NextLink>
  </chakra.li>
);
