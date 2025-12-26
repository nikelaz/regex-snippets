import type TestCase from "../types/test-case";

export const regex = `^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|6(?:011|5[0-9]{2})[0-9]{12}|(?:2131|1800|35\\d{3})\\d{11})$`;

export const jsSnippet = `
const cardRegex = /${regex}/;
const isValidCardNumber = (cardNumber) => cardRegex.test(cardNumber);
`;

export const pySnippet = `
import re

def is_valid_card_number(card_number):
  cardRegex = r"${regex}"
  return re.match(cardRegex, card_number) is not None
`;

export const rustSnippet = `
use regex::Regex;

fn is_valid_card_number(card_number: &str) -> bool {
  let cardRegex = Regex::new("${regex}")
    .expect("Could not parse card validation regex");
  cardRegex.is_match(card_number)
}
`;

export const goSnippet = `
package main

import (
  "regexp"
)

func isValidCardNumber(cardNumber string) bool {
  cardRegex := \`${regex}\`
  re := regexp.MustCompile(cardRegex)
  return re.MatchString(cardNumber)
}
`;

export const swiftSnippet = `
import Foundation

func isValidCardNumber(_ cardNumber: String) -> Bool {
  let cardRegex = "${regex}"
  return NSPredicate(format: "SELF MATCHES %@", cardRegex).evaluate(with: cardNumber)
}
`;

export const csharpSnippet = `
using System;
using System.Text.RegularExpressions;

class Application {
  static bool IsValidCardNumber(string cardNumber) {
    string cardRegex = "${regex}";
    return Regex.IsMatch(cardNumber, cardRegex);
  }
}
`;

export const javaSnippet = `
import java.util.regex.*;

public class Application {
  public static boolean isValidCardNumber(String cardNumber) {
    String cardRegex = "${regex}";
    Pattern pattern = Pattern.compile(cardRegex);
    Matcher matcher = pattern.matcher(cardNumber);
    return matcher.matches();
  }
}
`;

export const phpSnippet = `
<?php
function isValidCardNumber($cardNumber) {
  $cardRegex = "${regex}";
  return preg_match("/" . $cardRegex . "/", $cardNumber);
}
?>
`;

export const testCases: TestCase[] = [
  { pattern: "4532015112830366", isValid: true },
  { pattern: "4532015112830", isValid: true },
  { pattern: "5425233430109903", isValid: true },
  { pattern: "374245455400126", isValid: true },
  { pattern: "371449635398431", isValid: true },
  { pattern: "6011111111111117", isValid: true },
  { pattern: "6011000990139424", isValid: true },
  { pattern: "36227206271667", isValid: true },
  { pattern: "3530111333300000", isValid: true },
  { pattern: "3566002020360505", isValid: true },
  { pattern: "123", isValid: false },
  { pattern: "4532-0151-1283-0366", isValid: false },
  { pattern: "4532 0151 1283 0366", isValid: false },
  { pattern: "1234567890123456", isValid: false },
  { pattern: "453201511283036", isValid: false },
  { pattern: "542523343010990", isValid: false },
  { pattern: "37424545540012", isValid: false },
  { pattern: "", isValid: false },
  { pattern: "abcd1234efgh5678", isValid: false },
];
