"use client";

import {
  Title,
  Text,
  Code,
  List,
  Table,
  Tabs,
  Anchor,
  Stack,
  ThemeIcon
} from "@mantine/core";
import { IconCheck, IconX } from "@tabler/icons-react";
import { CodeHighlight } from "@mantine/code-highlight";
import type TestCase from "../../../../types/test-case";
import {
  jsSnippetIPv4,
  pySnippetIPv4,
  rustSnippetIPv4,
  goSnippetIPv4,
  swiftSnippetIPv4,
  csharpSnippetIPv4,
  javaSnippetIPv4,
  phpSnippetIPv4,
  testCasesIPv4,
  jsSnippetIPv6,
  pySnippetIPv6,
  rustSnippetIPv6,
  goSnippetIPv6,
  swiftSnippetIPv6,
  csharpSnippetIPv6,
  javaSnippetIPv6,
  phpSnippetIPv6,
  testCasesIPv6,
} from "../../../../data/ip-address";

const IPAddress = () => {
  const testCaseRows = (data: TestCase[]) => data.map((element: TestCase, index: number) => (
    <Table.Tr key={`${element.pattern}-${index}`}>
      <Table.Td>{element.pattern || '(empty string)'}</Table.Td>
      <Table.Td>
        {element.isValid ? (
          <ThemeIcon radius="xl" color="green" size="sm">
            <IconCheck style={{ width: '70%', height: '70%' }} />
          </ThemeIcon>
        ) : (
          <ThemeIcon radius="xl" color="red" size="sm">
            <IconX style={{ width: '70%', height: '70%' }} />
          </ThemeIcon>
        )}
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <Stack component="article" gap="xl">
      <Stack component="header" gap="lg">
        <Title order={1}>IP Address Validation Regular Expressions</Title>
        <Text>
          IP addresses are numerical labels assigned to devices on a network. There are two versions in use: 
          IPv4 (defined in <Anchor href="https://www.rfc-editor.org/rfc/rfc791" target="_blank" rel="noopener" underline="always">RFC 791</Anchor>) and 
          IPv6 (defined in <Anchor href="https://www.rfc-editor.org/rfc/rfc4291" target="_blank" rel="noopener" underline="always">RFC 4291</Anchor>). 
          These regex patterns validate the format of both IPv4 and IPv6 addresses. IP addresses can be used in <Anchor href="/url-and-path" underline="always">URLs</Anchor> as an alternative to <Anchor href="/domain" underline="always">domain names</Anchor>.
        </Text>
      </Stack>

      <Stack gap="lg">
        <Title order={2}>IPv4 Address Validation</Title>
        <Text>IPv4 addresses consist of four octets (0-255) separated by dots.</Text>
        <CodeHighlight
          code={`^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$`}
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
            <Code>{`(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}`}</Code> - Three octets followed by dots:
            <List withPadding>
              <List.Item>
                <Code>{`25[0-5]`}</Code> - Matches 250-255.
              </List.Item>
              <List.Item>
                <Code>{`2[0-4][0-9]`}</Code> - Matches 200-249.
              </List.Item>
              <List.Item>
                <Code>{`[01]?[0-9][0-9]?`}</Code> - Matches 0-199.
              </List.Item>
            </List>
          </List.Item>
          <List.Item>
            <Code>{`(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)`}</Code> - Fourth octet (same pattern, no trailing dot).
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
            <CodeHighlight code={jsSnippetIPv4.trim()} language="js" />
          </Tabs.Panel>
          <Tabs.Panel value="python">
            <CodeHighlight code={pySnippetIPv4.trim()} language="py" />
          </Tabs.Panel>
          <Tabs.Panel value="rust">
            <CodeHighlight code={rustSnippetIPv4.trim()} language="rust" />
          </Tabs.Panel>
          <Tabs.Panel value="go">
            <CodeHighlight code={goSnippetIPv4.trim()} language="go" />
          </Tabs.Panel>
          <Tabs.Panel value="swift">
            <CodeHighlight code={swiftSnippetIPv4.trim()} language="swift" />
          </Tabs.Panel>
          <Tabs.Panel value="csharp">
            <CodeHighlight code={csharpSnippetIPv4.trim()} language="csharp" />
          </Tabs.Panel>
          <Tabs.Panel value="java">
            <CodeHighlight code={javaSnippetIPv4.trim()} language="java" />
          </Tabs.Panel>
          <Tabs.Panel value="php">
            <CodeHighlight code={phpSnippetIPv4.trim()} language="php" />
          </Tabs.Panel>
        </Tabs>
      </Stack>
      
      <Stack gap="lg">
        <Title order={3}>Test Cases</Title>
        <Table striped highlightOnHover withTableBorder withColumnBorders mb="xl">
          <Table.Thead>
            <Table.Tr>
              <Table.Th>IPv4 Address</Table.Th>
              <Table.Th>Valid</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{testCaseRows(testCasesIPv4)}</Table.Tbody>
        </Table>
      </Stack>

      <Stack gap="lg">
        <Title order={2}>IPv6 Address Validation</Title>
        <Text>IPv6 addresses consist of eight groups of four hexadecimal digits separated by colons, with support for compressed notation using &quot;::&quot;.</Text>
        <CodeHighlight
          code={`^(?:[0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}$|^::(?:[0-9a-fA-F]{1,4}:){0,6}[0-9a-fA-F]{1,4}$|^(?:[0-9a-fA-F]{1,4}:){1,6}:$|^(?:[0-9a-fA-F]{1,4}:)(?::[0-9a-fA-F]{1,4}){1,6}$|^(?:[0-9a-fA-F]{1,4}:){2}(?::[0-9a-fA-F]{1,4}){1,5}$|^(?:[0-9a-fA-F]{1,4}:){3}(?::[0-9a-fA-F]{1,4}){1,4}$|^(?:[0-9a-fA-F]{1,4}:){4}(?::[0-9a-fA-F]{1,4}){1,3}$|^(?:[0-9a-fA-F]{1,4}:){5}(?::[0-9a-fA-F]{1,4}){1,2}$|^(?:[0-9a-fA-F]{1,4}:){6}:[0-9a-fA-F]{1,4}$`}
          language="txt"
        />
      </Stack>
      <Stack gap="lg">
        <Title order={3}>Explanation</Title>
        <Text>
          The IPv6 regex pattern is complex due to the various valid compression formats. It includes multiple alternatives to match:
        </Text>
        <List spacing="sm">
          <List.Item>Full format: Eight groups of hex digits separated by colons.</List.Item>
          <List.Item>Compressed format starting with :: (e.g., ::1).</List.Item>
          <List.Item>Compressed format ending with :: (e.g., 2001:db8::).</List.Item>
          <List.Item>Compressed format with :: in the middle (e.g., 2001:db8::8a2e:370:7334).</List.Item>
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
            <CodeHighlight code={jsSnippetIPv6.trim()} language="js" />
          </Tabs.Panel>
          <Tabs.Panel value="python">
            <CodeHighlight code={pySnippetIPv6.trim()} language="py" />
          </Tabs.Panel>
          <Tabs.Panel value="rust">
            <CodeHighlight code={rustSnippetIPv6.trim()} language="rust" />
          </Tabs.Panel>
          <Tabs.Panel value="go">
            <CodeHighlight code={goSnippetIPv6.trim()} language="go" />
          </Tabs.Panel>
          <Tabs.Panel value="swift">
            <CodeHighlight code={swiftSnippetIPv6.trim()} language="swift" />
          </Tabs.Panel>
          <Tabs.Panel value="csharp">
            <CodeHighlight code={csharpSnippetIPv6.trim()} language="csharp" />
          </Tabs.Panel>
          <Tabs.Panel value="java">
            <CodeHighlight code={javaSnippetIPv6.trim()} language="java" />
          </Tabs.Panel>
          <Tabs.Panel value="php">
            <CodeHighlight code={phpSnippetIPv6.trim()} language="php" />
          </Tabs.Panel>
        </Tabs>
      </Stack>
      
      <Stack gap="lg">
        <Title order={3}>Test Cases</Title>
        <Table striped highlightOnHover withTableBorder withColumnBorders mb="xl">
          <Table.Thead>
            <Table.Tr>
              <Table.Th>IPv6 Address</Table.Th>
              <Table.Th>Valid</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{testCaseRows(testCasesIPv6)}</Table.Tbody>
        </Table>
      </Stack>

      <Stack gap="lg">
        <Title order={3}>Notes</Title>
        <List spacing="sm">
          <List.Item>
            For production use, consider using built-in IP address parsing libraries instead of regex for more robust validation.
          </List.Item>
          <List.Item>
            IPv4 addresses with leading zeros (e.g., 192.168.001.001) are accepted by this pattern but may be interpreted as octal in some contexts.
          </List.Item>
          <List.Item>
            The IPv6 pattern does not validate IPv4-mapped IPv6 addresses (e.g., ::ffff:192.0.2.1).
          </List.Item>
          <List.Item>
            Private IP ranges (e.g., 192.168.x.x, 10.x.x.x) are validated for format but not distinguished from public IPs.
          </List.Item>
          <List.Item>
            These patterns validate <strong>format</strong> only and do not check if an IP is reachable or assigned.
          </List.Item>
        </List>
      </Stack>
    </Stack>
  );
};

export default IPAddress;
