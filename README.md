````markdown
# CareerGenie

![CareerGenie Logo](jitendra2407/careergenie/CareerGenie-f10226a90807f2d4e55e1d7ade5ad4e4fb5d2f99/public/logo.png)

## Overview

CareerGenie is an intelligent career development platform designed to empower professionals in their career journey. Leveraging the power of AI, it provides personalized guidance, industry-specific insights, and powerful tools for creating job application materials and preparing for interviews. Whether you're a recent graduate or a seasoned professional, CareerGenie is your AI-powered coach for achieving professional success.

## Features

-   **AI-Powered Career Guidance**: Get personalized career advice and insights powered by advanced AI technology.
-   **Interview Preparation**: Practice with role-specific questions and get instant feedback to improve your performance.
-   **Industry Insights**: Stay ahead with real-time industry trends, salary data, and market analysis.
-   **Smart Resume Creation**: Generate ATS-optimized resumes with AI assistance, with an intuitive markdown editor and PDF download option.
-   **AI Cover Letter Generation**: Instantly create compelling and tailored cover letters for any job application.
-   **Onboarding**: A personalized onboarding experience to tailor the app to your specific industry and career goals.
-   **Performance Tracking**: Track your interview quiz performance over time with charts and detailed analytics.

## Tech Stack

-   **Framework**: [Next.js](https://nextjs.org/)
-   **Authentication**: [Clerk](https://clerk.com/)
-   **Database**: PostgreSQL
-   **ORM**: [Prisma](https://www.prisma.io/)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/) with [shadcn/ui](https://ui.shadcn.com/)
-   **AI**: [Google Generative AI (Gemini)](https://ai.google.dev/)
-   **Deployment**: Vercel
-   **Background Jobs**: [Inngest](https://www.inngest.com/)

## Getting Started

### Prerequisites

-   Node.js (v18.18.0 or later)
-   npm, yarn, pnpm, or bun
-   PostgreSQL database

### Installation

1.  **Clone the repository:**

    ```bash
    git clone [https://github.com/jitendra2407/careergenie.git](https://github.com/jitendra2407/careergenie.git)
    cd careergenie
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    # or
    bun install
    ```

3.  **Set up environment variables:**

    Create a `.env` file in the root of your project and add the necessary environment variables. See the [Environment Variables](#environment-variables) section below for more details.

4.  **Set up the database:**

    Run the following command to apply the database migrations:

    ```bash
    npx prisma migrate dev
    ```

5.  **Run the development server:**

    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    # or
    bun dev
    ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Environment Variables

To run this project, you will need to add the following environment variables to your `.env` file:

````

# Clerk Authentication

NEXT\_PUBLIC\_CLERK\_PUBLISHABLE\_KEY=
CLERK\_SECRET\_KEY=
NEXT\_PUBLIC\_CLERK\_SIGN\_IN\_URL=/sign-in
NEXT\_PUBLIC\_CLERK\_SIGN\_UP\_URL=/sign-up
NEXT\_PUBLIC\_CLERK\_AFTER\_SIGN\_IN\_URL=/dashboard
NEXT\_PUBLIC\_CLERK\_AFTER\_SIGN\_UP\_URL=/onboarding

# Database

DATABASE\_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE"

# Google Generative AI

GEMINI\_API\_KEY=

# Inngest

INNGEST\_EVENT\_KEY=

```

## Deployment

The easiest way to deploy this Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
```
