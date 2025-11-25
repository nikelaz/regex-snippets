"use client";

import { Title, Text, Code, List, Table, Tabs, Anchor, Stack, ThemeIcon } from '@mantine/core';
import {
  IconCheck,
  IconX,
} from '@tabler/icons-react';
import { CodeHighlight } from '@mantine/code-highlight';

const windowsPathRegex = `^[a-zA-Z]:\\\\(?:[^\\\\/:*?"<>|\\r\\n]+\\\\)*[^\\\\/:*?"<>|\\r\\n]*$`;

const jsSnippet = `
const windowsPathRegex = /${windowsPathRegex}/;
const isValidWindowsPath = (path) => windowsPathRegex.test(path);
`;

const pySnippet = `
import re

def is_valid_windows_path(path):
  windowsPathRegex = r"${windowsPathRegex}"
  return re.match(windowsPathRegex, path) is not None
`;

const rustSnippet = `
use regex::Regex;

fn is_valid_windows_path(path: &str) -> bool {
  let windowsPathRegex = Regex::new(r"${windowsPathRegex}")
    .expect("Could not parse Windows path validation regex");
  windowsPathRegex.is_match(path)
}
`;

const goSnippet = `
package main

import (
  "fmt"
  "regexp"
)

func isValidWindowsPath(path string) bool {
  windowsPathRegex := \`${windowsPathRegex}\`
  re := regexp.MustCompile(windowsPathRegex)
  return re.MatchString(path)
}
`;

const swiftSnippet = `
import Foundation

func isValidWindowsPath(_ path: String) -> Bool {
  let windowsPathRegex = "${windowsPathRegex}"
  return NSPredicate(format: "SELF MATCHES %@", windowsPathRegex).evaluate(with: path)
}
`;

const csharpSnippet = `
using System;
using System.Text.RegularExpressions;

class Application {
  static bool IsValidWindowsPath(string path) {
    string windowsPathRegex = @"${windowsPathRegex}";
    return Regex.IsMatch(path, windowsPathRegex);
  }
}
`;

const javaSnippet = `
import java.util.regex.*;

public class Application {
  public static boolean isValidWindowsPath(String path) {
    String windowsPathRegex = "${windowsPathRegex}";
    Pattern pattern = Pattern.compile(windowsPathRegex);
    Matcher matcher = pattern.matcher(path);
    return matcher.matches();
  }
}
`;

const phpSnippet = `
<?php
function isValidWindowsPath($path) {
  $windowsPathRegex = "${windowsPathRegex}";
  return (bool) preg_match("/" . $windowsPathRegex . "/", $path);
}
?>
`;

const testCases = [
  { path: "C:\\\\", valid: true, type: "Root directory" },
  { path: "C:\\\\Windows\\\\System32", valid: true, type: "Absolute path" },
  { path: "D:\\\\Users\\\\Documents\\\\file.txt", valid: true, type: "File path" },
  { path: "E:\\\\Program Files\\\\Application", valid: true, type: "Path with spaces" },
  { path: "F:\\\\folder\\\\subfolder\\\\", valid: true, type: "Trailing backslash" },
  { path: "Z:\\\\data", valid: true, type: "Z drive" },
  { path: "C:\\\\path-with-dashes\\\\file_name.ext", valid: true, type: "Dashes and underscores" },
  { path: "C:\\\\Windows", valid: true, type: "Simple path" },
  { path: "C:\\\\Users\\\\admin\\\\Desktop\\\\file.docx", valid: true, type: "Document path" },
  { path: "/unix/style/path", valid: false, type: "Unix path" },
  { path: "C:/forward/slash", valid: false, type: "Forward slashes" },
  { path: "C:\\\\invalid*name", valid: false, type: "Contains asterisk" },
  { path: "C:\\\\invalid?name", valid: false, type: "Contains question mark" },
  { path: "C:\\\\invalid<>name", valid: false, type: "Contains angle brackets" },
  { path: "C:\\\\invalid|name", valid: false, type: "Contains pipe" },
  { path: "C:\\\\invalid:name", valid: false, type: "Contains colon" },
  { path: "invalid\\\\path", valid: false, type: "Missing drive letter" },
  { path: "", valid: false, type: "Empty string" },
  { path: "C:", valid: false, type: "Drive letter only" },
  { path: "1:\\\\path", valid: false, type: "Invalid drive letter" },
];

