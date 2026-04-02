"use client";

import { Title, Text, Code, List, Tabs, Anchor, Stack } from "@mantine/core";
import { CodeHighlight } from "@mantine/code-highlight";
import TestCasesTable from "../../(components)/test-cases-table";
import {
  regex,
  regexWithAlpha,
  jsSnippet,
  pySnippet,
  rustSnippet,
  goSnippet,
  swiftSnippet,
  csharpSnippet,
  javaSnippet,
  phpSnippet,
  testCases,
  jsSnippetWithAlpha,
  pySnippetWithAlpha,
  rustSnippetWithAlpha,
  goSnippetWithAlpha,
  swiftSnippetWithAlpha,
  csharpSnippetWithAlpha,
  javaSnippetWithAlpha,
  phpSnippetWithAlpha,
  testCasesWithAlpha,
} from "../../../../data/hex-color-code";

const HexColorCode = () => {
  return (
    <Stack component="article" gap="xl">
      <Stack component="header" gap="lg">
        <Title order={1}>Hex Color Code Validation Regular Expression</Title>
        <Text>
          Hex color codes are widely used in CSS, design tools, and UI configuration files to represent colors
          with hexadecimal digits. This pattern validates the two most common formats: three-digit shorthand like
          <Code>#fff</Code> and six-digit full values like <Code>#1A2B3C</Code>. It requires the leading hash
          symbol and accepts uppercase or lowercase hexadecimal characters. An alpha-capable variant is also
          included below for interfaces that store transparency directly in the color value while still accepting
          the regular 3-digit and 6-digit forms.
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
            <Code>{`^#`}</Code> - Start of the string followed by a required <Code>#</Code>.
          </List.Item>
          <List.Item>
            <Code>{`(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6})`}</Code> - Matches either exactly 3 or exactly 6 hexadecimal digits.
          </List.Item>
          <List.Item>
            <Code>{`[0-9a-fA-F]`}</Code> - A single hexadecimal digit: 0-9, a-f, or A-F.
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
            This pattern validates <strong>format</strong> only. It does not normalize the value or convert shorthand colors like <Code>#abc</Code> into <Code>#aabbcc</Code>.
          </List.Item>
          <List.Item>
            The recommended pattern intentionally excludes alpha channels. Use the alternative pattern below when you want to accept <Code>#RRGGBBAA</Code> in addition to the regular 3-digit and 6-digit forms.
          </List.Item>
          <List.Item>
            If you also accept named CSS colors like <Code>red</Code> or functional formats like <Code>rgb(255, 0, 0)</Code>, validate those separately rather than weakening this regex.
          </List.Item>
          <List.Item>
            Hex colors commonly appear in style systems alongside <Anchor href="/alphanumeric" underline="always">token names</Anchor> and other configuration values.
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
        <TestCasesTable testCases={testCases} columnLabel="Hex Color" />
      </Stack>

      <Stack gap="lg">
        <Title order={2}>Hex With Optional Alpha</Title>
        <Text>
          If your system supports transparency in hex notation, use a pattern that accepts <Code>#RRGGBBAA</Code>
          in addition to standard <Code>#RGB</Code> and <Code>#RRGGBB</Code> values.
        </Text>
        <CodeHighlight code={regexWithAlpha} language="txt" />
      </Stack>
      <Stack gap="lg">
        <Title order={3}>Explanation</Title>
        <List spacing="sm">
          <List.Item>
            <Code>{`^#`}</Code> - Start of the string followed by a required <Code>#</Code>.
          </List.Item>
          <List.Item>
            <Code>{`(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})`}</Code> - Matches 3-digit shorthand, 6-digit full hex, or 8-digit hex with alpha.
          </List.Item>
          <List.Item>
            <Code>{`$`}</Code> - End of the string.
          </List.Item>
        </List>
        <Text size="sm" c="dimmed" mt="md">
          <strong>Note:</strong> This alternative is useful when the same input can contain standard hex colors or alpha-enabled values. It still rejects unsupported lengths such as 4-digit shorthand.
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
            <CodeHighlight code={jsSnippetWithAlpha.trim()} language="js" />
          </Tabs.Panel>
          <Tabs.Panel value="python">
            <CodeHighlight code={pySnippetWithAlpha.trim()} language="py" />
          </Tabs.Panel>
          <Tabs.Panel value="rust">
            <CodeHighlight code={rustSnippetWithAlpha.trim()} language="rust" />
          </Tabs.Panel>
          <Tabs.Panel value="go">
            <CodeHighlight code={goSnippetWithAlpha.trim()} language="go" />
          </Tabs.Panel>
          <Tabs.Panel value="swift">
            <CodeHighlight code={swiftSnippetWithAlpha.trim()} language="swift" />
          </Tabs.Panel>
          <Tabs.Panel value="csharp">
            <CodeHighlight code={csharpSnippetWithAlpha.trim()} language="csharp" />
          </Tabs.Panel>
          <Tabs.Panel value="java">
            <CodeHighlight code={javaSnippetWithAlpha.trim()} language="java" />
          </Tabs.Panel>
          <Tabs.Panel value="php">
            <CodeHighlight code={phpSnippetWithAlpha.trim()} language="php" />
          </Tabs.Panel>
        </Tabs>
      </Stack>
      <Stack gap="lg">
        <Title order={3}>Test Cases</Title>
        <TestCasesTable testCases={testCasesWithAlpha} columnLabel="Hex Color With Optional Alpha" />
      </Stack>
    </Stack>
  );
};

export default HexColorCode;
