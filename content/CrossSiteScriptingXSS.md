---
title: A7:2017-Cross-Site Scripting XSS
---

## description 
XSS flaws occur whenever an application includes untrusted data in a new web page without proper validation or escaping, or updates an existing web page with user-supplied data using a browser API that can create HTML or JavaScript. XSS allows attackers to execute scripts in the victim’s browser which can hijack user sessions, deface web sites, or redirect the user to malicious sites.

## Summary
Automated tools can detect and exploit all three forms of XSS, and there are freely available exploitation frameworks. The impact of XSS is moderate for reflected and DOM XSS, and severe for stored XSS, with remote code execution on the victim’s browser, such as stealing credentials, sessions, or delivering malware to the victim.