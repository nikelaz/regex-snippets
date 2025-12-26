'use client';

import { Title, Text, List, Stack, Anchor } from '@mantine/core';

const HomeContent = () => {
  return (
    <Stack component="article" gap="xl">
      <Stack component="header" gap="lg">
        <Title order={1}>Welcome to RegEx Snippets</Title>
        <Text>RegEx Snippets is your go-to resource for ready-to-use regular expressions for common validation tasks. Whether you need to validate emails, phone numbers, social security numbers, zip codes, file paths, domains, or URLs, we&apos;ve got you covered with well-tested and optimized regex patterns.</Text>
      </Stack>
      <section>
        <Title order={2} mb="lg">What You&apos;ll Find Here</Title>
        <List mb="xl" spacing="sm">
          <List.Item><strong>Comprehensive Regex Snippets</strong> - Predefined patterns for various validation scenarios.</List.Item>
          <List.Item><strong>Multi-Language Examples</strong> - Implementation guides for HTML5, JavaScript, Rust, and more.</List.Item>
          <List.Item><strong>Clear Explanations</strong> - Breakdown of regex patterns to help you understand how they work.</List.Item>
          <List.Item><strong>Consistent Formatting</strong> - Easy-to-read code snippets with best practices in mind.</List.Item>
        </List>
      </section>
      <section>
        <Title order={2} mb="lg">Why Use RegEx Snippets?</Title>
        <List mb="lg" spacing="sm">
          <List.Item><strong>Save Time</strong> - No need to write regex from scratch; use reliable, battle-tested patterns.</List.Item>
          <List.Item><strong>Improve Accuracy</strong> - Avoid common pitfalls and errors in regex validation.</List.Item>
          <List.Item><strong>Cross-Language Support</strong> - Apply regex solutions in different programming environments.</List.Item>
        </List>
      </section>
      <section>
        <Title order={2} mb="lg">Automated Testing</Title>
        <Text>
          All regex patterns in this repository are rigorously tested to ensure accuracy and reliability. Each pattern includes a comprehensive test suite that validates against the exact test cases shown in the table for that pattern. The tests are currently implemented in TypeScript using Bun&apos;s test framework. You can view the complete test suite in our{' '}
          <Anchor href="https://github.com/nikelaz/regex-snippets/tree/main/test" target="_blank" rel="noopener noreferrer">
            GitHub repository
          </Anchor>
          , where every pattern is verified against both valid and invalid inputs to ensure consistent behavior.
        </Text>
      </section>
    </Stack>
  );
};

export default HomeContent;
