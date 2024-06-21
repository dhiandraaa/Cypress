## Objective:
Your task is to create and execute test cases for testing the login functionality of a web application using Cypress.

## Instructions:
1. Download and install Node JS from [here](https://nodejs.org).
2. Clone / download the this GitHub repository
3. Run `npm install` and start the node server using `node index.js`.
4. Open http://localhost:3000 to access the login page.

   The correct login credentials are:
   - Username: admin
   - Password: 123456

5. Set up Cypress to run tests against the provided login page.
6. Create test cases to validate the login functionality based on the following scenarios:
   - Positive test case: Success login.
   - Negative test case: Failed login.
   - Boundary test case: Empty login.
7. Execute this with `npm run test:report`
8. The report is in `cypress\reports\mochawesome.json`
