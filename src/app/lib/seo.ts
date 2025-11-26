import type { Metadata } from 'next';

export const BASE_URL = 'https://regex-snippets.com';

export interface PageSEOData {
  title: string;
  description: string;
  keywords: string[];
  path: string;
}

export const pagesMetadata: Record<string, PageSEOData> = {
  email: {
    title: 'Email Validation Regex',
    description: 'Ready-to-use email validation regular expression patterns. RFC 5322 compliant regex with implementations in JavaScript, Python, Rust, Go, and more.',
    keywords: ['email regex', 'email validation', 'RFC 5322', 'email pattern', 'JavaScript email regex', 'Python email validation'],
    path: '/email',
  },
  phone: {
    title: 'Phone Number Validation Regex',
    description: 'Phone number validation regex patterns supporting E.164 international format and US national formats. Multi-language implementations included.',
    keywords: ['phone regex', 'phone validation', 'E.164 format', 'phone number pattern', 'international phone regex'],
    path: '/phone',
  },
  date: {
    title: 'Date Validation Regex',
    description: 'Date validation regular expressions for various formats including ISO 8601, US, and European date patterns with multi-language examples.',
    keywords: ['date regex', 'date validation', 'ISO 8601', 'date format pattern', 'JavaScript date regex'],
    path: '/date',
  },
  time: {
    title: 'Time Validation Regex',
    description: 'Time validation regular expressions for 12-hour and 24-hour formats with optional seconds. Includes multi-language implementations.',
    keywords: ['time regex', 'time validation', '24-hour format', '12-hour format', 'time pattern regex'],
    path: '/time',
  },
  alphanumeric: {
    title: 'Alphanumeric Validation Regex',
    description: 'Alphanumeric character validation regex patterns. Match letters and numbers with optional special characters across multiple languages.',
    keywords: ['alphanumeric regex', 'alphanumeric validation', 'letters and numbers regex', 'character pattern'],
    path: '/alphanumeric',
  },
  'text-length': {
    title: 'Text Length Validation Regex',
    description: 'Regular expressions for validating text length with minimum and maximum character limits. Perfect for form validation.',
    keywords: ['text length regex', 'character limit regex', 'min max length validation', 'form validation regex'],
    path: '/text-length',
  },
  'number-of-lines': {
    title: 'Number of Lines Validation Regex',
    description: 'Regex patterns for counting and validating the number of lines in text. Useful for textarea validation and multiline input.',
    keywords: ['line count regex', 'multiline validation', 'textarea regex', 'line number pattern'],
    path: '/number-of-lines',
  },
  affirmation: {
    title: 'Affirmation (Yes/No) Validation Regex',
    description: 'Regular expressions for matching yes/no, true/false, and other affirmation patterns. Boolean-style input validation.',
    keywords: ['yes no regex', 'boolean regex', 'affirmation pattern', 'true false validation'],
    path: '/affirmation',
  },
  'social-security-number': {
    title: 'Social Security Number (SSN) Validation Regex',
    description: 'US Social Security Number validation regex patterns with proper format checking. Includes SSN format rules and implementations.',
    keywords: ['SSN regex', 'social security regex', 'SSN validation', 'US SSN pattern'],
    path: '/social-security-number',
  },
  isbn: {
    title: 'ISBN Validation Regex',
    description: 'ISBN-10 and ISBN-13 validation regular expressions. Book identifier format validation with checksum considerations.',
    keywords: ['ISBN regex', 'ISBN-10 validation', 'ISBN-13 pattern', 'book number regex'],
    path: '/isbn',
  },
  'zip-code': {
    title: 'ZIP Code Validation Regex',
    description: 'US ZIP code validation regex patterns supporting 5-digit and ZIP+4 formats. Postal code validation made easy.',
    keywords: ['ZIP code regex', 'postal code regex', 'ZIP+4 validation', 'US postal pattern'],
    path: '/zip-code',
  },
  'credit-debit-card-number': {
    title: 'Credit/Debit Card Number Validation Regex',
    description: 'Credit and debit card number validation regex patterns. Support for Visa, MasterCard, Amex, and other major card formats.',
    keywords: ['credit card regex', 'card number validation', 'Visa regex', 'MasterCard pattern', 'Luhn algorithm'],
    path: '/credit-debit-card-number',
  },
  numbers: {
    title: 'Number Validation Regex',
    description: 'Numeric validation regex patterns for integers, decimals, negative numbers, and formatted numbers with commas.',
    keywords: ['number regex', 'integer validation', 'decimal regex', 'numeric pattern', 'float regex'],
    path: '/numbers',
  },
  domain: {
    title: 'Domain Name Validation Regex',
    description: 'Domain name validation regular expressions. Match valid domain names with proper TLD validation.',
    keywords: ['domain regex', 'domain validation', 'hostname pattern', 'TLD validation', 'domain name regex'],
    path: '/domain',
  },
  'url-and-path': {
    title: 'URL and Path Validation Regex',
    description: 'URL and path validation regex patterns. Match HTTP/HTTPS URLs with query strings, fragments, and path components.',
    keywords: ['URL regex', 'URL validation', 'path regex', 'HTTP pattern', 'web address regex'],
    path: '/url-and-path',
  },
  'ip-address': {
    title: 'IP Address Validation Regex',
    description: 'IPv4 and IPv6 address validation regular expressions. Network address format validation with proper range checking.',
    keywords: ['IP regex', 'IPv4 validation', 'IPv6 pattern', 'IP address regex', 'network address validation'],
    path: '/ip-address',
  },
  'unix-path': {
    title: 'Unix File Path Validation Regex',
    description: 'Unix/Linux file path validation regex patterns. Match absolute and relative paths on Unix-like systems.',
    keywords: ['Unix path regex', 'Linux path validation', 'file path pattern', 'directory regex'],
    path: '/unix-path',
  },
  'windows-path': {
    title: 'Windows File Path Validation Regex',
    description: 'Windows file path validation regex patterns. Match drive letters, UNC paths, and Windows directory structures.',
    keywords: ['Windows path regex', 'Windows file path', 'drive letter regex', 'UNC path pattern'],
    path: '/windows-path',
  },
};

export function generatePageMetadata(pageKey: string): Metadata {
  const data = pagesMetadata[pageKey];
  if (!data) {
    return {};
  }

  return {
    title: data.title,
    description: data.description,
    keywords: data.keywords,
    openGraph: {
      title: `${data.title} | RegEx Snippets`,
      description: data.description,
      url: `${BASE_URL}${data.path}`,
      type: 'article',
    },
    twitter: {
      card: 'summary',
      title: `${data.title} | RegEx Snippets`,
      description: data.description,
    },
    alternates: {
      canonical: `${BASE_URL}${data.path}`,
    },
  };
}

export function generateHowToJsonLd(pageKey: string) {
  const data = pagesMetadata[pageKey];
  if (!data) {
    return null;
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: data.title,
    description: data.description,
    step: [
      {
        '@type': 'HowToStep',
        name: 'Copy the regex pattern',
        text: 'Copy the provided regular expression pattern for your use case.',
      },
      {
        '@type': 'HowToStep',
        name: 'Choose your programming language',
        text: 'Select from implementations in JavaScript, Python, Rust, Go, Swift, C#, Java, or PHP.',
      },
      {
        '@type': 'HowToStep',
        name: 'Implement in your code',
        text: 'Use the provided code snippet to implement the validation in your application.',
      },
    ],
  };
}
