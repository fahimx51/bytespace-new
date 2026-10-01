# ByteSpace New

A responsive learning-platform website built from a Figma design: a full landing page plus Login and Signup pages.

**Live demo:** https://bytespace-new-nine.vercel.app/
**Repository:** https://github.com/fahimx51/bytespace-new

## Pages

| Route     | Description                                                       |
| --------- | ----------------------------------------------------------------- |
| `/`       | Landing page: hero, courses, learning paths, testimonials and more |
| `/login`  | Login page with form validation                                   |
| `/signup` | Signup page with form validation                                  |

## Tech Stack

- [Next.js](https://nextjs.org/) (App Router)
- TypeScript
- Tailwind CSS
- `next/image` for image optimization
- Deployed on Vercel

## Features

- Pixel-matched implementation of the provided Figma design
- Fully responsive for phones, tablets and desktops
- Sticky navbar with a mobile menu
- Shared `(auth)` route-group layout for the Login and Signup pages
- Client-side form validation with inline errors and accessible ARIA attributes
- Reusable components, with content kept in a single data file

## Project Structure

```
app/
├── (auth)/
│   ├── layout.tsx        # shared layout for login and signup
│   ├── login/page.tsx
│   └── signup/page.tsx
└── page.tsx              # landing page
components/
├── auth/                 # LoginForm, RegisterForm, AuthIntro
├── footer/
├── header/
├── landing-page/         # landing page sections
└── ui/                   # shared UI (Logo, CourseCard)
data/
└── data.ts               # courses and testimonials
lib/
└── auth/validation.ts    # form validation rules
public/                   # icons and images
```

## Getting Started

```bash
# clone the repository
git clone https://github.com/fahimx51/bytespace-new.git
cd bytespace-new

# install dependencies
npm install

# start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Notes

- There is no backend. The Login and Signup forms validate input on the client but do not authenticate, and the social login buttons are visual only.
- Course and testimonial content is static placeholder data.

## Git Workflow

Work was done on separate feature branches and merged into `main` through Pull Requests.