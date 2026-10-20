# Detailed Test Cases

Test data in this document is synthetic.

| ID | Type / Technique | Test | Expected Result |
|---|---|---|---|
| TC1 | Positive · Role-based / data-driven | Sign in using each authorized role variant and open **Prepaid Customer Registration**. | Menu item is visible and the form opens successfully for each authorized role. |
| TC2 | Positive · Functional | Select `RES`. | RES fields are shown: first name, last name and personal code. BUS-only fields are not shown. |
| TC3 | Positive · Functional | Select `BUS`. | Company name/code and representative fields are shown; RES-only layout is not active. |
| TC4 | Positive · EP | Select each supported document type individually. | Every supported option can be selected and only one document type is active at a time. |
| TC5 | Positive · Functional | Enter a valid document number such as `12345678`. | Value is accepted and retained. |
| TC6 | Positive · Functional | In RES mode enter `Jonas`, `Jonaitis`, `39001010001`. | All RES values are accepted and retained. |
| TC7 | Positive · Functional | In BUS mode enter synthetic company and representative data. | All BUS values are accepted and retained. |
| TC8 | Positive · EP | Enter valid MSISDN `61234567`. | MSISDN is accepted and retained. |
| TC9 | Positive · BVA | Enter **1** valid MSISDN. | Minimum allowed quantity is accepted. |
| TC10 | Positive · BVA | Add and enter **9** unique valid MSISDNs. | All 9 values remain intact and valid. |
| TC11 | Positive · BVA | Add and enter **10** unique valid MSISDNs. | Maximum quantity is accepted; UI does not allow an 11th field. |
| TC12 | Positive · E2E | Complete all mandatory RES fields with valid data and submit. | Registration succeeds and confirmation is shown. |
| TC13 | Positive · E2E | Complete all mandatory BUS fields with valid data and submit. | Registration succeeds and confirmation is shown. |
| TC14 | Negative · Authorization | Sign in with a restricted back-office role and inspect the menu. | Registration menu item is not visible. |
| TC15 | Negative · Authorization | As a restricted user, navigate directly to the registration route. | Access is denied or user is redirected; direct navigation does not bypass authorization. |
| TC16 | Negative · State validation | Leave customer type unselected and attempt to continue/submit. | Submission is blocked and the required selection is indicated. |
| TC17 | Negative · Input constraint | Select one document type, then attempt to activate another simultaneously. | Only one document type remains selected. |
| TC18 | Negative · EP | Submit with empty document number; repeat with invalid symbols such as `###`. | Submission is blocked and validation feedback is shown. |
| TC19 | Negative · UI state | Select RES and inspect the form. | BUS-only fields are hidden/not applicable. |
| TC20 | Negative · UI state | Select BUS and inspect the form. | BUS-specific fields are shown and RES-only layout is not active. |
| TC21 | Negative · EP | Enter invalid MSISDN `ABC$$$` and attempt submission. | Invalid value is rejected and/or submission is blocked with validation feedback. |
| TC22 | Negative · BVA | Leave MSISDN empty (**0** numbers) and attempt submission. | Submission is blocked because at least one MSISDN is required. |
| TC23 | Negative · BVA | Add 10 MSISDNs and attempt to add an **11th**. | 11th field cannot be added; existing values remain unchanged. |
| TC24 | Negative · Required-field validation | Omit one mandatory field from an otherwise valid RES/BUS form and submit. | Registration is not created and the missing/invalid field is identified. |

## Preconditions

Unless a case states otherwise:
- user is authenticated;
- registration form is reachable for the role under test;
- the environment is available and test data is permitted;
- no real customer information is used.

## Execution note

For actual execution, each test run should additionally capture **Actual Result**, **Status (Pass/Fail/Blocked)**, environment/build, execution date and linked defect ID when applicable. These fields are intentionally not pre-filled in this design-only portfolio because no live public application is being claimed as the system under test.
