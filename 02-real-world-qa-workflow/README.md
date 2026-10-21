# Anonymized Real-World QA Workflow

## Why this page exists

Besides QA exercises, I already take part in real defect investigation, fix validation and release work in my current **System Support Engineer** role.

I cannot publish internal tickets, production logs, customer information or company-specific implementation details, so this page describes the workflow in a generalized form.

## Typical flow

```text
Production issue reported
        ↓
Investigate / reproduce
(SQL, logs, API, application behaviour)
        ↓
Create or update Jira bug
        ↓
Developer implements fix
        ↓
Merge Request → Stage
        ↓
Prepare test cases
        ↓
Fix validation + regression testing
        ↓
     Does it pass?
      /        \
    No          Yes
    ↓             ↓
Document       Merge approved
findings       change to main
    ↓             ↓
Return to      Deploy to
Developer      Production
    ↓             ↓
New fix        Post-deployment
    ↓           validation
  Retest
```

## Example defect lifecycle

### 1. Production investigation

A production process does not produce the expected system event after a user operation.

I first try to reproduce the behaviour and investigate what happened. Depending on the issue, this can include:

- checking application behaviour;
- querying relevant data with SQL;
- checking Kibana/application logs;
- validating API requests/responses;
- comparing expected and actual system behaviour.

### 2. Bug documentation

When the issue is confirmed, I document it in Jira for the development team. The bug normally contains enough information for a developer to understand and reproduce the problem, such as:

- environment;
- problem description;
- reproduction steps;
- expected result;
- actual result;
- relevant technical findings/evidence.

### 3. Developer fix and Stage

After the developer provides a fix, I work with the corresponding GitLab Merge Request and move the change to the **Stage** environment for validation.

### 4. Test preparation and execution

I prepare test cases relevant to the change. The exact cases depend on the bug, but a typical set can include:

| Test | Purpose |
|---|---|
| Main reproduction case | Confirm the original defect is fixed |
| Alternative input/state | Check the fix in another relevant scenario |
| Regression case | Confirm previously working behaviour was not broken |
| Log/data validation | Confirm expected processing is visible in logs or stored data |
| Error handling | Check behaviour when an error/invalid condition can be reproduced |

I document the test result and any useful evidence.

### 5. Failed validation

If the original problem is still reproducible or the fix introduces another problem, I document what failed and return the issue to the developer. After another fix is provided, I repeat the relevant tests.

A developer fix is therefore not treated as complete just because the code was changed — it still needs validation.

### 6. Production release

When the required Stage tests pass, the approved change can continue through the release flow. In the work I currently do, this can include merging the validated change to the main branch and deploying it to **Production**.

### 7. Post-deployment validation

After deployment, I perform a final smoke/post-deployment check to confirm that the expected behaviour is present in Production and that the release did not immediately introduce an obvious problem.

## What this experience has taught me

This workflow has helped me connect QA theory with real systems. I am not only testing a UI result — I often need to understand the incident first, check logs/data/APIs, communicate the problem to developers, validate their fix and follow the change through the release process.

That is the area of QA I am currently developing further with support and mentoring from a QA Team Lead.

## Confidentiality

This example intentionally does **not** include real ticket IDs, customer data, internal URLs, proprietary code, screenshots from production systems or company-specific architecture details.
