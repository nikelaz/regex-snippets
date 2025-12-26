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
  ThemeIcon
} from "@mantine/core";
import { IconCheck, IconX } from "@tabler/icons-react";
import { CodeHighlight } from "@mantine/code-highlight";
import TestCasesTable from "../../(components)/test-cases-table";
import {
  jsSnippet,
  pySnippet,
  rustSnippet,
  goSnippet,
  swiftSnippet,
  csharpSnippet,
  javaSnippet,
  phpSnippet,
  jsSnippet12,
  pySnippet12,
  rustSnippet12,
  goSnippet12,
  swiftSnippet12,
  csharpSnippet12,
  javaSnippet12,
  phpSnippet12,
  testCases,
  testCases12,
} from "../../../../data/time";

const Time = () => {
  return (
    <Stack component="article" gap="xl">
      <Stack component="header" gap="lg">
        <Title order={1}>Time Validation Regular Expression</Title>
        <Text>Time validation requires handling both 24-hour and 12-hour formats. The 24-hour format (also known as military time) follows the <Anchor href="https://en.wikipedia.org/wiki/ISO_8601" target="_blank" rel="noopener" underline="always">ISO 8601</Anchor> standard, while the 12-hour format with AM/PM is commonly used in everyday contexts, particularly in the United States. For complete datetime validation, combine this with <Anchor href="/date" underline="always">date validation</Anchor>.</Text>
      </Stack>

      <Stack gap="lg">
        <Title order={2}>24-Hour Format (HH:MM or HH:MM:SS)</Title>
        <Text>This pattern validates time in 24-hour format, ranging from 00:00 to 23:59, with optional seconds.</Text>
        <CodeHighlight
          code={`^(?:[01]\\d|2[0-3]):[0-5]\\d(?::[0-5]\\d)?$`}
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
            <Code>{`(?:[01]\\d|2[0-3])`}</Code> - Hours: 00-09, 10-19 (using [01]\\d) or 20-23 (using 2[0-3]).
          </List.Item>
          <List.Item>
            <Code>{`:`}</Code> - Colon separator.
          </List.Item>
          <List.Item>
            <Code>{`[0-5]\\d`}</Code> - Minutes: 00-59.
          </List.Item>
          <List.Item>
            <Code>{`(?::[0-5]\\d)?`}</Code> - Optional seconds: colon followed by 00-59. The ? makes the entire group optional.
          </List.Item>
          <List.Item>
            <Code>{`$`}</Code> - End of the string.
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
        <TestCasesTable testCases={testCases} columnLabel="Time" />
      </Stack>

      <Stack gap="lg">
        <Title order={2}>12-Hour Format with AM/PM</Title>
        <Text>This pattern validates time in 12-hour format with AM/PM designation. It accepts hours from 1-12, minutes from 00-59, optional seconds, and either AM or PM (case-insensitive). The space before AM/PM is optional.</Text>
        <CodeHighlight
          code={`^(?:0?[1-9]|1[0-2]):[0-5]\\d(?::[0-5]\\d)?\\s?[AaPp][Mm]$`}
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
            <Code>{`(?:0?[1-9]|1[0-2])`}</Code> - Hours: 1-9 (with optional leading zero using 0?[1-9]) or 10-12 (using 1[0-2]).
          </List.Item>
          <List.Item>
            <Code>{`:`}</Code> - Colon separator.
          </List.Item>
          <List.Item>
            <Code>{`[0-5]\\d`}</Code> - Minutes: 00-59.
          </List.Item>
          <List.Item>
            <Code>{`(?::[0-5]\\d)?`}</Code> - Optional seconds: colon followed by 00-59.
          </List.Item>
          <List.Item>
            <Code>{`\\s?`}</Code> - Optional whitespace before AM/PM.
          </List.Item>
          <List.Item>
            <Code>{`[AaPp][Mm]`}</Code> - AM or PM in any case combination (AM, am, PM, pm, etc.).
          </List.Item>
          <List.Item>
            <Code>{`$`}</Code> - End of the string.
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
            <CodeHighlight code={jsSnippet12.trim()} language="js" />
          </Tabs.Panel>
          <Tabs.Panel value="python">
            <CodeHighlight code={pySnippet12.trim()} language="py" />
          </Tabs.Panel>
          <Tabs.Panel value="rust">
            <CodeHighlight code={rustSnippet12.trim()} language="rust" />
          </Tabs.Panel>
          <Tabs.Panel value="go">
            <CodeHighlight code={goSnippet12.trim()} language="go" />
          </Tabs.Panel>
          <Tabs.Panel value="swift">
            <CodeHighlight code={swiftSnippet12.trim()} language="swift" />
          </Tabs.Panel>
          <Tabs.Panel value="csharp">
            <CodeHighlight code={csharpSnippet12.trim()} language="csharp" />
          </Tabs.Panel>
          <Tabs.Panel value="java">
            <CodeHighlight code={javaSnippet12.trim()} language="java" />
          </Tabs.Panel>
          <Tabs.Panel value="php">
            <CodeHighlight code={phpSnippet12.trim()} language="php" />
          </Tabs.Panel>
        </Tabs>
      </Stack>

      <Stack gap="lg">
        <Title order={3}>Test Cases</Title>
        <TestCasesTable testCases={testCases12} columnLabel="Time" />
      </Stack>
    </Stack>
  );
};

export default Time;
