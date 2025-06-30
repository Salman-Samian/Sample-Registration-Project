# Multi-Step Registration Form Developed by Salman Samian

A modern, responsive registration form built with Next.js, featuring multi-step validation, internationalization, and Atomic Design principles.

## Features

- **Multi-Step Form**: Two-step registration process with progress indicator
- **Form Validation**: Comprehensive validation using Zod schemas
- **Internationalization**: Support for English and Persian (Farsi) languages
- **Atomic Design**: Organized component architecture (Atoms, Molecules, Organisms)
- **React Query**: Efficient data fetching and caching
- **Axios**: HTTP client for API requests
- **TypeScript**: Full type safety throughout the application
- **Tailwind CSS**: Modern styling with Shadcn UI components
- **Responsive Design**: Mobile-first approach

## Form Fields

### Step 1: Basic Information

- First Name (required, 2-50 characters, letters only)
- Last Name (required, 2-50 characters, letters only)
- Email (required, valid email format)
- Password (required, 8+ characters, complex requirements)
- Currency (required, dropdown selection)

### Step 2: Additional Information

- Region (required, dropdown selection)
- Phone Number (required, international format)
- National Code (required, 5-15 digits)
- Birthday (required, must be 18+ years old)
- Age Confirmation (required checkbox)

## Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout with providers
│   └── page.tsx           # Main page component
├── components/            # Atomic Design components
│   ├── atoms/            # Basic building blocks
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   ├── Select.tsx
│   │   ├── Checkbox.tsx
│   │   ├── DatePicker.tsx
│   │   └── Label.tsx
│   ├── molecules/        # Simple combinations
│   │   ├── FormField.tsx
│   │   ├── FormStep.tsx
│   │   └── LanguageSelector.tsx
│   └── organisms/        # Complex combinations
│       ├── MultiStepForm.tsx
│       └── RegistrationForm.tsx
├── data/                 # Static data
│   └── starterdata.json  # Currencies, regions, validation rules
├── lib/                  # Utilities and configurations
│   ├── api.ts           # API service with axios
│   ├── hooks.ts         # React Query hooks
│   ├── i18n.ts          # Internationalization setup
│   ├── utils.ts         # Utility functions
│   └── validation.ts    # Zod validation schemas
└── providers/           # React providers
    └── Providers.tsx    # Query client provider
```

## Technologies Used

- **Next.js 15** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Shadcn UI** - Component library
- **React Hook Form** - Form management
- **Zod** - Schema validation
- **React Query** - Data fetching
- **Axios** - HTTP client
- **i18next** - Internationalization
- **React DatePicker** - Date selection

## Getting Started

1. **Install dependencies**:

   ```bash
   yarn install
   ```

2. **Run the development server**:

   ```bash
   yarn dev
   ```

3. **Open your browser** and navigate to `http://localhost:3000`

## API Integration

The form is configured to work with a REST API. Update the `baseURL` in `src/lib/api.ts` to point to your API endpoint:

```typescript
const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api",
  // ...
});
```

## Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_API_URL=http://localhost:3000/api
```

## Validation Rules

All validation rules are defined in `src/data/starterdata.json` and implemented using Zod schemas in `src/lib/validation.ts`. The validation includes:

- **Name fields**: Letters and spaces only, 2-50 characters
- **Email**: Standard email format validation
- **Password**: Minimum 8 characters with complexity requirements
- **Phone**: International phone number format
- **National Code**: 5-15 digits
- **Birthday**: Must be 18+ years old
- **Required fields**: All fields are required

## Internationalization

The application supports multiple languages:

- **English** (en) - Default language
- **Persian/Farsi** (fa) - Right-to-left support

Language switching is available via the language selector in the top-right corner.

## Customization

### Adding New Languages

1. Add translations to `src/lib/i18n.ts`
2. Update the language selector in `src/components/molecules/LanguageSelector.tsx`

### Adding New Form Fields

1. Update the Zod schemas in `src/lib/validation.ts`
2. Add field components to the appropriate form step
3. Update the API service if needed

### Styling

The application uses Tailwind CSS with Shadcn UI design tokens. Customize the theme by modifying CSS variables in `src/app/globals.css`.

## Deployment

The application can be deployed to any platform that supports Next.js:

- **Vercel** (recommended)
- **Netlify**
- **AWS Amplify**
- **Self-hosted**

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).
