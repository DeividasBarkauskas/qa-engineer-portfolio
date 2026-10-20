# Acceptance Criteria

| ID | Acceptance Criterion |
|---|---|
| AC1 | An authenticated and authorized sales user can see the **Prepaid Customer Registration** menu item and open the registration form. |
| AC2 | The form allows the user to select either a **Residential (RES)** or **Business (BUS)** customer type. |
| AC3 | The form allows selection of exactly one document type from the supported document-type list. |
| AC4 | The form contains a document-number field and validates required/invalid input. |
| AC5 | For RES customers, the form displays and accepts first name, last name and personal-code fields. |
| AC6 | For BUS customers, the form displays and accepts company name, company code, representative first name, representative last name and personal-code fields. |
| AC7 | The form accepts a prepaid MSISDN in the expected numeric format. |
| AC8 | The user can register between **1 and 10 MSISDNs** for the same customer. Additional MSISDN fields must not overwrite previously entered values. |
| AC9 | A fully completed valid RES form can be submitted successfully. |
| AC10 | A fully completed valid BUS form can be submitted successfully. |

## Requirement clarification note

The `1–10 MSISDN` rule is intentionally defined for this public portfolio version so that boundary-value testing can be demonstrated. In a production project, QA should clarify the business and technical limits before finalizing boundary cases.
