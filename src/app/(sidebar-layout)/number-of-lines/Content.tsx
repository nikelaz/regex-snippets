"use client";

import {
  Title,
  Text,
  Code,
  List,
  Table,
  Tabs,
  Anchor,
  Stack,
  ThemeIcon,
  Alert
} from "@mantine/core";
import { IconCheck, IconX, IconInfoCircle } from "@tabler/icons-react";
import { CodeHighlight } from "@mantine/code-highlight";
import type TestCase from "../../../../types/test-case";
import {
  jsSnippetRange,
  pySnippetRange,
  rustSnippetRange,
  goSnippetRange,
  swiftSnippetRange,
  csharpSnippetRange,
  javaSnippetRange,
  phpSnippetRange,
  jsSnippetMin,
  pySnippetMin,
  rustSnippetMin,
  goSnippetMin,
  swiftSnippetMin,
  csharpSnippetMin,
  javaSnippetMin,
  phpSnippetMin,
  jsSnippetMax,
  pySnippetMax,
  rustSnippetMax,
  goSnippetMax,
  swiftSnippetMax,
  csharpSnippetMax,
  javaSnippetMax,
  phpSnippetMax,
  testCasesRange,
  testCasesMin,
  testCasesMax,
} from "../../../../data/number-of-lines";

const NumberOfLines = () => {
  const testCaseRows = (data: TestCase[]) => data.map((element: TestCase, index: number) => (
    <Table.Tr key={index}>
      <Table.Td style={{ fontFamily: 'monospace', fontSize: '0.85em' }}>
        {element.pattern}</Table.Td>
      <Table.Td>
        {element.isValid ? (
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
        <Text>Validating the number of lines in text is essential for forms, comments, descriptions, and multi-line input fields. Regular expressions can enforce minimum, maximum, or specific line count ranges to ensure content meets formatting requirements. This is particularly useful for limiting feedback forms, code snippets, addresses, and other structured text inputs. For validating character length of text, see the <Anchor href="/text-length" underline="always">text length validation article</Anchor>.</Text>
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
            <CodeHighlight code={jsSnippetRange.trim()} language="js" />
          </Tabs.Panel>
          <Tabs.Panel value="python">
            <CodeHighlight code={pySnippetRange.trim()} language="py" />
          </Tabs.Panel>
          <Tabs.Panel value="rust">
            <CodeHighlight code={rustSnippetRange.trim()} language="rust" />
          </Tabs.Panel>
          <Tabs.Panel value="go">
            <CodeHighlight code={goSnippetRange.trim()} language="go" />
          </Tabs.Panel>
          <Tabs.Panel value="swift">
            <CodeHighlight code={swiftSnippetRange.trim()} language="swift" />
          </Tabs.Panel>
          <Tabs.Panel value="csharp">
            <CodeHighlight code={csharpSnippetRange.trim()} language="csharp" />
          </Tabs.Panel>
          <Tabs.Panel value="java">
            <CodeHighlight code={javaSnippetRange.trim()} language="java" />
          </Tabs.Panel>
          <Tabs.Panel value="php">
            <CodeHighlight code={phpSnippetRange.trim()} language="php" />
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
