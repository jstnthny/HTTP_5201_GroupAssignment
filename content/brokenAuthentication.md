---
title: A2:2017-Broken Authentication
---

## description 
Application functions related to authentication and session management are often implemented incorrectly, allowing attackers to compromise passwords, keys, or session tokens, or to exploit other implementation flaws to assume other users’ identities temporarily or permanently.


## Summary
Attackers have access to millions of legal username and password combinations for credential stuffing, default administrative account lists, automated brute force, and dictionary attack tools. The prevalence of broken authentication is widespread due to the design and implementation of most identity and access controls. Session management is the bedrock of authentication and access controls, and is present in all stateful applications. To prevent this, Where possible, implement multi-factor authentication to prevent automated, credential stuffing, brute force, and stolen credential re-use attacks.