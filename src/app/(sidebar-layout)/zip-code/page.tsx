"use client";

import { Title, Text, Code, List, Table, Tabs, Anchor, Stack, ThemeIcon } from '@mantine/core';
import {
  IconCheck,
  IconX,
} from '@tabler/icons-react';
import { CodeHighlight } from '@mantine/code-highlight';

const zipCodeRegex = `^\\d{5}(?:-\\d{4})?$`;

const jsSnippet = `
const zipCodeRegex = /${zipCodeRegex}/;
const isValidZipCode = (zipCode) => zipCodeRegex.test(zipCode);
`;

const pySnippet = `
import re

def is_valid_zip_code(zip_code):
  zipCodeRegex = r"${zipCodeRegex}"
  return re.match(zipCodeRegex, zip_code) is not None
`;

const rustSnippet = `
use regex::Regex;

fn is_valid_zip_code(zip_code: &str) -> bool {
  let zipCodeRegex = Regex::new("${zipCodeRegex}")
    .expect("Could not parse ZIP code validation regex");
  zipCodeRegex.is_match(zip_code)
}
`;

const goSnippet = `
package main

import (
  "fmt"
  "regexp"
)

func isValidZipCode(zipCode string) bool {
  zipCodeRegex := "${zipCodeRegex}"
  re := regexp.MustCompile(zipCodeRegex)
  return re.MatchString(zipCode)
}
`;

const swiftSnippet = `
import Foundation

func isValidZipCode(_ zipCode: String) -> Bool {
  let zipCodeRegex = "${zipCodeRegex}"
  return NSPredicate(format: "SELF MATCHES %@", zipCodeRegex).evaluate(with: zipCode)
}
`;

const csharpSnippet = `
using System;
using System.Text.RegularExpressions;

class Application {
  static bool IsValidZipCode(string zipCode) {
    string zipCodeRegex = "${zipCodeRegex}";
    return Regex.IsMatch(zipCode, zipCodeRegex);
  }
}
`;

const javaSnippet = `
import java.util.regex.*;

public class Application {
  public static boolean isValidZipCode(String zipCode) {
    String zipCodeRegex = "${zipCodeRegex}";
    Pattern pattern = Pattern.compile(zipCodeRegex);
    Matcher matcher = pattern.matcher(zipCode);
    return matcher.matches();
  }
}
`;

const phpSnippet = `
<?php
function isValidZipCode($zipCode) {
  $zipCodeRegex = "${zipCodeRegex}";
  return (bool) preg_match("/" . $zipCodeRegex . "/", $zipCode);
}
?>
`;

const testCases = [
  { zipCode: "12345", valid: true },
  { zipCode: "12345-6789", valid: true },
  { zipCode: "90210", valid: true },
  { zipCode: "00501", valid: true },
  { zipCode: "99950-0001", valid: true },
  { zipCode: "1234", valid: false },
  { zipCode: "123456", valid: false },
  { zipCode: "12345-", valid: false },
  { zipCode: "12345-678", valid: false },
  { zipCode: "12345-67890", valid: false },
  { zipCode: "abcde", valid: false },
  { zipCode: "12 345", valid: false },
  { zipCode: "12-345", valid: false },
  { zipCode: "", valid: false },
  { zipCode: "-1234", valid: false },
  { zipCode: "12345-abcd", valid: false },
];

interface TestCase {
  zipCode: string;
  valid: boolean;
}

const ZipCode = () => {
  const testCaseRows = (data: TestCase[]) => data.map((element: TestCase) => (
    <Table.Tr key={element.zipCode || 'empty'}>
      <Table.Td>{element.zipCode || '(empty string)'}</Table.Td>
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
        <Title order={1}>ZIP Code Validation Regular Expression</Title>
        <Text>
          A valid U.S. ZIP Code follows the format defined by the United States Postal Service (USPS). 
          It can be either a 5-digit ZIP code (e.g., 12345) or a ZIP+4 code with an optional 4-digit extension 
          (e.g., 12345-6789). This regex validates both formats according to <Anchor href="https://pe.usps.com/text/pub28/28c2_001.htm" target="_blank" rel="noopener" underline="always">USPS Publication 28</Anchor>.
        </Text>
      </Stack>
      <Stack gap="lg">
        <Title order={2}>Recommended Solution</Title>
        <CodeHighlight
          code={`^\\d{5}(?:-\\d{4})?$`}
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
            <Code>{`\\d{5}`}</Code> - Exactly 5 digits for the basic ZIP code.
          </List.Item>
          <List.Item>
            <Code>{`(?:-\\d{4})?`}</Code> - Optional group for ZIP+4: a hyphen followed by exactly 4 digits.
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
            This regex validates the <strong>format</strong> of ZIP codes but does not verify if a ZIP code actually exists or is assigned to a location.
          </List.Item>
          <List.Item>
            ZIP codes range from 00501 to 99950, but this regex accepts any 5-digit combination for simplicity.
          </List.Item>
          <List.Item>
            The ZIP+4 extension provides more precise location information within a ZIP code area.
          </List.Item>
          <List.Item>
            For international postal codes, different patterns are needed (e.g., Canadian postal codes use the format A1A 1A1).
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
              <Table.Th>ZIP Code</Table.Th>
              <Table.Th>Valid</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{testCaseRows(testCases)}</Table.Tbody>
        </Table>
      </Stack>
    </Stack>
  );
};

export default ZipCode;
