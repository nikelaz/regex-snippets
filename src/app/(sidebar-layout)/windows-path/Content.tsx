"use client";

import { Title, Text, Code, List, Tabs, Anchor, Stack } from '@mantine/core';
import { CodeHighlight } from '@mantine/code-highlight';
import TestCasesTable from "../../(components)/test-cases-table";
import {
  jsSnippet,
  pySnippet,
  rustSnippet,
  goSnippet,
  swiftSnippet,
  csharpSnippet,
  javaSnippet,
  phpSnippet,
  testCases,
} from '../../../../data/windows-path';

const WindowsPath = () => {
  return (
    <Stack component="article" gap="xl">
      <Stack component="header" gap="lg">
        <Title order={1}>Windows Path Validation Regular Expression</Title>
        <Text>
          Windows file system paths use backslashes as separators and start with a drive letter followed by a colon. 
          Path components cannot contain certain reserved characters: <Code>\ / : * ? &quot; &lt; &gt; |</Code>. 
          This regex validates Windows path formats according to <Anchor href="https://docs.microsoft.com/en-us/windows/win32/fileio/naming-a-file" target="_blank" rel="noopener" underline="always">Windows file naming conventions</Anchor>. For Unix/Linux paths, see the <Anchor href="/unix-path" underline="always">Unix path validation article</Anchor>.
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
        <TestCasesTable testCases={testCases} columnLabel="Path" />
      </Stack>
    </Stack>
  );
};

export default WindowsPath;
