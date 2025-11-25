"use client";

import { Title, Text, Code, List, Table, Tabs, Anchor, Stack, ThemeIcon, Alert } from '@mantine/core';
import {
  IconCheck,
  IconX,
  IconShieldLock,
} from '@tabler/icons-react';
import { CodeHighlight } from '@mantine/code-highlight';

const ssnRegex = `^(?!000|666|9\\d{2})\\d{3}-(?!00)\\d{2}-(?!0000)\\d{4}$`;

const jsSnippet = `
const ssnRegex = /${ssnRegex}/;
const isValidSSN = (ssn) => ssnRegex.test(ssn);
`;

const pySnippet = `
import re

def is_valid_ssn(ssn):
  ssnRegex = r"${ssnRegex}"
  return re.match(ssnRegex, ssn) is not None
`;

const rustSnippet = `
use regex::Regex;

fn is_valid_ssn(ssn: &str) -> bool {
  let ssnRegex = Regex::new("${ssnRegex}")
    .expect("Could not parse SSN validation regex");
  ssnRegex.is_match(ssn)
}
`;

const goSnippet = `
package main

import (
  "fmt"
  "regexp"
)

func isValidSSN(ssn string) bool {
  ssnRegex := "${ssnRegex}"
  re := regexp.MustCompile(ssnRegex)
  return re.MatchString(ssn)
}
`;

const swiftSnippet = `
import Foundation

func isValidSSN(_ ssn: String) -> Bool {
  let ssnRegex = "${ssnRegex}"
  return NSPredicate(format: "SELF MATCHES %@", ssnRegex).evaluate(with: ssn)
}
`;

const csharpSnippet = `
using System;
using System.Text.RegularExpressions;

class Application {
  static bool IsValidSSN(string ssn) {
    string ssnRegex = "${ssnRegex}";
    return Regex.IsMatch(ssn, ssnRegex);
  }
}
`;

const javaSnippet = `
import java.util.regex.*;

public class Application {
  public static boolean isValidSSN(String ssn) {
    String ssnRegex = "${ssnRegex}";
    Pattern pattern = Pattern.compile(ssnRegex);
    Matcher matcher = pattern.matcher(ssn);
    return matcher.matches();
  }
}
`;

const phpSnippet = `
<?php
function isValidSSN($ssn) {
  $ssnRegex = "${ssnRegex}";
  return preg_match("/" . $ssnRegex . "/", $ssn);
}
?>
`;

const jsSnippetBasic = `const basicSSNRegex = /^\\d{3}-\\d{2}-\\d{4}$/;
const isValidSSN = (ssn) => basicSSNRegex.test(ssn);`;

const pythonSnippetBasic = `import re

basic_ssn_regex = r'^\\d{3}-\\d{2}-\\d{4}$'

def is_valid_ssn(ssn):
    return bool(re.match(basic_ssn_regex, ssn))`;

const rustSnippetBasic = `use regex::Regex;

fn is_valid_ssn(ssn: &str) -> bool {
    let re = Regex::new(r"^\\d{3}-\\d{2}-\\d{4}$").unwrap();
    re.is_match(ssn)
}`;

const goSnippetBasic = `package main

import (
    "fmt"
    "regexp"
)

func isValidSSN(ssn string) bool {
    re := regexp.MustCompile(\`^\\d{3}-\\d{2}-\\d{4}$\`)
    return re.MatchString(ssn)
}`;

const swiftSnippetBasic = `import Foundation

func isValidSSN(_ ssn: String) -> Bool {
    let regex = try! NSRegularExpression(pattern: "^\\d{3}-\\d{2}-\\d{4}$")
    return regex.firstMatch(in: ssn, range: NSRange(location: 0, length: ssn.utf16.count)) != nil
}`;

const csharpSnippetBasic = `using System;
using System.Text.RegularExpressions;

class Program {
    static bool IsValidSSN(string ssn) {
        return Regex.IsMatch(ssn, @"^\\d{3}-\\d{2}-\\d{4}$");
    }
}`;

