---
title: A5:2017-Broken Access Control
---

## Description
Restrictions on what authenticated users are allowed to do are often not properly enforced. Attackers can exploit these flaws to access unauthorized functionality and/or data, such as access other users’ accounts, view sensitive files, modify other users’ data, change access rights, etc.

## Summary
Broken access control makes it so that users are not able to perform actions outside of their set permissions. So if a users permissions only allow them to have public information they should not be able to get access to that private information with the ability to update or delete that data. A common access control vulnerability is being able to bypass access control checks by changing the URL, internal application state, or the HTML page iteself. 