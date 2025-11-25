"use client";

import { Title, Text, Code, List, Table, Tabs, Stack, ThemeIcon, Alert } from '@mantine/core';
import {
  IconCheck,
  IconX,
  IconInfoCircle,
} from '@tabler/icons-react';
import { CodeHighlight } from '@mantine/code-highlight';

// Line range validation (5-20 lines)
const lineRangeRegex = `^(?:[^\\n]*\\n){4,19}[^\\n]*$`;
// Minimum lines validation (5+ lines)
const minLinesRegex = `^(?:[^\\n]*\\n){4,}[^\\n]*$`;
// Maximum lines validation (0-20 lines)
const maxLinesRegex = `^(?:[^\\n]*\\n){0,19}[^\\n]*$`;

const jsSnippet = `
const lineRangeRegex = /${lineRangeRegex}/;
const isValidLineCount = (text) => lineRangeRegex.test(text);

// For configurable min/max:
function validateLineCount(text, min, max) {
  const lines = text.split('\\n').length;
  return lines >= min && lines <= max;
}
`;

const pySnippet = `
import re

def is_valid_line_count(text):
  lineRangeRegex = r"${lineRangeRegex}"
  return re.match(lineRangeRegex, text, re.MULTILINE) is not None

# For configurable min/max:
def validate_line_count(text, min_lines, max_lines):
  lines = text.count('\\n') + 1
  return min_lines <= lines <= max_lines
`;

const rustSnippet = `
use regex::Regex;

fn is_valid_line_count(text: &str) -> bool {
  let line_range_regex = Regex::new(r"${lineRangeRegex}")
    .expect("Could not parse line count validation regex");
  line_range_regex.is_match(text)
}

// For configurable min/max:
fn validate_line_count(text: &str, min: usize, max: usize) -> bool {
  let lines = text.lines().count();
  lines >= min && lines <= max
}
`;

const goSnippet = `
package main

import (
  "regexp"
  "strings"
)

func isValidLineCount(text string) bool {
  lineRangeRegex := "${lineRangeRegex}"
  re := regexp.MustCompile(lineRangeRegex)
  return re.MatchString(text)
}

// For configurable min/max:
func validateLineCount(text string, min int, max int) bool {
  lines := strings.Count(text, "\\n") + 1
  return lines >= min && lines <= max
}
`;

const swiftSnippet = `
import Foundation

func isValidLineCount(_ text: String) -> Bool {
  let lineRangeRegex = "${lineRangeRegex}"
  return NSPredicate(format: "SELF MATCHES %@", lineRangeRegex).evaluate(with: text)
}

// For configurable min/max:
func validateLineCount(_ text: String, min: Int, max: Int) -> Bool {
  let lines = text.components(separatedBy: "\\n").count
  return lines >= min && lines <= max
}
`;

const csharpSnippet = `
using System;
using System.Text.RegularExpressions;
using System.Linq;

class Application {
  static bool IsValidLineCount(string text) {
    string lineRangeRegex = "${lineRangeRegex}";
    return Regex.IsMatch(text, lineRangeRegex);
  }
  
  // For configurable min/max:
  static bool ValidateLineCount(string text, int min, int max) {
    int lines = text.Split('\\n').Length;
    return lines >= min && lines <= max;
  }
}
`;

const javaSnippet = `
import java.util.regex.*;

public class Application {
  public static boolean isValidLineCount(String text) {
    String lineRangeRegex = "${lineRangeRegex}";
    Pattern pattern = Pattern.compile(lineRangeRegex);
    Matcher matcher = pattern.matcher(text);
    return matcher.matches();
  }
  
  // For configurable min/max:
  public static boolean validateLineCount(String text, int min, int max) {
    int lines = text.split("\\n").length;
    return lines >= min && lines <= max;
  }
}
`;

const phpSnippet = `
<?php
function isValidLineCount($text) {
  $lineRangeRegex = "${lineRangeRegex}";
  return preg_match("/" . $lineRangeRegex . "/", $text);
}

// For configurable min/max:
function validateLineCount($text, $min, $max) {
  $lines = substr_count($text, "\\n") + 1;
  return $lines >= $min && $lines <= $max;
}
?>
`;

