import type TestCase from "../types/test-case";

// HTML tag validation: checks if the entire string is a valid HTML tag
export const regex = `^<\\/?[a-zA-Z][a-zA-Z0-9-]*(?:\\s+[a-zA-Z_:][a-zA-Z0-9_.:-]*(?:\\s*=\\s*(?:"[^"]*"|'[^']*'|[^\\s>"']*))?)*\\s*\\/?>$`;

export const jsSnippet = `
const htmlTagRegex = /${regex}/;
const isValidHtmlTag = (tag) => htmlTagRegex.test(tag);
`;

export const pySnippet = `
import re

def is_valid_html_tag(tag):
  html_tag_regex = r"${regex}"
  return re.match(html_tag_regex, tag) is not None
`;

export const rustSnippet = `
use regex::Regex;

fn is_valid_html_tag(tag: &str) -> bool {
  let html_tag_regex = Regex::new("${regex}")
    .expect("Could not parse HTML tag validation regex");
  html_tag_regex.is_match(tag)
}
`;

export const goSnippet = `
package main

import (
  "fmt"
  "regexp"
)

func isValidHtmlTag(tag string) bool {
  htmlTagRegex := \`${regex}\`
  re := regexp.MustCompile(htmlTagRegex)
  return re.MatchString(tag)
}
`;

export const swiftSnippet = `
import Foundation

func isValidHtmlTag(_ tag: String) -> Bool {
  let htmlTagRegex = "${regex}"
  return NSPredicate(format: "SELF MATCHES %@", htmlTagRegex).evaluate(with: tag)
}
`;

export const csharpSnippet = `
using System;
using System.Text.RegularExpressions;

class Application {
  static bool IsValidHtmlTag(string tag) {
    string htmlTagRegex = "${regex}";
    return Regex.IsMatch(tag, htmlTagRegex);
  }
}
`;

export const javaSnippet = `
import java.util.regex.*;

public class Application {
  public static boolean isValidHtmlTag(String tag) {
    String htmlTagRegex = "${regex}";
    Pattern pattern = Pattern.compile(htmlTagRegex);
    Matcher matcher = pattern.matcher(tag);
    return matcher.matches();
  }
}
`;

export const phpSnippet = `
<?php
function isValidHtmlTag($tag) {
  $htmlTagRegex = "${regex}";
  return preg_match("/" . $htmlTagRegex . "/", $tag);
}
?>
`;

export const testCases: TestCase[] = [
  { pattern: "<div>", isValid: true },
  { pattern: "<p>", isValid: true },
  { pattern: "<h1>", isValid: true },
  { pattern: "<span>", isValid: true },
  { pattern: "</div>", isValid: true },
  { pattern: "</p>", isValid: true },
  { pattern: "<br/>", isValid: true },
  { pattern: "<hr/>", isValid: true },
  { pattern: "<br />", isValid: true },
  { pattern: "<img />", isValid: true },
  { pattern: '<img src="image.png">', isValid: true },
  { pattern: '<a href="https://example.com" class="link">', isValid: true },
  { pattern: '<input type="text" required>', isValid: true },
  { pattern: "<div class='container'>", isValid: true },
  { pattern: "<INPUT TYPE='TEXT'>", isValid: true },
  { pattern: "<my-component>", isValid: true },
  { pattern: '<meta charset="UTF-8" />', isValid: true },
  { pattern: '<span data-value="123">', isValid: true },
  { pattern: "", isValid: false },
  { pattern: "<>", isValid: false },
  { pattern: "<123>", isValid: false },
  { pattern: "< div>", isValid: false },
  { pattern: "<div", isValid: false },
  { pattern: "div>", isValid: false },
  { pattern: "hello world", isValid: false },
  { pattern: "<!-- comment -->", isValid: false },
];

// HTML tag extraction: finds all HTML tags within a larger string (use with global flag)
export const regexExtract = `<\\/?[a-zA-Z][a-zA-Z0-9-]*(?:\\s+[a-zA-Z_:][a-zA-Z0-9_.:-]*(?:\\s*=\\s*(?:"[^"]*"|'[^']*'|[^\\s>"']*))?)*\\s*\\/?>`;

export const jsSnippetExtract = `
const htmlTagExtractRegex = /${regexExtract}/g;
const extractHtmlTags = (html) => html.match(htmlTagExtractRegex) ?? [];
`;

export const pySnippetExtract = `
import re

def extract_html_tags(html):
  html_tag_extract_regex = r"${regexExtract}"
  return re.findall(html_tag_extract_regex, html)
`;

export const rustSnippetExtract = `
use regex::Regex;

fn extract_html_tags(html: &str) -> Vec<&str> {
  let html_tag_extract_regex = Regex::new("${regexExtract}")
    .expect("Could not parse HTML tag extraction regex");
  html_tag_extract_regex.find_iter(html).map(|m| m.as_str()).collect()
}
`;

export const goSnippetExtract = `
package main

import (
  "regexp"
)

func extractHtmlTags(html string) []string {
  htmlTagExtractRegex := \`${regexExtract}\`
  re := regexp.MustCompile(htmlTagExtractRegex)
  return re.FindAllString(html, -1)
}
`;

export const swiftSnippetExtract = `
import Foundation

func extractHtmlTags(_ html: String) -> [String] {
  let htmlTagExtractRegex = try! NSRegularExpression(pattern: "${regexExtract}")
  let range = NSRange(location: 0, length: html.utf16.count)
  return htmlTagExtractRegex.matches(in: html, range: range).compactMap {
    Range($0.range, in: html).map { String(html[$0]) }
  }
}
`;

export const csharpSnippetExtract = `
using System;
using System.Collections.Generic;
using System.Text.RegularExpressions;

class Application {
  static List<string> ExtractHtmlTags(string html) {
    string htmlTagExtractRegex = "${regexExtract}";
    var matches = Regex.Matches(html, htmlTagExtractRegex);
    var result = new List<string>();
    foreach (Match match in matches) result.Add(match.Value);
    return result;
  }
}
`;

export const javaSnippetExtract = `
import java.util.ArrayList;
import java.util.List;
import java.util.regex.*;

public class Application {
  public static List<String> extractHtmlTags(String html) {
    String htmlTagExtractRegex = "${regexExtract}";
    Pattern pattern = Pattern.compile(htmlTagExtractRegex);
    Matcher matcher = pattern.matcher(html);
    List<String> tags = new ArrayList<>();
    while (matcher.find()) tags.add(matcher.group());
    return tags;
  }
}
`;

export const phpSnippetExtract = `
<?php
function extractHtmlTags($html) {
  $htmlTagExtractRegex = "${regexExtract}";
  preg_match_all("/" . $htmlTagExtractRegex . "/", $html, $matches);
  return $matches[0];
}
?>
`;

export const testCasesExtract: TestCase[] = [
  { pattern: "<div>hello</div>", isValid: true },
  { pattern: '<p class="text">paragraph</p>', isValid: true },
  { pattern: 'Click <a href="#">here</a>', isValid: true },
  { pattern: "<br/>", isValid: true },
  { pattern: "<ul><li>item</li></ul>", isValid: true },
  { pattern: '<img src="photo.jpg" alt="photo" />', isValid: true },
  { pattern: "hello world", isValid: false },
  { pattern: "", isValid: false },
  { pattern: "<>", isValid: false },
  { pattern: "3 < 5 > 2", isValid: false },
];
