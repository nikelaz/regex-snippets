"use client";

import { Title, Text, Code, List, Table, Tabs } from '@mantine/core';
import {
  IconHtml,
} from '@tabler/icons-react';

const regexBlock = `^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$`;
const ex1 = `^[a-zA-Z0-9._%+-]+`; 
const elements = [
  { email: 'user@example.com', valid: true },
  { email: 'user.name@sub.domain.org', valid: true },
  { email: 'user@123.456.789.000', valid: false },
  { email: '@missinglocal.com', valid: false },
];

const Email = () => {
  const rows = elements.map((element: any) => (
    <Table.Tr key={element.email}>
      <Table.Td>{element.email}</Table.Td>
      <Table.Td>{element.valid.toString()}</Table.Td>
    </Table.Tr>
  ));

  return (
    <>
      <Title order={1} mb="lg">Email Validation Regular Expression</Title>
      <Text mb="xl">Validating email addresses is a common requirement in web development and software applications. A well-formed email address follows a standard format defined by RFC 5322, but practical validation often balances strictness with usability.</Text>
      <Title order={2} mb="lg">Basic Case</Title>
      <Code block mb="xl">{regexBlock}</Code>
      <Title order={3} mb="lg">Explanation:</Title>
      <List mb="xl" spacing="sm">
        <List.Item><Code>^[a-zA-Z0-9._%+-]+</Code> – Matches the local part (before @), allowing letters, numbers, and common special characters.</List.Item>
        <List.Item><Code>@</Code> – Ensures the presence of the @ symbol.</List.Item>
        <List.Item><Code>[a-zA-Z0-9.-]+</Code> – Matches the domain name.</List.Item>
        <List.Item><Code>\.</Code> – Ensures a dot before the domain extension.</List.Item>
        <List.Item><Code>{`[a-zA-Z]{2,}$`}</Code> – Requires a valid top-level domain (TLD) with at least two letters.</List.Item>
      </List>
      <Title order={3} mb="lg">Examples</Title>
      <Table striped highlightOnHover withTableBorder withColumnBorders mb="xl">
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Email Address</Table.Th>
            <Table.Th>Valid?</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
      <Title order={3} mb="lg">Implementation</Title>
      <Tabs color="indigo" defaultValue="html">
        <Tabs.List mb="md">
          <Tabs.Tab value="html">
            HTML5
          </Tabs.Tab>
          <Tabs.Tab value="js">
            JavaScript
          </Tabs.Tab>
          <Tabs.Tab value="rust">
            Rust
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="html">
          <Code block>{`<input type="email" required>`}</Code>
        </Tabs.Panel>

        <Tabs.Panel value="js">
          <Code block>{`const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
function validateEmail(email) {
    return emailRegex.test(email);
}
console.log(validateEmail("user@example.com")); // true`}</Code>
        </Tabs.Panel>

        <Tabs.Panel value="rust">
          <Code block>{`use regex::Regex;

fn validate_email(email: &str) -> bool {
    let email_regex = Regex::new(r"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$").unwrap();
    email_regex.is_match(email)
}

fn main() {
    println!("{}", validate_email("user@example.com")); // true
}}`}</Code>
        </Tabs.Panel>
      </Tabs>
    </>
  );
};

export default Email;

