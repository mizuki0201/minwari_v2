import React, { FC } from "react";
import {
  Button,
  chakra,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";

export const SearchFriendPresenter: FC = () => (
  <>
    <FormControl width="90%" margin="30px auto">
      <chakra.div mb="15px">
        <FormLabel htmlFor="search-user-id" display="block" mb="5px">
          ユーザーIDで検索
        </FormLabel>
        <Input
          id="search-user-id"
          p="10px"
          placeholder="ユーザーIDを入力してください"
        />
      </chakra.div>
      <chakra.div display="flex" justifyContent="center" m="30px 0">
        <Button
          colorScheme="blue"
          type="submit"
          width="200px"
          onClick={() => console.log("友達できるかな？")}
        >
          検索する
        </Button>
      </chakra.div>
    </FormControl>
    <chakra.div mt="60px">
      <chakra.p fontSize="18px" fontWeight="bold" textAlign="center" mb="20px">
        検索結果
      </chakra.p>
      <chakra.div
        p="18px 20px"
        borderTop="1px solid #CECECE"
        borderBottom="1px solid #CECECE"
        display="flex"
        alignItems="center"
      >
        <chakra.p
          fontSize="18px"
          fontWeight="bold"
          width="100%"
          textOverflow="ellipsis"
          whiteSpace="nowrap"
          overflow="hidden"
        >
          ふが太郎
        </chakra.p>
        <Button
          colorScheme="green"
          fontWeight="normal"
          width="100px"
          onClick={() => console.log("友達増えたよ！")}
        >
          追加
        </Button>
      </chakra.div>
    </chakra.div>
  </>
);
