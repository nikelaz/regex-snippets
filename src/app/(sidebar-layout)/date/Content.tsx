"use client";

import { Title, Text, Code, List, Table, Tabs, Anchor, Stack, ThemeIcon } from '@mantine/core';
import {
  IconCheck,
  IconX,
} from '@tabler/icons-react';
import { CodeHighlight } from '@mantine/code-highlight';

// ISO 8601 Date format (YYYY-MM-DD)
const dateRegex = `^(?:19|20)\\d{2}-(0[1-9]|1[0-2])-(0[1-9]|[12]\\d|3[01])$`;

const jsSnippet = `
const dateRegex = /${dateRegex}/;
const isValidDate = (date) => {
  if (!dateRegex.test(date)) return false;
  
  // Additional validation for day-month combinations
  const [year, month, day] = date.split('-').map(Number);
  const dateObj = new Date(year, month - 1, day);
  
  return dateObj.getFullYear() === year &&
         dateObj.getMonth() === month - 1 &&
         dateObj.getDate() === day;
};
`;

const pySnippet = `
import re
from datetime import datetime

def is_valid_date(date):
  dateRegex = r"${dateRegex}"
  if not re.match(dateRegex, date):
    return False
  
  # Additional validation for day-month combinations
  try:
    datetime.strptime(date, '%Y-%m-%d')
    return True
  except ValueError:
    return False
`;

const rustSnippet = `
use regex::Regex;
use chrono::NaiveDate;

fn is_valid_date(date: &str) -> bool {
  let dateRegex = Regex::new("${dateRegex}")
    .expect("Could not parse date validation regex");
  
  if !dateRegex.is_match(date) {
    return false;
  }
  
  // Additional validation for day-month combinations
  NaiveDate::parse_from_str(date, "%Y-%m-%d").is_ok()
}
`;

const goSnippet = `
package main

import (
  "regexp"
  "time"
)

func isValidDate(date string) bool {
  dateRegex := "${dateRegex}"
  re := regexp.MustCompile(dateRegex)
  
  if !re.MatchString(date) {
    return false
  }
  
  // Additional validation for day-month combinations
  _, err := time.Parse("2006-01-02", date)
  return err == nil
}
`;

const swiftSnippet = `
import Foundation

func isValidDate(_ date: String) -> Bool {
  let dateRegex = "${dateRegex}"
  let predicate = NSPredicate(format: "SELF MATCHES %@", dateRegex)
  
  if !predicate.evaluate(with: date) {
    return false
  }
  
  // Additional validation for day-month combinations
  let formatter = DateFormatter()
  formatter.dateFormat = "yyyy-MM-dd"
  return formatter.date(from: date) != nil
}
`;

const csharpSnippet = `
using System;
using System.Text.RegularExpressions;
using System.Globalization;

class Application {
  static bool IsValidDate(string date) {
    string dateRegex = "${dateRegex}";
    
    if (!Regex.IsMatch(date, dateRegex)) {
      return false;
    }
    
    // Additional validation for day-month combinations
    return DateTime.TryParseExact(date, "yyyy-MM-dd", 
      CultureInfo.InvariantCulture, 
      DateTimeStyles.None, out _);
  }
}
`;

const javaSnippet = `
import java.util.regex.*;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.time.format.DateTimeParseException;

public class Application {
  public static boolean isValidDate(String date) {
    String dateRegex = "${dateRegex}";
    Pattern pattern = Pattern.compile(dateRegex);
    
    if (!pattern.matcher(date).matches()) {
      return false;
    }
    
    // Additional validation for day-month combinations
    try {
      LocalDate.parse(date, DateTimeFormatter.ISO_LOCAL_DATE);
      return true;
    } catch (DateTimeParseException e) {
      return false;
    }
  }
}
`;

const phpSnippet = `
<?php
function isValidDate($date) {
  $dateRegex = "${dateRegex}";
  
  if (!preg_match("/" . $dateRegex . "/", $date)) {
    return false;
  }
  
  // Additional validation for day-month combinations
  $d = DateTime::createFromFormat('Y-m-d', $date);
  return $d && $d->format('Y-m-d') === $date;
}
?>
`;

// Basic Date format (flexible separators)
const dateRegexBasic = `^\\d{4}[-/.]\\d{2}[-/.]\\d{2}$`;

const jsSnippetBasic = `const basicDateRegex = /^\\d{4}[-/.]\d{2}[-/.]\d{2}$/;
const isValidDate = (date) => basicDateRegex.test(date);`;

