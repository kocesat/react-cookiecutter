import * as React from "react"
import {ChakraProvider, extendTheme, Flex, StyleFunctionProps} from "@chakra-ui/react";
import Sidebar from "./common/components/Sidebar";
import '@fontsource/roboto/400.css';
import { useTheme } from "./common/hooks/hooks";
import Dashboard from "./pages/Dashboard";

export const App = () => {
  const theme = useTheme();

  return (
    <ChakraProvider theme={theme}>
      <Sidebar>
        <Flex direction={'column'} gap='2'>
          <Dashboard />
        </Flex>
      </Sidebar>
    </ChakraProvider>
  );
}