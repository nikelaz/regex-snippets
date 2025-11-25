"use client";

import { Title, Text, Code, List, Table, Tabs, Anchor, Stack, ThemeIcon } from '@mantine/core';
import {
  IconCheck,
  IconX,
} from '@tabler/icons-react';
import { CodeHighlight } from '@mantine/code-highlight';

const integerRegex = `^-?\\d+$`;
const decimalRegex = `^-?\\d+(\\.\\d+)?$`;
const positiveIntegerRegex = `^\\d+$`;
const positiveDecimalRegex = `^\\d+(\\.\\d+)?$`;

const jsSnippetInteger = `
const integerRegex = /${integerRegex}/;
const isValidInteger = (number) => integerRegex.test(number);
`;

const pySnippetInteger = `
import re

def is_valid_integer(number):
  integerRegex = r"${integerRegex}"
  return re.match(integerRegex, number) is not None
`;

const rustSnippetInteger = `
use regex::Regex;

fn is_valid_integer(number: &str) -> bool {
  let integerRegex = Regex::new("${integerRegex}")
    .expect("Could not parse integer validation regex");
  integerRegex.is_match(number)
}
`;

const goSnippetInteger = `
package main

import (
  "fmt"
  "regexp"
)

func isValidInteger(number string) bool {
  integerRegex := "${integerRegex}"
  re := regexp.MustCompile(integerRegex)
  return re.MatchString(number)
}
`;

const swiftSnippetInteger = `
import Foundation

func isValidInteger(_ number: String) -> Bool {
  let integerRegex = "${integerRegex}"
  return NSPredicate(format: "SELF MATCHES %@", integerRegex).evaluate(with: number)
}
`;

const csharpSnippetInteger = `
using System;
using System.Text.RegularExpressions;

class Application {
  static bool IsValidInteger(string number) {
    string integerRegex = "${integerRegex}";
    return Regex.IsMatch(number, integerRegex);
  }
}
`;

const javaSnippetInteger = `
import java.util.regex.*;

public class Application {
  public static boolean isValidInteger(String number) {
    String integerRegex = "${integerRegex}";
    Pattern pattern = Pattern.compile(integerRegex);
    Matcher matcher = pattern.matcher(number);
    return matcher.matches();
  }
}
`;

const phpSnippetInteger = `
<?php
function isValidInteger($number) {
  $integerRegex = "${integerRegex}";
  return (bool) preg_match("/" . $integerRegex . "/", $number);
}
?>
`;

const jsSnippetDecimal = `
const decimalRegex = /${decimalRegex}/;
const isValidDecimal = (number) => decimalRegex.test(number);
`;

const pySnippetDecimal = `
import re

def is_valid_decimal(number):
  decimalRegex = r"${decimalRegex}"
  return re.match(decimalRegex, number) is not None
`;

const rustSnippetDecimal = `
use regex::Regex;

fn is_valid_decimal(number: &str) -> bool {
  let decimalRegex = Regex::new("${decimalRegex}")
    .expect("Could not parse decimal validation regex");
  decimalRegex.is_match(number)
}
`;

const goSnippetDecimal = `
package main

import (
  "fmt"
  "regexp"
)

func isValidDecimal(number string) bool {
  decimalRegex := "${decimalRegex}"
  re := regexp.MustCompile(decimalRegex)
  return re.MatchString(number)
}
`;

const swiftSnippetDecimal = `
import Foundation

func isValidDecimal(_ number: String) -> Bool {
  let decimalRegex = "${decimalRegex}"
  return NSPredicate(format: "SELF MATCHES %@", decimalRegex).evaluate(with: number)
}
`;

const csharpSnippetDecimal = `
using System;
using System.Text.RegularExpressions;

class Application {
  static bool IsValidDecimal(string number) {
    string decimalRegex = "${decimalRegex}";
    return Regex.IsMatch(number, decimalRegex);
  }
}
`;

const javaSnippetDecimal = `
import java.util.regex.*;

public class Application {
  public static boolean isValidDecimal(String number) {
    String decimalRegex = "${decimalRegex}";
    Pattern pattern = Pattern.compile(decimalRegex);
    Matcher matcher = pattern.matcher(number);
    return matcher.matches();
  }
}
`;

const phpSnippetDecimal = `
<?php
function isValidDecimal($number) {
  $decimalRegex = "${decimalRegex}";
  return (bool) preg_match("/" . $decimalRegex . "/", $number);
}
?>
`;

const testCasesInteger = [
  { number: "123", valid: true },
  { number: "-456", valid: true },
  { number: "0", valid: true },
  { number: "-0", valid: true },
  { number: "1000000", valid: true },
  { number: "12.34", valid: false },
  { number: "12.0", valid: false },
  { number: "abc", valid: false },
  { number: "12a", valid: false },
  { number: "", valid: false },
  { number: "+123", valid: false },
  { number: "1,234", valid: false },
  { number: "1 234", valid: false },
  { number: "--123", valid: false },
];

const testCasesDecimal = [
  { number: "123", valid: true },
  { number: "123.45", valid: true },
  { number: "-456", valid: true },
  { number: "-456.78", valid: true },
  { number: "0", valid: true },
  { number: "0.0", valid: true },
  { number: "-0.5", valid: true },
  { number: "1000000.999", valid: true },
  { number: "abc", valid: false },
  { number: "12a", valid: false },
  { number: "", valid: false },
  { number: "+123.45", valid: false },
  { number: "1,234.56", valid: false },
  { number: "1 234.56", valid: false },
  { number: ".5", valid: false },
  { number: "123.", valid: false },
  { number: "12.34.56", valid: false },
];

interface TestCase {
  number: string;
  valid: boolean;
}

