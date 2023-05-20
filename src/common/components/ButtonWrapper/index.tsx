import React from 'react';
import {Box, Button, Flex, Icon, Spinner, Wrap, WrapItem} from "@chakra-ui/react";
import {FaAtlassian} from "react-icons/all";

interface ButtonProps {}
const ButtonWrapper: React.FC<ButtonProps> = () => {
  const colors: Array<string> = [
    'blue',
    'cyan',
    'teal',
    'red',
    'purple',
    'orange',
    'gray',
    'green',
    'yellow',
    'black'
  ];
  return (
    <Flex direction='column' align='center' mt='2rem' gap='10px'>
      <Flex direction='row' align='flex-end' gap='10px'>
        {colors.map(c => <Box><Button
            fontWeight='normal'
            loadingText='Loading'
            leftIcon={<Icon as={FaAtlassian} />}
            colorScheme={c}>Btn {c}</Button></Box>)}
      </Flex>
      <Flex direction='column' align='flex-start' gap='10px'>
        <Wrap>
          {colors.map(c => {
            return (
              <WrapItem>
                <Button
                  colorScheme='gray'
                  color={c}
                  rightIcon={<Icon as={FaAtlassian} />}
                  fontWeight='normal'>Gray bg {c}
                </Button>
              </WrapItem>
            );
          })}
        </Wrap>
      </Flex>
    </Flex>
  );
}

export default ButtonWrapper;