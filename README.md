# Revie Supplier Onboarding & Dashboard

This project It demonstrates a clean, scalable approach to building a (English/Arabic) bilingual **supplier onboarding flow and dashboard** using modern frontend technologies.

The application allows suppliers to register via a multi-step form and access a dashboard showing their projects after authentication.

---

## 🔗 Live Demo
👉 **Deployed App:** https://revie-supplier-portal.vercel.app  
👉 **GitHub Repo:** https://github.com/JalalMa/revie-supplier-portal.git  

---

## 🛠 Tech Stack

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **shadcn/ui**
- **Icons**: [Lucide Icons]
- **next-intl** (English / Arabic with RTL support)
- **Form Handling**: **Controlled Components** (Pure React - No form libraries)
- Mock authentication (localStorage)
- Mock data (no backend)
- **State Management**: React useState + useMemo (no external state library)

---

## ✨ Features

### Supplier Signup
- Multi-step registration form
- Step-based validation
- Clean and simple UX
- Data persistence between steps
- Mock authentication on submit localStorage-based authentication system
- **Form Validation**: Real-time validation with error messages
- **Redirect Protection**: Auth guards prevent unauthorized access to dashboard

### Supplier Dashboard
- Auth-protected dashboard
- Modern layout with sidebar navigation
- Personalized welcome message (contact name in brand color)
- Project table with:
  - Status badges
  - Project details
  - Search by project name
  - Filter by project status
  - Combined search + filter capabilities
  - Action buttons (view, delete)
  - Real-time updates when projects are deleted
- Responsive design (mobile & desktop)
- English / Arabic language support with full RTL layout
- **Language Switcher**: 
  - Visible in header on desktop
  - Moved to sidebar on mobile
 **Coming Soon Pages**: Profile, Projects, and Settings pages with elegant placeholders


---

## 🌍 Internationalization (i18n)

The application supports **English (LTR)** and **Arabic (RTL)** using `next-intl`.

### Key Points
- Locale-based routing: `/en` and `/ar`
- Automatic `dir="ltr"` / `dir="rtl"` handling
- **RTL Support**: Right-to-left layout for Arabic
- **Dynamic Language Switching**: Seamless transition between languages
- **Localized Content**: All UI elements, forms, and messages translated
- Layout and components adapt correctly in RTL mode

This ensures the dashboard remains usable and visually consistent for Arabic users.

---

## 🧱 Project Architecture

The project follows a **feature-oriented and scalable structure**:

```
src/
├── app/
│   ├── [locale]/              # Internationalized routes
│   │   ├── dashboard/         # Dashboard pages
│   │   │   ├── page.tsx       # Main dashboard
│   │   │   ├── projects/      # Projects page (coming soon)
│   │   │   ├── profile/       # Profile page (coming soon)
│   │   │   └── settings/      # Settings page (coming soon)
│   │   ├── login/             # Login page (coming soon)
│   │   └── signup/            # Multi-step signup flow
│   └── page.tsx               # Landing page
├── components/
│   ├── common/                # Reusable components
│   │   ├── ComingSoon.tsx     # Coming soon component
│   │   └── LanguageSwitcher.tsx
│   ├── dashboard/             # Dashboard-specific components
│   │   ├── DashboardHeader.tsx
│   │   ├── DashboardLayout.tsx
│   │   ├── ProjectFilters.tsx
│   │   ├── ProjectsTable.tsx
│   │   ├── Sidebar.tsx
│   │   └── StatsCards.tsx
│   ├── forms/                 # Form components
│   │   ├── StepCompanyDetails.tsx
│   │   ├── StepContactInfo.tsx
│   │   ├── StepServiceCategories.tsx
│   │   └── SupplierSignupForm.tsx
│   ├── layout/                # Layout components
│   │   └── Header.tsx
│   └── ui/                    # shadcn/ui components
├── i18n/                      # i18n configuration
├── lib/                       # Utilities
│   ├── mock-projects.ts       # Mock project data
│   └── validate-step.ts       # Form validation
├── messages/                  # Translation files
│   ├── ar.json                # Arabic translations
│   └── en.json                # English translations

```

### Why this structure?

- Clear separation of concerns
- Easy to extend with real APIs later
- Components are small, focused, and reusable


# Key Design Decisions 

1. Multi-Step Form Without Heavy Libraries

- Used controlled components instead of form libraries

- Keeps logic explicit and easy to extend live during interviews

- Validation is step-based to reduce complexity

2. Mock Authentication

- Implemented using localStorage

- Simulates a real login flow without backend complexity

- Keeps focus on frontend architecture and UX

3. Dashboard State Management

- Used useState and useMemo

- No external state libraries

- Filtering and searching logic is simple and performant

4. RTL Support

- Layout direction handled at the root level

- Components automatically adapt to RTL

- Ensures true bilingual UX, not just translated text

### Trade-offs & Assumptions

- No real backend or database

- Authentication and data are mocked

- No pagination for the project table (out of scope)

- Sidebar links are non-functional placeholders

These choices were made to focus on architecture, UX, and code clarity.


## 🔐 Authentication Flow

1. User completes signup → data saved to `localStorage`
2. `isAuthenticated` flag set to `'true'`
3. Dashboard checks for authentication on mount
4. If not authenticated → redirect to `/en/login`
5. Logout clears localStorage and redirects to login

### Performance
- `useMemo` for optimized filtering
- Efficient re-renders
- No unnecessary state

```

### 🚀 How to Run Locally

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. Install dependencies:

npm install
# or
yarn install
# or
pnpm install
```

2. Run the development server:
```bash
npm run dev
# or
yarn dev
# or

4. Open http://localhost:3000 in your browser.

```

### 🚧 Future Improvements

If extended further, the next steps would be:

- Real authentication (JWT / OAuth)

- API integration for projects & suppliers

- Pagination & sorting in the table

- Advanced filtering options

- Role-based access control

- Form persistence via backend


### 👤 Author

**Jalal Masoud**
Software Engineer
Specialized in React, Next.js, TypeScript, and modern frontend architecture.

