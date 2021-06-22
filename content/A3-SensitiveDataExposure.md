---
    title: A3 - Sensitive Data Exposure
---

## Summary
Many web applications and APIs do not properly protect sensitive data, such as financial, healthcare, and PII. Attackers may steal or modify such weakly protected data to conduct credit card fraud, identity theft, or other crimes. Sensitive data may be compromised without extra protection, such as encryption at rest or in transit, and requires special precautions when exchanged with the browser.

## Description
Sensitive data is not always protected properly by web applications and APIs. This leaves room for attacks where hackers can steal important information and commit crimes such as credit card fraud, identity theft, etc... Even when information is encrypted attacks can still happen, due to flaws in the encrption process and transfer of data.