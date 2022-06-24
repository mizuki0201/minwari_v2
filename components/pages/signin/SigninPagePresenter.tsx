import React, { FC } from "react";
import {
  Button,
  chakra,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";

export const SigninPagePresenter: FC = () => (
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
        <chakra.div display="flex" justifyContent="center" m="30px 0 20px">
          <Button
            colorScheme="blue"
            type="submit"
            width="200px"
            onClick={() => console.log("ログイン！")}
          >
            ログイン
          </Button>
        </chakra.div>
        <chakra.div display="flex" justifyContent="center" mb="10px">
          <Button
            colorScheme="blue"
            variant="link"
            fontSize="14px"
            onClick={() => console.log("新規登録ページへ！")}
          >
            新規登録はこちら
          </Button>
        </chakra.div>
      </FormControl>
    </chakra.div>
  </chakra.div>
);
