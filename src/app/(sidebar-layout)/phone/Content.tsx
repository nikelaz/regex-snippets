"use client";

import { Title, Text, Code, List, Table, Tabs, Anchor, Stack, ThemeIcon } from '@mantine/core';
import {
  IconCheck,
  IconX,
} from '@tabler/icons-react';
import { CodeHighlight } from '@mantine/code-highlight';

const phoneRegex = `^\\+?[1-9]\\d{1,14}$`;

const jsSnippet = `
const phoneRegex = /${phoneRegex}/;
const isValidPhone = (phone) => phoneRegex.test(phone);
`;

const pySnippet = `
import re

def is_valid_phone(phone):
  phoneRegex = r"${phoneRegex}"
  return re.match(phoneRegex, phone) is not None
`;

const rustSnippet = `
use regex::Regex;

fn is_valid_phone(phone: &str) -> bool {
  let phoneRegex = Regex::new("${phoneRegex}")
    .expect("Could not parse phone validation regex");
  phoneRegex.is_match(phone)
}
`;

const goSnippet = `
package main

import (
  "fmt"
  "regexp"
)

func isValidPhone(phone string) bool {
  phoneRegex := "${phoneRegex}"
  re := regexp.MustCompile(phoneRegex)
  return re.MatchString(phone)
}
`;

const swiftSnippet = `
import Foundation

func isValidPhone(_ phone: String) -> Bool {
  let phoneRegex = "${phoneRegex}"
  return NSPredicate(format: "SELF MATCHES %@", phoneRegex).evaluate(with: phone)
}
`;

const csharpSnippet = `
using System;
using System.Text.RegularExpressions;

class Application {
  static bool IsValidPhone(string phone) {
    string phoneRegex = "${phoneRegex}";
    return Regex.IsMatch(phone, phoneRegex);
  }
}
`;

const javaSnippet = `
import java.util.regex.*;

public class Application {
  public static boolean isValidPhone(String phone) {
    String phoneRegex = "${phoneRegex}";
    Pattern pattern = Pattern.compile(phoneRegex);
    Matcher matcher = pattern.matcher(phone);
    return matcher.matches();
  }
}
`;

const phpSnippet = `
<?php
function isValidPhone($phone) {
  $phoneRegex = "${phoneRegex}";
  return (bool) preg_match("/" . $phoneRegex . "/", $phone);
}
?>
`;

const phoneRegexNational = `^\\(?\\d{3}\\)?[-.\\s]?\\d{3}[-.\\s]?\\d{4}$`;

const jsSnippetNational = `const nationalPhoneRegex = /${phoneRegexNational}/;
const isValidPhone = (phone) => nationalPhoneRegex.test(phone);`;

const pythonSnippetNational = `import re

national_phone_regex = r'${phoneRegexNational}'

def is_valid_phone(phone):
    return bool(re.match(national_phone_regex, phone))`;

const rustSnippetNational = `use regex::Regex;

fn is_valid_phone(phone: &str) -> bool {
    let re = Regex::new(r"${phoneRegexNational}").unwrap();
    re.is_match(phone)
}`;

const goSnippetNational = `package main

import (
    "fmt"
    "regexp"
)

func isValidPhone(phone string) bool {
    phoneRegex := "${phoneRegexNational}"
    re := regexp.MustCompile(phoneRegex)
    return re.MatchString(phone)
}`;

const swiftSnippetNational = `import Foundation

func isValidPhone(_ phone: String) -> Bool {
    let phoneRegex = "${phoneRegexNational}"
    return NSPredicate(format: "SELF MATCHES %@", phoneRegex).evaluate(with: phone)
}`;

const csharpSnippetNational = `using System;
using System.Text.RegularExpressions;

class Program {
    static bool IsValidPhone(string phone) {
        return Regex.IsMatch(phone, @"${phoneRegexNational}");
    }
}`;

const javaSnippetNational = `import java.util.regex.*;

public class Application {
    public static boolean isValidPhone(String phone) {
        return Pattern.matches("${phoneRegexNational}", phone);
    }
}`;

const phpSnippetNational = `<?php
function isValidPhone($phone) {
    return (bool) preg_match("/${phoneRegexNational}/", $phone);
}`;

const testCases = [
  { phone: "+12025550123", valid: true },
  { phone: "+441234567890", valid: true },
  { phone: "+33123456789", valid: true },
  { phone: "+861234567890", valid: true },
  { phone: "+61212345678", valid: true },
  { phone: "+81312345678", valid: true },
  { phone: "15551234567", valid: true },
  { phone: "+1", valid: false },
  { phone: "+", valid: false },
  { phone: "", valid: false },
  { phone: "123", valid: false },
  { phone: "+01234567890", valid: false },
  { phone: "+123456789012345678", valid: false },
  { phone: "abc123456789", valid: false },
  { phone: "+1-202-555-0123", valid: false },
  { phone: "(202) 555-0123", valid: false },
  { phone: "202.555.0123", valid: false },
];

