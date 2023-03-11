import React from "react";
import DataTable, {TableColumn} from "../DataTable";
import {Badge, Flex, Heading, Icon, IconButton} from "@chakra-ui/react";
import {FaRegEdit, MdDeleteForever} from "react-icons/all";

const IssueTable = () => {

  const issueListColumns: Array<TableColumn> = [
    {
      key: 'title',
      name: 'Issue Title',
      isNumeric: false,
    },
    {
      key: 'status',
      name: 'Status',
      isNumeric: false,
    },
    {
      key: 'closed',
      name: 'Is Closed',
      isNumeric: false,
      renderCell: row => (
        <Badge colorScheme={row.closed === 'Open' ? 'orange' : 'red'}>
          {row.closed === 'Open' ? 'Open' : 'Closed'}
        </Badge>
      ),
    },
    {
      key: 'operations',
      name: 'Operations',
      isNumeric: false,
      renderCell: row => (
        <Flex justifyContent='flex-start' gap='2px'>
          <IconButton
            size='sm'
            isRound
            colorScheme='blue'
            icon={<Icon as={FaRegEdit} />}
            onClick={() => console.log('btn clicked')}
            aria-label='change status'
          ></IconButton>
          <IconButton
            size='sm'
            isRound
            colorScheme='red'
            icon={<Icon as={MdDeleteForever} />}
            onClick={() => console.log('btn clicked')}
            aria-label='delete issue'
          ></IconButton>
        </Flex>
      ),
    },
  ];

  const issues = [
    {
      title: 'Closed Issue',
      status: <Badge colorScheme='blue'>Done</Badge>,
      closed: 'Closed',
    },
    {
      title: 'First Issue',
      status: <Badge colorScheme='blue'>In Progress</Badge>,
      closed: 'Open',
    },
    {
      title: 'Second Issue',
      status: <Badge colorScheme='gray'>Todo</Badge>,
      closed: 'Open',
    },
    {
      title: 'Issue is completed',
      status: <Badge colorScheme='teal'>Done</Badge>,
      closed: 'Open',
    },
  ]

  const tableHeader = React.useMemo(
    () => {
      return (
        <Heading as='h6' size='xs'>
          Issues
        </Heading>
      );
    },
    []
  );

  return <DataTable
    data={issues}
    noRecordMessage='There is no record found'
    columns={issueListColumns}
    header={tableHeader}
  />
}

export default IssueTable;