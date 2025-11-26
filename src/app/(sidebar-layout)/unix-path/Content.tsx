"use client";

import { Title, Text, Code, List, Table, Tabs, Anchor, Stack, ThemeIcon } from '@mantine/core';
import {
  IconCheck,
  IconX,
} from '@tabler/icons-react';
import { CodeHighlight } from '@mantine/code-highlight';

const unixPathRegex = `^(\\/[^\\/ ]*)+\\/?$|^\\.(\\/[^\\/ ]*)+\\/?$|^\\.\\.\\/([^\\/ ]*\\/)*[^\\/ ]*$`;

const jsSnippet = `
const unixPathRegex = /${unixPathRegex}/;
const isValidUnixPath = (path) => unixPathRegex.test(path);
`;

const pySnippet = `
import re

def is_valid_unix_path(path):
  unixPathRegex = r"${unixPathRegex}"
  return re.match(unixPathRegex, path) is not None
`;

const rustSnippet = `
use regex::Regex;

fn is_valid_unix_path(path: &str) -> bool {
  let unixPathRegex = Regex::new("${unixPathRegex}")
    .expect("Could not parse Unix path validation regex");
  unixPathRegex.is_match(path)
}
`;

const goSnippet = `
package main

import (
  "fmt"
  "regexp"
)

func isValidUnixPath(path string) bool {
  unixPathRegex := \`${unixPathRegex}\`
  re := regexp.MustCompile(unixPathRegex)
  return re.MatchString(path)
}
`;

const swiftSnippet = `
import Foundation

func isValidUnixPath(_ path: String) -> Bool {
  let unixPathRegex = "${unixPathRegex}"
  return NSPredicate(format: "SELF MATCHES %@", unixPathRegex).evaluate(with: path)
}
`;

const csharpSnippet = `
using System;
using System.Text.RegularExpressions;

class Application {
  static bool IsValidUnixPath(string path) {
    string unixPathRegex = "${unixPathRegex}";
    return Regex.IsMatch(path, unixPathRegex);
  }
}
`;

const javaSnippet = `
import java.util.regex.*;

public class Application {
  public static boolean isValidUnixPath(String path) {
    String unixPathRegex = "${unixPathRegex}";
    Pattern pattern = Pattern.compile(unixPathRegex);
    Matcher matcher = pattern.matcher(path);
    return matcher.matches();
  }
}
`;

const phpSnippet = `
<?php
function isValidUnixPath($path) {
  $unixPathRegex = "${unixPathRegex}";
  return (bool) preg_match("/" . $unixPathRegex . "/", $path);
}
?>
`;

const testCases = [
  { path: "/", valid: true, type: "Root directory" },
  { path: "/home/user", valid: true, type: "Absolute path" },
  { path: "/usr/local/bin", valid: true, type: "Absolute path" },
  { path: "/var/log/system.log", valid: true, type: "Absolute file path" },
  { path: "./relative/path", valid: true, type: "Relative path" },
  { path: "./file.txt", valid: true, type: "Relative file" },
  { path: "../parent/directory", valid: true, type: "Parent directory" },
  { path: "/path/to/directory/", valid: true, type: "Trailing slash" },
  { path: "/path-with-dashes/file_name.ext", valid: true, type: "Dashes and underscores" },
  { path: "/path/with.dots/file.tar.gz", valid: true, type: "Multiple dots" },
  { path: "relative/path", valid: false, type: "Invalid relative (no ./)" },
  { path: "C:/Windows/System32", valid: false, type: "Windows path" },
  { path: "/path with spaces/file", valid: false, type: "Contains spaces" },
  { path: "", valid: false, type: "Empty string" },
  { path: "//double/slash", valid: false, type: "Double slash" },
  { path: "/path//file", valid: false, type: "Double slash in middle" },
];

interface TestCase {
  path: string;
  valid: boolean;
  type: string;
}

const UnixPath = () => {
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
        <Title order={1}>Unix Path Validation Regular Expression</Title>
        <Text>
          Unix and Linux file system paths follow a hierarchical structure starting from the root directory (/). 
          Paths can be absolute (starting with /) or relative (starting with ./ or ../). 
          This regex validates common Unix path formats used in Linux, macOS, and other Unix-like operating systems, 
          following the <Anchor href="https://pubs.opengroup.org/onlinepubs/9699919799/basedefs/V1_chap03.html#tag_03_170" target="_blank" rel="noopener" underline="always">POSIX pathname specification</Anchor>. For Windows paths, see the <Anchor href="/windows-path" underline="always">Windows path validation article</Anchor>.
        </Text>
      </Stack>
      <Stack gap="lg">
        <Title order={2}>Recommended Solution</Title>
        <CodeHighlight
          code={`^(\\/[^\\/ ]*)+\\/?$|^\\.(\\/[^\\/ ]*)+\\/?$|^\\.\\.\\/([^\\/ ]*\\/)*[^\\/ ]*$`}
          language="txt"
        />
      </Stack>
      <Stack gap="lg">
        <Title order={3}>Explanation</Title>
        <List spacing="sm">
          <List.Item>
            <Code>{`^(\\/[^\\/ ]*)+\\/?$`}</Code> - Absolute paths:
            <List withPadding>
              <List.Item>
                <Code>{`\\/`}</Code> - Starts with a forward slash.
              </List.Item>
              <List.Item>
                <Code>{`[^\\/ ]*`}</Code> - Directory/file name (any characters except / and space).
              </List.Item>
              <List.Item>
                <Code>{`+`}</Code> - One or more path segments.
              </List.Item>
              <List.Item>
                <Code>{`\\/?`}</Code> - Optional trailing slash.
              </List.Item>
            </List>
          </List.Item>
          <List.Item>
            <Code>{`^\\.(\\/[^\\/ ]*)+\\/?$`}</Code> - Relative paths starting with ./
          </List.Item>
          <List.Item>
            <Code>{`^\\.\\.\\/([^\\/ ]*\\/)*[^\\/ ]*$`}</Code> - Relative paths starting with ../ (parent directory).
          </List.Item>
        </List>
      </Stack>
      <Stack gap="lg">
        <Title order={3}>Notes</Title>
        <List spacing="sm">
          <List.Item>
            This regex validates the <strong>format</strong> of Unix paths but does NOT verify if the path exists on the filesystem.
          </List.Item>
          <List.Item>
            This pattern does NOT allow spaces in path names. Modify <Code>[^\\/ ]*</Code> to <Code>[^\\/]*</Code> to allow spaces if needed.
          </List.Item>
          <List.Item>
            Hidden files and directories (those starting with a dot) are supported (e.g., /home/user/.config).
          </List.Item>
          <List.Item>
            Special characters like *, ?, and [] which have meaning in shell globbing are allowed in this pattern but may need escaping in actual use.
          </List.Item>
          <List.Item>
            The pattern accepts both files and directories. Trailing slashes typically indicate directories but are not required.
          </List.Item>
          <List.Item>
            Symbolic links are validated by format but not resolved or distinguished from regular files/directories.
          </List.Item>
          <List.Item>
            For more robust path validation, consider using filesystem APIs in your programming language.
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

export default UnixPath;
