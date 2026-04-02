"use client";

import { Title, Text, Code, List, Table, Tabs, Stack, ThemeIcon } from "@mantine/core";
import { IconCheck, IconX } from "@tabler/icons-react";
import { CodeHighlight } from "@mantine/code-highlight";
import type TestCase from "../../../../types/test-case";
import {
  strictRegex,
  balancedRegex,
  minimalRegex,
  strictTestCases,
  balancedTestCases,
  minimalTestCases,
  jsSnippet,
  pySnippet,
  rustSnippet,
  goSnippet,
  swiftSnippet,
  csharpSnippet,
  javaSnippet,
  phpSnippet,
  jsSnippetBalanced,
  pySnippetBalanced,
  rustSnippetBalanced,
  goSnippetBalanced,
  swiftSnippetBalanced,
  csharpSnippetBalanced,
  javaSnippetBalanced,
  phpSnippetBalanced,
  jsSnippetMinimal,
  pySnippetMinimal,
  rustSnippetMinimal,
  goSnippetMinimal,
  swiftSnippetMinimal,
  csharpSnippetMinimal,
  javaSnippetMinimal,
  phpSnippetMinimal,
} from "../../../../data/password";

const Password = () => {
  const testCaseRows = (data: TestCase[]) => data.map((element: TestCase) => (
    <Table.Tr key={element.pattern}>
      <Table.Td>{element.pattern === "" ? "(empty string)" : element.pattern}</Table.Td>
      <Table.Td>
        {element.isValid ? (
          <ThemeIcon radius="xl" color="green" size="sm">
            <IconCheck style={{ width: "70%", height: "70%" }} />
          </ThemeIcon>
        ) : (
          <ThemeIcon radius="xl" color="red" size="sm">
            <IconX style={{ width: "70%", height: "70%" }} />
          </ThemeIcon>
        )}
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <Stack component="article" gap="xl">
      <Stack component="header" gap="lg">
        <Title order={1}>Password Validation Regular Expression</Title>
        <Text>
          Password validation is policy-driven. Some forms need a strict complexity rule, while others only
          need reasonable length and no whitespace. These examples show three common options so you can pick
          the one that matches your product instead of forcing a single policy everywhere.
        </Text>
      </Stack>
      <Stack gap="lg">
        <Title order={2}>Validation Options</Title>
        <List spacing="sm">
          <List.Item>
            <Code>Strict</Code> - 8 to 64 characters, at least one lowercase letter, one uppercase letter, one digit, one special character, and no whitespace.
          </List.Item>
          <List.Item>
            <Code>Balanced</Code> - 8 to 64 characters, at least one letter and one digit, special characters optional, and no whitespace.
          </List.Item>
          <List.Item>
            <Code>Minimal</Code> - 8 to 64 non-whitespace characters with no composition requirements.
          </List.Item>
        </List>
      </Stack>
      <Stack gap="lg">
        <Title order={2}>Strict Validation</Title>
        <Text>
          Use this policy when you need explicit complexity requirements: lowercase, uppercase, digit, special
          character, 8 to 64 characters, and no whitespace.
        </Text>
        <CodeHighlight code={strictRegex} language="txt" />
      </Stack>
      <Stack gap="lg">
        <Title order={3}>Explanation</Title>
        <List spacing="sm">
          <List.Item>
            <Code>{`^`}</Code> - Start of the string.
          </List.Item>
          <List.Item>
            <Code>{`(?=.*[a-z])`}</Code> - Requires at least one lowercase ASCII letter.
          </List.Item>
          <List.Item>
            <Code>{`(?=.*[A-Z])`}</Code> - Requires at least one uppercase ASCII letter.
          </List.Item>
          <List.Item>
            <Code>{`(?=.*\\d)`}</Code> - Requires at least one digit.
          </List.Item>
          <List.Item>
            <Code>{`(?=.*[!@#$%^&*(),.?":{}|<>_\\-\\[\\]\\\\\\/+=~';])`}</Code> - Requires at least one special character from the allowed set.
          </List.Item>
          <List.Item>
            <Code>{`[A-Za-z\\d!@#$%^&*(),.?":{}|<>_\\-\\[\\]\\\\\\/+=~';]{8,64}`}</Code> - Allows only the listed ASCII characters and enforces a total length between 8 and 64 characters.
          </List.Item>
          <List.Item>
            <Code>{`$`}</Code> - End of the string.
          </List.Item>
        </List>
        <Text size="sm" c="dimmed">
          <strong>Note:</strong> Regex can enforce a password format, but it does not make password storage safe.
          Store passwords with a dedicated password hashing algorithm such as Argon2, scrypt, or bcrypt, and
          consider checking for compromised or commonly used passwords separately.
        </Text>
        <Text size="sm" c="dimmed">
          <strong>Practical guidance:</strong> Use the strict option when a policy explicitly requires character
          classes. Use the balanced option when you want basic resistance to trivial passwords without forcing
          symbols or mixed case. Use the minimal option when the main requirement is length and you expect users
          to rely on password managers.
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
              <Table.Th>Input</Table.Th>
              <Table.Th>Valid</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{testCaseRows(strictTestCases)}</Table.Tbody>
        </Table>
      </Stack>

      <Stack gap="lg">
        <Title order={2}>Balanced Validation</Title>
        <Text>
          Use this when you want a lighter policy: at least one letter, at least one digit, 8 to 64 characters,
          and no whitespace. Special characters are allowed but not required.
        </Text>
        <CodeHighlight code={balancedRegex} language="txt" />
      </Stack>
      <Stack gap="lg">
        <Title order={3}>Explanation</Title>
        <List spacing="sm">
          <List.Item>
            <Code>{`^`}</Code> - Start of the string.
          </List.Item>
          <List.Item>
            <Code>{`(?=.*[A-Za-z])`}</Code> - Requires at least one ASCII letter.
          </List.Item>
          <List.Item>
            <Code>{`(?=.*\\d)`}</Code> - Requires at least one digit.
          </List.Item>
          <List.Item>
            <Code>{`\\S{8,64}`}</Code> - Requires 8 to 64 non-whitespace characters.
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
            <CodeHighlight code={jsSnippetBalanced.trim()} language="js" />
          </Tabs.Panel>
          <Tabs.Panel value="python">
            <CodeHighlight code={pySnippetBalanced.trim()} language="py" />
          </Tabs.Panel>
          <Tabs.Panel value="rust">
            <CodeHighlight code={rustSnippetBalanced.trim()} language="rust" />
          </Tabs.Panel>
          <Tabs.Panel value="go">
            <CodeHighlight code={goSnippetBalanced.trim()} language="go" />
          </Tabs.Panel>
          <Tabs.Panel value="swift">
            <CodeHighlight code={swiftSnippetBalanced.trim()} language="swift" />
          </Tabs.Panel>
          <Tabs.Panel value="csharp">
            <CodeHighlight code={csharpSnippetBalanced.trim()} language="csharp" />
          </Tabs.Panel>
          <Tabs.Panel value="java">
            <CodeHighlight code={javaSnippetBalanced.trim()} language="java" />
          </Tabs.Panel>
          <Tabs.Panel value="php">
            <CodeHighlight code={phpSnippetBalanced.trim()} language="php" />
          </Tabs.Panel>
        </Tabs>
      </Stack>
      <Stack gap="lg">
        <Title order={3}>Test Cases</Title>
        <Table striped highlightOnHover withTableBorder withColumnBorders mb="xl">
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Input</Table.Th>
              <Table.Th>Valid</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{testCaseRows(balancedTestCases)}</Table.Tbody>
        </Table>
      </Stack>

      <Stack gap="lg">
        <Title order={2}>Minimal Validation</Title>
        <Text>
          Use this when the main requirement is length and no spaces. It accepts any non-whitespace characters
          from 8 to 64 characters long and leaves strength decisions to users or password managers.
        </Text>
        <CodeHighlight code={minimalRegex} language="txt" />
      </Stack>
      <Stack gap="lg">
        <Title order={3}>Explanation</Title>
        <List spacing="sm">
          <List.Item>
            <Code>{`^`}</Code> - Start of the string.
          </List.Item>
          <List.Item>
            <Code>{`\\S{8,64}`}</Code> - Requires 8 to 64 non-whitespace characters.
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
            <CodeHighlight code={jsSnippetMinimal.trim()} language="js" />
          </Tabs.Panel>
          <Tabs.Panel value="python">
            <CodeHighlight code={pySnippetMinimal.trim()} language="py" />
          </Tabs.Panel>
          <Tabs.Panel value="rust">
            <CodeHighlight code={rustSnippetMinimal.trim()} language="rust" />
          </Tabs.Panel>
          <Tabs.Panel value="go">
            <CodeHighlight code={goSnippetMinimal.trim()} language="go" />
          </Tabs.Panel>
          <Tabs.Panel value="swift">
            <CodeHighlight code={swiftSnippetMinimal.trim()} language="swift" />
          </Tabs.Panel>
          <Tabs.Panel value="csharp">
            <CodeHighlight code={csharpSnippetMinimal.trim()} language="csharp" />
          </Tabs.Panel>
          <Tabs.Panel value="java">
            <CodeHighlight code={javaSnippetMinimal.trim()} language="java" />
          </Tabs.Panel>
          <Tabs.Panel value="php">
            <CodeHighlight code={phpSnippetMinimal.trim()} language="php" />
          </Tabs.Panel>
        </Tabs>
      </Stack>
      <Stack gap="lg">
        <Title order={3}>Test Cases</Title>
        <Table striped highlightOnHover withTableBorder withColumnBorders mb="xl">
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Input</Table.Th>
              <Table.Th>Valid</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{testCaseRows(minimalTestCases)}</Table.Tbody>
        </Table>
      </Stack>
    </Stack>
  );
};

export default Password;