const pythonSnippetBasic = `import re

basic_date_regex = r'^\\d{4}[-/.]\\d{2}[-/.]\\d{2}$'

def is_valid_date(date):
    return bool(re.match(basic_date_regex, date))`;

const rustSnippetBasic = `use regex::Regex;

fn is_valid_date(date: &str) -> bool {
    let re = Regex::new(r"^\\d{4}[-/.]\\d{2}[-/.]\\d{2}$").unwrap();
    re.is_match(date)
}`;

const goSnippetBasic = `package main

import (
    "regexp"
)

func isValidDate(date string) bool {
    re := regexp.MustCompile(\`^\\d{4}[-/.]\\d{2}[-/.]\\d{2}$\`)
    return re.MatchString(date)
}`;

const swiftSnippetBasic = `import Foundation

func isValidDate(_ date: String) -> Bool {
    let regex = try! NSRegularExpression(pattern: "^\\d{4}[-/.]\\d{2}[-/.]\\d{2}$")
    return regex.firstMatch(in: date, range: NSRange(location: 0, length: date.utf16.count)) != nil
}`;

const csharpSnippetBasic = `using System;
using System.Text.RegularExpressions;

class Program {
    static bool IsValidDate(string date) {
        return Regex.IsMatch(date, @"^\\d{4}[-/.]\\d{2}[-/.]\\d{2}$");
    }
}`;

const javaSnippetBasic = `import java.util.regex.*;

public class DateValidator {
    public static boolean isValidDate(String date) {
        return Pattern.matches("^\\d{4}[-/.]\\d{2}[-/.]\\d{2}$", date);
    }
}`;

const phpSnippetBasic = `<?php
function isValidDate($date) {
    return preg_match("/^\\d{4}[-/.]\\d{2}[-/.]\\d{2}$/", $date);
}`;

const testCases = [
  { date: "2024-01-15", valid: true },
  { date: "2024-12-31", valid: true },
  { date: "2000-02-29", valid: true }, // Leap year
  { date: "2024-02-29", valid: true }, // Leap year
  { date: "1999-06-30", valid: true },
  { date: "2023-07-04", valid: true },
  { date: "2020-11-01", valid: true },
  { date: "2024-02-30", valid: false }, // Invalid day for February
  { date: "2023-02-29", valid: false }, // Not a leap year
  { date: "2024-04-31", valid: false }, // April has 30 days
  { date: "2024-06-31", valid: false }, // June has 30 days
  { date: "2024-09-31", valid: false }, // September has 30 days
  { date: "2024-11-31", valid: false }, // November has 30 days
  { date: "2024-13-01", valid: false }, // Invalid month
  { date: "2024-00-15", valid: false }, // Invalid month
  { date: "2024-01-00", valid: false }, // Invalid day
  { date: "2024-01-32", valid: false }, // Invalid day
  { date: "1899-12-31", valid: false }, // Year too old (pre-1900)
  { date: "2100-01-01", valid: false }, // Year too far in future (post-2099)
  { date: "24-01-15", valid: false }, // Year too short
  { date: "2024-1-15", valid: false }, // Month not zero-padded
  { date: "2024-01-5", valid: false }, // Day not zero-padded
  { date: "2024/01/15", valid: false }, // Wrong separator
  { date: "15-01-2024", valid: false }, // Wrong order (DD-MM-YYYY)
  { date: "01-15-2024", valid: false }, // Wrong order (MM-DD-YYYY)
  { date: "", valid: false }, // Empty string
  { date: "not-a-date", valid: false }, // Invalid format
];

const testCasesBasic = [
  { date: "2024-01-15", valid: true },
  { date: "2024/01/15", valid: true },
  { date: "2024.01.15", valid: true },
  { date: "2024-12-31", valid: true },
  { date: "2000-02-29", valid: true },
  { date: "2024-02-30", valid: true }, // Format valid, semantically invalid
  { date: "2024-13-01", valid: true }, // Format valid, semantically invalid
  { date: "9999-99-99", valid: true }, // Format valid, semantically invalid
  { date: "2024-1-15", valid: false }, // Not zero-padded
  { date: "24-01-15", valid: false }, // Year too short
  { date: "2024-01-5", valid: false }, // Day not zero-padded
  { date: "15-01-2024", valid: false }, // Wrong order
  { date: "", valid: false },
  { date: "not-a-date", valid: false },
];

interface TestCase {
  date: string;
  valid: boolean;
}

