"use client";

import {
  Title,
  Text,
  Code,
  List,
  Tabs,
  Anchor,
  Stack
} from "@mantine/core";
import { CodeHighlight } from "@mantine/code-highlight";
import TestCasesTable from "../../(components)/test-cases-table";
import {
  jsSnippetISBN10,
  pySnippetISBN10,
  rustSnippetISBN10,
  goSnippetISBN10,
  swiftSnippetISBN10,
  csharpSnippetISBN10,
  javaSnippetISBN10,
  phpSnippetISBN10,
  jsSnippetISBN13,
  pySnippetISBN13,
  rustSnippetISBN13,
  goSnippetISBN13,
  swiftSnippetISBN13,
  csharpSnippetISBN13,
  javaSnippetISBN13,
  phpSnippetISBN13,
  testCasesISBN10,
  testCasesISBN13,
} from "../../../../data/isbn";

const ISBN = () => {

  return (
    <Stack component="article" gap="xl">
      <Stack component="header" gap="lg">
        <Title order={1}>ISBN Validation Regular Expression</Title>
        <Text>An ISBN (International Standard Book Number) is a unique identifier for books. There are two formats: ISBN-10 (10 digits, with the last digit potentially being X) and ISBN-13 (13 digits starting with 978 or 979). These regular expressions validate the format of ISBN numbers without hyphens or spaces. ISBNs are a specialized type of <Anchor href="/numbers" underline="always">number pattern</Anchor>.</Text>
      </Stack>
      <Stack gap="lg">
        <Title order={2}>ISBN-10 Validation</Title>
        <Text>ISBN-10 consists of 10 digits where the last digit can be X (representing 10). This format was used before 2007 and is still found on older books.</Text>
        <CodeHighlight
          code={`^(?:\\d{9}X|\\d{10})$`}
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
            <Code>{`(?:...)`}</Code> - Non-capturing group containing two alternatives.
          </List.Item>
          <List.Item>
            <Code>{`\\d{9}X`}</Code> - Nine digits followed by the letter X (uppercase).
          </List.Item>
          <List.Item>
            <Code>{`|`}</Code> - Or operator separating the two alternatives.
          </List.Item>
          <List.Item>
            <Code>{`\\d{10}`}</Code> - Exactly 10 digits.
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
            <CodeHighlight code={jsSnippetISBN10.trim()} language="js" />
          </Tabs.Panel>
          <Tabs.Panel value="python">
            <CodeHighlight code={pySnippetISBN10.trim()} language="py" />
          </Tabs.Panel>
          <Tabs.Panel value="rust">
            <CodeHighlight code={rustSnippetISBN10.trim()} language="rust" />
          </Tabs.Panel>
          <Tabs.Panel value="go">
            <CodeHighlight code={goSnippetISBN10.trim()} language="go" />
          </Tabs.Panel>
          <Tabs.Panel value="swift">
            <CodeHighlight code={swiftSnippetISBN10.trim()} language="swift" />
          </Tabs.Panel>
          <Tabs.Panel value="csharp">
            <CodeHighlight code={csharpSnippetISBN10.trim()} language="csharp" />
          </Tabs.Panel>
          <Tabs.Panel value="java">
            <CodeHighlight code={javaSnippetISBN10.trim()} language="java" />
          </Tabs.Panel>
          <Tabs.Panel value="php">
            <CodeHighlight code={phpSnippetISBN10.trim()} language="php" />
          </Tabs.Panel>
        </Tabs>
      </Stack>
      
      <Stack gap="lg">
        <Title order={3}>Test Cases</Title>
        <TestCasesTable testCases={testCasesISBN10} columnLabel="ISBN-10" />
      </Stack>

      <Stack gap="lg">
        <Title order={2}>ISBN-13 Validation</Title>
        <Text>ISBN-13 consists of 13 digits and always starts with either 978 or 979. This format has been the standard since 2007 and is used for all new book publications.</Text>
        <CodeHighlight
          code={`^97[89]\\d{10}$`}
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
            <Code>{`97`}</Code> - The ISBN-13 prefix always starts with 97.
          </List.Item>
          <List.Item>
            <Code>{`[89]`}</Code> - The third digit must be either 8 or 9 (forming 978 or 979).
          </List.Item>
          <List.Item>
            <Code>{`\\d{10}`}</Code> - Exactly 10 more digits to complete the 13-digit ISBN.
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
            <CodeHighlight code={jsSnippetISBN13.trim()} language="js" />
          </Tabs.Panel>
          <Tabs.Panel value="python">
            <CodeHighlight code={pySnippetISBN13.trim()} language="py" />
          </Tabs.Panel>
          <Tabs.Panel value="rust">
            <CodeHighlight code={rustSnippetISBN13.trim()} language="rust" />
          </Tabs.Panel>
          <Tabs.Panel value="go">
            <CodeHighlight code={goSnippetISBN13.trim()} language="go" />
          </Tabs.Panel>
          <Tabs.Panel value="swift">
            <CodeHighlight code={swiftSnippetISBN13.trim()} language="swift" />
          </Tabs.Panel>
          <Tabs.Panel value="csharp">
            <CodeHighlight code={csharpSnippetISBN13.trim()} language="csharp" />
          </Tabs.Panel>
          <Tabs.Panel value="java">
            <CodeHighlight code={javaSnippetISBN13.trim()} language="java" />
          </Tabs.Panel>
          <Tabs.Panel value="php">
            <CodeHighlight code={phpSnippetISBN13.trim()} language="php" />
          </Tabs.Panel>
        </Tabs>
      </Stack>

      <Stack gap="lg">
        <Title order={3}>Test Cases</Title>
        <TestCasesTable testCases={testCasesISBN13} columnLabel="ISBN-13" />
      </Stack>

      <Stack gap="lg">
        <Title order={2}>Note</Title>
        <Text>These regular expressions only validate the format of ISBN numbers. For complete validation, you should also verify the check digit using the appropriate algorithm. ISBN-10 uses modulo 11, while ISBN-13 uses modulo 10. Additionally, ISBNs are often formatted with hyphens (e.g., 978-0-306-40615-7), but these patterns match only the raw numeric format without separators.</Text>
      </Stack>
     </Stack>
  );
};

export default ISBN;
