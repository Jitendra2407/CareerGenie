# AI Career Companion

An intelligent career development platform that leverages AI to help professionals advance their careers through personalized insights, resume building, interview preparation, and cover letter generation.

## Features

### 🎯 Industry Insights Dashboard
- Real-time industry analysis powered by Google Gemini AI
- Salary range comparisons across different roles
- Market outlook and growth rate tracking
- Top skills and trending technologies in your industry
- Personalized skill recommendations

### 📝 AI-Powered Resume Builder
- Interactive form-based resume creation
- Live markdown preview and editing
- AI-powered content improvement suggestions
- Professional formatting with sections for:
  - Contact information
  - Professional summary
  - Skills
  - Work experience
  - Education
  - Projects
- Export to PDF functionality

### 💼 Cover Letter Generator
- AI-generated tailored cover letters
- Customized based on:
  - Job description
  - Company information
  - Your professional background
  - Industry-specific keywords
- Save and manage multiple cover letters
- Markdown preview and editing

### 🎓 Interview Preparation
- Industry-specific technical interview questions
- Interactive quiz format with multiple-choice questions
- Performance tracking over time
- Detailed explanations for each answer
- AI-generated improvement tips based on wrong answers
- Historical performance charts
- Progress statistics

## Tech Stack

### Frontend
- **Next.js 14+** - React framework with App Router
- **React Hook Form** - Form state management
- **Zod** - Schema validation
- **Tailwind CSS** - Styling
- **shadcn/ui** - UI component library
- **Recharts** - Data visualization
- **MDEditor** - Markdown editing and preview
- **html2pdf.js** - PDF generation
- **date-fns** - Date formatting

### Backend
- **Next.js Server Actions** - API endpoints
- **Prisma** - ORM for database management
- **PostgreSQL** - Database (recommended)

### Authentication
- **Clerk** - User authentication and management

### AI Integration
- **Google Gemini AI** - AI model for content generation
  - Model: `gemini-2.5-flash`

## Prerequisites

- Node.js 18+ installed
- PostgreSQL database (or other Prisma-supported database)
- Clerk account for authentication
- Google AI API key (Gemini)

## Installation

1. **Clone the repository**
```bash
git clone <your-repo-url>
cd ai-career-companion
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**

Create a `.env` file in the root directory:

```env
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/career_companion"

# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

# Clerk URLs
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/onboarding

# Google AI
GEMINI_API_KEY=your_gemini_api_key
```

4. **Set up the database**

```bash
# Generate Prisma Client
npx prisma generate

# Run migrations
npx prisma migrate dev

# (Optional) Seed the database
npx prisma db seed
```

5. **Run the development server**

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see the application.

## Project Structure

```
├── actions/                    # Server actions
│   ├── cover-letter.js        # Cover letter generation logic
│   ├── dashboard.js           # Industry insights generation
│   ├── interview.js           # Quiz generation and results
│   ├── resume.js              # Resume management
│   └── user.js                # User profile management
├── app/
│   ├── (main)/                # Main application routes
│   │   ├── ai-cover-letter/  # Cover letter pages
│   │   ├── dashboard/        # Industry insights dashboard
│   │   ├── interview/        # Interview preparation
│   │   └── resume/           # Resume builder
│   ├── hooks/                # Custom React hooks
│   ├── lib/                  # Utility functions and schemas
│   └── page.jsx              # Landing page
├── components/               # Reusable components
│   ├── ui/                  # shadcn/ui components
│   └── hero.jsx             # Hero section
├── data/                    # Static data (FAQs, features, etc.)
├── lib/
│   └── prisma.js           # Prisma client instance
└── prisma/
    └── schema.prisma       # Database schema
```

## Database Schema

Key models:
- **User** - User profile with industry, skills, experience
- **IndustryInsight** - AI-generated industry analysis
- **Resume** - User's resume content
- **CoverLetter** - Generated cover letters
- **Assessment** - Quiz results and performance tracking

## Key Features Implementation

### AI Content Generation

All AI features use Google Gemini AI with structured prompts:
- Industry insights with JSON-formatted responses
- Resume content improvements
- Cover letter generation based on job descriptions
- Technical interview questions with explanations

### Real-time Updates

- Uses Next.js Server Actions for server-side operations
- Automatic revalidation with `revalidatePath`
- Optimistic UI updates for better UX

### Data Persistence

- All user data stored in PostgreSQL via Prisma
- Automatic syncing with Clerk authentication
- Industry insights cached and updated weekly

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy

### Other Platforms

Ensure your platform supports:
- Next.js 14+ with App Router
- PostgreSQL database
- Environment variables
- Node.js 18+

## Environment Variables Reference

| Variable | Description | Required |
|----------|-------------|----------|
| `DATABASE_URL` | PostgreSQL connection string | Yes |
| `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` | Clerk public key | Yes |
| `CLERK_SECRET_KEY` | Clerk secret key | Yes |
| `GEMINI_API_KEY` | Google AI API key | Yes |
| `NEXT_PUBLIC_CLERK_SIGN_IN_URL` | Sign in page URL | Yes |
| `NEXT_PUBLIC_CLERK_SIGN_UP_URL` | Sign up page URL | Yes |
| `NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL` | Redirect after sign in | Yes |
| `NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL` | Redirect after sign up | Yes |

## Usage

1. **Onboarding**: Complete your profile with industry, experience, and skills
2. **Dashboard**: View AI-generated insights about your industry
3. **Resume Builder**: Create and optimize your resume with AI assistance
4. **Cover Letters**: Generate tailored cover letters for job applications
5. **Interview Prep**: Practice with industry-specific technical questions

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Google Gemini AI for powering the AI features
- Clerk for authentication
- shadcn/ui for the beautiful component library
- The Next.js team for an amazing framework

## Support

For support, email support@example.com or open an issue in the repository.

## Roadmap

- [ ] Job search integration
- [ ] LinkedIn profile optimization
- [ ] Mock video interviews
- [ ] Salary negotiation guidance
- [ ] Career path recommendations
- [ ] Networking suggestions
- [ ] Portfolio builder

---

Built with ❤️ using Next.js and AI