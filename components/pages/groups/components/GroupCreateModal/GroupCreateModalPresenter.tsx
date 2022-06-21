import React, { FC } from "react";
import {
  Button,
  chakra,
  Checkbox,
  CheckboxGroup,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

type FriendsProps = Array<{
  id: number;
  name: string;
}>;

export const GroupCreateModalPresenter: FC<{
  isOpen: boolean;
  onClose: () => void;
  friends: FriendsProps;
}> = ({ isOpen, onClose, friends }) => (
  <Modal isOpen={isOpen} onClose={onClose}>
    <ModalOverlay />
    <ModalContent width="95%">
      <ModalHeader>グループ作成</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        <FormControl>
          <chakra.div mb="15px">
            <FormLabel htmlFor="group-name" display="block" mb="5px">
              グループ名
            </FormLabel>
            <Input
              id="group-name"
              p="10px"
              border="1px solid #ABABAB"
              borderRadius="5px"
              placeholder="グループ名を入力してください"
            />
          </chakra.div>
          <chakra.div>
            <FormLabel htmlFor="friends" display="block" mb="5px">
              追加する友達を選択
            </FormLabel>
            <CheckboxGroup colorScheme="blue">
              <chakra.div
                display="flex"
                flexDirection="column"
                maxH="200px"
                border="1px solid #DEDDDD"
                p="10px"
                overflow="scroll"
                whiteSpace="nowrap"
              >
                {friends.map(({ id, name }) => (
                  <Checkbox key={id} value={String(id)} mb="8px">
                    <chakra.span fontSize="18px">{name}</chakra.span>
                  </Checkbox>
                ))}
              </chakra.div>
            </CheckboxGroup>
          </chakra.div>
          <chakra.div display="flex" justifyContent="center" m="30px 0">
            <Button
              colorScheme="blue"
              type="submit"
              width="200px"
              onClick={() => console.log("グループ作成！")}
            >
              作成
            </Button>
          </chakra.div>
        </FormControl>
      </ModalBody>
    </ModalContent>
  </Modal>
);
