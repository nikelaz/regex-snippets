"use client";

import { Title, Text, Code, List, Table, Tabs, Stack, ThemeIcon } from '@mantine/core';
import {
  IconCheck,
  IconX,
} from '@tabler/icons-react';
import { CodeHighlight } from '@mantine/code-highlight';

const alphanumericRegex = `^[a-zA-Z0-9]+$`;

const jsSnippet = `
const alphanumericRegex = /${alphanumericRegex}/;
const isValidAlphanumeric = (input) => alphanumericRegex.test(input);
`;

const pySnippet = `
import re

def is_valid_alphanumeric(input):
  alphanumericRegex = r"${alphanumericRegex}"
  return re.match(alphanumericRegex, input) is not None
`;

const rustSnippet = `
use regex::Regex;

fn is_valid_alphanumeric(input: &str) -> bool {
  let alphanumericRegex = Regex::new("${alphanumericRegex}")
    .expect("Could not parse alphanumeric validation regex");
  alphanumericRegex.is_match(input)
}
`;

const goSnippet = `
package main

import (
  "regexp"
)

func isValidAlphanumeric(input string) bool {
  alphanumericRegex := "${alphanumericRegex}"
  re := regexp.MustCompile(alphanumericRegex)
  return re.MatchString(input)
}
`;

const swiftSnippet = `
import Foundation

func isValidAlphanumeric(_ input: String) -> Bool {
  let alphanumericRegex = "${alphanumericRegex}"
  return NSPredicate(format: "SELF MATCHES %@", alphanumericRegex).evaluate(with: input)
}
`;

const csharpSnippet = `
using System;
using System.Text.RegularExpressions;

class Application {
  static bool IsValidAlphanumeric(string input) {
    string alphanumericRegex = "${alphanumericRegex}";
    return Regex.IsMatch(input, alphanumericRegex);
  }
}
`;

const javaSnippet = `
import java.util.regex.*;

public class Application {
  public static boolean isValidAlphanumeric(String input) {
    String alphanumericRegex = "${alphanumericRegex}";
    Pattern pattern = Pattern.compile(alphanumericRegex);
    Matcher matcher = pattern.matcher(input);
    return matcher.matches();
  }
}
`;

const phpSnippet = `
<?php
function isValidAlphanumeric($input) {
  $alphanumericRegex = "${alphanumericRegex}";
  return preg_match("/" . $alphanumericRegex . "/", $input);
}
?>
`;

const alphanumericRegexWithUnderscores = `^[a-zA-Z0-9_]+$`;

const jsSnippetBasic = `const basicAlphanumericRegex = /${alphanumericRegexWithUnderscores}/;
const isValidAlphanumeric = (input) => basicAlphanumericRegex.test(input);`;

const pythonSnippetBasic = `import re

basic_alphanumeric_regex = r'${alphanumericRegexWithUnderscores}'

def is_valid_alphanumeric(input):
    return bool(re.match(basic_alphanumeric_regex, input))`;

const rustSnippetBasic = `use regex::Regex;

fn is_valid_alphanumeric(input: &str) -> bool {
    let re = Regex::new(r"${alphanumericRegexWithUnderscores}").unwrap();
    re.is_match(input)
}`;

const goSnippetBasic = `package main

import (
    "regexp"
)

func isValidAlphanumeric(input string) bool {
    re := regexp.MustCompile(\`${alphanumericRegexWithUnderscores}\`)
    return re.MatchString(input)
}`;

const swiftSnippetBasic = `import Foundation

func isValidAlphanumeric(_ input: String) -> Bool {
    let regex = try! NSRegularExpression(pattern: "${alphanumericRegexWithUnderscores}")
    return regex.firstMatch(in: input, range: NSRange(location: 0, length: input.utf16.count)) != nil
}`;

const csharpSnippetBasic = `using System;
using System.Text.RegularExpressions;

class Program {
    static bool IsValidAlphanumeric(string input) {
        return Regex.IsMatch(input, @"${alphanumericRegexWithUnderscores}");
    }
}`;

const javaSnippetBasic = `import java.util.regex.*;

public class AlphanumericValidator {
    public static boolean isValidAlphanumeric(String input) {
        return Pattern.matches("${alphanumericRegexWithUnderscores}", input);
    }
}`;

const phpSnippetBasic = `<?php
function isValidAlphanumeric($input) {
    return preg_match("/${alphanumericRegexWithUnderscores}/", $input);
}`;

const testCases = [
  { input: "abc123", valid: true },
  { input: "ABC", valid: true },
  { input: "123", valid: true },
  { input: "Test123", valid: true },
  { input: "a1b2c3", valid: true },
  { input: "0", valid: true },
  { input: "Z", valid: true },
  { input: "" , valid: false },
  { input: "abc-123", valid: false },
  { input: "abc_123", valid: false },
  { input: "abc 123", valid: false },
  { input: "abc.123", valid: false },
  { input: "abc@123", valid: false },
  { input: "hello world", valid: false },
  { input: "test!", valid: false },
  { input: "user@domain", valid: false },
  { input: "ñoño", valid: false },
  { input: "café", valid: false },
  { input: "你好", valid: false },
  { input: "привет", valid: false },
];

