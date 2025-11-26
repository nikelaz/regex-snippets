"use client";

import { Title, Text, Code, List, Table, Tabs, Anchor, Stack, ThemeIcon } from '@mantine/core';
import {
  IconCheck,
  IconX,
} from '@tabler/icons-react';
import { CodeHighlight } from '@mantine/code-highlight';

const cardRegex = `^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|6(?:011|5[0-9]{2})[0-9]{12}|(?:2131|1800|35\\d{3})\\d{11})$`;

const jsSnippet = `
const cardRegex = /${cardRegex}/;
const isValidCardNumber = (cardNumber) => cardRegex.test(cardNumber);
`;

const pySnippet = `
import re

def is_valid_card_number(card_number):
  cardRegex = r"${cardRegex}"
  return re.match(cardRegex, card_number) is not None
`;

const rustSnippet = `
use regex::Regex;

fn is_valid_card_number(card_number: &str) -> bool {
  let cardRegex = Regex::new("${cardRegex}")
    .expect("Could not parse card validation regex");
  cardRegex.is_match(card_number)
}
`;

const goSnippet = `
package main

import (
  "fmt"
  "regexp"
)

func isValidCardNumber(cardNumber string) bool {
  cardRegex := "${cardRegex}"
  re := regexp.MustCompile(cardRegex)
  return re.MatchString(cardNumber)
}
`;

const swiftSnippet = `
import Foundation

func isValidCardNumber(_ cardNumber: String) -> Bool {
  let cardRegex = "${cardRegex}"
  return NSPredicate(format: "SELF MATCHES %@", cardRegex).evaluate(with: cardNumber)
}
`;

const csharpSnippet = `
using System;
using System.Text.RegularExpressions;

class Application {
  static bool IsValidCardNumber(string cardNumber) {
    string cardRegex = "${cardRegex}";
    return Regex.IsMatch(cardNumber, cardRegex);
  }
}
`;

const javaSnippet = `
import java.util.regex.*;

public class Application {
  public static boolean isValidCardNumber(String cardNumber) {
    String cardRegex = "${cardRegex}";
    Pattern pattern = Pattern.compile(cardRegex);
    Matcher matcher = pattern.matcher(cardNumber);
    return matcher.matches();
  }
}
`;

const phpSnippet = `
<?php
function isValidCardNumber($cardNumber) {
  $cardRegex = "${cardRegex}";
  return (bool) preg_match("/" . $cardRegex . "/", $cardNumber);
}
?>
`;

const testCases = [
  { cardNumber: "4532015112830366", valid: true, type: "Visa (16 digits)" },
  { cardNumber: "4532015112830", valid: true, type: "Visa (13 digits)" },
  { cardNumber: "5425233430109903", valid: true, type: "Mastercard" },
  { cardNumber: "374245455400126", valid: true, type: "American Express" },
  { cardNumber: "371449635398431", valid: true, type: "American Express" },
  { cardNumber: "6011111111111117", valid: true, type: "Discover" },
  { cardNumber: "6011000990139424", valid: true, type: "Discover" },
  { cardNumber: "3056930902595100", valid: true, type: "Diners Club" },
  { cardNumber: "36227206271667", valid: true, type: "Diners Club" },
  { cardNumber: "3530111333300000", valid: true, type: "JCB" },
  { cardNumber: "3566002020360505", valid: true, type: "JCB" },
  { cardNumber: "123", valid: false, type: "Too short" },
  { cardNumber: "4532-0151-1283-0366", valid: false, type: "Contains dashes" },
  { cardNumber: "4532 0151 1283 0366", valid: false, type: "Contains spaces" },
  { cardNumber: "1234567890123456", valid: false, type: "Invalid prefix" },
  { cardNumber: "453201511283036", valid: false, type: "Invalid length for Visa" },
  { cardNumber: "542523343010990", valid: false, type: "Invalid length for Mastercard" },
  { cardNumber: "37424545540012", valid: false, type: "Invalid length for Amex" },
  { cardNumber: "", valid: false, type: "Empty string" },
  { cardNumber: "abcd1234efgh5678", valid: false, type: "Contains letters" },
];

interface TestCase {
  cardNumber: string;
  valid: boolean;
  type: string;
}

const CreditDebitCard = () => {
  const testCaseRows = (data: TestCase[]) => data.map((element: TestCase, index: number) => (
    <Table.Tr key={`${element.cardNumber}-${index}`}>
      <Table.Td>{element.cardNumber || '(empty string)'}</Table.Td>
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
        <Table striped highlightOnHover withTableBorder withColumnBorders mb="xl">
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Card Number</Table.Th>
              <Table.Th>Type/Note</Table.Th>
              <Table.Th>Valid</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{testCaseRows(testCases)}</Table.Tbody>
        </Table>
      </Stack>
    </Stack>
  );
};

export default CreditDebitCard;
