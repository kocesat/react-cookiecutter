import React, {ReactNode, ReactText} from "react";
import {Button, ButtonProps, useColorModeValue} from "@chakra-ui/react";

interface GrayButtonProps extends ButtonProps {
  textColor?: string;
  children?: ReactNode
}
const GrayButton = ({ textColor, children, ...rest }: GrayButtonProps) => {
  const color = textColor ?? 'blue';
  const colorWhenDark = color + '.200';

  return (
    <Button colorScheme='gray'
            fontWeight='normal'
            color={useColorModeValue(color, colorWhenDark)}
            {...rest}
    >
      { children }
    </Button>
  );
}

export default GrayButton;