import type TestCase from "../types/test-case";

export const regexIPv4 = `^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$`;

export const regexIPv6 = `^::$|^(?:[0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}$|^::(?:[0-9a-fA-F]{1,4}:){0,6}[0-9a-fA-F]{1,4}$|^(?:[0-9a-fA-F]{1,4}:){1,6}:$|^(?:[0-9a-fA-F]{1,4}:)(?::[0-9a-fA-F]{1,4}){1,6}$|^(?:[0-9a-fA-F]{1,4}:){2}(?::[0-9a-fA-F]{1,4}){1,5}$|^(?:[0-9a-fA-F]{1,4}:){3}(?::[0-9a-fA-F]{1,4}){1,4}$|^(?:[0-9a-fA-F]{1,4}:){4}(?::[0-9a-fA-F]{1,4}){1,3}$|^(?:[0-9a-fA-F]{1,4}:){5}(?::[0-9a-fA-F]{1,4}){1,2}$|^(?:[0-9a-fA-F]{1,4}:){6}:[0-9a-fA-F]{1,4}$`;

export const jsSnippetIPv4 = `
const ipv4Regex = /${regexIPv4}/;
const isValidIPv4 = (ip) => ipv4Regex.test(ip);
`;

export const pySnippetIPv4 = `
import re

def is_valid_ipv4(ip):
  ipv4Regex = r"${regexIPv4}"
  return re.match(ipv4Regex, ip) is not None
`;

export const rustSnippetIPv4 = `
use regex::Regex;

fn is_valid_ipv4(ip: &str) -> bool {
  let ipv4Regex = Regex::new("${regexIPv4}")
    .expect("Could not parse IPv4 validation regex");
  ipv4Regex.is_match(ip)
}
`;

export const goSnippetIPv4 = `
package main

import (
  "regexp"
)

func isValidIPv4(ip string) bool {
  ipv4Regex := "${regexIPv4}"
  re := regexp.MustCompile(ipv4Regex)
  return re.MatchString(ip)
}
`;

export const swiftSnippetIPv4 = `
import Foundation

func isValidIPv4(_ ip: String) -> Bool {
  let ipv4Regex = "${regexIPv4}"
  return NSPredicate(format: "SELF MATCHES %@", ipv4Regex).evaluate(with: ip)
}
`;

export const csharpSnippetIPv4 = `
using System;
using System.Text.RegularExpressions;

class Application {
  static bool IsValidIPv4(string ip) {
    string ipv4Regex = "${regexIPv4}";
    return Regex.IsMatch(ip, ipv4Regex);
  }
}
`;

export const javaSnippetIPv4 = `
import java.util.regex.*;

public class Application {
  public static boolean isValidIPv4(String ip) {
    String ipv4Regex = "${regexIPv4}";
    Pattern pattern = Pattern.compile(ipv4Regex);
    Matcher matcher = pattern.matcher(ip);
    return matcher.matches();
  }
}
`;

export const phpSnippetIPv4 = `
<?php
function isValidIPv4($ip) {
  $ipv4Regex = "${regexIPv4}";
  return preg_match("/" . $ipv4Regex . "/", $ip);
}
?>
`;

export const testCasesIPv4: TestCase[] = [
  { pattern: "192.168.1.1", isValid: true },
  { pattern: "0.0.0.0", isValid: true },
  { pattern: "255.255.255.255", isValid: true },
  { pattern: "10.0.0.1", isValid: true },
  { pattern: "172.16.0.1", isValid: true },
  { pattern: "8.8.8.8", isValid: true },
  { pattern: "127.0.0.1", isValid: true },
  { pattern: "1.1.1.1", isValid: true },
  { pattern: "256.1.1.1", isValid: false },
  { pattern: "192.168.1.256", isValid: false },
  { pattern: "192.168.1", isValid: false },
  { pattern: "192.168.1.1.1", isValid: false },
  { pattern: "192.168.-1.1", isValid: false },
  { pattern: "abc.def.ghi.jkl", isValid: false },
  { pattern: "", isValid: false },
  { pattern: "192.168.1.01", isValid: true },
  { pattern: "999.999.999.999", isValid: false },
];

export const jsSnippetIPv6 = `
const ipv6Regex = /${regexIPv6}/;
const isValidIPv6 = (ip) => ipv6Regex.test(ip);
`;

export const pySnippetIPv6 = `
import re

def is_valid_ipv6(ip):
  ipv6Regex = r"${regexIPv6}"
  return re.match(ipv6Regex, ip) is not None
`;

export const rustSnippetIPv6 = `
use regex::Regex;

fn is_valid_ipv6(ip: &str) -> bool {
  let ipv6Regex = Regex::new("${regexIPv6}")
    .expect("Could not parse IPv6 validation regex");
  ipv6Regex.is_match(ip)
}
`;

export const goSnippetIPv6 = `
package main

import (
  "regexp"
)

func isValidIPv6(ip string) bool {
  ipv6Regex := \`${regexIPv6}\`
  re := regexp.MustCompile(ipv6Regex)
  return re.MatchString(ip)
}
`;

export const swiftSnippetIPv6 = `
import Foundation

func isValidIPv6(_ ip: String) -> Bool {
  let ipv6Regex = "${regexIPv6}"
  return NSPredicate(format: "SELF MATCHES %@", ipv6Regex).evaluate(with: ip)
}
`;

export const csharpSnippetIPv6 = `
using System;
using System.Text.RegularExpressions;

class Application {
  static bool IsValidIPv6(string ip) {
    string ipv6Regex = "${regexIPv6}";
    return Regex.IsMatch(ip, ipv6Regex);
  }
}
`;

export const javaSnippetIPv6 = `
import java.util.regex.*;

public class Application {
  public static boolean isValidIPv6(String ip) {
    String ipv6Regex = "${regexIPv6}";
    Pattern pattern = Pattern.compile(ipv6Regex);
    Matcher matcher = pattern.matcher(ip);
    return matcher.matches();
  }
}
`;

export const phpSnippetIPv6 = `
<?php
function isValidIPv6($ip) {
  $ipv6Regex = "${regexIPv6}";
  return preg_match("/" . $ipv6Regex . "/", $ip);
}
?>
`;

export const testCasesIPv6: TestCase[] = [
  { pattern: "2001:0db8:85a3:0000:0000:8a2e:0370:7334", isValid: true },
  { pattern: "2001:db8:85a3::8a2e:370:7334", isValid: true },
  { pattern: "::1", isValid: true },
  { pattern: "::", isValid: true },
  { pattern: "fe80::1", isValid: true },
  { pattern: "::ffff:192.0.2.1", isValid: false },
  { pattern: "2001:db8::8a2e:370:7334", isValid: true },
  { pattern: "2001:0db8:0001:0000:0000:0ab9:C0A8:0102", isValid: true },
  { pattern: "2001:db8:85a3:0:0:8a2e:370:7334", isValid: true },
  { pattern: "::ffff:c000:0280", isValid: true },
  { pattern: "02001:0db8:0000:0000:0000:ff00:0042:8329", isValid: false },
  { pattern: "2001:0db8:0000:0000:0000:ff00:0042:83290", isValid: false },
  { pattern: "2001:db8:::8a2e:370:7334", isValid: false },
  { pattern: "gggg::1111", isValid: false },
  { pattern: "", isValid: false },
];
