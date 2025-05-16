Welcome to my automation testing portfolio! This project showcases my skills on automation testing using **Playwright with JavaScript**. The tests are written for the e-commerce demo site **[Magento Software Testing Board](https://magento.softwaretestingboard.com/)**.

---

## 🌐 Website Under Test: Magento Software Testing Board

The Magento Software Testing Board website is a fully functional e-commerce demo platform.  
The features that I created tests for in this project are:
- ✅ End-to-end Playwright test scripts
- ✅ Test scenarios covering login, add to cart, checkout, and form validations
- ✅ API Testing using Postman and REST Assured
  - Including a test to retrieve the value of an email received via YOPmail (temporary email service)
- ✅ Page Object Model (POM) structure for maintainability and scalability

### 🛠️ In Progress / Coming Soon

- 🚀 **CI/CD Integration**  
  Plan to integrate with [GitHub Actions](https://github.com/features/actions) or [Jenkins](https://www.jenkins.io/) for automated test execution on each code push.

- 📋 **Test Report to Use**  
  Planning to enhance reporting with **Allure Report** or integrate with **Playwright Test HTML Reporter** for detailed execution insights.

- 📋 **Test Management Tool**  
  Will record and manage test cases and results using **TestRail**, **Xray (for Jira)**, or **Zephyr**.
  
- 📋 Using custom commands  
  Continuing to modularize and reuse code efficiently with Playwright's custom command patterns.

## 🔧 Tech Stack  

| Area               | Technology / Tool                        |
|--------------------|------------------------------------------|
| Language           | JavaScript                               |
| Framework          | Playwright                               |
| Test Runner        | Playwright Test                          |
| Browser Test       | Chromium                                 |
| Version Control    | Git & GitHub                             |
| API Testing Tools  | Postman, REST Assured                    |
| Temporary Email    | YOPmail (automated email verification)   |
| Test Management    | (Planned) TestRail / Xray / Zephyr       |
| Test Reporting     | (Planned) HTML Reporter, Allure Reports  |
| CI/CD Integration  | (Planned) GitHub Actions / Jenkins       |

## 📂 Folder Structure
<pre lang="markdown"> 
playwright-automation-portfolio/
│
├── fixtures              # Stores test data, UI texts, and base fixture logic
│   ├── test-data         # JSON/JS files with input data for tests
│   ├── texts             # UI strings or messages for assertions
│   └── base.js           # Global setup (e.g., login, add to cart fixture, etc.)
│
├── support               # Reusable helpers and abstractions
│   ├── api               # API request logic and utils (e.g., auth, CRUD)
│   └── pageObjects       # Page Object Model classes for UI automation
│   └── commands.js       # Custom helper functions or commands
│
├── tests                 # Organized test files
│   ├── Authentication    # Login, registration, forgot password, etc.
│   └── Features          # Feature-specific tests (dashboard, cart, etc.)
│
├── .gitignore            # Files/folders to exclude from git
├── Jenkinsfile           # CI pipeline config for Jenkins
├── README.md             # Project documentation
├── playwright.config.js  # Playwright settings (timeout, baseURL, retries, etc.)
└── package.json          # Project dependencies and scripts
 </pre>



## 🙋 About Me

I'm a QA Engineer with a strong passion for automation and quality. This portfolio reflects my hands-on experience in writing clean, maintainable test scripts and understanding real-world test scenarios.  
I am eager to learn new technologies and expand my skill set to deliver even better testing solutions.

---

## 🤝 Let's Connect

Feel free to reach out or connect with me on LinkedIn:  
[![LinkedIn](https://img.shields.io/badge/LinkedIn-blue?logo=linkedin&style=flat-square)](https://www.linkedin.com/in/cmtadifa/)

---

Thank you for visiting my mini portfolio! 🚀
