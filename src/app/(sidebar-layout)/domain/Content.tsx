"use client";

import { Title, Text, Code, List, Table, Tabs, Anchor, Stack, ThemeIcon } from '@mantine/core';
import {
  IconCheck,
  IconX,
} from '@tabler/icons-react';
import { CodeHighlight } from '@mantine/code-highlight';

const domainRegex = `^(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\\.)+[a-zA-Z]{2,}$`;

const jsSnippet = `
const domainRegex = /${domainRegex}/;
const isValidDomain = (domain) => domainRegex.test(domain);
`;

const pySnippet = `
import re

def is_valid_domain(domain):
  domainRegex = r"${domainRegex}"
  return re.match(domainRegex, domain) is not None
`;

const rustSnippet = `
use regex::Regex;

fn is_valid_domain(domain: &str) -> bool {
  let domainRegex = Regex::new("${domainRegex}")
    .expect("Could not parse domain validation regex");
  domainRegex.is_match(domain)
}
`;

const goSnippet = `
package main

import (
  "fmt"
  "regexp"
)

func isValidDomain(domain string) bool {
  domainRegex := "${domainRegex}"
  re := regexp.MustCompile(domainRegex)
  return re.MatchString(domain)
}
`;

const swiftSnippet = `
import Foundation

func isValidDomain(_ domain: String) -> Bool {
  let domainRegex = "${domainRegex}"
  return NSPredicate(format: "SELF MATCHES %@", domainRegex).evaluate(with: domain)
}
`;

const csharpSnippet = `
using System;
using System.Text.RegularExpressions;

class Application {
  static bool IsValidDomain(string domain) {
    string domainRegex = "${domainRegex}";
    return Regex.IsMatch(domain, domainRegex);
  }
}
`;

const javaSnippet = `
import java.util.regex.*;

public class Application {
  public static boolean isValidDomain(String domain) {
    String domainRegex = "${domainRegex}";
    Pattern pattern = Pattern.compile(domainRegex);
    Matcher matcher = pattern.matcher(domain);
    return matcher.matches();
  }
}
`;

const phpSnippet = `
<?php
function isValidDomain($domain) {
  $domainRegex = "${domainRegex}";
  return (bool) preg_match("/" . $domainRegex . "/", $domain);
}
?>
`;

const testCases = [
  { domain: "example.com", valid: true },
  { domain: "subdomain.example.com", valid: true },
  { domain: "sub.domain.example.com", valid: true },
  { domain: "example.co.uk", valid: true },
  { domain: "my-site.com", valid: true },
  { domain: "example123.org", valid: true },
  { domain: "test.example.museum", valid: true },
  { domain: "a.b.c.d.example.com", valid: true },
  { domain: "xn--80akhbyknj4f.com", valid: true },
  { domain: "example", valid: false },
  { domain: ".example.com", valid: false },
  { domain: "example.com.", valid: false },
  { domain: "-example.com", valid: false },
  { domain: "example-.com", valid: false },
  { domain: "example..com", valid: false },
  { domain: "example .com", valid: false },
  { domain: "example.c", valid: false },
  { domain: "", valid: false },
  { domain: "example.123", valid: false },
  { domain: "exam ple.com", valid: false },
];

interface TestCase {
  domain: string;
  valid: boolean;
}

const Domain = () => {
  const testCaseRows = (data: TestCase[]) => data.map((element: TestCase, index: number) => (
    <Table.Tr key={`${element.domain}-${index}`}>
      <Table.Td>{element.domain || '(empty string)'}</Table.Td>
      <Table.Td>
        {element.valid ? (
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
        <Title order={1}>Domain Name Validation Regular Expression</Title>
        <Text>
          A valid domain name follows the rules defined in <Anchor href="https://www.rfc-editor.org/rfc/rfc1035" target="_blank" rel="noopener" underline="always">RFC 1035</Anchor> and <Anchor href="https://www.rfc-editor.org/rfc/rfc1123" target="_blank" rel="noopener" underline="always">RFC 1123</Anchor>. 
          Domain names consist of labels separated by dots, where each label can contain letters, numbers, and hyphens (but cannot start or end with a hyphen). 
          The top-level domain (TLD) must be at least 2 characters long and consist of letters only.
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
            For email validation, use the domain part of the email regex pattern as it may have different requirements.
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
        <Table striped highlightOnHover withTableBorder withColumnBorders mb="xl">
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Domain Name</Table.Th>
              <Table.Th>Valid</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{testCaseRows(testCases)}</Table.Tbody>
        </Table>
      </Stack>
    </Stack>
  );
};

export default Domain;
