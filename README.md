# filter_persons

## Overview
This project contains a `filterPersons` function that filters users based on their type (`user` or `admin`). My task was to fix the typings for this function to ensure proper TypeScript behavior.

## Requirements
Fix the typings for the `filterPersons` function so that:

- It returns `User[]` when `personType` is `'user'`.
- It returns `Admin[]` when `personType` is `'admin'`.
- The function accepts **partial** `User` or `Admin` types based on the `personType` argument.

## Function Behavior
- If `personType` is `'user'`, the `criteria` argument should accept a **partial** `User` object.
- If `personType` is `'admin'`, the `criteria` argument should accept a **partial** `Admin` object.
- The `criteria` object **should not include the `type` field**.

## Example Usage
```typescript
filterPersons(persons, 'user', { age: 25 }); // Returns User[] where age is 25
filterPersons(persons, 'admin', { age: 25 }); // Returns Admin[] where age is 25
```

The required adjustments have been successfully implemented for the assignment.
