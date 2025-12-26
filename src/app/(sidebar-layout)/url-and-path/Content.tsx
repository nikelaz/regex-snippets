"use client";

import { Title, Text, Code, List, Table, Tabs, Anchor, Stack, ThemeIcon } from '@mantine/core';
import {
  IconCheck,
  IconX,
} from '@tabler/icons-react';
import { CodeHighlight } from '@mantine/code-highlight';
import TestCasesTable from "../../(components)/test-cases-table";
import type TestCase from '../../../../types/test-case';
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
} from '../../../../data/url';

const URLAndPath = () => {
  return (
    <Stack component="article" gap="xl">
      <Stack component="header" gap="lg">
        <Title order={1}>URL & Path Validation Regular Expression</Title>
        <Text>
          A valid URL (Uniform Resource Locator) follows the format defined in <Anchor href="https://www.rfc-editor.org/rfc/rfc3986" target="_blank" rel="noopener" underline="always">RFC 3986</Anchor>. 
          This regex validates HTTP and HTTPS URLs with optional www prefix, <Anchor href="/domain" underline="always">domain names</Anchor>, paths, query strings, and fragments. 
          URLs are essential for web navigation and API endpoints.
        </Text>
      </Stack>
      <Stack gap="lg">
        <Title order={2}>Recommended Solution</Title>
        <CodeHighlight
          code={`^https?:\\/\\/(?:www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\\.[a-zA-Z0-9()]{1,6}\\b(?:[-a-zA-Z0-9()@:%_\\+.~#?&\\/=]*)$`}
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
            <Code>{`https?`}</Code> - Protocol: http or https.
          </List.Item>
          <List.Item>
            <Code>{`:\\/\\/`}</Code> - Literal &quot;://&quot; separator.
          </List.Item>
          <List.Item>
            <Code>{`(?:www\\.)?`}</Code> - Optional &quot;www.&quot; prefix.
          </List.Item>
          <List.Item>
            <Code>{`[-a-zA-Z0-9@:%._\\+~#=]{1,256}`}</Code> - Domain name or subdomain (1-256 characters). See <Anchor href="/domain" underline="always">domain validation</Anchor> for more details.
          </List.Item>
          <List.Item>
            <Code>{`\\.[a-zA-Z0-9()]{1,6}`}</Code> - Top-level domain (e.g., .com, .org) with 1-6 characters.
          </List.Item>
          <List.Item>
            <Code>{`\\b`}</Code> - Word boundary to ensure proper domain ending.
          </List.Item>
          <List.Item>
            <Code>{`(?:[-a-zA-Z0-9()@:%_\\+.~#?&\\/=]*)`}</Code> - Optional path, query string, and fragment.
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
            This regex validates the <strong>format</strong> of URLs but does NOT verify if the URL is accessible or exists.
          </List.Item>
          <List.Item>
            This pattern only supports HTTP and HTTPS protocols. To support other protocols (ftp, mailto, etc.), modify the protocol part.
          </List.Item>
          <List.Item>
            Port numbers are implicitly allowed through the character class but not explicitly validated.
          </List.Item>
          <List.Item>
            IP addresses (IPv4/IPv6) are not fully supported by this pattern. Use a dedicated <Anchor href="/ip-address" underline="always">IP address validation regex</Anchor> if needed.
          </List.Item>
          <List.Item>
            International domain names (IDN) must be in Punycode format to be validated correctly.
          </List.Item>
          <List.Item>
            Query parameters and fragments are allowed but not individually validated for correctness.
          </List.Item>
          <List.Item>
            For more robust validation, consider using built-in URL parsing libraries in your programming language.
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
        <TestCasesTable testCases={testCases} columnLabel="URL" />
      </Stack>
    </Stack>
  );
};

export default URLAndPath;