const javaSnippetBasic = `import java.util.regex.*;

public class SSNValidator {
    public static boolean isValidSSN(String ssn) {
        return Pattern.matches("^\\d{3}-\\d{2}-\\d{4}$", ssn);
    }
}`;

const phpSnippetBasic = `<?php
function isValidSSN($ssn) {
    return preg_match("/^\\d{3}-\\d{2}-\\d{4}$/", $ssn);
}`;

const testCases = [
  { ssn: "123-45-6789", valid: true },
  { ssn: "234-56-7890", valid: true },
  { ssn: "456-78-9012", valid: true },
  { ssn: "987-65-4321", valid: true },
  { ssn: "800-12-3456", valid: true },
  { ssn: "000-12-3456", valid: false },
  { ssn: "666-12-3456", valid: false },
  { ssn: "900-12-3456", valid: false },
  { ssn: "999-12-3456", valid: false },
  { ssn: "123-00-4567", valid: false },
  { ssn: "123-45-0000", valid: false },
  { ssn: "12-34-5678", valid: false },
  { ssn: "1234-56-789", valid: false },
  { ssn: "123456789", valid: false },
  { ssn: "123-456-789", valid: false },
  { ssn: "", valid: false },
  { ssn: "abc-de-fghi", valid: false },
  { ssn: "123-45-67890", valid: false },
  { ssn: "123.45.6789", valid: false },
];

const testCasesBasic = [
  { ssn: "123-45-6789", valid: true },
  { ssn: "234-56-7890", valid: true },
  { ssn: "000-12-3456", valid: true },
  { ssn: "666-12-3456", valid: true },
  { ssn: "900-12-3456", valid: true },
  { ssn: "999-12-3456", valid: true },
  { ssn: "123-00-4567", valid: true },
  { ssn: "123-45-0000", valid: true },
  { ssn: "12-34-5678", valid: false },
  { ssn: "1234-56-789", valid: false },
  { ssn: "123456789", valid: false },
  { ssn: "123-456-789", valid: false },
  { ssn: "", valid: false },
  { ssn: "abc-de-fghi", valid: false },
  { ssn: "123-45-67890", valid: false },
  { ssn: "123.45.6789", valid: false },
];

interface TestCase {
  ssn: string;
  valid: boolean;
}