const testCasesBasic = [
  { input: "abc123", valid: true },
  { input: "ABC", valid: true },
  { input: "123", valid: true },
  { input: "Test123", valid: true },
  { input: "a1b2c3", valid: true },
  { input: "0", valid: true },
  { input: "Z", valid: true },
  { input: "abc_123", valid: true },
  { input: "user_name_123", valid: true },
  { input: "TEST_CONSTANT", valid: true },
  { input: "" , valid: false },
  { input: "abc-123", valid: false },
  { input: "abc 123", valid: false },
  { input: "abc.123", valid: false },
  { input: "abc@123", valid: false },
  { input: "hello world", valid: false },
  { input: "test!", valid: false },
  { input: "user@domain", valid: false },
  { input: "ñoño", valid: false },
  { input: "café", valid: false },
  { input: "你好", valid: false },
  { input: "привет", valid: false },
];

interface TestCase {
  input: string;
  valid: boolean;
}

const Alphanumeric = () => {
  const testCaseRows = (data: TestCase[]) => data.map((element: TestCase) => (
    <Table.Tr key={element.input}>
      <Table.Td>{element.input === "" ? "(empty string)" : element.input}</Table.Td>
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
        <Title order={1}>Alphanumeric Validation Regular Expression</Title>
        <Text>Alphanumeric validation ensures that input contains only letters (A-Z, a-z) and digits (0-9). This is commonly used for usernames, identifiers, product codes, and other fields where only basic ASCII letters and numbers are permitted. The pattern strictly validates ASCII characters and does not support Unicode letters, accented characters, or special symbols.</Text>
      </Stack>
      <Stack gap="lg">
        <Title order={2}>Recommended Solution</Title>
        <CodeHighlight
          code={`^[a-zA-Z0-9]+$`}
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
            <Code>{`[a-zA-Z0-9]+`}</Code> - Matches one or more characters that are either uppercase letters (A-Z), lowercase letters (a-z), or digits (0-9).
          </List.Item>
          <List.Item>
            <Code>{`$`}</Code> - End of the string.
          </List.Item>
        </List>
        <Text size="sm" c="dimmed">
          <strong>Note:</strong> This pattern uses ASCII character ranges and does not support Unicode characters. If you need to support international characters (e.g., ñ, é, 你, Ж), consider using Unicode character classes like <Code>\p{"{L}"}</Code> and <Code>\p{"{N}"}</Code> where supported, or a more permissive pattern.
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
              <Table.Th>Input</Table.Th>
              <Table.Th>Valid</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{testCaseRows(testCases)}</Table.Tbody>
        </Table>
      </Stack>

      <Stack gap="lg">
        <Title order={2}>With Underscores</Title>
        <Text>For cases where you need to allow underscores in addition to letters and numbers (common for programming identifiers, variable names, or database column names), you can use this extended pattern. This is useful for validating usernames, API keys, or any identifier that follows programming language naming conventions.</Text>
        <CodeHighlight
          code={`^[a-zA-Z0-9_]+$`}
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
            <Code>{`[a-zA-Z0-9_]+`}</Code> - Matches one or more characters that are uppercase letters (A-Z), lowercase letters (a-z), digits (0-9), or underscores (_).
          </List.Item>
          <List.Item>
            <Code>{`$`}</Code> - End of the string.
          </List.Item>
        </List>
        <Text size="sm" c="dimmed">
          <strong>Alternative:</strong> You can also use the shorthand <Code>\w</Code> which is equivalent to <Code>[a-zA-Z0-9_]</Code> in most regex flavors, making the pattern <Code>^\w+$</Code>. However, be aware that in some environments (like JavaScript with Unicode flag), <Code>\w</Code> may match additional Unicode characters.
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
            <CodeHighlight code={jsSnippetBasic.trim()} language="js" />
          </Tabs.Panel>
          <Tabs.Panel value="python">
            <CodeHighlight code={pythonSnippetBasic.trim()} language="py" />
          </Tabs.Panel>
          <Tabs.Panel value="rust">
            <CodeHighlight code={rustSnippetBasic.trim()} language="rust" />
          </Tabs.Panel>
          <Tabs.Panel value="go">
            <CodeHighlight code={goSnippetBasic.trim()} language="go" />
          </Tabs.Panel>
          <Tabs.Panel value="swift">
            <CodeHighlight code={swiftSnippetBasic.trim()} language="swift" />
          </Tabs.Panel>
          <Tabs.Panel value="csharp">
            <CodeHighlight code={csharpSnippetBasic.trim()} language="csharp" />
          </Tabs.Panel>
          <Tabs.Panel value="java">
            <CodeHighlight code={javaSnippetBasic.trim()} language="java" />
          </Tabs.Panel>
          <Tabs.Panel value="php">
            <CodeHighlight code={phpSnippetBasic.trim()} language="php" />
          </Tabs.Panel>
        </Tabs>
      </Stack>

      <Stack gap="lg">
        <Title order={3}>Test Cases</Title>
        <Table striped highlightOnHover withTableBorder withColumnBorders mb="xl">
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Input</Table.Th>
              <Table.Th>Valid</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{testCaseRows(testCasesBasic)}</Table.Tbody>
        </Table>
      </Stack>      
     </Stack>
  );
};

export default Alphanumeric;
