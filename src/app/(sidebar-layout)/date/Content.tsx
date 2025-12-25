"use client";

import {
  Title,
  Text,
  Code,
  List,
  Table,
  Tabs,
  Anchor,
  Stack,
  ThemeIcon } from "@mantine/core";
import { IconCheck, IconX } from "@tabler/icons-react";
import { CodeHighlight } from "@mantine/code-highlight";
import type TestCase from "../../../../types/test-case";
import {
  testCases,
  jsSnippet,
  pySnippet,
  rustSnippet,
  goSnippet,
  swiftSnippet,
  csharpSnippet,
  javaSnippet,
  phpSnippet
} from "../../../../data/date";
import {
  testCases as testCasesBasic,
  jsSnippet as jsSnippetBasic,
  pySnippet as pySnippetBasic,
  rustSnippet as rustSnippetBasic,
  goSnippet as goSnippetBasic,
  swiftSnippet as swiftSnippetBasic,
  csharpSnippet as csharpSnippetBasic,
  javaSnippet as javaSnippetBasic,
  phpSnippet as phpSnippetBasic
} from "../../../../data/date-basic";

const Date = () => {
  const testCaseRows = (data: TestCase[]) => data.map((element: TestCase) => (
    <Table.Tr key={element.pattern || 'empty'}>
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
    <Stack component="article" gap="xl">
      <Stack component="header" gap="lg">
        <Title order={1}>Date Validation Regular Expression</Title>
        <Text>A properly formatted date should follow the <Anchor href="https://en.wikipedia.org/wiki/ISO_8601" target="_blank" rel="noopener" underline="always">ISO 8601</Anchor> standard (YYYY-MM-DD) for consistency and international compatibility. This format is widely supported by programming languages and databases, making it ideal for data interchange and storage. For complete datetime validation, you may also need <Anchor href="/time" underline="always">time validation</Anchor>.</Text>
      </Stack>
      <Stack gap="lg">
        <Title order={2}>Recommended Solution</Title>
        <Text>This regular expression validates dates in ISO 8601 format (YYYY-MM-DD) with years from 1900-2099. It performs basic structural validation, but additional logic is recommended to verify day-month combinations (e.g., February 30th, leap years).</Text>
        <CodeHighlight
          code={`^(?:19|20)\\d{2}-(0[1-9]|1[0-2])-(0[1-9]|[12]\\d|3[01])$`}
          language="txt"
        />
      </Stack>
      <Stack gap="lg">
        <Title order={3}>Explanation</Title>
        <List spacing="sm">
          <List.Item>
            <Code>{`^`}</Code> - Start of the string.
          </List.Item>
          <List.Item>
            <Code>{`(?:19|20)\\d{2}`}</Code> - Year validation. Matches years from 1900-2099 (19XX or 20XX followed by two digits).
          </List.Item>
          <List.Item>
            <Code>{`-`}</Code> - Hyphen separator (required by ISO 8601).
          </List.Item>
          <List.Item>
            <Code>{`(0[1-9]|1[0-2])`}</Code> - Month validation. Matches 01-09 or 10-12.
          </List.Item>
          <List.Item>
            <Code>{`-`}</Code> - Hyphen separator.
          </List.Item>
          <List.Item>
            <Code>{`(0[1-9]|[12]\\d|3[01])`}</Code> - Day validation. Matches 01-09, 10-29, or 30-31.
          </List.Item>
          <List.Item>
            <Code>{`$`}</Code> - End of the string.
          </List.Item>
        </List>
        <Text size="sm" c="dimmed" mt="md">
          <strong>Note:</strong> This regex validates the date format but doesn&apos;t enforce calendar rules (e.g., February having 28/29 days, or April having 30 days). For production use, combine this regex with additional validation using your language&apos;s date parsing libraries as shown in the implementation examples below.
        </Text>
      </Stack>
      <Stack gap="lg">
        <Title order={3}>Implementation</Title>
        <Text size="sm" c="dimmed" mb="sm">
          The implementations below include both regex validation and additional date logic to ensure calendar correctness (leap years, days per month, etc.).
        </Text>
        <Tabs defaultValue="js">
          <Tabs.List>
            <Tabs.Tab value="js">JavaScript</Tabs.Tab>
            <Tabs.Tab value="python">Python</Tabs.Tab>
            <Tabs.Tab value="rust">Rust</Tabs.Tab>
            <Tabs.Tab value="go">Go</Tabs.Tab>
            <Tabs.Tab value="swift">Swift</Tabs.Tab>
            <Tabs.Tab value="csharp">C#</Tabs.Tab>
            <Tabs.Tab value="java">Java</Tabs.Tab>
            <Tabs.Tab value="php">PHP</Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="js">
            <CodeHighlight code={jsSnippet.trim()} language="js" />
          </Tabs.Panel>
          <Tabs.Panel value="python">
            <CodeHighlight code={pySnippet.trim()} language="py" />
          </Tabs.Panel>
          <Tabs.Panel value="rust">
            <CodeHighlight code={rustSnippet.trim()} language="rust" />
          </Tabs.Panel>
          <Tabs.Panel value="go">
            <CodeHighlight code={goSnippet.trim()} language="go" />
          </Tabs.Panel>
          <Tabs.Panel value="swift">
            <CodeHighlight code={swiftSnippet.trim()} language="swift" />
          </Tabs.Panel>
          <Tabs.Panel value="csharp">
            <CodeHighlight code={csharpSnippet.trim()} language="csharp" />
          </Tabs.Panel>
          <Tabs.Panel value="java">
            <CodeHighlight code={javaSnippet.trim()} language="java" />
          </Tabs.Panel>
          <Tabs.Panel value="php">
            <CodeHighlight code={phpSnippet.trim()} language="php" />
          </Tabs.Panel>
        </Tabs>
      </Stack>
      
      <Stack gap="lg">
        <Title order={3}>Test Cases</Title>
        <Text size="sm" c="dimmed" mb="sm">
          These test cases include edge cases such as leap years, invalid day-month combinations, and boundary conditions. The validation includes both regex pattern matching and semantic date correctness.
        </Text>
        <Table striped highlightOnHover withTableBorder withColumnBorders mb="xl">
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Date String</Table.Th>
              <Table.Th>Valid</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{testCaseRows(testCases)}</Table.Tbody>
        </Table>
      </Stack>

      <Stack gap="lg">
        <Title order={2}>Basic Validation</Title>
        <Text>For a quick format check without strict ISO 8601 enforcement, you can use a basic regular expression that accepts various date separators (hyphen, slash, or dot). This is useful when you need flexibility in input format but still want a YYYY-MM-DD structure.</Text>
        <CodeHighlight
          code={`^\\d{4}[-/.]\\d{2}[-/.]\\d{2}$`}
          language="txt"
        />
      </Stack>

      <Stack gap="lg">
        <Title order={3}>Explanation</Title>
        <List spacing="sm">
          <List.Item>
            <Code>{`^`}</Code> - Start of the string.
          </List.Item>
          <List.Item>
            <Code>{`\\d{4}`}</Code> - Exactly four digits for the year.
          </List.Item>
          <List.Item>
            <Code>{`[-/.]`}</Code> - Separator character (hyphen, slash, or dot).
          </List.Item>
          <List.Item>
            <Code>{`\\d{2}`}</Code> - Exactly two digits for the month.
          </List.Item>
          <List.Item>
            <Code>{`[-/.]`}</Code> - Separator character.
          </List.Item>
          <List.Item>
            <Code>{`\\d{2}`}</Code> - Exactly two digits for the day.
          </List.Item>
          <List.Item>
            <Code>{`$`}</Code> - End of the string.
          </List.Item>
        </List>
        <Text size="sm" c="dimmed" mt="md">
          <strong>Warning:</strong> This basic pattern only validates the format structure. It does not validate whether the date is semantically correct (e.g., it would accept 9999-99-99). Always combine with additional validation for production use.
        </Text>
      </Stack>

      <Stack gap="lg">
        <Title order={3}>Implementation</Title>
        <Tabs defaultValue="js">
          <Tabs.List>
            <Tabs.Tab value="js">JavaScript</Tabs.Tab>
            <Tabs.Tab value="python">Python</Tabs.Tab>
            <Tabs.Tab value="rust">Rust</Tabs.Tab>
            <Tabs.Tab value="go">Go</Tabs.Tab>
            <Tabs.Tab value="swift">Swift</Tabs.Tab>
            <Tabs.Tab value="csharp">C#</Tabs.Tab>
            <Tabs.Tab value="java">Java</Tabs.Tab>
            <Tabs.Tab value="php">PHP</Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="js">
            <CodeHighlight code={jsSnippetBasic.trim()} language="js" />
          </Tabs.Panel>
          <Tabs.Panel value="python">
            <CodeHighlight code={pySnippetBasic.trim()} language="py" />
          </Tabs.Panel>
          <Tabs.Panel value="rust">
            <CodeHighlight code={rustSnippetBasic.trim()} language="rust" />
          </Tabs.Panel>
          <Tabs.Panel value="go">
            <CodeHighlight code={goSnippetBasic.trim()} language="go" />
          </Tabs.Panel>
          <Tabs.Panel value="swift">
            <CodeHighlight code={swiftSnippetBasic.trim()} language="swift" />
          </Tabs.Panel>
          <Tabs.Panel value="csharp">
            <CodeHighlight code={csharpSnippetBasic.trim()} language="csharp" />
          </Tabs.Panel>
          <Tabs.Panel value="java">
            <CodeHighlight code={javaSnippetBasic.trim()} language="java" />
          </Tabs.Panel>
          <Tabs.Panel value="php">
            <CodeHighlight code={phpSnippetBasic.trim()} language="php" />
          </Tabs.Panel>
        </Tabs>
      </Stack>

      <Stack gap="lg">
        <Title order={3}>Test Cases</Title>
        <Table striped highlightOnHover withTableBorder withColumnBorders mb="xl">
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Date String</Table.Th>
              <Table.Th>Valid</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{testCaseRows(testCasesBasic)}</Table.Tbody>
        </Table>
      </Stack>      
     </Stack>
  );
};

export default Date;
