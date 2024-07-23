# Multi Tenant Web App with SvelteKit

This is a healthcare platform to demonstrate multi-tenancy with Supabase in a Sveltekit application, with 
the following features:

1. User Authentication and Security:
Implement user authentication with Supabase Auth to ensure only authorized users can access the app, with two groups of users: a person who has signed up to join the platform (member), or the app's administrator.

2. Medical Form Questionnaire:
A member fills out medical questionnaire within the app. This form include personal information, medical history and other relevant details. It is created with Jotform and embedded using iframe inside the app.

3. Data Collection and Storage:
The app collects and securely stores responses from the forms inside Jotform.

4. Report Generation:
Based on user inputs, the app allows administrators to view all form submission details and generate reports based on a form submission. These reports could include diagnostic summaries, treatment recommendations and health trends over time. Reports to be presented in various formats (charts, tables, or plain text), to help users understand their health status. (Currently, it has been simplified to just display their form submission details, instead of a report)

The report's data is securely stored in Supabase and can only be accessed by the administrator or the authenticated user.

## User flow
![User login page](./images/aura-user-login.png)
*Login form page. Click on 'Sign up' to create a new user*
These are the following credentials you may use to test a member login. 
Email: user@test.com, Password: securepassword

![Home page](./images/aura-home.png)
*After logging in, the member is redirected to a simple home page with the options to either fill in questionnaire or view their report results*

![Form page](./images/aura-jotform.png)
*Form is built with Jotform and embedded into the app's interface with iframe. Logged-in member's ID is automatically tagged to the submitted form, so that the form can be easily extracted*

![Report page](./images/aura-report.png)
*After an administrator generates a report based the member's form details, the member will then be able to view the report's content. Currently, this space has been simplified to just display a form submission details, instead of a report.*

## Administrator flow
These are the following credentials you may use to test an administrator login. 
Email: admin1@test.com, Password: securepassword

![Admin Dashboard page](./images/aura-admin-dashboard.png)
*After logging in, the administrator is redirected to a page that lists out all Jotform form submissions. Click on 'view details' to view the submission details*

![Form  page](./images/aura-form-details.png)
*Form submission details displayed in a table. Clicking on 'Generate Report' button will run a data processing pipeline to create the report results. In the future, administrators will also be able to add extra data such as comments.*

## Developing

Install dependencies with `npm install` (or `pnpm install` or `yarn`), then start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
