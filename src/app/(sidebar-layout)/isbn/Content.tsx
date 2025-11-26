"use client";

import { Title, Text, Code, List, Table, Tabs, Anchor, Stack, ThemeIcon } from '@mantine/core';
import {
  IconCheck,
  IconX,
} from '@tabler/icons-react';
import { CodeHighlight } from '@mantine/code-highlight';

const isbn10Regex = `^(?:\\d{9}X|\\d{10})$`;
const isbn13Regex = `^97[89]\\d{10}$`;

const jsSnippet = `
const isbn10Regex = /${isbn10Regex}/;
const isValidISBN10 = (isbn) => isbn10Regex.test(isbn);
`;

const pySnippet = `
import re

def is_valid_isbn10(isbn):
  isbn10Regex = r"${isbn10Regex}"
  return re.match(isbn10Regex, isbn) is not None
`;

const rustSnippet = `
use regex::Regex;

fn is_valid_isbn10(isbn: &str) -> bool {
  let isbn10Regex = Regex::new("${isbn10Regex}")
    .expect("Could not parse ISBN-10 validation regex");
  isbn10Regex.is_match(isbn)
}
`;

const goSnippet = `
package main

import (
  "regexp"
)

func isValidISBN10(isbn string) bool {
  isbn10Regex := "${isbn10Regex}"
  re := regexp.MustCompile(isbn10Regex)
  return re.MatchString(isbn)
}
`;

const swiftSnippet = `
import Foundation

func isValidISBN10(_ isbn: String) -> Bool {
  let isbn10Regex = "${isbn10Regex}"
  return NSPredicate(format: "SELF MATCHES %@", isbn10Regex).evaluate(with: isbn)
}
`;

const csharpSnippet = `
using System;
using System.Text.RegularExpressions;

class Application {
  static bool IsValidISBN10(string isbn) {
    string isbn10Regex = "${isbn10Regex}";
    return Regex.IsMatch(isbn, isbn10Regex);
  }
}
`;

const javaSnippet = `
import java.util.regex.*;

public class Application {
  public static boolean isValidISBN10(String isbn) {
    String isbn10Regex = "${isbn10Regex}";
    Pattern pattern = Pattern.compile(isbn10Regex);
    Matcher matcher = pattern.matcher(isbn);
    return matcher.matches();
  }
}
`;

const phpSnippet = `
<?php
function isValidISBN10($isbn) {
  $isbn10Regex = "${isbn10Regex}";
  return preg_match("/" . $isbn10Regex . "/", $isbn);
}
?>
`;

const jsSnippetISBN13 = `
const isbn13Regex = /${isbn13Regex}/;
const isValidISBN13 = (isbn) => isbn13Regex.test(isbn);
`;

const pySnippetISBN13 = `
import re

def is_valid_isbn13(isbn):
  isbn13Regex = r"${isbn13Regex}"
  return re.match(isbn13Regex, isbn) is not None
`;

const rustSnippetISBN13 = `
use regex::Regex;

fn is_valid_isbn13(isbn: &str) -> bool {
  let isbn13Regex = Regex::new("${isbn13Regex}")
    .expect("Could not parse ISBN-13 validation regex");
  isbn13Regex.is_match(isbn)
}
`;

const goSnippetISBN13 = `
package main

import (
  "regexp"
)

func isValidISBN13(isbn string) bool {
  isbn13Regex := "${isbn13Regex}"
  re := regexp.MustCompile(isbn13Regex)
  return re.MatchString(isbn)
}
`;

const swiftSnippetISBN13 = `
import Foundation

func isValidISBN13(_ isbn: String) -> Bool {
  let isbn13Regex = "${isbn13Regex}"
  return NSPredicate(format: "SELF MATCHES %@", isbn13Regex).evaluate(with: isbn)
}
`;

const csharpSnippetISBN13 = `
using System;
using System.Text.RegularExpressions;

class Application {
  static bool IsValidISBN13(string isbn) {
    string isbn13Regex = "${isbn13Regex}";
    return Regex.IsMatch(isbn, isbn13Regex);
  }
}
`;

const javaSnippetISBN13 = `
import java.util.regex.*;

public class Application {
  public static boolean isValidISBN13(String isbn) {
    String isbn13Regex = "${isbn13Regex}";
    Pattern pattern = Pattern.compile(isbn13Regex);
    Matcher matcher = pattern.matcher(isbn);
    return matcher.matches();
  }
}
`;

const phpSnippetISBN13 = `
<?php
function isValidISBN13($isbn) {
  $isbn13Regex = "${isbn13Regex}";
  return preg_match("/" . $isbn13Regex . "/", $isbn);
}
?>
`;

const testCasesISBN10 = [
  { isbn: "0306406152", valid: true },
  { isbn: "0345391802", valid: true },
  { isbn: "043942089X", valid: true },
  { isbn: "156619909X", valid: true },
  { isbn: "0471958697", valid: true },
  { isbn: "12345", valid: false },
  { isbn: "123456789", valid: false },
  { isbn: "12345678901", valid: false },
  { isbn: "123456789A", valid: false },
  { isbn: "X123456789", valid: false },
  { isbn: "12345X6789", valid: false },
  { isbn: "", valid: false },
  { isbn: "abcdefghij", valid: false },
];

