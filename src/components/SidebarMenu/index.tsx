import React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
  Icon, Button
} from "@chakra-ui/react";
import {CgMenuGridO} from "react-icons/all";

const SidebarMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();


  return (
    <>
      <Button
        colorScheme='blue'
        onClick={onOpen}
        fontWeight='normal'
      >
        {<Icon as={CgMenuGridO} />}
      </Button>

      <Drawer
        placement='right'
        onClose={onClose}
        isOpen={isOpen}
        size='sm'
        colorScheme='blue'
        isFullHeight
        closeOnEsc
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth='1px'>Drawer Header</DrawerHeader>
          <DrawerBody>
            <p>Side Menu comes here...</p>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default SidebarMenu;