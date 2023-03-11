import React from "react";
import DataTable, {TableColumn} from "../DataTable";
import {Badge, Heading} from "@chakra-ui/react";

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
    },
  ];

  const issues = [
    {
      title: 'First Issue',
      status: <Badge colorScheme='blue'>In Progress</Badge>,
      closed: 'Open',
    },
    {
      title: 'Second Issue',
      status: <Badge colorScheme='yellow'>Todo</Badge>,
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