"use client";

import { Title, Text, Code, List, Table, Tabs, Anchor, Stack, ThemeIcon } from '@mantine/core';
import {
  IconCheck,
  IconX,
} from '@tabler/icons-react';
import { CodeHighlight } from '@mantine/code-highlight';
import type TestCase from '../../../../types/test-case';
import {
  regex as emailRegex,
  jsSnippet,
  pySnippet,
  rustSnippet,
  goSnippet,
  swiftSnippet,
  csharpSnippet,
  javaSnippet,
  phpSnippet,
  testCases,
  jsSnippetBasic,
  pythonSnippetBasic,
  rustSnippetBasic,
  goSnippetBasic,
  swiftSnippetBasic,
  csharpSnippetBasic,
  javaSnippetBasic,
  phpSnippetBasic,
  testCasesBasic,
} from '../../../../data/email';

export { emailRegex };

const Email = () => {
  const testCaseRows = (data: TestCase[]) => data.map((element: TestCase) => (
    <Table.Tr key={element.pattern}>
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
        <Title order={1}>Email Validation Regular Expression</Title>
        <Text>A well-formed email address follows a standard format defined by <Anchor href="https://www.rfc-editor.org/rfc/rfc5322.html" target="_blank" rel="noopener" underline="always">RFC 5322</Anchor>, but practical validation often balances strictness with usability as most allowed patterns in the standard are not allowed in the actual used email clients. A regular expression that supports the full standard would be very complex and unmaintainable. Email addresses consist of a local part and a <Anchor href="/domain" underline="always">domain name</Anchor> separated by an @ symbol.</Text>
      </Stack>
      <Stack gap="lg">
        <Title order={2}>Recommended Solution</Title>
        <CodeHighlight
          code={`^(?!\\.)(?!.*\\.\\.)(?!.*\\.@)[a-zA-Z0-9.!#$%&'*+/=?^_\`{|}~-]+@(?!-)[a-zA-Z0-9-]+(?<!-)(?:\\.[a-zA-Z0-9-]+(?<!-))*\\.[a-zA-Z]{2,}$`}
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
            <Code>{`(?!\\.)`}</Code> - Prevents leading dot in the local part.
          </List.Item>
          <List.Item>
            <Code>{`(?!\\.\\.\\.)`}</Code> - Prevents consecutive dots (..).
          </List.Item>
          <List.Item>
            <Code>{`(?!\\.@)`}</Code> - Prevents trailing dot before the @ symbol.
          </List.Item>
          <List.Item>
            <Code>{`[a-zA-Z0-9.!#$%&'*+/=?^_\`{|}~-]+`}</Code> - The local part before @. Allows valid characters and special symbols.
          </List.Item>
          <List.Item>
            <Code>{`@`}</Code> - The required separator.
          </List.Item>
          <List.Item>
            <Code>{`(?!-)`}</Code> - Prevents leading hyphen in domain parts.
          </List.Item>
          <List.Item>
            <Code>{`[a-zA-Z0-9-]+`}</Code> - Domain name. Allows letters, numbers, and hyphens. For more details on domain validation, see the <Anchor href="/domain" underline="always">domain validation article</Anchor>.
          </List.Item>
          <List.Item>
            <Code>{`(?<!-)`}</Code> - Prevents trailing hyphen in domain parts.
          </List.Item>
          <List.Item>
            <Code>{`(?:\\.[a-zA-Z0-9-]+(?<!-))*`}</Code> - Subdomains. Allows multiple levels like mail.example.com, preventing trailing hyphens.
          </List.Item>
          <List.Item>
            <Code>{`\\.[a-zA-Z]{2,}`}</Code> - Top-level domain. Requires at least two letters (e.g., .com, .org).
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
        <Table striped highlightOnHover withTableBorder withColumnBorders mb="xl">
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Email Address</Table.Th>
              <Table.Th>Valid</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{testCaseRows(testCases)}</Table.Tbody>
        </Table>
      </Stack>

      <Stack gap="lg">
        <Title order={2}>Basic Validation</Title>
        <Text>For a quick and simple check, you can use a basic regular expression that ensures the presence of an @ symbol and a domain. This is useful for cases where you just need a minimal validation without enforcing strict rules.</Text>
        {/* eslint-disable-next-line  no-useless-escape */}
        <CodeHighlight code={`^\S+@\S+\.\S+$`} language="txt" />
      </Stack>

      <Stack gap="lg">
        <Title order={3}>Explanation</Title>
        <List spacing="sm">
          <List.Item>
            <Code>{`^`}</Code> - Start of the string.
          </List.Item>
          <List.Item>
            <Code>{`\\S+`}</Code> - At least one non-whitespace character before `@`.
          </List.Item>
          <List.Item>
            <Code>{`@`}</Code> - The required separator.
          </List.Item>
          <List.Item>
            <Code>{`\\S+`}</Code> - At least one non-whitespace character for the domain.
          </List.Item>
          <List.Item>
            <Code>{`\\.`}</Code> - A dot before the top-level domain.
          </List.Item>
          <List.Item>
            <Code>{`\\S+`}</Code> - At least one non-whitespace character for the TLD.
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
            <CodeHighlight code={jsSnippetBasic.trim()} language="js" />
          </Tabs.Panel>
          <Tabs.Panel value="python">
            <CodeHighlight code={pythonSnippetBasic.trim()} language="py" />
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
              <Table.Th>Email Address</Table.Th>
              <Table.Th>Valid</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{testCaseRows(testCasesBasic)}</Table.Tbody>
        </Table>
      </Stack>      
     </Stack>
  );
};

export default Email;

