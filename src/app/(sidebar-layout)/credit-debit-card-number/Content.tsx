"use client";

import { Title, Text, Code, List, Tabs, Anchor, Stack } from "@mantine/core";
import { CodeHighlight } from "@mantine/code-highlight";
import TestCasesTable from "../../(components)/test-cases-table";
import {
  testCases,
  jsSnippet,
  pySnippet,
  rustSnippet,
  goSnippet,
  swiftSnippet,
  csharpSnippet,
  javaSnippet,
  phpSnippet
} from "../../../../data/credit-debit-card-number";

const CreditDebitCard = () => {

  return (
    <Stack component="article" gap="xl">
      <Stack component="header" gap="lg">
        <Title order={1}>Credit/Debit Card Number Validation Regular Expression</Title>
        <Text>
          A valid credit or debit card number follows specific patterns defined by card issuers. 
          This regex validates the format of major card types including Visa, Mastercard, American Express, 
          Discover, Diners Club, and JCB based on their IIN (Issuer Identification Number) ranges and length requirements. 
          Card numbers should be validated without spaces or dashes. Credit card numbers are a specialized type of <Anchor href="/numbers" underline="always">number pattern</Anchor>.
        </Text>
      </Stack>
      <Stack gap="lg">
        <Title order={2}>Recommended Solution</Title>
        <CodeHighlight
          code={`^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|6(?:011|5[0-9]{2})[0-9]{12}|(?:2131|1800|35\\d{3})\\d{11})$`}
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
            <Code>{`4[0-9]{12}(?:[0-9]{3})?`}</Code> - Visa: Starts with 4, followed by 12 or 15 more digits (13 or 16 total).
          </List.Item>
          <List.Item>
            <Code>{`5[1-5][0-9]{14}`}</Code> - Mastercard: Starts with 51-55, followed by 14 more digits (16 total).
          </List.Item>
          <List.Item>
            <Code>{`3[47][0-9]{13}`}</Code> - American Express: Starts with 34 or 37, followed by 13 more digits (15 total).
          </List.Item>
          <List.Item>
            <Code>{`3(?:0[0-5]|[68][0-9])[0-9]{11}`}</Code> - Diners Club: Starts with 300-305, 36, or 38, followed by 11 more digits (14 total).
          </List.Item>
          <List.Item>
            <Code>{`6(?:011|5[0-9]{2})[0-9]{12}`}</Code> - Discover: Starts with 6011 or 65, followed by 12 more digits (16 total).
          </List.Item>
          <List.Item>
            <Code>{`(?:2131|1800|35\\d{3})\\d{11}`}</Code> - JCB: Starts with 2131, 1800, or 35, followed by appropriate digits (15-16 total).
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
            This regex validates the <strong>format</strong> and <strong>IIN ranges</strong> but does NOT perform Luhn algorithm validation.
          </List.Item>
          <List.Item>
            For production use, implement the <Anchor href="https://en.wikipedia.org/wiki/Luhn_algorithm" target="_blank" rel="noopener" underline="always">Luhn algorithm</Anchor> (checksum validation) in addition to format validation.
          </List.Item>
          <List.Item>
            This regex expects card numbers without spaces, dashes, or other separators. Preprocess input to remove formatting.
          </List.Item>
          <List.Item>
            Card number formats can change as issuers introduce new IIN ranges. Keep patterns updated.
          </List.Item>
          <List.Item>
            Never log, store, or transmit card numbers in plain text. Follow <Anchor href="https://www.pcisecuritystandards.org/" target="_blank" rel="noopener" underline="always">PCI DSS</Anchor> compliance standards.
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
        <TestCasesTable testCases={testCases} columnLabel="Card Number" />
      </Stack>
    </Stack>
  );
};

export default CreditDebitCard;