const jsSnippetMin = `
const minLinesRegex = /${minLinesRegex}/;
const hasMinimumLines = (text) => minLinesRegex.test(text);
`;

const pySnippetMin = `
import re

def has_minimum_lines(text):
  minLinesRegex = r"${minLinesRegex}"
  return re.match(minLinesRegex, text, re.MULTILINE) is not None
`;

const rustSnippetMin = `
use regex::Regex;

fn has_minimum_lines(text: &str) -> bool {
  let min_lines_regex = Regex::new(r"${minLinesRegex}")
    .expect("Could not parse minimum lines regex");
  min_lines_regex.is_match(text)
}
`;

const goSnippetMin = `
package main

import (
  "regexp"
)

func hasMinimumLines(text string) bool {
  minLinesRegex := "${minLinesRegex}"
  re := regexp.MustCompile(minLinesRegex)
  return re.MatchString(text)
}
`;

const swiftSnippetMin = `
import Foundation

func hasMinimumLines(_ text: String) -> Bool {
  let minLinesRegex = "${minLinesRegex}"
  return NSPredicate(format: "SELF MATCHES %@", minLinesRegex).evaluate(with: text)
}
`;

const csharpSnippetMin = `
using System;
using System.Text.RegularExpressions;

class Application {
  static bool HasMinimumLines(string text) {
    string minLinesRegex = "${minLinesRegex}";
    return Regex.IsMatch(text, minLinesRegex);
  }
}
`;

const javaSnippetMin = `
import java.util.regex.*;

public class Application {
  public static boolean hasMinimumLines(String text) {
    String minLinesRegex = "${minLinesRegex}";
    Pattern pattern = Pattern.compile(minLinesRegex);
    Matcher matcher = pattern.matcher(text);
    return matcher.matches();
  }
}
`;

const phpSnippetMin = `
<?php
function hasMinimumLines($text) {
  $minLinesRegex = "${minLinesRegex}";
  return preg_match("/" . $minLinesRegex . "/", $text);
}
?>
`;

const jsSnippetMax = `
const maxLinesRegex = /${maxLinesRegex}/;
const hasMaximumLines = (text) => maxLinesRegex.test(text);
`;

const pySnippetMax = `
import re

def has_maximum_lines(text):
  maxLinesRegex = r"${maxLinesRegex}"
  return re.match(maxLinesRegex, text, re.MULTILINE) is not None
`;

const rustSnippetMax = `
use regex::Regex;

fn has_maximum_lines(text: &str) -> bool {
  let max_lines_regex = Regex::new(r"${maxLinesRegex}")
    .expect("Could not parse maximum lines regex");
  max_lines_regex.is_match(text)
}
`;

const goSnippetMax = `
package main

import (
  "regexp"
)

func hasMaximumLines(text string) bool {
  maxLinesRegex := "${maxLinesRegex}"
  re := regexp.MustCompile(maxLinesRegex)
  return re.MatchString(text)
}
`;

const swiftSnippetMax = `
import Foundation

func hasMaximumLines(_ text: String) -> Bool {
  let maxLinesRegex = "${maxLinesRegex}"
  return NSPredicate(format: "SELF MATCHES %@", maxLinesRegex).evaluate(with: text)
}
`;

const csharpSnippetMax = `
using System;
using System.Text.RegularExpressions;

class Application {
  static bool HasMaximumLines(string text) {
    string maxLinesRegex = "${maxLinesRegex}";
    return Regex.IsMatch(text, maxLinesRegex);
  }
}
`;

const javaSnippetMax = `
import java.util.regex.*;

public class Application {
  public static boolean hasMaximumLines(String text) {
    String maxLinesRegex = "${maxLinesRegex}";
    Pattern pattern = Pattern.compile(maxLinesRegex);
    Matcher matcher = pattern.matcher(text);
    return matcher.matches();
  }
}
`;

const phpSnippetMax = `
<?php
function hasMaximumLines($text) {
  $maxLinesRegex = "${maxLinesRegex}";
  return preg_match("/" . $maxLinesRegex . "/", $text);
}
?>
`;

interface TestCase {
  text: string;
  valid: boolean;
  description: string;
}

