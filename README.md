# Playwright Magento Automation

This project demonstrates end-to-end automation testing for the [Magento Software Testing Board](https://magento.softwaretestingboard.com/) demo e-commerce site. It uses **Playwright with JavaScript** and follows the Page Object Model (POM) for maintainability and scalability.

## Features

- ✅ End-to-end UI test scripts for core e-commerce flows
- ✅ Test scenarios for login, registration, add to cart, checkout, and form validations
- ✅ API testing using Postman and REST Assured
- ✅ Automated email verification using YOPmail (temporary email service)
- ✅ Page Object Model (POM) structure for reusable and maintainable code

## Project Structure

```
playwright-automation-portfolio/
│
├── fixtures/                # Test data, UI texts, and base fixtures
│   ├── test-data/           # Input data for tests
│   ├── texts/               # UI strings/messages for assertions
│   └── base.js              # Global setup (e.g., login, add to cart fixture)
│
├── support/                 # Helpers and abstractions
│   ├── api/                 # API request logic and utilities
│   └── pageObjects/         # Page Object Model classes for UI automation
│   └── commands.js          # Custom helper functions
│
├── tests/                   # Test files
│   ├── Authentication/      # Login, registration, forgot password, etc.
│   └── Features/            # Feature-specific tests (dashboard, cart, etc.)
│
├── .gitignore
├── Jenkinsfile
├── README.md
├── playwright.config.js     # Playwright configuration
└── package.json             # Project dependencies and scripts
```

## Setup

1. **Clone the repository**
   ```sh
   git clone <repo-url>
   cd playwright-automation-portfolio
   ```

2. **Install dependencies**
   ```sh
   npm install
   ```

3. **Run tests**
   ```sh
   npx playwright test
   ```

4. **View test report**
   ```sh
   npx playwright show-report
   ```

## Notes

- The project uses Playwright's built-in test runner.
- Test data and selectors are managed via fixtures and the Page Object Model.
- API tests and email verification are included for end-to-end coverage.

---
