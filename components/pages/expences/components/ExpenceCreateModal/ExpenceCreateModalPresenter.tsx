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

export const ExpenceCreateModalPresenter: FC<{
  isOpen: boolean;
  onClose: () => void;
}> = ({ isOpen, onClose }) => (
  <Modal isOpen={isOpen} onClose={onClose}>
    <ModalOverlay />
    <ModalContent width="95%">
      <ModalHeader>支出記録</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        <FormControl>
          <chakra.div mb="15px">
            <FormLabel htmlFor="group-name" display="block" mb="5px">
              支出名
            </FormLabel>
            <Input
              id="group-name"
              p="10px"
              border="1px solid #ABABAB"
              borderRadius="5px"
              placeholder="支出名を入力してください"
            />
          </chakra.div>
          <chakra.div mb="15px">
            <FormLabel htmlFor="friends" display="block" mb="5px">
              支出詳細
            </FormLabel>
            <Textarea placeholder="支出詳細を入力してください" />
          </chakra.div>
          <chakra.div mb="15px">
            <FormLabel htmlFor="group-name" display="block" mb="5px">
              支出額
            </FormLabel>
            <Input
              id="group-name"
              p="10px"
              border="1px solid #ABABAB"
              borderRadius="5px"
              placeholder="支出額を入力してください"
            />
          </chakra.div>
          <chakra.div display="flex" justifyContent="center" m="30px 0">
            <Button
              colorScheme="blue"
              type="submit"
              width="200px"
              onClick={() => console.log("支出記録！")}
            >
              記録
            </Button>
          </chakra.div>
        </FormControl>
      </ModalBody>
    </ModalContent>
  </Modal>
);
