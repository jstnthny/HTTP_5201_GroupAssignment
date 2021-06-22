---
    title: A4 - XML External Entities (XXE)
---

## Summary
Many older or poorly configured XML processors evaluate external entity references within XML documents. External entities can be used to disclose internal files using the file URI handler, internal file shares, internal port scanning, remote code execution, and denial of service attacks.

## Description
Older XML processors evalute external entities when processing a XML document, which attackers exploit in order to include hostile content.
This flaw can also be used to extract data, execute a remote request from the server, scans of the system and etc...