const testCasesRange: TestCase[] = [
  { text: "Line 1\nLine 2\nLine 3\nLine 4\nLine 5", valid: true, description: "5 lines (minimum boundary)" },
  { text: "1\n2\n3\n4\n5\n6\n7\n8\n9\n10", valid: true, description: "10 lines (middle range)" },
  { text: "A\nB\nC\nD\nE\nF\nG\nH\nI\nJ\nK\nL\nM\nN\nO\nP\nQ\nR\nS\nT", valid: true, description: "20 lines (maximum boundary)" },
  { text: "Single line", valid: false, description: "1 line (below minimum)" },
  { text: "Line 1\nLine 2\nLine 3\nLine 4", valid: false, description: "4 lines (below minimum)" },
  { text: "1\n2\n3\n4\n5\n6\n7\n8\n9\n10\n11\n12\n13\n14\n15\n16\n17\n18\n19\n20\n21", valid: false, description: "21 lines (above maximum)" },
  { text: "", valid: false, description: "Empty string" },
  { text: "First\n\nThird\nFourth\nFifth", valid: true, description: "5 lines with empty line" },
];

const testCasesMin: TestCase[] = [
  { text: "Line 1\nLine 2\nLine 3\nLine 4\nLine 5", valid: true, description: "5 lines (minimum boundary)" },
  { text: "1\n2\n3\n4\n5\n6\n7\n8\n9\n10", valid: true, description: "10 lines" },
  { text: "A\nB\nC\nD\nE\nF\nG\nH\nI\nJ\nK\nL\nM\nN\nO\nP\nQ\nR\nS\nT\nU\nV\nW\nX\nY\nZ", valid: true, description: "26 lines (well above minimum)" },
  { text: "Line 1\nLine 2\nLine 3\nLine 4", valid: false, description: "4 lines (below minimum)" },
  { text: "Single line", valid: false, description: "1 line" },
  { text: "", valid: false, description: "Empty string" },
  { text: "1\n2\n3", valid: false, description: "3 lines" },
];

const testCasesMax: TestCase[] = [
  { text: "", valid: true, description: "Empty string (0 lines)" },
  { text: "Single line", valid: true, description: "1 line" },
  { text: "Line 1\nLine 2\nLine 3\nLine 4\nLine 5", valid: true, description: "5 lines" },
  { text: "1\n2\n3\n4\n5\n6\n7\n8\n9\n10\n11\n12\n13\n14\n15\n16\n17\n18\n19\n20", valid: true, description: "20 lines (maximum boundary)" },
  { text: "1\n2\n3\n4\n5\n6\n7\n8\n9\n10\n11\n12\n13\n14\n15\n16\n17\n18\n19\n20\n21", valid: false, description: "21 lines (above maximum)" },
  { text: "A\nB\nC\nD\nE\nF\nG\nH\nI\nJ\nK\nL\nM\nN\nO\nP\nQ\nR\nS\nT\nU\nV\nW\nX\nY\nZ", valid: false, description: "26 lines (well above maximum)" },
];

