import React from 'react';
import {Center, Flex, Icon, Link} from "@chakra-ui/react";
import {IconType} from "react-icons";

interface QuickLinkProps {
  iconName: IconType;
  title: string;
}

const QuickLink: React.FC<QuickLinkProps> = ({ iconName, title }) => {
  return (
  <Flex direction='column' gap='12px' align='center'>
      <Center cursor="pointer" borderRadius='full' p='20px' boxShadow='lg' minW='80px'>
        <Icon as={iconName} boxSize='2rem' color='blue'/>
      </Center>
      <Link maxW='70px' textAlign='center'>{title}</Link>
    </Flex>
  );
}
export default QuickLink;