"use client";

import { Title, Text, Code, List, Table, Tabs, Stack, ThemeIcon } from "@mantine/core";
import {
  IconCheck,
  IconX,
} from "@tabler/icons-react";
import { CodeHighlight } from "@mantine/code-highlight";
import type TestCase from "../../../../types/test-case";
import {
  jsSnippet,
  pySnippet,
  rustSnippet,
  goSnippet,
  swiftSnippet,
  csharpSnippet,
  javaSnippet,
  phpSnippet,
  testCases,
} from "../../../../data/affirmation";

const Affirmation = () => {
  const testCaseRows = (data: TestCase[]) => data.map((element: TestCase, index: number) => (
    <Table.Tr key={`${element.pattern}-${index}`}>
      <Table.Td><Code>{element.pattern === "" ? "(empty string)" : element.pattern}</Code></Table.Td>
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
        <Title order={1}>Affirmation Validation Regular Expression</Title>
        <Text>Affirmation validation is used to check whether user input represents a positive or affirmative response. This is commonly needed in command-line interfaces, configuration files, form validations, and API endpoints where boolean-like string values need to be interpreted. The regex pattern covers industry-standard truthy values and common affirmative expressions across different cultures and contexts.</Text>
      </Stack>
      <Stack gap="lg">
        <Title order={2}>Recommended Solution</Title>
        <CodeHighlight
          code={`^(y|yes|yeah|yep|yup|true|t|ok|okay|sure|affirmative|1|on|enable|enabled|accept|accepted|confirm|confirmed|agree|agreed)$`}
          language="txt"
        />
        <Text size="sm" c="dimmed">Note: The regex uses the case-insensitive flag (i), so it matches regardless of capitalization.</Text>
      </Stack>
      <Stack gap="lg">
        <Title order={3}>Explanation</Title>
        <List spacing="sm">
          <List.Item>
            <Code>{`^`}</Code> - Start of the string.
          </List.Item>
          <List.Item>
            <Code>{`(y|yes|yeah|yep|yup|...)`}</Code> - Alternation of all accepted affirmative values. Each value is separated by the pipe <Code>|</Code> operator.
          </List.Item>
          <List.Item>
            <Code>{`$`}</Code> - End of the string.
          </List.Item>
          <List.Item>
            <Code>{`i`}</Code> flag - Case-insensitive matching, allowing &quot;Yes&quot;, &quot;YES&quot;, &quot;yes&quot;, etc.
          </List.Item>
        </List>
      </Stack>
      <Stack gap="lg">
        <Title order={3}>Supported Affirmative Values</Title>
        <List spacing="sm">
          <List.Item>
            <strong>Short forms:</strong> <Code>y</Code>, <Code>t</Code>
          </List.Item>
          <List.Item>
            <strong>Standard affirmatives:</strong> <Code>yes</Code>, <Code>true</Code>, <Code>ok</Code>, <Code>okay</Code>
          </List.Item>
          <List.Item>
            <strong>Casual expressions:</strong> <Code>yeah</Code>, <Code>yep</Code>, <Code>yup</Code>, <Code>sure</Code>
          </List.Item>
          <List.Item>
            <strong>Formal expressions:</strong> <Code>affirmative</Code>, <Code>confirm</Code>, <Code>confirmed</Code>, <Code>accept</Code>, <Code>accepted</Code>, <Code>agree</Code>, <Code>agreed</Code>
          </List.Item>
          <List.Item>
            <strong>Numeric/state values:</strong> <Code>1</Code>, <Code>on</Code>, <Code>enable</Code>, <Code>enabled</Code>
          </List.Item>
        </List>
      </Stack>
      <Stack gap="lg">
        <Title order={3}>Standards & Conventions</Title>
        <Text>This pattern aligns with common conventions found in:</Text>
        <List spacing="sm">
          <List.Item>
            <strong>Unix/Linux systems:</strong> Command-line prompts often accept y/yes/true/1
          </List.Item>
          <List.Item>
            <strong>Configuration files:</strong> YAML, TOML, and INI files use true/yes/on/1 for boolean values
          </List.Item>
          <List.Item>
            <strong>Programming languages:</strong> Many languages treat &quot;1&quot;, &quot;true&quot;, &quot;yes&quot;, &quot;on&quot; as truthy values when parsing strings to booleans
          </List.Item>
          <List.Item>
            <strong>Web forms:</strong> Checkbox values and confirmation dialogs commonly use these patterns
          </List.Item>
        </List>
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
        <Text size="sm" c="dimmed" mb="md">
          This comprehensive test suite includes valid affirmative values in various cases, as well as negative cases to ensure proper rejection of non-affirmative inputs.
        </Text>
        <Table striped highlightOnHover withTableBorder withColumnBorders mb="xl">
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Input Value</Table.Th>
              <Table.Th>Valid</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{testCaseRows(testCases)}</Table.Tbody>
        </Table>
      </Stack>
     </Stack>
  );
};

export default Affirmation;
