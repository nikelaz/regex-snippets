"use client";

import {
  Title,
  Text,
  Code,
  List,
  Tabs,
  Anchor,
  Stack,
} from "@mantine/core";
import { CodeHighlight } from "@mantine/code-highlight";
import TestCasesTable from "../../(components)/test-cases-table";
import {
  jsSnippetRange,
  pySnippetRange,
  rustSnippetRange,
  goSnippetRange,
  swiftSnippetRange,
  csharpSnippetRange,
  javaSnippetRange,
  phpSnippetRange,
  jsSnippetMin,
  pySnippetMin,
  rustSnippetMin,
  goSnippetMin,
  swiftSnippetMin,
  csharpSnippetMin,
  javaSnippetMin,
  phpSnippetMin,
  jsSnippetMax,
  pySnippetMax,
  rustSnippetMax,
  goSnippetMax,
  swiftSnippetMax,
  csharpSnippetMax,
  javaSnippetMax,
  phpSnippetMax,
  testCasesRange,
  testCasesMin,
  testCasesMax,
} from "../../../../data/text-length";

const TextLength = () => {
  return (
    <Stack component="article" gap="xl">
      <Stack component="header" gap="lg">
        <Title order={1}>Text Length Validation Regular Expression</Title>
        <Text>Text length validation is a common requirement in forms and data validation. Regular expressions provide a concise way to enforce minimum length, maximum length, or a specific length range for text input. This is particularly useful for passwords, usernames, comments, and other user-generated content. For validating the number of lines in text, see the <Anchor href="/number-of-lines" underline="always">number of lines validation article</Anchor>.</Text>
      </Stack>
      <Stack gap="lg">
        <Title order={2}>Length Range Validation (8-32 characters)</Title>
        <Text>This pattern validates that text is between 8 and 32 characters in length, inclusive. This is commonly used for passwords, usernames, and other fields where both minimum and maximum lengths are required.</Text>
        <CodeHighlight
          code={`^.{8,32}$`}
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
            <Code>{`.`}</Code> - Matches any character (except newline by default).
          </List.Item>
          <List.Item>
            <Code>{`{8,32}`}</Code> - Quantifier that specifies the preceding pattern must occur between 8 and 32 times (inclusive).
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
            <CodeHighlight code={jsSnippetRange.trim()} language="js" />
          </Tabs.Panel>
          <Tabs.Panel value="python">
            <CodeHighlight code={pySnippetRange.trim()} language="py" />
          </Tabs.Panel>
          <Tabs.Panel value="rust">
            <CodeHighlight code={rustSnippetRange.trim()} language="rust" />
          </Tabs.Panel>
          <Tabs.Panel value="go">
            <CodeHighlight code={goSnippetRange.trim()} language="go" />
          </Tabs.Panel>
          <Tabs.Panel value="swift">
            <CodeHighlight code={swiftSnippetRange.trim()} language="swift" />
          </Tabs.Panel>
          <Tabs.Panel value="csharp">
            <CodeHighlight code={csharpSnippetRange.trim()} language="csharp" />
          </Tabs.Panel>
          <Tabs.Panel value="java">
            <CodeHighlight code={javaSnippetRange.trim()} language="java" />
          </Tabs.Panel>
          <Tabs.Panel value="php">
            <CodeHighlight code={phpSnippetRange.trim()} language="php" />
          </Tabs.Panel>
        </Tabs>
      </Stack>
      
      <Stack gap="lg">
        <Title order={3}>Test Cases</Title>
        <TestCasesTable testCases={testCasesRange} columnLabel="Text" />
      </Stack>

      <Stack gap="lg">
        <Title order={2}>Minimum Length Validation (8+ characters)</Title>
        <Text>This pattern validates that text has a minimum of 8 characters with no upper limit. This is useful for password fields where you want to enforce a minimum security requirement without limiting maximum length.</Text>
        <CodeHighlight
          code={`^.{8,}$`}
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
            <Code>{`.`}</Code> - Matches any character (except newline by default).
          </List.Item>
          <List.Item>
            <Code>{`{8,}`}</Code> - Quantifier that specifies the preceding pattern must occur at least 8 times with no upper limit.
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
            <CodeHighlight code={jsSnippetMin.trim()} language="js" />
          </Tabs.Panel>
          <Tabs.Panel value="python">
            <CodeHighlight code={pySnippetMin.trim()} language="py" />
          </Tabs.Panel>
          <Tabs.Panel value="rust">
            <CodeHighlight code={rustSnippetMin.trim()} language="rust" />
          </Tabs.Panel>
          <Tabs.Panel value="go">
            <CodeHighlight code={goSnippetMin.trim()} language="go" />
          </Tabs.Panel>
          <Tabs.Panel value="swift">
            <CodeHighlight code={swiftSnippetMin.trim()} language="swift" />
          </Tabs.Panel>
          <Tabs.Panel value="csharp">
            <CodeHighlight code={csharpSnippetMin.trim()} language="csharp" />
          </Tabs.Panel>
          <Tabs.Panel value="java">
            <CodeHighlight code={javaSnippetMin.trim()} language="java" />
          </Tabs.Panel>
          <Tabs.Panel value="php">
            <CodeHighlight code={phpSnippetMin.trim()} language="php" />
          </Tabs.Panel>
        </Tabs>
      </Stack>

      <Stack gap="lg">
        <Title order={3}>Test Cases</Title>
        <TestCasesTable testCases={testCasesMin} columnLabel="Text" />
      </Stack>

      <Stack gap="lg">
        <Title order={2}>Maximum Length Validation (0-32 characters)</Title>
        <Text>This pattern validates that text does not exceed 32 characters. It allows any length from 0 (empty string) up to 32 characters. This is useful for fields like titles, short descriptions, or comments where you want to limit verbosity.</Text>
        <CodeHighlight
          code={`^.{0,32}$`}
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
            <Code>{`.`}</Code> - Matches any character (except newline by default).
          </List.Item>
          <List.Item>
            <Code>{`{0,32}`}</Code> - Quantifier that specifies the preceding pattern can occur from 0 to 32 times (inclusive).
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
            <CodeHighlight code={jsSnippetMax.trim()} language="js" />
          </Tabs.Panel>
          <Tabs.Panel value="python">
            <CodeHighlight code={pySnippetMax.trim()} language="py" />
          </Tabs.Panel>
          <Tabs.Panel value="rust">
            <CodeHighlight code={rustSnippetMax.trim()} language="rust" />
          </Tabs.Panel>
          <Tabs.Panel value="go">
            <CodeHighlight code={goSnippetMax.trim()} language="go" />
          </Tabs.Panel>
          <Tabs.Panel value="swift">
            <CodeHighlight code={swiftSnippetMax.trim()} language="swift" />
          </Tabs.Panel>
          <Tabs.Panel value="csharp">
            <CodeHighlight code={csharpSnippetMax.trim()} language="csharp" />
          </Tabs.Panel>
          <Tabs.Panel value="java">
            <CodeHighlight code={javaSnippetMax.trim()} language="java" />
          </Tabs.Panel>
          <Tabs.Panel value="php">
            <CodeHighlight code={phpSnippetMax.trim()} language="php" />
          </Tabs.Panel>
        </Tabs>
      </Stack>

      <Stack gap="lg">
        <Title order={3}>Test Cases</Title>
        <TestCasesTable testCases={testCasesMax} columnLabel="Text" />
      </Stack>
     </Stack>
  );
};

export default TextLength;
