"use client";

import { Title, Text, Code, List, Table, Tabs, Anchor, Stack, ThemeIcon } from '@mantine/core';
import {
  IconHtml,
  IconCheck,
  IconX,
} from '@tabler/icons-react';
import { CodeHighlight } from '@mantine/code-highlight';

const emailRegex = `^(?!.*\\.\\.)(?!.*\\.$)[a-zA-Z0-9.!#$%&'*+/=?^_\`{|}~-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*\\.[a-zA-Z]{2,}$`;

const jsSnippet = `
const emailRegex = /${emailRegex}/;
const isValidEmail = (email) => emailRegex.test(email);
`;

const pySnippet = `
import re

def is_valid_email(email):
  emailRegex = r"${emailRegex}"
  return re.match(emailRegex, email) is not None
`;

const rustSnippet = `
use regex::Regex;

fn is_valid_email(email: &str) -> bool {
  let emailRegex = Regex::new("${emailRegex}")
    .expect("Could not parse email validation regex");
  emailRegex.is_match(email)
}
`;

const goSnippet = `
package main

import (
  "fmt"
  "regexp"
)

func isValidEmail(email string) bool {
  emailRegex := "${emailRegex}"
  re := regexp.MustCompile(emailRegex)
  return re.MatchString(email)
}
`;

const swiftSnippet = `
import Foundation

func isValidEmail(_ email: String) -> Bool {
  let emailRegex = "${emailRegex}"
  return NSPredicate(format: "SELF MATCHES %@", emailRegex).evaluate(with: email)
}
`;

const csharpSnippet = `
using System;
using System.Text.RegularExpressions;

class Application {
  static bool IsValidEmail(string email) {
    string emailRegex = "${emailRegex}";
    return Regex.IsMatch(email, emailRegex);
  }
}
`;

const javaSnippet = `
import java.util.regex.*;

public class Application {
  public static boolean isValidEmail(String email) {
    String emailRegex = "${emailRegex}";
    Pattern pattern = Pattern.compile(emailRegex);
    Matcher matcher = pattern.matcher(email);
    return matcher.matches();
  }
}
`;

const phpSnippet = `
<?php
function isValidEmail($email) {
  $emailRegex = "${emailRegex}";
  return preg_match("/" . $emailRegex . "/", $email);
}
?>
`;

const jsSnippetBasic = `const basicEmailRegex = /^\\S+@\\S+\\.\\S+$/;
const isValidEmail = (email) => basicEmailRegex.test(email);`;

const pythonSnippetBasic = `import re

basic_email_regex = r'^\\S+@\\S+\\.\\S+$'

def is_valid_email(email):
    return bool(re.match(basic_email_regex, email))`;

const rustSnippetBasic = `use regex::Regex;

fn is_valid_email(email: &str) -> bool {
    let re = Regex::new(r"^\\S+@\\S+\\.\\S+$").unwrap();
    re.is_match(email)
}`;

const goSnippetBasic = `package main

import (
    "fmt"
    "regexp"
)

func isValidEmail(email string) bool {
    re := regexp.MustCompile(\`^\\S+@\\S+\\.\\S+$\`)
    return re.MatchString(email)
}`;

const swiftSnippetBasic = `import Foundation

func isValidEmail(_ email: String) -> Bool {
    let regex = try! NSRegularExpression(pattern: "^\\S+@\\S+\\.\\S+$")
    return regex.firstMatch(in: email, range: NSRange(location: 0, length: email.utf16.count)) != nil
}`;

const csharpSnippetBasic = `using System;
using System.Text.RegularExpressions;

class Program {
    static bool IsValidEmail(string email) {
        return Regex.IsMatch(email, @"^\\S+@\\S+\\.\\S+$");
    }
}`;

const javaSnippetBasic = `import java.util.regex.*;

public class EmailValidator {
    public static boolean isValidEmail(String email) {
        return Pattern.matches("^\\S+@\\S+\\.\\S+$", email);
    }
}`;

const phpSnippetBasic = `<?php
function isValidEmail($email) {
    return preg_match("/^\\S+@\\S+\\.\\S+$/", $email);
}`;

const testCases = [
  { email: "test@example.com", valid: true },
  { email: "user.name+tag+sorting@example.com", valid: true },
  { email: "x@example.com", valid: true },
  { email: "example-indeed@strange-example.com", valid: true },
  { email: "example@s.example", valid: true },
  { email: "" , valid: false },
  { email: "admin@mailserver1", valid: false },
  { email: "abc..def@example.com", valid: false },
  { email: ".abc@example.com", valid: false },
  { email: "abc.@example.com", valid: false },
  { email: "abc.def@example..com", valid: false },
  { email: "plainaddress", valid: false },
  { email: "@missingusername.com", valid: false },
  { email: "missingatsign.com", valid: false },
  { email: "username@.com", valid: false },
  { email: "username@sub..com", valid: false },
  { email: "username@-example.com", valid: false },
  { email: "username@example-.com", valid: false },
];

