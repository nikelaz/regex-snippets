"use client";

import { Title, Text, Code, List, Table, Tabs, Stack, ThemeIcon } from '@mantine/core';
import {
  IconCheck,
  IconX,
} from '@tabler/icons-react';
import { CodeHighlight } from '@mantine/code-highlight';

const lengthRangeRegex = `^.{8,32}$`;
const minLengthRegex = `^.{8,}$`;
const maxLengthRegex = `^.{0,32}$`;

const jsSnippet = `
const lengthRangeRegex = /${lengthRangeRegex}/;
const isValidLength = (text) => lengthRangeRegex.test(text);
`;

const pySnippet = `
import re

def is_valid_length(text):
  lengthRangeRegex = r"${lengthRangeRegex}"
  return re.match(lengthRangeRegex, text) is not None
`;

const rustSnippet = `
use regex::Regex;

fn is_valid_length(text: &str) -> bool {
  let lengthRangeRegex = Regex::new("${lengthRangeRegex}")
    .expect("Could not parse length validation regex");
  lengthRangeRegex.is_match(text)
}
`;

const goSnippet = `
package main

import (
  "regexp"
)

func isValidLength(text string) bool {
  lengthRangeRegex := "${lengthRangeRegex}"
  re := regexp.MustCompile(lengthRangeRegex)
  return re.MatchString(text)
}
`;

const swiftSnippet = `
import Foundation

func isValidLength(_ text: String) -> Bool {
  let lengthRangeRegex = "${lengthRangeRegex}"
  return NSPredicate(format: "SELF MATCHES %@", lengthRangeRegex).evaluate(with: text)
}
`;

const csharpSnippet = `
using System;
using System.Text.RegularExpressions;

class Application {
  static bool IsValidLength(string text) {
    string lengthRangeRegex = "${lengthRangeRegex}";
    return Regex.IsMatch(text, lengthRangeRegex);
  }
}
`;

const javaSnippet = `
import java.util.regex.*;

public class Application {
  public static boolean isValidLength(String text) {
    String lengthRangeRegex = "${lengthRangeRegex}";
    Pattern pattern = Pattern.compile(lengthRangeRegex);
    Matcher matcher = pattern.matcher(text);
    return matcher.matches();
  }
}
`;

const phpSnippet = `
<?php
function isValidLength($text) {
  $lengthRangeRegex = "${lengthRangeRegex}";
  return preg_match("/" . $lengthRangeRegex . "/", $text);
}
?>
`;

const jsSnippetMin = `
const minLengthRegex = /${minLengthRegex}/;
const isValidMinLength = (text) => minLengthRegex.test(text);
`;

const pySnippetMin = `
import re

def is_valid_min_length(text):
  minLengthRegex = r"${minLengthRegex}"
  return re.match(minLengthRegex, text) is not None
`;

const rustSnippetMin = `
use regex::Regex;

fn is_valid_min_length(text: &str) -> bool {
  let minLengthRegex = Regex::new("${minLengthRegex}")
    .expect("Could not parse min length validation regex");
  minLengthRegex.is_match(text)
}
`;

const goSnippetMin = `
package main

import (
  "regexp"
)

func isValidMinLength(text string) bool {
  minLengthRegex := "${minLengthRegex}"
  re := regexp.MustCompile(minLengthRegex)
  return re.MatchString(text)
}
`;

const swiftSnippetMin = `
import Foundation

func isValidMinLength(_ text: String) -> Bool {
  let minLengthRegex = "${minLengthRegex}"
  return NSPredicate(format: "SELF MATCHES %@", minLengthRegex).evaluate(with: text)
}
`;

const csharpSnippetMin = `
using System;
using System.Text.RegularExpressions;

class Application {
  static bool IsValidMinLength(string text) {
    string minLengthRegex = "${minLengthRegex}";
    return Regex.IsMatch(text, minLengthRegex);
  }
}
`;

const javaSnippetMin = `
import java.util.regex.*;

public class Application {
  public static boolean isValidMinLength(String text) {
    String minLengthRegex = "${minLengthRegex}";
    Pattern pattern = Pattern.compile(minLengthRegex);
    Matcher matcher = pattern.matcher(text);
    return matcher.matches();
  }
}
`;

const phpSnippetMin = `
<?php
function isValidMinLength($text) {
  $minLengthRegex = "${minLengthRegex}";
  return preg_match("/" . $minLengthRegex . "/", $text);
}
?>
`;

const jsSnippetMax = `
const maxLengthRegex = /${maxLengthRegex}/;
const isValidMaxLength = (text) => maxLengthRegex.test(text);
`;

