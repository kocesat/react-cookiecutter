import * as React from "react"
import {ChakraProvider, extendTheme, StyleFunctionProps} from "@chakra-ui/react";
import {mode} from '@chakra-ui/theme-tools'
import Sidebar from "./components/Sidebar";
import '@fontsource/roboto/400.css';
import DataTable from "./components/DataTable";
import IssueTable from "./components/IssueTable";

const theme = extendTheme({
  fonts: {
    body: `'Roboto', sans-serif`,
  },
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        fontFamily: 'body',
        color: mode('gray.800', 'whiteAlpha.800')(props),
        bg: mode('gray.50', 'gray.800')(props),
        lineHeight: 'base',
      },
    }),
  },
    colors: {
      success: 'green.500',
      primary: {
        default: 'cyan.500',
        _dark: 'cyan.300',
      },
      secondary: {
        default: 'red.500',
        _dark: 'red.400',
      },
      blue: {
        50: '#8CE3FF',
        100: '#73CAF2',
        200: '#5AB1D9',
        300: '#4097BF',
        400: '#277EA6',
        500: '#0D648C',
        600: '#004B73',
        700: '#003159',
        800: '#001840',
        900: '#000026',
      },
      green: {
        50: '#9AFFFF',
        100: '#81FFF1',
        200: '#68E6D8',
        300: '#4ECCBE',
        400: '#35B3A5',
        500: '#129EA1',
        600: '#028072',
        700: '#006658',
        800: '#004D3F',
        900: '#003325',
      },
      red: {
        50: '#FA87A7',
        100: '#E16E8E',
        200: '#C85575',
        300: '#AE3B5B',
        400: '#952242',
        500: '#C10B48',
        600: '#62000F',
        700: '#480000',
        800: '#2F0000',
        900: '#150000',
      },
      purple: {
        500:'#4A23AD',
      },
      cyan: {
        50: '#7FFFFF',
        100: '#66F0FF',
        200: '#4DD7F8',
        300: '#33BDDE',
        400: '#1AA4C5',
        500: '#008aab',
        600: '#007192',
        700: '#005778',
        800: '#003E5F',
        900: '#002445',
      },
      yellow: {
        50: '#FFFFBE',
        100: '#FFFFAC',
        200: '#FFFF9A',
        300: '#FFFF86',
        400: '#F5EA6D',
        500: '#E7EB14',
        600: '#C2B73A',
        700: '#A89D20',
        800: '#8F8407',
        900: '#756A00',
      },
    },
    semanticTokens: {
      colors: {
        cyan: {
          default: 'cyan.500',
          _dark: 'cyan.400',
        },
        blue: {
          default: 'blue.500',
          _dark: 'blue.300',
        },
        yellow: {
          default: 'yellow.500',
          _dark: 'yellow.400',
        },
        purple: {
          default: 'purple.500',
          _dark: 'purple.400',
        },
        red: {
          default: 'red.500',
          _dark: 'red.400',
        }
      }
    }
  }
);
export const App = () => (
  <ChakraProvider theme={theme}>
        <Sidebar>
          <IssueTable />
        </Sidebar>
  </ChakraProvider>
)
