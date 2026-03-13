"use client";

import { Title, Text, Code, List, Tabs, Stack } from "@mantine/core";
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
  jsSnippetExtract,
  pySnippetExtract,
  rustSnippetExtract,
  goSnippetExtract,
  swiftSnippetExtract,
  csharpSnippetExtract,
  javaSnippetExtract,
  phpSnippetExtract,
  testCasesExtract,
} from "../../../../data/html-tag";

const HtmlTag = () => {
  return (
    <Stack component="article" gap="xl">
      <Stack component="header" gap="lg">
        <Title order={1}>HTML Tag Validation &amp; Extraction Regular Expression</Title>
        <Text>
          HTML tag validation and extraction are common needs in text processing, sanitization, and parsing pipelines.
          Whether you need to verify that a string is a well-formed HTML tag or pull all tags out of an HTML document,
          a carefully crafted regular expression can handle both tasks efficiently. This article provides two patterns:
          one for validating a complete tag string and one for extracting tags from arbitrary HTML content.
        </Text>
      </Stack>

      <Stack gap="lg">
        <Title order={2}>Validation: Is This a Valid HTML Tag?</Title>
        <CodeHighlight
          code={`^<\\/?[a-zA-Z][a-zA-Z0-9-]*(?:\\s+[a-zA-Z_:][a-zA-Z0-9_.:-]*(?:\\s*=\\s*(?:"[^"]*"|'[^']*'|[^\\s>"']*))?)*\\s*\\/?>$`}
          language="txt"
        />
        <Text>
          Use this pattern with anchors (<Code>^</Code> and <Code>$</Code>) to test whether an entire string is a single,
          well-formed HTML tag — opening, closing, or self-closing.
        </Text>
      </Stack>

      <Stack gap="lg">
        <Title order={2}>Extraction: Find All Tags in a String</Title>
        <CodeHighlight
          code={`<\\/?[a-zA-Z][a-zA-Z0-9-]*(?:\\s+[a-zA-Z_:][a-zA-Z0-9_.:-]*(?:\\s*=\\s*(?:"[^"]*"|'[^']*'|[^\\s>"']*))?)*\\s*\\/?>` }
          language="txt"
        />
        <Text>
          The same pattern without anchors, combined with the global flag (<Code>g</Code>), extracts every HTML tag found
          within a larger block of HTML content.
        </Text>
      </Stack>

      <Stack gap="lg">
        <Title order={3}>Explanation</Title>
        <List spacing="sm">
          <List.Item>
            <Code>{`^`}</Code> / <Code>{`$`}</Code> — Start and end anchors (validation only). Omit these when extracting tags from a larger string.
          </List.Item>
          <List.Item>
            <Code>{`<`}</Code> — Literal opening angle bracket.
          </List.Item>
          <List.Item>
            <Code>{`\\/?`}</Code> — Optional forward slash, matching closing tags like <Code>{`</div>`}</Code>.
          </List.Item>
          <List.Item>
            <Code>{`[a-zA-Z][a-zA-Z0-9-]*`}</Code> — Tag name: must start with a letter, followed by letters, digits, or hyphens. Hyphens are required for custom elements such as <Code>{`<my-component>`}</Code>.
          </List.Item>
          <List.Item>
            <Code>{`(?:\\s+[a-zA-Z_:][a-zA-Z0-9_.:-]*(?:\\s*=\\s*(?:"[^"]*"|'[^']*'|[^\\s>"']*))?)*`}</Code> — Zero or more attributes:
            <List spacing="xs" mt="xs">
              <List.Item><Code>{`\\s+`}</Code> — Required whitespace before each attribute.</List.Item>
              <List.Item><Code>{`[a-zA-Z_:][a-zA-Z0-9_.:-]*`}</Code> — Attribute name (covers standard and namespaced attributes like <Code>data-value</Code> or <Code>xml:lang</Code>).</List.Item>
              <List.Item><Code>{`(?:\\s*=\\s*(?:"[^"]*"|'[^']*'|[^\\s>"']*))?`}</Code> — Optional attribute value: double-quoted, single-quoted, or unquoted.</List.Item>
            </List>
          </List.Item>
          <List.Item>
            <Code>{`\\s*\\/?>$`}</Code> — Optional whitespace, optional self-closing slash, then the closing <Code>{`>`}</Code>.
          </List.Item>
        </List>
      </Stack>

      <Stack gap="lg">
        <Title order={3}>Supported Tag Syntax</Title>
        <List spacing="sm">
          <List.Item>
            <strong>Opening tags:</strong> <Code>{`<div>`}</Code>, <Code>{`<p class="text">`}</Code>
          </List.Item>
          <List.Item>
            <strong>Closing tags:</strong> <Code>{`</div>`}</Code>, <Code>{`</span>`}</Code>
          </List.Item>
          <List.Item>
            <strong>Self-closing tags:</strong> <Code>{`<br/>`}</Code>, <Code>{`<img src="x.png" />`}</Code>
          </List.Item>
          <List.Item>
            <strong>Boolean attributes:</strong> <Code>{`<input required>`}</Code>, <Code>{`<details open>`}</Code>
          </List.Item>
          <List.Item>
            <strong>Quoted attribute values:</strong> double-quoted (<Code>{`"value"`}</Code>) and single-quoted (<Code>{`'value'`}</Code>)
          </List.Item>
          <List.Item>
            <strong>Namespaced &amp; data attributes:</strong> <Code>{`data-id="1"`}</Code>, <Code>{`xml:lang="en"`}</Code>
          </List.Item>
          <List.Item>
            <strong>Custom elements:</strong> <Code>{`<my-component>`}</Code>, <Code>{`<app-header>`}</Code>
          </List.Item>
        </List>
      </Stack>

      <Stack gap="lg">
        <Title order={3}>Validation Implementation</Title>
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
        <Title order={3}>Extraction Implementation</Title>
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
            <CodeHighlight code={jsSnippetExtract.trim()} language="js" />
          </Tabs.Panel>
          <Tabs.Panel value="python">
            <CodeHighlight code={pySnippetExtract.trim()} language="py" />
          </Tabs.Panel>
          <Tabs.Panel value="rust">
            <CodeHighlight code={rustSnippetExtract.trim()} language="rust" />
          </Tabs.Panel>
          <Tabs.Panel value="go">
            <CodeHighlight code={goSnippetExtract.trim()} language="go" />
          </Tabs.Panel>
          <Tabs.Panel value="swift">
            <CodeHighlight code={swiftSnippetExtract.trim()} language="swift" />
          </Tabs.Panel>
          <Tabs.Panel value="csharp">
            <CodeHighlight code={csharpSnippetExtract.trim()} language="csharp" />
          </Tabs.Panel>
          <Tabs.Panel value="java">
            <CodeHighlight code={javaSnippetExtract.trim()} language="java" />
          </Tabs.Panel>
          <Tabs.Panel value="php">
            <CodeHighlight code={phpSnippetExtract.trim()} language="php" />
          </Tabs.Panel>
        </Tabs>
      </Stack>

      <Stack gap="lg">
        <Title order={3}>Validation Test Cases</Title>
        <Text size="sm" c="dimmed" mb="md">
          Each input is tested as a complete string to determine whether it is a valid HTML tag.
        </Text>
        <TestCasesTable testCases={testCases} columnLabel="HTML Tag" />
      </Stack>

      <Stack gap="lg">
        <Title order={3}>Extraction Test Cases</Title>
        <Text size="sm" c="dimmed" mb="md">
          Each input is a string of HTML content. The result indicates whether the string contains at least one valid HTML tag.
        </Text>
        <TestCasesTable testCases={testCasesExtract} columnLabel="HTML Content" />
      </Stack>
    </Stack>
  );
};

export default HtmlTag;