const Date = () => {
  const testCaseRows = (data: TestCase[]) => data.map((element: TestCase) => (
    <Table.Tr key={element.date || 'empty'}>
      <Table.Td>{element.date || '(empty string)'}</Table.Td>
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
        <Title order={1}>Date Validation Regular Expression</Title>
        <Text>A properly formatted date should follow the <Anchor href="https://en.wikipedia.org/wiki/ISO_8601" target="_blank" rel="noopener" underline="always">ISO 8601</Anchor> standard (YYYY-MM-DD) for consistency and international compatibility. This format is widely supported by programming languages and databases, making it ideal for data interchange and storage.</Text>
      </Stack>
      <Stack gap="lg">
        <Title order={2}>Recommended Solution</Title>
        <Text>This regular expression validates dates in ISO 8601 format (YYYY-MM-DD) with years from 1900-2099. It performs basic structural validation, but additional logic is recommended to verify day-month combinations (e.g., February 30th, leap years).</Text>
        <CodeHighlight
          code={`^(?:19|20)\\d{2}-(0[1-9]|1[0-2])-(0[1-9]|[12]\\d|3[01])$`}
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
            <Code>{`(?:19|20)\\d{2}`}</Code> - Year validation. Matches years from 1900-2099 (19XX or 20XX followed by two digits).
          </List.Item>
          <List.Item>
            <Code>{`-`}</Code> - Hyphen separator (required by ISO 8601).
          </List.Item>
          <List.Item>
            <Code>{`(0[1-9]|1[0-2])`}</Code> - Month validation. Matches 01-09 or 10-12.
          </List.Item>
          <List.Item>
            <Code>{`-`}</Code> - Hyphen separator.
          </List.Item>
          <List.Item>
            <Code>{`(0[1-9]|[12]\\d|3[01])`}</Code> - Day validation. Matches 01-09, 10-29, or 30-31.
          </List.Item>
          <List.Item>
            <Code>{`$`}</Code> - End of the string.
          </List.Item>
        </List>
        <Text size="sm" c="dimmed" mt="md">
          <strong>Note:</strong> This regex validates the date format but doesn&apos;t enforce calendar rules (e.g., February having 28/29 days, or April having 30 days). For production use, combine this regex with additional validation using your language&apos;s date parsing libraries as shown in the implementation examples below.
        </Text>
      </Stack>
      <Stack gap="lg">
        <Title order={3}>Implementation</Title>
        <Text size="sm" c="dimmed" mb="sm">
          The implementations below include both regex validation and additional date logic to ensure calendar correctness (leap years, days per month, etc.).
        </Text>
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
        <Text size="sm" c="dimmed" mb="sm">
          These test cases include edge cases such as leap years, invalid day-month combinations, and boundary conditions. The validation includes both regex pattern matching and semantic date correctness.
        </Text>
        <Table striped highlightOnHover withTableBorder withColumnBorders mb="xl">
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Date String</Table.Th>
              <Table.Th>Valid</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{testCaseRows(testCases)}</Table.Tbody>
        </Table>
      </Stack>

      <Stack gap="lg">
        <Title order={2}>Basic Validation</Title>
        <Text>For a quick format check without strict ISO 8601 enforcement, you can use a basic regular expression that accepts various date separators (hyphen, slash, or dot). This is useful when you need flexibility in input format but still want a YYYY-MM-DD structure.</Text>
        <CodeHighlight
          code={`^\\d{4}[-/.]\\d{2}[-/.]\\d{2}$`}
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
            <Code>{`\\d{4}`}</Code> - Exactly four digits for the year.
          </List.Item>
          <List.Item>
            <Code>{`[-/.]`}</Code> - Separator character (hyphen, slash, or dot).
          </List.Item>
          <List.Item>
            <Code>{`\\d{2}`}</Code> - Exactly two digits for the month.
          </List.Item>
          <List.Item>
            <Code>{`[-/.]`}</Code> - Separator character.
          </List.Item>
          <List.Item>
            <Code>{`\\d{2}`}</Code> - Exactly two digits for the day.
          </List.Item>
          <List.Item>
            <Code>{`$`}</Code> - End of the string.
          </List.Item>
        </List>
        <Text size="sm" c="dimmed" mt="md">
          <strong>Warning:</strong> This basic pattern only validates the format structure. It does not validate whether the date is semantically correct (e.g., it would accept 9999-99-99). Always combine with additional validation for production use.
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
              <Table.Th>Date String</Table.Th>
              <Table.Th>Valid</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{testCaseRows(testCasesBasic)}</Table.Tbody>
        </Table>
      </Stack>      
     </Stack>
  );
};

export default Date;