const SocialSecurityNumber = () => {
  const testCaseRows = (data: TestCase[]) => data.map((element: TestCase) => (
    <Table.Tr key={element.ssn}>
      <Table.Td>{element.ssn}</Table.Td>
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
        <Title order={1}>Social Security Number (SSN) Validation Regular Expression</Title>
        <Text>A valid U.S. Social Security Number follows the format <Code>XXX-XX-XXXX</Code> where each X is a digit. However, not all combinations are valid. The Social Security Administration has specific rules about which numbers can be assigned, making proper validation more complex than just checking the format.</Text>
      </Stack>

      <Alert variant="light" color="blue" icon={<IconShieldLock />}>
        <Text size="sm" fw={600}>Security Best Practices</Text>
        <List size="sm" spacing="xs" mt="xs">
          <List.Item>Never store SSNs in plain text - always use encryption</List.Item>
          <List.Item>Minimize SSN collection and storage - only when legally required</List.Item>
          <List.Item>Use tokenization or masking when displaying SSNs (e.g., XXX-XX-1234)</List.Item>
          <List.Item>Implement proper access controls and audit logging</List.Item>
          <List.Item>Follow <Anchor href="https://www.ssa.gov/employer/randomization.html" target="_blank" rel="noopener" underline="always">SSA randomization guidelines</Anchor> for understanding valid ranges</List.Item>
          <List.Item>Consider using SSN only for verification, not as a primary identifier</List.Item>
        </List>
      </Alert>

      <Stack gap="lg">
        <Title order={2}>Recommended Solution</Title>
        <CodeHighlight
          code={`^(?!000|666|9\\d{2})\\d{3}-(?!00)\\d{2}-(?!0000)\\d{4}$`}
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
            <Code>{`(?!000|666|9\\d{2})`}</Code> - Negative lookahead to reject invalid area numbers:
            <List withPadding ml="md" mt="xs">
              <List.Item><Code>000</Code> - Never assigned</List.Item>
              <List.Item><Code>666</Code> - Never assigned (historically reserved)</List.Item>
              <List.Item><Code>9\\d{2}</Code> - Numbers 900-999 are not assigned</List.Item>
            </List>
          </List.Item>
          <List.Item>
            <Code>{`\\d{3}`}</Code> - Three digits for the area number (first part).
          </List.Item>
          <List.Item>
            <Code>{`-`}</Code> - Required hyphen separator.
          </List.Item>
          <List.Item>
            <Code>{`(?!00)`}</Code> - Negative lookahead to reject group number 00.
          </List.Item>
          <List.Item>
            <Code>{`\\d{2}`}</Code> - Two digits for the group number (middle part).
          </List.Item>
          <List.Item>
            <Code>{`-`}</Code> - Required hyphen separator.
          </List.Item>
          <List.Item>
            <Code>{`(?!0000)`}</Code> - Negative lookahead to reject serial number 0000.
          </List.Item>
          <List.Item>
            <Code>{`\\d{4}`}</Code> - Four digits for the serial number (last part).
          </List.Item>
          <List.Item>
            <Code>{`$`}</Code> - End of the string.
          </List.Item>
        </List>
        <Text size="sm" c="dimmed" mt="md">
          Note: This pattern enforces the standard XXX-XX-XXXX format with hyphens and rejects commonly known invalid patterns. For production use with legacy data or systems that accept SSNs without hyphens, you may need to normalize the input first.
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
              <Table.Th>Social Security Number</Table.Th>
              <Table.Th>Valid</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{testCaseRows(testCases)}</Table.Tbody>
        </Table>
      </Stack>

      <Stack gap="lg">
        <Title order={2}>Basic Validation</Title>
        <Text>For a quick format check without enforcing SSA rules, you can use a basic regular expression that only validates the XXX-XX-XXXX structure. This is useful when you need to accept the format but will validate the actual number against SSA databases separately.</Text>
        <CodeHighlight
          code={`^\\d{3}-\\d{2}-\\d{4}$`}
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
            <Code>{`\\d{3}`}</Code> - Exactly three digits for the area number.
          </List.Item>
          <List.Item>
            <Code>{`-`}</Code> - Required hyphen separator.
          </List.Item>
          <List.Item>
            <Code>{`\\d{2}`}</Code> - Exactly two digits for the group number.
          </List.Item>
          <List.Item>
            <Code>{`-`}</Code> - Required hyphen separator.
          </List.Item>
          <List.Item>
            <Code>{`\\d{4}`}</Code> - Exactly four digits for the serial number.
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
              <Table.Th>Social Security Number</Table.Th>
              <Table.Th>Valid</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{testCaseRows(testCasesBasic)}</Table.Tbody>
        </Table>
      </Stack>

      <Stack gap="lg">
        <Title order={2}>Additional Considerations</Title>
        <List spacing="sm">
          <List.Item>
            <strong>SSN Randomization:</strong> Since June 25, 2011, the SSA has assigned SSNs randomly, making it harder to predict valid ranges. The patterns above cover the most common invalid cases.
          </List.Item>
          <List.Item>
            <strong>International Variations:</strong> This validation is specific to U.S. Social Security Numbers. Other countries have different national identification systems (e.g., Canada&apos;s SIN, UK&apos;s NINO).
          </List.Item>
          <List.Item>
            <strong>Format Flexibility:</strong> Some systems accept SSNs without hyphens. Consider normalizing input by removing non-digit characters before validation.
          </List.Item>
          <List.Item>
            <strong>ITIN vs SSN:</strong> Individual Taxpayer Identification Numbers (ITINs) follow a different format and should not be validated with these patterns.
          </List.Item>
        </List>
      </Stack>
     </Stack>
  );
};

export default SocialSecurityNumber;
