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
  jsSnippet,
  pySnippet,
  rustSnippet,
  goSnippet,
  swiftSnippet,
  csharpSnippet,
  javaSnippet,
  phpSnippet,
  testCases,
} from '../../../../data/domain';

const Domain = () => {
  return (
    <Stack component="article" gap="xl">
      <Stack component="header" gap="lg">
        <Title order={1}>Domain Name Validation Regular Expression</Title>
        <Text>
          A valid domain name follows the rules defined in <Anchor href="https://www.rfc-editor.org/rfc/rfc1035" target="_blank" rel="noopener" underline="always">RFC 1035</Anchor> and <Anchor href="https://www.rfc-editor.org/rfc/rfc1123" target="_blank" rel="noopener" underline="always">RFC 1123</Anchor>. 
          Domain names consist of labels separated by dots, where each label can contain letters, numbers, and hyphens (but cannot start or end with a hyphen). 
          The top-level domain (TLD) must be at least 2 characters long and consist of letters only. Domain names are used in <Anchor href="/email" underline="always">email addresses</Anchor>, <Anchor href="/url-and-path" underline="always">URLs</Anchor>, and other network identifiers.
        </Text>
      </Stack>
      <Stack gap="lg">
        <Title order={2}>Recommended Solution</Title>
        <CodeHighlight
          code={`^(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\\.)+[a-zA-Z]{2,}$`}
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
            <Code>{`(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\\.)+ `}</Code> - One or more domain labels (e.g., &quot;subdomain.example.&quot;):
            <List withPadding>
              <List.Item>
                <Code>{`[a-zA-Z0-9]`}</Code> - Must start with alphanumeric character.
              </List.Item>
              <List.Item>
                <Code>{`[a-zA-Z0-9-]{0,61}`}</Code> - 0-61 characters of alphanumeric or hyphens.
              </List.Item>
              <List.Item>
                <Code>{`[a-zA-Z0-9]`}</Code> - Must end with alphanumeric character (enforced when length &gt; 1).
              </List.Item>
              <List.Item>
                <Code>{`\\.`}</Code> - Followed by a dot.
              </List.Item>
            </List>
          </List.Item>
          <List.Item>
            <Code>{`[a-zA-Z]{2,}`}</Code> - Top-level domain: at least 2 letters (e.g., com, org, museum).
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
            This regex validates the <strong>format</strong> of domain names but does NOT verify if a domain actually exists or is registered.
          </List.Item>
          <List.Item>
            Each label can be up to 63 characters long, and the total domain name should not exceed 253 characters (not enforced by this regex).
          </List.Item>
          <List.Item>
            This pattern supports internationalized domain names (IDN) in their ASCII-compatible encoding (Punycode) format (e.g., xn--80akhbyknj4f.com).
          </List.Item>
          <List.Item>
            Trailing dots are not allowed in this pattern. If you need to accept FQDNs (Fully Qualified Domain Names) with trailing dots, modify the pattern to end with <Code>\\.?$</Code>.
          </List.Item>
          <List.Item>
            Single-label domains (e.g., &quot;localhost&quot;) are not accepted by this pattern as they lack a TLD.
          </List.Item>
          <List.Item>
            For network identifiers, you may also need <Anchor href="/ip-address" underline="always">IP address validation</Anchor> as an alternative to domain names.
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
        <TestCasesTable testCases={testCases} columnLabel="Domain Name" />
      </Stack>
    </Stack>
  );
};

export default Domain;
