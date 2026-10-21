# QA Engineer Portfolio — Deividas Barkauskas

I currently work as a **System Support Engineer**, and my role has gradually expanded into hands-on QA responsibilities. I am being mentored by a **QA Team Lead** and taking over practical QA work alongside my production-support responsibilities.

This repository is a place where I document what I am learning and what I already use in practice. It includes a QA mentoring exercise and an anonymized description of the real defect-validation and release workflow I work with.

> **Confidentiality:** No real customer data, credentials, production URLs, proprietary source code or internal company identifiers are included. Public examples are generalized and use synthetic test data.

## What I do in my current role

My work often starts with a problem reported in Production and continues through investigation, testing and release validation:

1. Investigate production incidents using **SQL, Kibana/logs and APIs**.
2. Reproduce the problem and document the issue in **Jira** for developers.
3. After a developer provides a fix, move the change through a **GitLab Merge Request to Stage**.
4. Prepare the relevant test cases and validate the fix in Stage.
5. Perform **functional and regression testing** and check logs/data where needed.
6. If the issue is still reproducible, document the findings and return it to the developer for another fix and retest.
7. If validation passes, merge the approved change to the main branch and **deploy it to Production**.
8. Perform **post-deployment / smoke validation** to confirm the change works correctly in Production.

A simplified example of this process is documented here:

[Real-world QA workflow](./02-real-world-qa-workflow/README.md)

## Portfolio projects

### 1. QA Mentoring Exercise — Customer Registration

This is a practical QA exercise completed as part of my hands-on mentoring with a QA Team Lead. The exercise covers:

- Acceptance Criteria
- Test Scenarios
- Test Cases
- Positive and negative testing
- Requirement Traceability Matrix (RTM)
- Boundary Value Analysis (BVA)
- Equivalence Partitioning (EP)
- Risk-based thinking
- Test-case optimization

[Open the mentoring exercise](./01-manual-testing/customer-registration/README.md)

### 2. Anonymized Real-World QA Workflow

A simplified example showing how I handle a production issues from investigation through developer fix, Stage validation, retesting and Production deployment.

[Open the workflow example](./02-real-world-qa-workflow/README.md)

## Tools I use

**Testing:** Manual Testing · Functional Testing · Regression Testing · Smoke Testing · Test Cases · Test Scenarios · Acceptance Criteria · RTM

**Technical:** SQL/MySQL · REST APIs · Postman · Kibana / log analysis · JavaScript · HTML/CSS · Git · GitLab · GitHub

**Work tools:** Jira · Confluence · Jenkins

## Related project

I also maintain an [internal automation / price-plan generator](https://github.com/DeividasBarkauskas/new-priceplan-generator). I created it to automate part of a repetitive work process by reading structured Excel input and generating standardized SQL. It is a separate example of my JavaScript, SQL and internal-tooling experience.

## Next steps

I plan to extend this portfolio gradually with API testing and Playwright automation as I gain more hands-on experience in those areas.
