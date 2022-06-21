import React, { FC } from "react";
import {
  Button,
  chakra,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Textarea,
} from "@chakra-ui/react";

export const EventCreateModalPresenter: FC<{
  isOpen: boolean;
  onClose: () => void;
}> = ({ isOpen, onClose }) => (
  <Modal isOpen={isOpen} onClose={onClose}>
    <ModalOverlay />
    <ModalContent width="95%">
      <ModalHeader>イベント作成</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        <FormControl>
          <chakra.div mb="15px">
            <FormLabel htmlFor="group-name" display="block" mb="5px">
              イベント名
            </FormLabel>
            <Input
              id="group-name"
              p="10px"
              border="1px solid #ABABAB"
              borderRadius="5px"
              placeholder="イベント名を入力してください"
            />
          </chakra.div>
          <chakra.div>
            <FormLabel htmlFor="friends" display="block" mb="5px">
              イベント詳細
            </FormLabel>
            <Textarea placeholder="イベント詳細を入力してください" />
          </chakra.div>
          <chakra.div display="flex" justifyContent="center" m="30px 0">
            <Button
              colorScheme="blue"
              type="submit"
              width="200px"
              onClick={() => console.log("イベント作成！")}
            >
              作成
            </Button>
          </chakra.div>
        </FormControl>
      </ModalBody>
    </ModalContent>
  </Modal>
);
