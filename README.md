 # Cypress Automation Demo

This repository contains end-to-end tests for the `cypress-automation-demo` project using Cypress.

## Prerequisites

Before running the Cypress tests, ensure you have the following installed:

- **Node.js** (version 16 or above) - [Download Node.js](https://nodejs.org/)
- **npm** (Node Package Manager) - Comes with Node.js

To set up the project, follow these steps:

```bash
# Verify Node.js and npm versions
node -v
npm -v

# installation

# 1. Clone the repository
git clone git@github.com:Hsammarraie/-cypress-automation-demo.git

# 2. Navigate to the project directory
cd cypress-automation-demo

# 3. Install project dependencies
npm install

# 4. Run Cypress in interactive mode
npx cypress open

# To run tests in headless mode, use this command instead:
npx cypress run
