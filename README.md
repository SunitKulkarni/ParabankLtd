# ParaBank UI Automation

End-to-end browser automation for key customer journeys in the [ParaBank demo banking application](https://parabank.parasoft.com/parabank/index.htm). Built with JavaScript and Playwright Test, this project demonstrates how browser workflows can be organized with reusable page objects and verified with UI assertions.

## Project highlights

- **Customer access:** checks for valid login, invalid credentials, and missing-field feedback.
- **Registration:** exercises registration form validation and the registration flow.
- **Account services:** covers fund transfers, bill payments, loan requests, transaction search, and contact-information updates.
- **Reusable page objects:** keeps page navigation and common interactions separate from test scenarios.
- **Continuous integration:** GitHub Actions installs dependencies and runs the Playwright suite on pushes and pull requests to `main` and `master`.
- **Failure diagnostics:** Playwright is configured to capture screenshots on test failure and traces on the first retry.

## Tech stack

| Technology | Use |
| --- | --- |
| JavaScript (CommonJS project) | Test and page-object implementation |
| [Playwright Test](https://playwright.dev/docs/intro) | Browser automation, assertions, and HTML reporting |
| GitHub Actions | Continuous integration |

## Project structure

```text
.
├── .github/
│   └── workflows/
│       └── playwright.yml       # GitHub Actions workflow
├── pages/
│   ├── AccountServices/          # Account-service page objects
│   └── Login/                    # Login and registration page objects
├── tests/
│   ├── AccountServices/          # Account-service scenarios
│   ├── Login/                    # Login scenarios
│   └── Registration/             # Registration scenarios
├── package.json
└── playwright.config.js
```

## Getting started

### Prerequisites

- Node.js (an active LTS release is recommended)
- npm

### Install dependencies and browser

```bash
npm ci
npx playwright install chromium
```

### Run the tests

```bash
npx playwright test
```

The configured browser project is Chromium. Playwright writes an HTML report to `playwright-report/`; view the most recent report with:

```bash
npx playwright show-report
```

To run a specific test file:

```bash
npx playwright test tests/Login/login.spec.js
```

## Test coverage

| Area | Example scenarios |
| --- | --- |
| Login | Successful login, rejected credentials, and empty credentials |
| Registration | Required-field validation and registration flow |
| Transfers | Submitting a transfer between accounts |
| Bill payment | Payment form validations, account-number matching, and payment submission |
| Loans | Loan-request workflow |
| Transactions | Finding transactions |
| Account profile | Updating contact information |

Tests interact with the live public ParaBank demo, so execution requires internet access and may be affected by the availability or data state of that external service.

## Implementation approach

Tests use Playwright's `page` fixture to drive the browser and page-object classes under `pages/` to encapsulate application navigation and interactions. Assertions verify visible UI outcomes, while Playwright's HTML reporter and failure artifacts help with test diagnosis.

## Current project notes

- Some test files currently use `test.only`, which focuses the run on those cases and excludes other tests. Remove or replace focused tests before expecting a full-suite run.
- Some scenarios contain `page.pause()` calls and require Playwright Inspector interaction. Remove these pauses for unattended local or CI execution.
- The project currently has no npm test scripts; the commands above invoke Playwright directly.

## Continuous integration

The workflow in `.github/workflows/playwright.yml` runs on pushes and pull requests targeting `main` or `master`. It uses Node.js LTS, installs dependencies and Playwright browsers, runs `npx playwright test`, and uploads the HTML report as a workflow artifact.

## Skills demonstrated

**End-to-end testing · Playwright · JavaScript · Page Object Model · UI assertions · Test reporting · GitHub Actions**