const testCasesISBN13 = [
  { isbn: "9780306406157", valid: true },
  { isbn: "9780345391803", valid: true },
  { isbn: "9780439420891", valid: true },
  { isbn: "9781566199094", valid: true },
  { isbn: "9780471958697", valid: true },
  { isbn: "978030640615", valid: false },
  { isbn: "97803064061578", valid: false },
  { isbn: "9770306406157", valid: false },
  { isbn: "9880306406157", valid: false },
  { isbn: "123456789012", valid: false },
  { isbn: "978-0-306-40615-7", valid: false },
  { isbn: "", valid: false },
  { isbn: "abcdefghijklm", valid: false },
];

interface TestCase {
  isbn: string;
  valid: boolean;
}

const ISBN = () => {
  const testCaseRows = (data: TestCase[]) => data.map((element: TestCase) => (
    <Table.Tr key={element.isbn}>
      <Table.Td>{element.isbn}</Table.Td>
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
        <Title order={1}>ISBN Validation Regular Expression</Title>
        <Text>An ISBN (International Standard Book Number) is a unique identifier for books. There are two formats: ISBN-10 (10 digits, with the last digit potentially being X) and ISBN-13 (13 digits starting with 978 or 979). These regular expressions validate the format of ISBN numbers without hyphens or spaces. ISBNs are a specialized type of <Anchor href="/numbers" underline="always">number pattern</Anchor>.</Text>
      </Stack>
      <Stack gap="lg">
        <Title order={2}>ISBN-10 Validation</Title>
        <Text>ISBN-10 consists of 10 digits where the last digit can be X (representing 10). This format was used before 2007 and is still found on older books.</Text>
        <CodeHighlight
          code={`^(?:\\d{9}X|\\d{10})$`}
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
            <Code>{`(?:...)`}</Code> - Non-capturing group containing two alternatives.
          </List.Item>
          <List.Item>
            <Code>{`\\d{9}X`}</Code> - Nine digits followed by the letter X (uppercase).
          </List.Item>
          <List.Item>
            <Code>{`|`}</Code> - Or operator separating the two alternatives.
          </List.Item>
          <List.Item>
            <Code>{`\\d{10}`}</Code> - Exactly 10 digits.
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
              <Table.Th>ISBN-10</Table.Th>
              <Table.Th>Valid</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{testCaseRows(testCasesISBN10)}</Table.Tbody>
        </Table>
      </Stack>

      <Stack gap="lg">
        <Title order={2}>ISBN-13 Validation</Title>
        <Text>ISBN-13 consists of 13 digits and always starts with either 978 or 979. This format has been the standard since 2007 and is used for all new book publications.</Text>
        <CodeHighlight
          code={`^97[89]\\d{10}$`}
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
            <Code>{`97`}</Code> - The ISBN-13 prefix always starts with 97.
          </List.Item>
          <List.Item>
            <Code>{`[89]`}</Code> - The third digit must be either 8 or 9 (forming 978 or 979).
          </List.Item>
          <List.Item>
            <Code>{`\\d{10}`}</Code> - Exactly 10 more digits to complete the 13-digit ISBN.
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
            <CodeHighlight code={jsSnippetISBN13.trim()} language="js" />
          </Tabs.Panel>
          <Tabs.Panel value="python">
            <CodeHighlight code={pySnippetISBN13.trim()} language="py" />
          </Tabs.Panel>
          <Tabs.Panel value="rust">
            <CodeHighlight code={rustSnippetISBN13.trim()} language="rust" />
          </Tabs.Panel>
          <Tabs.Panel value="go">
            <CodeHighlight code={goSnippetISBN13.trim()} language="go" />
          </Tabs.Panel>
          <Tabs.Panel value="swift">
            <CodeHighlight code={swiftSnippetISBN13.trim()} language="swift" />
          </Tabs.Panel>
          <Tabs.Panel value="csharp">
            <CodeHighlight code={csharpSnippetISBN13.trim()} language="csharp" />
          </Tabs.Panel>
          <Tabs.Panel value="java">
            <CodeHighlight code={javaSnippetISBN13.trim()} language="java" />
          </Tabs.Panel>
          <Tabs.Panel value="php">
            <CodeHighlight code={phpSnippetISBN13.trim()} language="php" />
          </Tabs.Panel>
        </Tabs>
      </Stack>

      <Stack gap="lg">
        <Title order={3}>Test Cases</Title>
        <Table striped highlightOnHover withTableBorder withColumnBorders mb="xl">
          <Table.Thead>
            <Table.Tr>
              <Table.Th>ISBN-13</Table.Th>
              <Table.Th>Valid</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{testCaseRows(testCasesISBN13)}</Table.Tbody>
        </Table>
      </Stack>

      <Stack gap="lg">
        <Title order={2}>Note</Title>
        <Text>These regular expressions only validate the format of ISBN numbers. For complete validation, you should also verify the check digit using the appropriate algorithm. ISBN-10 uses modulo 11, while ISBN-13 uses modulo 10. Additionally, ISBNs are often formatted with hyphens (e.g., 978-0-306-40615-7), but these patterns match only the raw numeric format without separators.</Text>
      </Stack>
     </Stack>
  );
};

export default ISBN;