const pySnippetMax = `
import re

def is_valid_max_length(text):
  maxLengthRegex = r"${maxLengthRegex}"
  return re.match(maxLengthRegex, text) is not None
`;

const rustSnippetMax = `
use regex::Regex;

fn is_valid_max_length(text: &str) -> bool {
  let maxLengthRegex = Regex::new("${maxLengthRegex}")
    .expect("Could not parse max length validation regex");
  maxLengthRegex.is_match(text)
}
`;

const goSnippetMax = `
package main

import (
  "regexp"
)

func isValidMaxLength(text string) bool {
  maxLengthRegex := "${maxLengthRegex}"
  re := regexp.MustCompile(maxLengthRegex)
  return re.MatchString(text)
}
`;

const swiftSnippetMax = `
import Foundation

func isValidMaxLength(_ text: String) -> Bool {
  let maxLengthRegex = "${maxLengthRegex}"
  return NSPredicate(format: "SELF MATCHES %@", maxLengthRegex).evaluate(with: text)
}
`;

const csharpSnippetMax = `
using System;
using System.Text.RegularExpressions;

class Application {
  static bool IsValidMaxLength(string text) {
    string maxLengthRegex = "${maxLengthRegex}";
    return Regex.IsMatch(text, maxLengthRegex);
  }
}
`;

const javaSnippetMax = `
import java.util.regex.*;

public class Application {
  public static boolean isValidMaxLength(String text) {
    String maxLengthRegex = "${maxLengthRegex}";
    Pattern pattern = Pattern.compile(maxLengthRegex);
    Matcher matcher = pattern.matcher(text);
    return matcher.matches();
  }
}
`;

const phpSnippetMax = `
<?php
function isValidMaxLength($text) {
  $maxLengthRegex = "${maxLengthRegex}";
  return preg_match("/" . $maxLengthRegex . "/", $text);
}
?>
`;

interface TestCase {
  text: string;
  valid: boolean;
}

const testCasesRange: TestCase[] = [
  { text: "12345678", valid: true },
  { text: "abcdefgh", valid: true },
  { text: "Test1234", valid: true },
  { text: "A1B2C3D4E5F6G7H8", valid: true },
  { text: "12345678901234567890123456789012", valid: true },
  { text: "1234567", valid: false },
  { text: "abc", valid: false },
  { text: "", valid: false },
  { text: "123456789012345678901234567890123", valid: false },
  { text: "This is a very long text that exceeds the maximum allowed length", valid: false },
];

const testCasesMin: TestCase[] = [
  { text: "12345678", valid: true },
  { text: "abcdefgh", valid: true },
  { text: "Test1234", valid: true },
  { text: "A very long text that is definitely more than 8 characters", valid: true },
  { text: "12345678901234567890123456789012345678901234567890", valid: true },
  { text: "1234567", valid: false },
  { text: "abc", valid: false },
  { text: "", valid: false },
  { text: "short", valid: false },
];

const testCasesMax: TestCase[] = [
  { text: "", valid: true },
  { text: "a", valid: true },
  { text: "12345678", valid: true },
  { text: "Test1234", valid: true },
  { text: "12345678901234567890123456789012", valid: true },
  { text: "123456789012345678901234567890123", valid: false },
  { text: "This is a very long text that exceeds the maximum allowed length", valid: false },
  { text: "A very long text with more than thirty-two characters in total", valid: false },
];

