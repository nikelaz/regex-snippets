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
  testCases,
  jsSnippetNational,
  pySnippetNational,
  rustSnippetNational,
  goSnippetNational,
  swiftSnippetNational,
  csharpSnippetNational,
  javaSnippetNational,
  phpSnippetNational,
  testCasesNational,
} from "../../../../data/phone";

const Phone = () => {
  return (
    <Stack component="article" gap="xl">
      <Stack component="header" gap="lg">
        <Title order={1}>Phone Number Validation Regular Expression</Title>
        <Text>Phone number validation can follow the <Anchor href="https://www.itu.int/rec/T-REC-E.164/" target="_blank" rel="noopener noreferrer" underline="always">E.164 international format</Anchor>, which is the standard for international telephone numbering. E.164 numbers are formatted with a plus sign (+) followed by the country code and subscriber number, with a maximum of 15 digits total. Phone numbers are a specialized type of <Anchor href="/numbers" underline="always">number pattern</Anchor>.</Text>
      </Stack>
      <Stack gap="lg">
        <Title order={2}>International Format (E.164)</Title>
        <CodeHighlight
          code={`^\\+?[1-9]\\d{1,14}$`}
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
            <Code>{`\\+?`}</Code> - Optional plus sign (+) for international format.
          </List.Item>
          <List.Item>
            <Code>{`[1-9]`}</Code> - First digit must be 1-9 (country codes cannot start with 0).
          </List.Item>
          <List.Item>
            <Code>{`\\d{1,14}`}</Code> - Followed by 1 to 14 additional digits (E.164 allows maximum 15 digits total).
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
        <TestCasesTable testCases={testCases} columnLabel="Phone Number" />
      </Stack>

      <Stack gap="lg">
        <Title order={2}>US/National Format</Title>
        <Text>For validating US phone numbers in common national formats with optional parentheses, dashes, dots, or spaces as separators, you can use a more flexible pattern. This validates 10-digit US phone numbers in various formats.</Text>
        <CodeHighlight
          code={`^\\(?\\d{3}\\)?[-.\\s]?\\d{3}[-.\\s]?\\d{4}$`}
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
            <Code>{`\\(?`}</Code> - Optional opening parenthesis.
          </List.Item>
          <List.Item>
            <Code>{`\\d{3}`}</Code> - Exactly three digits (area code).
          </List.Item>
          <List.Item>
            <Code>{`\\)?`}</Code> - Optional closing parenthesis.
          </List.Item>
          <List.Item>
            <Code>{`[-.\\s]?`}</Code> - Optional separator: dash, dot, or space.
          </List.Item>
          <List.Item>
            <Code>{`\\d{3}`}</Code> - Exactly three digits (central office code).
          </List.Item>
          <List.Item>
            <Code>{`[-.\\s]?`}</Code> - Optional separator: dash, dot, or space.
          </List.Item>
          <List.Item>
            <Code>{`\\d{4}`}</Code> - Exactly four digits (line number).
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
            <CodeHighlight code={jsSnippetNational.trim()} language="js" />
          </Tabs.Panel>
          <Tabs.Panel value="python">
            <CodeHighlight code={pySnippetNational.trim()} language="py" />
          </Tabs.Panel>
          <Tabs.Panel value="rust">
            <CodeHighlight code={rustSnippetNational.trim()} language="rust" />
          </Tabs.Panel>
          <Tabs.Panel value="go">
            <CodeHighlight code={goSnippetNational.trim()} language="go" />
          </Tabs.Panel>
          <Tabs.Panel value="swift">
            <CodeHighlight code={swiftSnippetNational.trim()} language="swift" />
          </Tabs.Panel>
          <Tabs.Panel value="csharp">
            <CodeHighlight code={csharpSnippetNational.trim()} language="csharp" />
          </Tabs.Panel>
          <Tabs.Panel value="java">
            <CodeHighlight code={javaSnippetNational.trim()} language="java" />
          </Tabs.Panel>
          <Tabs.Panel value="php">
            <CodeHighlight code={phpSnippetNational.trim()} language="php" />
          </Tabs.Panel>
        </Tabs>
      </Stack>

      <Stack gap="lg">
        <Title order={3}>Test Cases</Title>
        <TestCasesTable testCases={testCasesNational} columnLabel="Phone Number" />
      </Stack>
    </Stack>
  );
};

export default Phone;
