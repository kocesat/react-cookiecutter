import React, {ReactNode} from 'react';
import {
  Alert, AlertIcon,
  Table,
  TableCaption,
  TableContainer, TableProps,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
  useColorModeValue
} from "@chakra-ui/react";
import Segment from "../Segment";
import {checkColKeys} from "./utils";

export interface DataTableProps extends TableProps{
  data: Array<any>;
  columns: Array<TableColumn>;
  header: ReactNode;
  isLoading?: boolean;
  noRecordMessage?: string;
}

export interface TableColumn {
  key: string,
  name: string,
  isNumeric?: boolean;
}

const DataTable: React.FC<DataTableProps> =
  ({ data, columns, header, isLoading, noRecordMessage, ...rest }: DataTableProps) => {

  checkColKeys(columns);

  return (
    <Segment isLoading={isLoading}>
      <TableContainer>
        <Table variant='simple' {...rest}>
          <TableCaption placement='top'>{header}</TableCaption>
          <Thead>
            <Tr bg={useColorModeValue('gray.100', 'gray.800')} _hover={{ bgColor: 'gray.100' }}>
              {columns.map(col => {
                return (
                  <Th key={`col_${col.key}`}
                      isNumeric={col.isNumeric || false}
                  >
                    {col.name}
                  </Th>
                );
              })}
            </Tr>
          </Thead>
          <Tbody>
            {data.map((row, index) => {
              return (
                <Tr
                  key={`row_${index}`}
                  _hover={{ bgColor: 'gray.100', color: 'gray.900' }}
                >
                  {columns.map(col => {
                    const cell = row[col.key];
                    return (
                      <Td key={`rowCol_${col.key}`}>
                        {cell}
                      </Td>
                    );
                  })}
                </Tr>
              );
            })}
          </Tbody>
          {data.length > 0 && (
            <Tfoot>
              <Tr textAlign='center'>
                <Th textTransform='none'>
                  {`Number of Records: ${data.length}`}
                </Th>
              </Tr>
            </Tfoot>
          )}
        </Table>
        {data && data.length === 0 && (
        <Alert colorScheme='whiteAlpha' justifyContent='center'>
          <AlertIcon />
          {noRecordMessage || 'No record found!'}
          </Alert>
        )}
      </TableContainer>
    </Segment>
  );
}

export default DataTable;