const NumberOfLines = () => {
  const testCaseRows = (data: TestCase[]) => data.map((element: TestCase, index: number) => (
    <Table.Tr key={index}>
      <Table.Td style={{ fontFamily: 'monospace', fontSize: '0.85em' }}>{element.description}</Table.Td>
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
        <Title order={1}>Number of Lines Validation Regular Expression</Title>
        <Text>Validating the number of lines in text is essential for forms, comments, descriptions, and multi-line input fields. Regular expressions can enforce minimum, maximum, or specific line count ranges to ensure content meets formatting requirements. This is particularly useful for limiting feedback forms, code snippets, addresses, and other structured text inputs.</Text>
      </Stack>

      <Alert variant="light" color="blue" title="Platform Considerations" icon={<IconInfoCircle />}>
        <Text size="sm">
          Line counting can vary across platforms due to different newline conventions: Unix/Linux uses <Code>\n</Code> (LF), 
          Windows uses <Code>\r\n</Code> (CRLF), and classic Mac OS used <Code>\r</Code> (CR). Modern applications typically 
          normalize to <Code>\n</Code>. For cross-platform compatibility, consider preprocessing text or using 
          string split methods that handle multiple newline formats. The regex patterns shown here assume normalized <Code>\n</Code> line endings.
        </Text>
      </Alert>

      <Stack gap="lg">
        <Title order={2}>Line Range Validation (5-20 lines)</Title>
        <Text>This pattern validates that text contains between 5 and 20 lines, inclusive. This is useful for multi-line input fields like comments, descriptions, or addresses where you want to enforce both minimum and maximum line constraints.</Text>
        <CodeHighlight
          code={`^(?:[^\\n]*\\n){4,19}[^\\n]*$`}
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
            <Code>{`(?:[^\\n]*\\n)`}</Code> - Non-capturing group that matches any content except newline, followed by a newline character. This represents one complete line.
          </List.Item>
          <List.Item>
            <Code>{`{4,19}`}</Code> - Quantifier requiring 4 to 19 occurrences of the preceding group (matching lines 1-19, with the final line matched separately).
          </List.Item>
          <List.Item>
            <Code>{`[^\\n]*`}</Code> - Matches the final line, which may not end with a newline character.
          </List.Item>
          <List.Item>
            <Code>{`$`}</Code> - End of the string.
          </List.Item>
        </List>
        <Text size="sm" c="dimmed" mt="sm">
          Note: The pattern matches {`{4,19}`} newlines plus one final line = 5-20 total lines. For N lines, use {`{N-1}`} as the upper bound in the quantifier.
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
              <Table.Th>Test Case</Table.Th>
              <Table.Th>Valid</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{testCaseRows(testCasesRange)}</Table.Tbody>
        </Table>
      </Stack>

      <Stack gap="lg">
        <Title order={2}>Minimum Line Validation (5+ lines)</Title>
        <Text>This pattern validates that text has a minimum of 5 lines with no upper limit. This is useful for fields like detailed descriptions, feedback forms, or code snippets where you want to ensure sufficient content without limiting maximum length.</Text>
        <CodeHighlight
          code={`^(?:[^\\n]*\\n){4,}[^\\n]*$`}
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
            <Code>{`(?:[^\\n]*\\n)`}</Code> - Non-capturing group matching any content followed by a newline (one complete line).
          </List.Item>
          <List.Item>
            <Code>{`{4,}`}</Code> - Quantifier requiring at least 4 occurrences with no upper limit (matching lines 1-4+, with the final line matched separately).
          </List.Item>
          <List.Item>
            <Code>{`[^\\n]*`}</Code> - Matches the final line.
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
              <Table.Th>Test Case</Table.Th>
              <Table.Th>Valid</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{testCaseRows(testCasesMin)}</Table.Tbody>
        </Table>
      </Stack>

      <Stack gap="lg">
        <Title order={2}>Maximum Line Validation (0-20 lines)</Title>
        <Text>This pattern validates that text does not exceed 20 lines. It allows any line count from 0 (empty string) up to 20 lines. This is useful for fields like brief comments, summaries, or short descriptions where you want to limit verbosity.</Text>
        <CodeHighlight
          code={`^(?:[^\\n]*\\n){0,19}[^\\n]*$`}
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
            <Code>{`(?:[^\\n]*\\n)`}</Code> - Non-capturing group matching any content followed by a newline.
          </List.Item>
          <List.Item>
            <Code>{`{0,19}`}</Code> - Quantifier allowing 0 to 19 occurrences of the preceding group (matching 0-19 newlines, with the final line matched separately).
          </List.Item>
          <List.Item>
            <Code>{`[^\\n]*`}</Code> - Matches the final line (which could be empty).
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
              <Table.Th>Test Case</Table.Th>
              <Table.Th>Valid</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{testCaseRows(testCasesMax)}</Table.Tbody>
        </Table>
      </Stack>

      <Stack gap="lg">
        <Title order={2}>Alternative: String Split Approach</Title>
        <Text>
          For dynamic or complex line count validation, using string manipulation methods is often more practical 
          than regex. This approach provides better readability, easier maintenance, and handles edge cases more reliably. 
          The code examples above include both regex and programmatic approaches for flexibility.
        </Text>
      </Stack>
    </Stack>
  );
};

export default NumberOfLines;
