"use client";

import { Title, Text, Code, List, Table, Tabs, Anchor, Stack, ThemeIcon } from '@mantine/core';
import {
  IconCheck,
  IconX,
} from '@tabler/icons-react';
import { CodeHighlight } from '@mantine/code-highlight';

// 24-hour format with optional seconds (HH:MM or HH:MM:SS)
const time24Regex = `^(?:[01]\\d|2[0-3]):[0-5]\\d(?::[0-5]\\d)?$`;

// 12-hour format with AM/PM (hh:MM AM/PM or hh:MM:SS AM/PM)
const time12Regex = `^(?:0?[1-9]|1[0-2]):[0-5]\\d(?::[0-5]\\d)?\\s?[AaPp][Mm]$`;

const jsSnippet24 = `
const time24Regex = /${time24Regex}/;
const isValid24HourTime = (time) => time24Regex.test(time);
`;

const pySnippet24 = `
import re

def is_valid_24_hour_time(time):
  time_regex = r"${time24Regex}"
  return re.match(time_regex, time) is not None
`;

const rustSnippet24 = `
use regex::Regex;

fn is_valid_24_hour_time(time: &str) -> bool {
  let time_regex = Regex::new("${time24Regex}")
    .expect("Could not parse time validation regex");
  time_regex.is_match(time)
}
`;

const goSnippet24 = `
package main

import (
  "fmt"
  "regexp"
)

func isValid24HourTime(time string) bool {
  timeRegex := "${time24Regex}"
  re := regexp.MustCompile(timeRegex)
  return re.MatchString(time)
}
`;

const swiftSnippet24 = `
import Foundation

func isValid24HourTime(_ time: String) -> Bool {
  let timeRegex = "${time24Regex}"
  return NSPredicate(format: "SELF MATCHES %@", timeRegex).evaluate(with: time)
}
`;

const csharpSnippet24 = `
using System;
using System.Text.RegularExpressions;

class Application {
  static bool IsValid24HourTime(string time) {
    string timeRegex = "${time24Regex}";
    return Regex.IsMatch(time, timeRegex);
  }
}
`;

const javaSnippet24 = `
import java.util.regex.*;

public class Application {
  public static boolean isValid24HourTime(String time) {
    String timeRegex = "${time24Regex}";
    Pattern pattern = Pattern.compile(timeRegex);
    Matcher matcher = pattern.matcher(time);
    return matcher.matches();
  }
}
`;

const phpSnippet24 = `
<?php
function isValid24HourTime($time) {
  $timeRegex = "${time24Regex}";
  return preg_match("/" . $timeRegex . "/", $time);
}
?>
`;

const jsSnippet12 = `
const time12Regex = /${time12Regex}/;
const isValid12HourTime = (time) => time12Regex.test(time);
`;

const pySnippet12 = `
import re

def is_valid_12_hour_time(time):
  time_regex = r"${time12Regex}"
  return re.match(time_regex, time) is not None
`;

const rustSnippet12 = `
use regex::Regex;

fn is_valid_12_hour_time(time: &str) -> bool {
  let time_regex = Regex::new("${time12Regex}")
    .expect("Could not parse time validation regex");
  time_regex.is_match(time)
}
`;

const goSnippet12 = `
package main

import (
  "fmt"
  "regexp"
)

func isValid12HourTime(time string) bool {
  timeRegex := "${time12Regex}"
  re := regexp.MustCompile(timeRegex)
  return re.MatchString(time)
}
`;

const swiftSnippet12 = `
import Foundation

func isValid12HourTime(_ time: String) -> Bool {
  let timeRegex = "${time12Regex}"
  return NSPredicate(format: "SELF MATCHES %@", timeRegex).evaluate(with: time)
}
`;

const csharpSnippet12 = `
using System;
using System.Text.RegularExpressions;

class Application {
  static bool IsValid12HourTime(string time) {
    string timeRegex = "${time12Regex}";
    return Regex.IsMatch(time, timeRegex);
  }
}
`;

const javaSnippet12 = `
import java.util.regex.*;

public class Application {
  public static boolean isValid12HourTime(String time) {
    String timeRegex = "${time12Regex}";
    Pattern pattern = Pattern.compile(timeRegex);
    Matcher matcher = pattern.matcher(time);
    return matcher.matches();
  }
}
`;

