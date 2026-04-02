"use client";

import { Title, Text, Code, List, Tabs, Anchor, Stack } from "@mantine/core";
import { CodeHighlight } from "@mantine/code-highlight";
import TestCasesTable from "../../(components)/test-cases-table";
import {
  regex,
  jsSnippet,
  pySnippet,
  rustSnippet,
  goSnippet,
  swiftSnippet,
  csharpSnippet,
  javaSnippet,
  phpSnippet,
  testCases,
} from "../../../../data/username";

const Username = () => {
  return (
    <Stack component="article" gap="xl">
      <Stack component="header" gap="lg">
        <Title order={1}>Username Validation Regular Expression</Title>
        <Text>
          Username validation usually balances readability, uniqueness, and compatibility with URLs or login
          systems. This pattern accepts usernames that start with a letter, are 3 to 30 characters long, use
          only ASCII letters and digits plus <Code>.</Code>, <Code>_</Code>, and <Code>-</Code>, and do not allow
          separators to repeat or appear at the end.
        </Text>
      </Stack>
      <Stack gap="lg">
        <Title order={2}>Recommended Solution</Title>
        <CodeHighlight code={regex} language="txt" />
      </Stack>
      <Stack gap="lg">
        <Title order={3}>Explanation</Title>
        <List spacing="sm">
          <List.Item>
            <Code>{`^`}</Code> - Start of the string.
          </List.Item>
          <List.Item>
            <Code>{`(?=.{3,30}$)`}</Code> - Enforces a total length between 3 and 30 characters.
          </List.Item>
          <List.Item>
            <Code>{`[A-Za-z]`}</Code> - The username must start with an ASCII letter.
          </List.Item>
          <List.Item>
            <Code>{`[A-Za-z0-9]*`}</Code> - Allows zero or more letters or digits immediately after the first character.
          </List.Item>
          <List.Item>
            <Code>{`(?:[._-][A-Za-z0-9]+)*`}</Code> - Allows segments separated by a single dot, underscore, or hyphen, followed by one or more letters or digits.
          </List.Item>
          <List.Item>
            <Code>{`$`}</Code> - End of the string.
          </List.Item>
        </List>
      </Stack>
      <Stack gap="lg">
        <Title order={3}>Notes</Title>
        <List spacing="sm">
          <List.Item>
            This is a format check only. You still need an availability check to know whether a username is already taken.
          </List.Item>
          <List.Item>
            The pattern is intentionally ASCII-only. If you need international usernames, use a Unicode-aware strategy instead of widening this regex casually.
          </List.Item>
          <List.Item>
            Requiring a leading letter avoids usernames like <Code>123</Code> or <Code>_admin</Code>, which some systems treat differently.
          </List.Item>
          <List.Item>
            If your product allows email-style identifiers, consider using a separate <Anchor href="/email" underline="always">email validation</Anchor> flow instead of overloading the username field.
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
        <TestCasesTable testCases={testCases} columnLabel="Username" />
      </Stack>
    </Stack>
  );
};

export default Username;
