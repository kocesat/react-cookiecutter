import React from 'react';
import {
  Avatar,
  Box,
  Image,
  Text,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Heading,
  IconButton, MenuItem, Menu, MenuButton, MenuList, useColorModeValue
} from "@chakra-ui/react";
import {BiChat, BiLike, BiShare, BsThreeDotsVertical, CgMore, CgMoreVertical} from "react-icons/all";
import GrayButton from "../GrayButton";

interface Card3DotProps {}

const Card3Dot: React.FC<Card3DotProps> = () => {
  return (
    <Card maxW='md'>
      <CardHeader>
        <Flex letterSpacing='4'>
          <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
            <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />

            <Box>
              <Heading size='sm'>Segun Adebayo</Heading>
              <Text>Creator, Chakra UI</Text>
            </Box>
          </Flex>
          <Menu direction='ltr'>
            <MenuButton
              as={IconButton}
              aria-label='Options'
              icon={<CgMoreVertical />}
              variant='ghost'
              colorScheme='gray'
            />
            <MenuList>
              <MenuItem  command='⌘T'>
                New Tab
              </MenuItem>
              <MenuItem  command='⌘N'>
                New Window
              </MenuItem>
              <MenuItem  command='⌘⇧N'>
                Open Closed Tab
              </MenuItem>
              <MenuItem command='⌘O'>
                Open File...
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </CardHeader>
      <CardBody>
        <Text>
          With Chakra UI, I wanted to sync the speed of development with the speed
          of design. I wanted the developer to be just as excited as the designer to
          create a screen.
        </Text>
      </CardBody>
      <Image
        objectFit='cover'
        src='https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
        alt='Chakra UI'
      />

      <CardFooter
        flexWrap='wrap'
        alignSelf='center'
      >
        <GrayButton
          textColor='blue'
          mr='1rem'
          leftIcon={<BiLike />}>
        </GrayButton>
        <GrayButton mr='1rem' textColor='red' leftIcon={<BiChat />}>
        </GrayButton>
        <GrayButton textColor='green' leftIcon={<BiShare />}>
        </GrayButton>
      </CardFooter>
    </Card>
  );
}

export default Card3Dot;