interface TestCase {
  path: string;
  valid: boolean;
  type: string;
}

const WindowsPath = () => {
  const testCaseRows = (data: TestCase[]) => data.map((element: TestCase, index: number) => (
    <Table.Tr key={`${element.path}-${index}`}>
      <Table.Td>{element.path || '(empty string)'}</Table.Td>
      <Table.Td>{element.type}</Table.Td>
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
        <Title order={1}>Windows Path Validation Regular Expression</Title>
        <Text>
          Windows file system paths use backslashes as separators and start with a drive letter followed by a colon. 
          Path components cannot contain certain reserved characters: <Code>\ / : * ? &quot; &lt; &gt; |</Code>. 
          This regex validates Windows path formats according to <Anchor href="https://docs.microsoft.com/en-us/windows/win32/fileio/naming-a-file" target="_blank" rel="noopener" underline="always">Windows file naming conventions</Anchor>.
        </Text>
      </Stack>
      <Stack gap="lg">
        <Title order={2}>Recommended Solution</Title>
        <CodeHighlight
          code={`^[a-zA-Z]:\\\\(?:[^\\\\/:*?"<>|\\r\\n]+\\\\)*[^\\\\/:*?"<>|\\r\\n]*$`}
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
            <Code>{`[a-zA-Z]`}</Code> - Drive letter (A-Z, case-insensitive).
          </List.Item>
          <List.Item>
            <Code>{`:`}</Code> - Colon after drive letter.
          </List.Item>
          <List.Item>
            <Code>{`\\\\`}</Code> - Backslash (escaped in regex).
          </List.Item>
          <List.Item>
            <Code>{`(?:[^\\\\/:*?"<>|\\r\\n]+\\\\)*`}</Code> - Zero or more directory names:
            <List withPadding>
              <List.Item>
                <Code>{`[^\\\\/:*?"<>|\\r\\n]+`}</Code> - One or more valid characters (excluding reserved characters).
              </List.Item>
              <List.Item>
                <Code>{`\\\\`}</Code> - Followed by a backslash.
              </List.Item>
            </List>
          </List.Item>
          <List.Item>
            <Code>{`[^\\\\/:*?"<>|\\r\\n]*`}</Code> - Optional file or final directory name (no trailing backslash required).
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
            This regex validates the <strong>format</strong> of Windows paths but does NOT verify if the path exists on the filesystem.
          </List.Item>
          <List.Item>
            Reserved characters that cannot appear in file/folder names: <Code>\ / : * ? &quot; &lt; &gt; |</Code>
          </List.Item>
          <List.Item>
            This pattern does not validate UNC paths (network paths like \\\\server\\share). Modify the pattern to support UNC if needed.
          </List.Item>
          <List.Item>
            Windows has reserved file names (CON, PRN, AUX, NUL, COM1-9, LPT1-9) which are not validated by this regex.
          </List.Item>
          <List.Item>
            Maximum path length in Windows is typically 260 characters (MAX_PATH), but this is not enforced by this regex.
          </List.Item>
          <List.Item>
            Spaces are allowed in path components, which is common in Windows paths (e.g., &quot;Program Files&quot;).
          </List.Item>
          <List.Item>
            This pattern requires backslashes. Paths with forward slashes (sometimes accepted by Windows APIs) will not match.
          </List.Item>
          <List.Item>
            For more robust path validation, use filesystem APIs like <Code>System.IO.Path</Code> in .NET or similar in other languages.
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
              <Table.Th>Path</Table.Th>
              <Table.Th>Type</Table.Th>
              <Table.Th>Valid</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{testCaseRows(testCases)}</Table.Tbody>
        </Table>
      </Stack>
    </Stack>
  );
};

export default WindowsPath;
