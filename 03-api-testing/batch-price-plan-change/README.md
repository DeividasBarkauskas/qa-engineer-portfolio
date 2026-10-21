# Postman Batch API Automation — Price Plan Change

This project is a **sanitized reconstruction of a real business-support task** I solved using Postman and JavaScript.

> **Confidentiality:** All phone numbers, identifiers, URLs, credentials, tokens, employee IDs, request structures and system names in this public example are synthetic. The original internal request and production data are not included.

## Business problem

A business request required a price-plan change for roughly **7,000 subscriptions**.

The existing UI supported a maximum of **100 subscriptions per operation**. Processing the full request only through the UI would therefore require around **70 separate operations**.

The UI flow also loads additional subscription data and retrieves available optional offers/services for the selected subscriptions. This is useful during a normal interactive sales flow, but it adds significant processing time when a large number of subscriptions is selected.

For this specific business request, the target price-plan change was already known and no additional offers were required. I therefore used the application's existing backend API flow directly through **Postman**, sending only the information required for the requested price-plan/add-on order instead of repeatedly running the full interactive UI flow.

I prepared a JavaScript pre-request script that converts a list of subscription identifiers into the batch structure required by the request. For the real task I processed the data in batches of approximately **500 subscriptions**, reducing the work to around **14 API requests** instead of roughly 70 UI operations.

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

## Business impact

A UI operation for approximately **100 subscriptions took around 10 minutes** because the interactive flow had to load subscription information and retrieve available offers/services before the order could be completed.

For approximately 7,000 subscriptions this meant around **70 UI operations**, or roughly **11 hours 40 minutes (~12 hours)** of repetitive processing.

With the Postman workflow, I processed approximately **500 subscriptions per batch**. Preparing and sending each batch took around **5 minutes**, so the recurring execution for the full set required approximately **14 requests / 70 minutes**.

| Approach | Batch size | Operations for ~7,000 | Approx. execution time |
|---|---:|---:|---:|
| UI workflow | 100 | ~70 | ~11 h 40 min |
| Postman batch workflow | 500 | ~14 | ~70 min |

That is roughly a **90% reduction in recurring operator time** for this type of bulk request, while also reducing repetitive manual input.

The API approach did not replace or bypass business validation. It used the application's existing backend flow for a case where the required change was already known, avoiding UI-specific offer retrieval and other interactive data-loading steps that were not needed for this bulk operation.

## QA / technical skills demonstrated

- API testing with Postman
- JavaScript pre-request scripting
- Dynamic request generation
- XML payload construction
- Postman variables
- Batch processing
- Working with large operational data sets
- Understanding UI-to-backend API flows
- Translating a business request into a technical solution
- Manual validation of API requests and responses
- Process optimization and risk reduction

## Public demo

The included JavaScript file reproduces only the general technique with synthetic identifiers and a generic XML structure. It does **not** contain the original endpoint, authentication, payload schema, customer data or internal business logic.

[View the sanitized pre-request script](./pre-request.js)
