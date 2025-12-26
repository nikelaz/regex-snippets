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
  jsSnippetInteger,
  pySnippetInteger,
  rustSnippetInteger,
  goSnippetInteger,
  swiftSnippetInteger,
  csharpSnippetInteger,
  javaSnippetInteger,
  phpSnippetInteger,
  jsSnippetDecimal,
  pySnippetDecimal,
  rustSnippetDecimal,
  goSnippetDecimal,
  swiftSnippetDecimal,
  csharpSnippetDecimal,
  javaSnippetDecimal,
  phpSnippetDecimal,
  testCasesInteger,
  testCasesDecimal,
} from "../../../../data/numbers";

const Numbers = () => {
  return (
    <Stack component="article" gap="xl">
      <Stack component="header" gap="lg">
        <Title order={1}>Number Validation Regular Expressions</Title>
        <Text>
          Numbers can be validated in various formats including integers, decimals, and floating-point numbers. 
          These regex patterns provide validation for common number formats, supporting both positive and negative values.
        </Text>
      </Stack>

      <Stack gap="lg">
        <Title order={2}>Integer Numbers</Title>
        <Text>Validates whole numbers, both positive and negative, without decimal points.</Text>
        <CodeHighlight
          code={`^-?\\d+$`}
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
            <Code>{`-?`}</Code> - Optional minus sign for negative numbers.
          </List.Item>
          <List.Item>
            <Code>{`\\d+`}</Code> - One or more digits.
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
            <CodeHighlight code={jsSnippetInteger.trim()} language="js" />
          </Tabs.Panel>
          <Tabs.Panel value="python">
            <CodeHighlight code={pySnippetInteger.trim()} language="py" />
          </Tabs.Panel>
          <Tabs.Panel value="rust">
            <CodeHighlight code={rustSnippetInteger.trim()} language="rust" />
          </Tabs.Panel>
          <Tabs.Panel value="go">
            <CodeHighlight code={goSnippetInteger.trim()} language="go" />
          </Tabs.Panel>
          <Tabs.Panel value="swift">
            <CodeHighlight code={swiftSnippetInteger.trim()} language="swift" />
          </Tabs.Panel>
          <Tabs.Panel value="csharp">
            <CodeHighlight code={csharpSnippetInteger.trim()} language="csharp" />
          </Tabs.Panel>
          <Tabs.Panel value="java">
            <CodeHighlight code={javaSnippetInteger.trim()} language="java" />
          </Tabs.Panel>
          <Tabs.Panel value="php">
            <CodeHighlight code={phpSnippetInteger.trim()} language="php" />
          </Tabs.Panel>
        </Tabs>
      </Stack>
      
      <Stack gap="lg">
        <Title order={3}>Test Cases</Title>
        <TestCasesTable testCases={testCasesInteger} columnLabel="Number" />
      </Stack>

      <Stack gap="lg">
        <Title order={2}>Decimal Numbers</Title>
        <Text>Validates decimal numbers with optional fractional parts, both positive and negative.</Text>
        <CodeHighlight
          code={`^-?\\d+(\\.\\d+)?$`}
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
            <Code>{`-?`}</Code> - Optional minus sign for negative numbers.
          </List.Item>
          <List.Item>
            <Code>{`\\d+`}</Code> - One or more digits before the decimal point.
          </List.Item>
          <List.Item>
            <Code>{`(\\.\\d+)?`}</Code> - Optional decimal part: a dot followed by one or more digits.
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
            <CodeHighlight code={jsSnippetDecimal.trim()} language="js" />
          </Tabs.Panel>
          <Tabs.Panel value="python">
            <CodeHighlight code={pySnippetDecimal.trim()} language="py" />
          </Tabs.Panel>
          <Tabs.Panel value="rust">
            <CodeHighlight code={rustSnippetDecimal.trim()} language="rust" />
          </Tabs.Panel>
          <Tabs.Panel value="go">
            <CodeHighlight code={goSnippetDecimal.trim()} language="go" />
          </Tabs.Panel>
          <Tabs.Panel value="swift">
            <CodeHighlight code={swiftSnippetDecimal.trim()} language="swift" />
          </Tabs.Panel>
          <Tabs.Panel value="csharp">
            <CodeHighlight code={csharpSnippetDecimal.trim()} language="csharp" />
          </Tabs.Panel>
          <Tabs.Panel value="java">
            <CodeHighlight code={javaSnippetDecimal.trim()} language="java" />
          </Tabs.Panel>
          <Tabs.Panel value="php">
            <CodeHighlight code={phpSnippetDecimal.trim()} language="php" />
          </Tabs.Panel>
        </Tabs>
      </Stack>
      
      <Stack gap="lg">
        <Title order={3}>Test Cases</Title>
        <TestCasesTable testCases={testCasesDecimal} columnLabel="Number" />
      </Stack>

      <Stack gap="lg">
        <Title order={3}>Notes</Title>
        <List spacing="sm">
          <List.Item>
            These patterns do not accept numbers with leading plus signs (+). Modify the pattern to <Code>^[+-]?\\d+$</Code> to allow both + and &minus;.
          </List.Item>
          <List.Item>
            Leading zeros are allowed (e.g., &quot;0123&quot; is valid). To disallow leading zeros, use a more complex pattern.
          </List.Item>
          <List.Item>
            These patterns do not support scientific notation (e.g., 1.23e10). Use a different pattern for that format.
          </List.Item>
          <List.Item>
            Thousands separators (commas, spaces) are not supported. Preprocess input to remove them if needed.
          </List.Item>
          <List.Item>
            For positive-only numbers, use <Code>^\\d+$</Code> (integers) or <Code>^\\d+(\\.\\d+)?$</Code> (decimals).
          </List.Item>
          <List.Item>
            These regex patterns validate <strong>format</strong> only. For range validation, use additional logic after regex matching.
          </List.Item>
          <List.Item>
            For specialized number patterns, see: <Anchor href="/phone" underline="always">phone numbers</Anchor>, <Anchor href="/credit-debit-card-number" underline="always">credit card numbers</Anchor>, <Anchor href="/social-security-number" underline="always">social security numbers</Anchor>, <Anchor href="/isbn" underline="always">ISBN</Anchor>, and <Anchor href="/zip-code" underline="always">ZIP codes</Anchor>.
          </List.Item>
        </List>
      </Stack>
    </Stack>
  );
};

export default Numbers;
