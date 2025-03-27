"use client";

import { Title, Text, Code, List, Table, Tabs, Anchor, Stack } from '@mantine/core';
import {
  IconHtml,
} from '@tabler/icons-react';
import { CodeHighlight } from '@mantine/code-highlight';

const js_snippet = `
const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_\`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*\.[a-zA-Z]{2,}$/;

function isEmailValid(email) {
  return emailRegex.test(email);
}
`;

const py_snippet = `
import re

email_regex = re.compile(r"^[a-zA-Z0-9.!#$%&'*+/=?^_\`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*\.[a-zA-Z]{2,}$")

def is_valid_email(email):
    return bool(email_regex.match(email))
`;

const elements = [
  { email: 'user@example.com', valid: true },
  { email: 'user.name@sub.domain.org', valid: true },
  { email: 'user@123.456.789.000', valid: false },
  { email: '@missinglocal.com', valid: false },
];

const Email = () => {
  const rows = elements.map((element: any) => (
    <Table.Tr key={element.email}>
      <Table.Td>{element.email}</Table.Td>
      <Table.Td>{element.valid.toString()}</Table.Td>
    </Table.Tr>
  ));

  return (
    <Stack component="article" gap="xl">
      <Stack component="header" gap="lg">
        <Title order={1}>Email Validation Regular Expression</Title>
        <Text>A well-formed email address follows a standard format defined by <Anchor href="https://www.rfc-editor.org/rfc/rfc5322.html" target="_blank" rel="noopener" underline="always">RFC 5322</Anchor>, but practical validation often balances strictness with usability as most allowed patterns in the standard are not allowed in the actual used email clients. A regular expression that supports the full standard would be very complex and unmaintainable.</Text>
      </Stack>
      <Stack gap="lg">
        <Title order={2}>Recommended Solution</Title>
        <CodeHighlight
          code={`^[a-zA-Z0-9.!#$%&'*+/=?^_\`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*\.[a-zA-Z]{2,}$`}
          language="txt"
        />
      </Stack>
      <Stack gap="lg">
        <Title order={3}>Explanation:</Title>
        <List spacing="sm">
          <List.Item><Code fz="sm">{`^[a-zA-Z0-9.!#$%&'*+/=?^_\`{|}~-]+`}</Code> – Matches the local part (before @), allowing alphanumeric characters and special characters.</List.Item>
          <List.Item><Code fz="sm">{`@`}</Code> – Ensures the presence of the @ symbol.</List.Item>
          <List.Item><Code fz="sm">{`[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*`}</Code> – Matches the domain name, including subdomains.</List.Item>
          <List.Item><Code fz="sm">{`\.[a-zA-Z]{2,}$`}</Code> – Ensures the TLD (e.g., .com, .net, .io) with at least 2 letters.</List.Item>
        </List>
      </Stack>
      <Stack gap="lg">
      <Title order={3}>Implementation</Title>
      <Tabs defaultValue="js">
        <Tabs.List>
          <Tabs.Tab value="js">
            JavaScript
          </Tabs.Tab>
          <Tabs.Tab value="python">
            Python
          </Tabs.Tab>
          <Tabs.Tab value="rust">
            Rust
          </Tabs.Tab>
          <Tabs.Tab value="go">
            Go
          </Tabs.Tab>
          <Tabs.Tab value="swift">
            Swift
          </Tabs.Tab>
          <Tabs.Tab value="csharp">
            C#
          </Tabs.Tab>
          <Tabs.Tab value="java">
            Java
          </Tabs.Tab>
          <Tabs.Tab value="php">
            PHP
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="js">
          <CodeHighlight
            code={js_snippet.trim()}
            language="js"
          />
        </Tabs.Panel>

        <Tabs.Panel value="python">
          <CodeHighlight
            code={py_snippet.trim()}
            language="py"
          />
        </Tabs.Panel>

        <Tabs.Panel value="rust">
          <CodeHighlight
            code={"WiP"}
            language="txt"
          />
        </Tabs.Panel>
        <Tabs.Panel value="go">
          <CodeHighlight
            code={"WiP"}
            language="txt"
          />
        </Tabs.Panel>
        <Tabs.Panel value="swift">
          <CodeHighlight
            code={"WiP"}
            language="txt"
          />
        </Tabs.Panel>
        <Tabs.Panel value="csharp">
          <CodeHighlight
            code={"WiP"}
            language="txt"
          />
        </Tabs.Panel>
        <Tabs.Panel value="java">
          <CodeHighlight
            code={"WiP"}
            language="txt"
          />
        </Tabs.Panel>
        <Tabs.Panel value="php">
          <CodeHighlight
            code={"WiP"}
            language="txt"
          />
        </Tabs.Panel>
        
      </Tabs>
      </Stack>
      
      <Stack gap="lg">
        <Title order={3}>Test Cases</Title>
        <Table striped highlightOnHover withTableBorder withColumnBorders mb="xl">
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Email Address</Table.Th>
              <Table.Th>Valid?</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>
      </Stack>

    </Stack>
  );
};

export default Email;