const TextLength = () => {
  const testCaseRows = (data: TestCase[]) => data.map((element: TestCase) => (
    <Table.Tr key={element.text || 'empty'}>
      <Table.Td>{element.text || '(empty string)'}</Table.Td>
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
        <Title order={1}>Text Length Validation Regular Expression</Title>
        <Text>Text length validation is a common requirement in forms and data validation. Regular expressions provide a concise way to enforce minimum length, maximum length, or a specific length range for text input. This is particularly useful for passwords, usernames, comments, and other user-generated content.</Text>
      </Stack>
      <Stack gap="lg">
        <Title order={2}>Length Range Validation (8-32 characters)</Title>
        <Text>This pattern validates that text is between 8 and 32 characters in length, inclusive. This is commonly used for passwords, usernames, and other fields where both minimum and maximum lengths are required.</Text>
        <CodeHighlight
          code={`^.{8,32}$`}
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
            <Code>{`.`}</Code> - Matches any character (except newline by default).
          </List.Item>
          <List.Item>
            <Code>{`{8,32}`}</Code> - Quantifier that specifies the preceding pattern must occur between 8 and 32 times (inclusive).
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
              <Table.Th>Text</Table.Th>
              <Table.Th>Valid</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{testCaseRows(testCasesRange)}</Table.Tbody>
        </Table>
      </Stack>

      <Stack gap="lg">
        <Title order={2}>Minimum Length Validation (8+ characters)</Title>
        <Text>This pattern validates that text has a minimum of 8 characters with no upper limit. This is useful for password fields where you want to enforce a minimum security requirement without limiting maximum length.</Text>
        <CodeHighlight
          code={`^.{8,}$`}
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
            <Code>{`.`}</Code> - Matches any character (except newline by default).
          </List.Item>
          <List.Item>
            <Code>{`{8,}`}</Code> - Quantifier that specifies the preceding pattern must occur at least 8 times with no upper limit.
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
            <CodeHighlight code={jsSnippetMin.trim()} language="js" />
          </Tabs.Panel>
          <Tabs.Panel value="python">
            <CodeHighlight code={pySnippetMin.trim()} language="py" />
          </Tabs.Panel>
          <Tabs.Panel value="rust">
            <CodeHighlight code={rustSnippetMin.trim()} language="rust" />
          </Tabs.Panel>
          <Tabs.Panel value="go">
            <CodeHighlight code={goSnippetMin.trim()} language="go" />
          </Tabs.Panel>
          <Tabs.Panel value="swift">
            <CodeHighlight code={swiftSnippetMin.trim()} language="swift" />
          </Tabs.Panel>
          <Tabs.Panel value="csharp">
            <CodeHighlight code={csharpSnippetMin.trim()} language="csharp" />
          </Tabs.Panel>
          <Tabs.Panel value="java">
            <CodeHighlight code={javaSnippetMin.trim()} language="java" />
          </Tabs.Panel>
          <Tabs.Panel value="php">
            <CodeHighlight code={phpSnippetMin.trim()} language="php" />
          </Tabs.Panel>
        </Tabs>
      </Stack>

      <Stack gap="lg">
        <Title order={3}>Test Cases</Title>
        <Table striped highlightOnHover withTableBorder withColumnBorders mb="xl">
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Text</Table.Th>
              <Table.Th>Valid</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{testCaseRows(testCasesMin)}</Table.Tbody>
        </Table>
      </Stack>

      <Stack gap="lg">
        <Title order={2}>Maximum Length Validation (0-32 characters)</Title>
        <Text>This pattern validates that text does not exceed 32 characters. It allows any length from 0 (empty string) up to 32 characters. This is useful for fields like titles, short descriptions, or comments where you want to limit verbosity.</Text>
        <CodeHighlight
          code={`^.{0,32}$`}
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
            <Code>{`.`}</Code> - Matches any character (except newline by default).
          </List.Item>
          <List.Item>
            <Code>{`{0,32}`}</Code> - Quantifier that specifies the preceding pattern can occur from 0 to 32 times (inclusive).
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
            <CodeHighlight code={jsSnippetMax.trim()} language="js" />
          </Tabs.Panel>
          <Tabs.Panel value="python">
            <CodeHighlight code={pySnippetMax.trim()} language="py" />
          </Tabs.Panel>
          <Tabs.Panel value="rust">
            <CodeHighlight code={rustSnippetMax.trim()} language="rust" />
          </Tabs.Panel>
          <Tabs.Panel value="go">
            <CodeHighlight code={goSnippetMax.trim()} language="go" />
          </Tabs.Panel>
          <Tabs.Panel value="swift">
            <CodeHighlight code={swiftSnippetMax.trim()} language="swift" />
          </Tabs.Panel>
          <Tabs.Panel value="csharp">
            <CodeHighlight code={csharpSnippetMax.trim()} language="csharp" />
          </Tabs.Panel>
          <Tabs.Panel value="java">
            <CodeHighlight code={javaSnippetMax.trim()} language="java" />
          </Tabs.Panel>
          <Tabs.Panel value="php">
            <CodeHighlight code={phpSnippetMax.trim()} language="php" />
          </Tabs.Panel>
        </Tabs>
      </Stack>

      <Stack gap="lg">
        <Title order={3}>Test Cases</Title>
        <Table striped highlightOnHover withTableBorder withColumnBorders mb="xl">
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Text</Table.Th>
              <Table.Th>Valid</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{testCaseRows(testCasesMax)}</Table.Tbody>
        </Table>
      </Stack>
     </Stack>
  );
};

export default TextLength;