const testCasesBasic = [
  { email: "test@example.com", valid: true },
  { email: "user.name+tag+sorting@example.com", valid: true },
  { email: "x@example.com", valid: true },
  { email: "example-indeed@strange-example.com", valid: true },
  { email: "example@s.example", valid: true },
  { email: "" , valid: false },
  { email: "admin@mailserver1", valid: true },
  { email: "abc..def@example.com", valid: true },
  { email: ".abc@example.com", valid: true },
  { email: "abc.@example.com", valid: true },
  { email: "abc.def@example..com", valid: true },
  { email: "plainaddress", valid: false },
  { email: "@missingusername.com", valid: false },
  { email: "missingatsign.com", valid: false },
  { email: "username@.com", valid: true },
  { email: "username@sub..com", valid: true },
  { email: "username@-example.com", valid: true },
  { email: "username@example-.com", valid: true },
];

const Email = () => {
  const testCaseRows = (data) => data.map((element: any) => (
    <Table.Tr key={element.email}>
      <Table.Td>{element.email}</Table.Td>
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
        <Title order={1}>Email Validation Regular Expression</Title>
        <Text>A well-formed email address follows a standard format defined by <Anchor href="https://www.rfc-editor.org/rfc/rfc5322.html" target="_blank" rel="noopener" underline="always">RFC 5322</Anchor>, but practical validation often balances strictness with usability as most allowed patterns in the standard are not allowed in the actual used email clients. A regular expression that supports the full standard would be very complex and unmaintainable.</Text>
      </Stack>
      <Stack gap="lg">
        <Title order={2}>Recommended Solution</Title>
        <CodeHighlight
          code={`^(?!.*\.\.)(?!.*\.$)[a-zA-Z0-9.!#$%&'*+/=?^_\`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*\.[a-zA-Z]{2,}$`}
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
            <Code>{`(?!.*\.\.)`}</Code> - Prevents consecutive dots (..).
          </List.Item>
          <List.Item>
            <Code>{`(?!.*\.$)`}</Code> - Prevents trailing dots at the end.
          </List.Item>
          <List.Item>
            <Code>{`[a-zA-Z0-9.!#$%&'*+/=?^_\`{|}~-]+`}</Code> - The local part before @. Allows valid characters and special symbols.
          </List.Item>
          <List.Item>
            <Code>{`@`}</Code> - The required separator.
          </List.Item>
          <List.Item>
            <Code>{`[a-zA-Z0-9-]+`}</Code> - Domain name. Allows letters, numbers, and hyphens.
          </List.Item>
          <List.Item>
            <Code>{`(?:\.[a-zA-Z0-9-]+)*`}</Code> - Subdomains. Allows multiple levels like mail.example.com.
          </List.Item>
          <List.Item>
            <Code>{`\.[a-zA-Z]{2,}`}</Code> - Top-level domain. Requires at least two letters (e.g., .com, .org).
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
              <Table.Th>Email Address</Table.Th>
              <Table.Th>Valid</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{testCaseRows(testCases)}</Table.Tbody>
        </Table>
      </Stack>

      <Stack gap="lg">
        <Title order={2}>Basic Validation</Title>
        <Text>For a quick and simple check, you can use a basic regular expression that ensures the presence of an @ symbol and a domain. This is useful for cases where you just need a minimal validation without enforcing strict rules.</Text>
        <CodeHighlight
          code={`^\S+@\S+\.\S+$`}
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
            <Code>{`\S+`}</Code> - At least one non-whitespace character before `@`.
          </List.Item>
          <List.Item>
            <Code>{`@`}</Code> - The required separator.
          </List.Item>
          <List.Item>
            <Code>{`\S+`}</Code> - At least one non-whitespace character for the domain.
          </List.Item>
          <List.Item>
            <Code>{`\.`}</Code> - A dot before the top-level domain.
          </List.Item>
          <List.Item>
            <Code>{`\S+`}</Code> - At least one non-whitespace character for the TLD.
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
            <CodeHighlight code={pythonSnippetBasic.trim()} language="python" />
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
              <Table.Th>Email Address</Table.Th>
              <Table.Th>Valid</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{testCaseRows(testCasesBasic)}</Table.Tbody>
        </Table>
      </Stack>      
     </Stack>
  );
};

export default Email;

