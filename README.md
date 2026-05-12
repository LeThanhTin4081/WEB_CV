# Personal Portfolio / Web CV

This is a modern, responsive Personal Portfolio website built with React, TypeScript, and Tailwind CSS. It serves as a digital CV to showcase skills, experience, projects, and educational background, along with a functional contact form.

## 🚀 Features

- **Hero Section:** Engaging introduction with a brief overview.
- **About Me:** Detailed personal background and professional summary.
- **Experience:** Timeline of professional work history.
- **Education:** Academic background and qualifications.
- **Projects:** Showcase of selected works and portfolio pieces.
- **Skills:** Visual representation of technical and soft skills.
- **Contact Form:** Fully functional contact form integrated with EmailJS for direct communication.
- **Responsive Design:** Optimized for mobile, tablet, and desktop viewing.

## 🛠️ Tech Stack

- **Framework:** React 18
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Build Tool:** Vite
- **Icons:** Lucide React
- **Email Service:** EmailJS (@emailjs/browser)

## 📂 Project Structure

```
WEB_CV/
├── public/             # Static assets
├── src/                # Source files
│   ├── components/     # React components
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Education.tsx
│   │   ├── Experience.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Projects.tsx
│   │   └── Skills.tsx
│   ├── App.tsx         # Main application component
│   ├── main.tsx        # Application entry point
│   └── index.css       # Global styles (Tailwind directives)
├── .env                # Environment variables (EmailJS keys)
├── package.json        # Project metadata and dependencies
├── tailwind.config.js  # Tailwind CSS configuration
├── tsconfig.json       # TypeScript configuration
└── vite.config.ts      # Vite configuration
```

## ⚙️ Installation & Setup

1. **Clone the repository** (if applicable) or download the source code.
2. **Navigate to the project directory:**
   ```bash
   cd WEB_CV
   ```
3. **Install dependencies:**
   ```bash
   npm install
   ```
4. **Environment Variables:**
   - Create a `.env` file in the root directory based on `.env.example` (if provided).
   - Add your EmailJS configuration keys to enable the contact form:
     ```env
     VITE_EMAILJS_SERVICE_ID=your_service_id
     VITE_EMAILJS_TEMPLATE_ID=your_template_id
     VITE_EMAILJS_PUBLIC_KEY=your_public_key
     ```
5. **Run the development server:**
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:5173`.

## 📦 Building for Production

To create a production-ready build, run:
```bash
npm run build
```
This will compile TypeScript and generate static files in the `dist/` directory. You can preview the production build using:
```bash
npm run preview
```