const testCasesNational = [
  { phone: "2025550123", valid: true },
  { phone: "(202)5550123", valid: true },
  { phone: "(202) 555-0123", valid: true },
  { phone: "202-555-0123", valid: true },
  { phone: "202.555.0123", valid: true },
  { phone: "202 555 0123", valid: true },
  { phone: "(202)555-0123", valid: true },
  { phone: "+12025550123", valid: false },
  { phone: "123", valid: false },
  { phone: "", valid: false },
  { phone: "12345", valid: false },
  { phone: "(202) 555-012", valid: false },
  { phone: "202-555-012", valid: false },
  { phone: "abc-def-ghij", valid: false },
  { phone: "202-555-01234", valid: false },
];

interface TestCase {
  phone: string;
  valid: boolean;
}

const Phone = () => {
  const testCaseRows = (data: TestCase[]) => data.map((element: TestCase) => (
    <Table.Tr key={element.phone}>
      <Table.Td>{element.phone}</Table.Td>
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
        <Title order={1}>Phone Number Validation Regular Expression</Title>
        <Text>Phone number validation can follow the <Anchor href="https://www.itu.int/rec/T-REC-E.164/" target="_blank" rel="noopener noreferrer" underline="always">E.164 international format</Anchor>, which is the standard for international telephone numbering. E.164 numbers are formatted with a plus sign (+) followed by the country code and subscriber number, with a maximum of 15 digits total.</Text>
      </Stack>
      <Stack gap="lg">
        <Title order={2}>International Format (E.164)</Title>
        <CodeHighlight
          code={`^\\+?[1-9]\\d{1,14}$`}
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
            <Code>{`\\+?`}</Code> - Optional plus sign (+) for international format.
          </List.Item>
          <List.Item>
            <Code>{`[1-9]`}</Code> - First digit must be 1-9 (country codes cannot start with 0).
          </List.Item>
          <List.Item>
            <Code>{`\\d{1,14}`}</Code> - Followed by 1 to 14 additional digits (E.164 allows maximum 15 digits total).
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
              <Table.Th>Phone Number</Table.Th>
              <Table.Th>Valid</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{testCaseRows(testCases)}</Table.Tbody>
        </Table>
      </Stack>

      <Stack gap="lg">
        <Title order={2}>US/National Format</Title>
        <Text>For validating US phone numbers in common national formats with optional parentheses, dashes, dots, or spaces as separators, you can use a more flexible pattern. This validates 10-digit US phone numbers in various formats.</Text>
        <CodeHighlight
          code={`^\\(?\\d{3}\\)?[-.\\s]?\\d{3}[-.\\s]?\\d{4}$`}
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
            <Code>{`\\(?`}</Code> - Optional opening parenthesis.
          </List.Item>
          <List.Item>
            <Code>{`\\d{3}`}</Code> - Exactly three digits (area code).
          </List.Item>
          <List.Item>
            <Code>{`\\)?`}</Code> - Optional closing parenthesis.
          </List.Item>
          <List.Item>
            <Code>{`[-.\\s]?`}</Code> - Optional separator: dash, dot, or space.
          </List.Item>
          <List.Item>
            <Code>{`\\d{3}`}</Code> - Exactly three digits (central office code).
          </List.Item>
          <List.Item>
            <Code>{`[-.\\s]?`}</Code> - Optional separator: dash, dot, or space.
          </List.Item>
          <List.Item>
            <Code>{`\\d{4}`}</Code> - Exactly four digits (line number).
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
            <CodeHighlight code={jsSnippetNational.trim()} language="js" />
          </Tabs.Panel>
          <Tabs.Panel value="python">
            <CodeHighlight code={pythonSnippetNational.trim()} language="py" />
          </Tabs.Panel>
          <Tabs.Panel value="rust">
            <CodeHighlight code={rustSnippetNational.trim()} language="rust" />
          </Tabs.Panel>
          <Tabs.Panel value="go">
            <CodeHighlight code={goSnippetNational.trim()} language="go" />
          </Tabs.Panel>
          <Tabs.Panel value="swift">
            <CodeHighlight code={swiftSnippetNational.trim()} language="swift" />
          </Tabs.Panel>
          <Tabs.Panel value="csharp">
            <CodeHighlight code={csharpSnippetNational.trim()} language="csharp" />
          </Tabs.Panel>
          <Tabs.Panel value="java">
            <CodeHighlight code={javaSnippetNational.trim()} language="java" />
          </Tabs.Panel>
          <Tabs.Panel value="php">
            <CodeHighlight code={phpSnippetNational.trim()} language="php" />
          </Tabs.Panel>
        </Tabs>
      </Stack>

      <Stack gap="lg">
        <Title order={3}>Test Cases</Title>
        <Table striped highlightOnHover withTableBorder withColumnBorders mb="xl">
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Phone Number</Table.Th>
              <Table.Th>Valid</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{testCaseRows(testCasesNational)}</Table.Tbody>
        </Table>
      </Stack>
    </Stack>
  );
};

export default Phone;
