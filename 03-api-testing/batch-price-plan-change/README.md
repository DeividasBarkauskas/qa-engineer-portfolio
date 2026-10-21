# Postman Batch API Automation — Price Plan Change

This project is a **sanitized reconstruction of a real business-support task** I solved using Postman and JavaScript.

> **Confidentiality:** All phone numbers, identifiers, URLs, credentials, tokens, employee IDs, request structures and system names in this public example are synthetic. The original internal request and production data are not included.

## Business problem

A business request required a price-plan related change for roughly **7,000 subscriptions**.

The existing UI supported a maximum of **100 subscriptions per operation**. Processing the full request only through the UI would therefore require around **70 separate operations**, together with repeated manual data entry.

I used an existing API flow in **Postman** and prepared a small JavaScript pre-request script that converts a list of subscription identifiers into the batch structure required by the request.

For the real task I processed the data in batches of approximately **500 subscriptions**, reducing the work to around **14 API requests** instead of roughly 70 UI operations.

## What I implemented

The Postman pre-request script:

1. Accepts a multiline list of subscription identifiers.
2. Splits the input into individual values.
3. Trims whitespace and removes empty lines.
4. Converts every identifier into a sanitized XML batch item.
5. Joins all items into one batch payload.
6. Generates a unique session/reference value for each request.
7. Stores the generated values as Postman variables used by the request body.

This allowed the same request to be reused for each batch by replacing only the input list.

## Simplified workflow

```text
Business request (~7,000 subscriptions)
                |
                v
        Split into batches
         (~500 per batch)
                |
                v
     Postman pre-request script
                |
                v
   Build batch XML dynamically
                |
                v
        Send API request
                |
                v
       Validate response
                |
                v
       Continue next batch
```

## Why this was useful

The goal was not to replace the product UI, but to handle a large one-time operational request more efficiently while using an existing supported API flow.

Approximate comparison:

| Approach | Batch size | Operations for ~7,000 records |
|---|---:|---:|
| UI | 100 | ~70 |
| Postman batch request | 500 | ~14 |

This reduced repetitive manual work and the chance of mistakes caused by repeatedly creating the same operation through the UI.

## QA / technical skills demonstrated

- API testing with Postman
- JavaScript pre-request scripting
- Dynamic request generation
- XML payload construction
- Postman variables
- Batch processing
- Working with large test/operational data sets
- Translating a business request into a technical solution
- Manual validation of API requests and responses

## Public demo

The included JavaScript file reproduces only the general technique with synthetic identifiers and a generic XML structure. It does **not** contain the original endpoint, authentication, payload schema, customer data or internal business logic.

[View the sanitized pre-request script](./pre-request.js)