const phpSnippet12 = `
<?php
function isValid12HourTime($time) {
  $timeRegex = "${time12Regex}";
  return preg_match("/" . $timeRegex . "/", $time);
}
?>
`;

const testCases24 = [
  { time: "00:00", valid: true },
  { time: "00:00:00", valid: true },
  { time: "09:30", valid: true },
  { time: "09:30:45", valid: true },
  { time: "12:00", valid: true },
  { time: "12:00:00", valid: true },
  { time: "23:59", valid: true },
  { time: "23:59:59", valid: true },
  { time: "13:45:30", valid: true },
  { time: "00:59:59", valid: true },
  { time: "24:00", valid: false },
  { time: "25:00", valid: false },
  { time: "12:60", valid: false },
  { time: "12:30:60", valid: false },
  { time: "9:30", valid: false },
  { time: "09:5", valid: false },
  { time: "9:5", valid: false },
  { time: "12:00 PM", valid: false },
  { time: "1200", valid: false },
  { time: "12:", valid: false },
  { time: ":30", valid: false },
  { time: "12:30:5", valid: false },
  { time: "", valid: false },
];

const testCases12 = [
  { time: "12:00 AM", valid: true },
  { time: "12:00 PM", valid: true },
  { time: "1:00 AM", valid: true },
  { time: "1:00 PM", valid: true },
  { time: "01:00 AM", valid: true },
  { time: "01:00 PM", valid: true },
  { time: "9:30 AM", valid: true },
  { time: "09:30 PM", valid: true },
  { time: "12:59 AM", valid: true },
  { time: "11:59 PM", valid: true },
  { time: "12:00:00 AM", valid: true },
  { time: "11:59:59 PM", valid: true },
  { time: "1:30:45 PM", valid: true },
  { time: "12:00AM", valid: true },
  { time: "12:00PM", valid: true },
  { time: "12:00 am", valid: true },
  { time: "12:00 pm", valid: true },
  { time: "00:00 AM", valid: false },
  { time: "13:00 PM", valid: false },
  { time: "12:60 PM", valid: false },
  { time: "12:30:60 AM", valid: false },
  { time: "12:00", valid: false },
  { time: "9:5 AM", valid: false },
  { time: "12:00 XM", valid: false },
  { time: "25:00 PM", valid: false },
  { time: "", valid: false },
];

interface TestCase {
  time: string;
  valid: boolean;
}

