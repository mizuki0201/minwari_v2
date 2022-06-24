import React, { FC } from "react";
import {
  Button,
  chakra,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";

export const SignupPagePresenter: FC = () => (
  <chakra.div
    backgroundColor="#BBDEFF"
    width="100vw"
    height="100vh"
    display="flex"
    alignItems="center"
    padding="0 15px"
  >
    <chakra.div
      width="100%"
      margin="0 auto"
      backgroundColor="#ffffff"
      boxShadow="0px 2px 4px rgba(51, 51, 51, 0.25)"
      borderRadius="8px"
      padding="20px"
    >
      <chakra.h1 textAlign="center" fontSize="24px" fontWeight="bold">
        みんわり
      </chakra.h1>
      <chakra.span
        display="block"
        width="100%"
        borderTop="1px solid #DEDDDD"
        margin="20px 0 25px"
      />
      <FormControl>
        <chakra.div height="360px" overflow="scroll" whiteSpace="nowrap">
          <chakra.div mb="15px">
            <FormLabel htmlFor="name">名前</FormLabel>
            <Input
              id="email"
              p="10px"
              border="1px solid #ABABAB"
              borderRadius="5px"
              placeholder="名前を入力してください"
            />
          </chakra.div>
          <chakra.div mb="15px">
            <FormLabel htmlFor="user-id">ユーザーID</FormLabel>
            <Input
              id="user-id"
              p="10px"
              border="1px solid #ABABAB"
              borderRadius="5px"
              placeholder="ユーザーIDを入力してください"
            />
          </chakra.div>
          <chakra.div mb="15px">
            <FormLabel htmlFor="phone">電話番号</FormLabel>
            <Input
              id="phone"
              p="10px"
              border="1px solid #ABABAB"
              borderRadius="5px"
              placeholder="電話番号を入力してください"
            />
          </chakra.div>
          <chakra.div mb="15px">
            <FormLabel htmlFor="email">メールアドレス</FormLabel>
            <Input
              id="email"
              p="10px"
              border="1px solid #ABABAB"
              borderRadius="5px"
              placeholder="メールアドレスを入力してください"
            />
          </chakra.div>
          <chakra.div mb="25px">
            <FormLabel htmlFor="password">パスワード</FormLabel>
            <Input
              id="password"
              p="10px"
              border="1px solid #ABABAB"
              borderRadius="5px"
              placeholder="パスワードを入力してください"
            />
          </chakra.div>
        </chakra.div>
        <chakra.div display="flex" justifyContent="center" m="30px 0 20px">
          <Button
            colorScheme="blue"
            type="submit"
            width="200px"
            onClick={() => console.log("新規登録")}
          >
            新規登録
          </Button>
        </chakra.div>
        <chakra.div display="flex" justifyContent="center" mb="10px">
          <Button
            colorScheme="blue"
            variant="link"
            fontSize="14px"
            onClick={() => console.log("ログインページへ！")}
          >
            ログインはこちら
          </Button>
        </chakra.div>
      </FormControl>
    </chakra.div>
  </chakra.div>
);
