import { Table, ThemeIcon } from '@mantine/core';
import { IconCheck, IconX } from '@tabler/icons-react';
import type TestCase from '../../../types/test-case';

interface TestCasesTableProps {
  testCases: TestCase[];
  columnLabel: string;
}

const TestCasesTable = ({ testCases, columnLabel }: TestCasesTableProps) => {
  const testCaseRows = testCases.map((element: TestCase, index: number) => (
    <Table.Tr key={`${element.pattern}-${index}`}>
      <Table.Td>{element.pattern || '(empty string)'}</Table.Td>
      <Table.Td>
        {element.isValid ? (
          <ThemeIcon radius="xl" color="green" size="sm">
            <IconCheck style={{ width: '70%', height: '70%' }} />
          </ThemeIcon>
        ) : (
          <ThemeIcon radius="xl" color="red" size="sm">
            <IconX style={{ width: '70%', height: '70%' }} />
          </ThemeIcon>
        )}
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <Table striped highlightOnHover withTableBorder withColumnBorders mb="xl">
      <Table.Thead>
        <Table.Tr>
          <Table.Th>{columnLabel}</Table.Th>
          <Table.Th>Valid</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{testCaseRows}</Table.Tbody>
    </Table>
  );
};

export default TestCasesTable;