const Numbers = () => {
  const testCaseRows = (data: TestCase[]) => data.map((element: TestCase, index: number) => (
    <Table.Tr key={`${element.number}-${index}`}>
      <Table.Td>{element.number || '(empty string)'}</Table.Td>
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
        <Title order={1}>Number Validation Regular Expressions</Title>
        <Text>
          Numbers can be validated in various formats including integers, decimals, and floating-point numbers. 
          These regex patterns provide validation for common number formats, supporting both positive and negative values.
        </Text>
      </Stack>

      <Stack gap="lg">
        <Title order={2}>Integer Numbers</Title>
        <Text>Validates whole numbers, both positive and negative, without decimal points.</Text>
        <CodeHighlight
          code={`^-?\\d+$`}
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
            <Code>{`-?`}</Code> - Optional minus sign for negative numbers.
          </List.Item>
          <List.Item>
            <Code>{`\\d+`}</Code> - One or more digits.
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
            <CodeHighlight code={jsSnippetInteger.trim()} language="js" />
          </Tabs.Panel>
          <Tabs.Panel value="python">
            <CodeHighlight code={pySnippetInteger.trim()} language="py" />
          </Tabs.Panel>
          <Tabs.Panel value="rust">
            <CodeHighlight code={rustSnippetInteger.trim()} language="rust" />
          </Tabs.Panel>
          <Tabs.Panel value="go">
            <CodeHighlight code={goSnippetInteger.trim()} language="go" />
          </Tabs.Panel>
          <Tabs.Panel value="swift">
            <CodeHighlight code={swiftSnippetInteger.trim()} language="swift" />
          </Tabs.Panel>
          <Tabs.Panel value="csharp">
            <CodeHighlight code={csharpSnippetInteger.trim()} language="csharp" />
          </Tabs.Panel>
          <Tabs.Panel value="java">
            <CodeHighlight code={javaSnippetInteger.trim()} language="java" />
          </Tabs.Panel>
          <Tabs.Panel value="php">
            <CodeHighlight code={phpSnippetInteger.trim()} language="php" />
          </Tabs.Panel>
        </Tabs>
      </Stack>
      
      <Stack gap="lg">
        <Title order={3}>Test Cases</Title>
        <Table striped highlightOnHover withTableBorder withColumnBorders mb="xl">
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Number</Table.Th>
              <Table.Th>Valid</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{testCaseRows(testCasesInteger)}</Table.Tbody>
        </Table>
      </Stack>

      <Stack gap="lg">
        <Title order={2}>Decimal Numbers</Title>
        <Text>Validates decimal numbers with optional fractional parts, both positive and negative.</Text>
        <CodeHighlight
          code={`^-?\\d+(\\.\\d+)?$`}
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
            <Code>{`-?`}</Code> - Optional minus sign for negative numbers.
          </List.Item>
          <List.Item>
            <Code>{`\\d+`}</Code> - One or more digits before the decimal point.
          </List.Item>
          <List.Item>
            <Code>{`(\\.\\d+)?`}</Code> - Optional decimal part: a dot followed by one or more digits.
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
            <CodeHighlight code={jsSnippetDecimal.trim()} language="js" />
          </Tabs.Panel>
          <Tabs.Panel value="python">
            <CodeHighlight code={pySnippetDecimal.trim()} language="py" />
          </Tabs.Panel>
          <Tabs.Panel value="rust">
            <CodeHighlight code={rustSnippetDecimal.trim()} language="rust" />
          </Tabs.Panel>
          <Tabs.Panel value="go">
            <CodeHighlight code={goSnippetDecimal.trim()} language="go" />
          </Tabs.Panel>
          <Tabs.Panel value="swift">
            <CodeHighlight code={swiftSnippetDecimal.trim()} language="swift" />
          </Tabs.Panel>
          <Tabs.Panel value="csharp">
            <CodeHighlight code={csharpSnippetDecimal.trim()} language="csharp" />
          </Tabs.Panel>
          <Tabs.Panel value="java">
            <CodeHighlight code={javaSnippetDecimal.trim()} language="java" />
          </Tabs.Panel>
          <Tabs.Panel value="php">
            <CodeHighlight code={phpSnippetDecimal.trim()} language="php" />
          </Tabs.Panel>
        </Tabs>
      </Stack>
      
      <Stack gap="lg">
        <Title order={3}>Test Cases</Title>
        <Table striped highlightOnHover withTableBorder withColumnBorders mb="xl">
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Number</Table.Th>
              <Table.Th>Valid</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{testCaseRows(testCasesDecimal)}</Table.Tbody>
        </Table>
      </Stack>

      <Stack gap="lg">
        <Title order={3}>Notes</Title>
        <List spacing="sm">
          <List.Item>
            These patterns do not accept numbers with leading plus signs (+). Modify the pattern to <Code>^[+-]?\\d+$</Code> to allow both + and &minus;.
          </List.Item>
          <List.Item>
            Leading zeros are allowed (e.g., &quot;0123&quot; is valid). To disallow leading zeros, use a more complex pattern.
          </List.Item>
          <List.Item>
            These patterns do not support scientific notation (e.g., 1.23e10). Use a different pattern for that format.
          </List.Item>
          <List.Item>
            Thousands separators (commas, spaces) are not supported. Preprocess input to remove them if needed.
          </List.Item>
          <List.Item>
            For positive-only numbers, use <Code>^\\d+$</Code> (integers) or <Code>^\\d+(\\.\\d+)?$</Code> (decimals).
          </List.Item>
          <List.Item>
            These regex patterns validate <strong>format</strong> only. For range validation, use additional logic after regex matching.
          </List.Item>
        </List>
      </Stack>
    </Stack>
  );
};

export default Numbers;
