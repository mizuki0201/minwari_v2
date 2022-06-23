import React, { FC } from "react";
import {
  Button,
  chakra,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";

type Props = {
  userId: string;
  name: string;
  email: string;
  phone: string;
};

export const ProfilePresenter: FC<{ user: Props }> = ({ user }) => (
  <>
    <FormControl width="80%" margin="30px auto">
      <chakra.div mb="15px">
        <FormLabel htmlFor="user-id" display="block" mb="5px">
          ユーザーID
        </FormLabel>
        <Input id="user-id" p="10px" variant="flushed" value={user.userId} />
      </chakra.div>
      <chakra.div mb="15px">
        <FormLabel htmlFor="user-name" display="block" mb="5px">
          名前
        </FormLabel>
        <Input id="user-name" p="10px" variant="flushed" value={user.name} />
      </chakra.div>
      <chakra.div mb="15px">
        <FormLabel htmlFor="email" display="block" mb="5px">
          メール
        </FormLabel>
        <Input id="email" p="10px" variant="flushed" value={user.email} />
      </chakra.div>
      <chakra.div mb="15px">
        <FormLabel htmlFor="phone" display="block" mb="5px">
          電話番号
        </FormLabel>
        <Input id="phone" p="10px" variant="flushed" value={user.phone} />
      </chakra.div>
      <chakra.div display="flex" justifyContent="center" m="30px 0">
        <Button
          colorScheme="blue"
          type="submit"
          width="240px"
          onClick={() => console.log("プロフィール変更！")}
        >
          プロフィールを変更する
        </Button>
      </chakra.div>
    </FormControl>
  </>
);