const Time = () => {
  const testCaseRows = (data: TestCase[]) => data.map((element: TestCase) => (
    <Table.Tr key={element.time || 'empty'}>
      <Table.Td>{element.time || '(empty string)'}</Table.Td>
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
        <Title order={1}>Time Validation Regular Expression</Title>
        <Text>Time validation requires handling both 24-hour and 12-hour formats. The 24-hour format (also known as military time) follows the <Anchor href="https://en.wikipedia.org/wiki/ISO_8601" target="_blank" rel="noopener" underline="always">ISO 8601</Anchor> standard, while the 12-hour format with AM/PM is commonly used in everyday contexts, particularly in the United States. For complete datetime validation, combine this with <Anchor href="/date" underline="always">date validation</Anchor>.</Text>
      </Stack>

      <Stack gap="lg">
        <Title order={2}>24-Hour Format (HH:MM or HH:MM:SS)</Title>
        <Text>This pattern validates time in 24-hour format, ranging from 00:00 to 23:59, with optional seconds.</Text>
        <CodeHighlight
          code={`^(?:[01]\\d|2[0-3]):[0-5]\\d(?::[0-5]\\d)?$`}
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
            <Code>{`(?:[01]\\d|2[0-3])`}</Code> - Hours: 00-09, 10-19 (using [01]\\d) or 20-23 (using 2[0-3]).
          </List.Item>
          <List.Item>
            <Code>{`:`}</Code> - Colon separator.
          </List.Item>
          <List.Item>
            <Code>{`[0-5]\\d`}</Code> - Minutes: 00-59.
          </List.Item>
          <List.Item>
            <Code>{`(?::[0-5]\\d)?`}</Code> - Optional seconds: colon followed by 00-59. The ? makes the entire group optional.
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
            <CodeHighlight code={jsSnippet24.trim()} language="js" />
          </Tabs.Panel>
          <Tabs.Panel value="python">
            <CodeHighlight code={pySnippet24.trim()} language="py" />
          </Tabs.Panel>
          <Tabs.Panel value="rust">
            <CodeHighlight code={rustSnippet24.trim()} language="rust" />
          </Tabs.Panel>
          <Tabs.Panel value="go">
            <CodeHighlight code={goSnippet24.trim()} language="go" />
          </Tabs.Panel>
          <Tabs.Panel value="swift">
            <CodeHighlight code={swiftSnippet24.trim()} language="swift" />
          </Tabs.Panel>
          <Tabs.Panel value="csharp">
            <CodeHighlight code={csharpSnippet24.trim()} language="csharp" />
          </Tabs.Panel>
          <Tabs.Panel value="java">
            <CodeHighlight code={javaSnippet24.trim()} language="java" />
          </Tabs.Panel>
          <Tabs.Panel value="php">
            <CodeHighlight code={phpSnippet24.trim()} language="php" />
          </Tabs.Panel>
        </Tabs>
      </Stack>
      
      <Stack gap="lg">
        <Title order={3}>Test Cases</Title>
        <Table striped highlightOnHover withTableBorder withColumnBorders mb="xl">
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Time</Table.Th>
              <Table.Th>Valid</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{testCaseRows(testCases24)}</Table.Tbody>
        </Table>
      </Stack>

      <Stack gap="lg">
        <Title order={2}>12-Hour Format with AM/PM</Title>
        <Text>This pattern validates time in 12-hour format with AM/PM designation. It accepts hours from 1-12, minutes from 00-59, optional seconds, and either AM or PM (case-insensitive). The space before AM/PM is optional.</Text>
        <CodeHighlight
          code={`^(?:0?[1-9]|1[0-2]):[0-5]\\d(?::[0-5]\\d)?\\s?[AaPp][Mm]$`}
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
            <Code>{`(?:0?[1-9]|1[0-2])`}</Code> - Hours: 1-9 (with optional leading zero using 0?[1-9]) or 10-12 (using 1[0-2]).
          </List.Item>
          <List.Item>
            <Code>{`:`}</Code> - Colon separator.
          </List.Item>
          <List.Item>
            <Code>{`[0-5]\\d`}</Code> - Minutes: 00-59.
          </List.Item>
          <List.Item>
            <Code>{`(?::[0-5]\\d)?`}</Code> - Optional seconds: colon followed by 00-59.
          </List.Item>
          <List.Item>
            <Code>{`\\s?`}</Code> - Optional whitespace before AM/PM.
          </List.Item>
          <List.Item>
            <Code>{`[AaPp][Mm]`}</Code> - AM or PM in any case combination (AM, am, PM, pm, etc.).
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
            <CodeHighlight code={jsSnippet12.trim()} language="js" />
          </Tabs.Panel>
          <Tabs.Panel value="python">
            <CodeHighlight code={pySnippet12.trim()} language="py" />
          </Tabs.Panel>
          <Tabs.Panel value="rust">
            <CodeHighlight code={rustSnippet12.trim()} language="rust" />
          </Tabs.Panel>
          <Tabs.Panel value="go">
            <CodeHighlight code={goSnippet12.trim()} language="go" />
          </Tabs.Panel>
          <Tabs.Panel value="swift">
            <CodeHighlight code={swiftSnippet12.trim()} language="swift" />
          </Tabs.Panel>
          <Tabs.Panel value="csharp">
            <CodeHighlight code={csharpSnippet12.trim()} language="csharp" />
          </Tabs.Panel>
          <Tabs.Panel value="java">
            <CodeHighlight code={javaSnippet12.trim()} language="java" />
          </Tabs.Panel>
          <Tabs.Panel value="php">
            <CodeHighlight code={phpSnippet12.trim()} language="php" />
          </Tabs.Panel>
        </Tabs>
      </Stack>

      <Stack gap="lg">
        <Title order={3}>Test Cases</Title>
        <Table striped highlightOnHover withTableBorder withColumnBorders mb="xl">
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Time</Table.Th>
              <Table.Th>Valid</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{testCaseRows(testCases12)}</Table.Tbody>
        </Table>
      </Stack>
    </Stack>
  );
};

export default Time;
