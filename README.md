# 🌟 Personal Portfolio / Web CV

Welcome to my **modern, responsive Personal Portfolio**! 🚀 
Built with cutting-edge web technologies, this project serves as an interactive digital CV to showcase my **Data Science** skills, professional experience, highlighted projects, and educational background.

---

## 🎯 Features

- 🦸 **Hero Section:** Engaging introduction with a brief overview of my passion for Data.
- 👨‍💻 **About Me:** Detailed personal background, core competencies, and professional summary.
- 🎓 **Education:** Academic background and qualifications (GPA & Core Coursework).
- 💼 **Experience:** Timeline of professional work history and achievements.
- 📊 **Projects:** In-depth showcase of data analysis, web crawling, and Power BI dashboards.
- 🛠️ **Skills:** Visual representation of technical skills (Python, SQL, Power BI) and tools.
- 📬 **Contact Form:** Fully functional contact form integrated with **EmailJS** for direct communication.
- 📱 **Responsive Design:** Beautifully optimized for mobile, tablet, and desktop viewing.

---

## 📊 Showcased Projects

Here are the key projects featured in this portfolio:

1. **End-to-End E-Commerce Customer & Sales Analytics** 🛒
   - **Tech Stack:** SQL Server (T-SQL), Python, Streamlit, Plotly
   - **Highlights:** Designed an ELT pipeline to process 51k+ records; trained a K-Means model to segment 39k customers (RFM); built an interactive Streamlit dashboard for real-time sales and margin insights.
   - [GitHub Repo](https://github.com/LeThanhTin4081/SQL-ECommerce-Analytics-With-Machine-Learning) | [Live Dashboard](https://ecommerce-annual-report-2018.streamlit.app/)

2. **Ho Chi Minh City Housing Market Analysis 2021 – 2025** 🏠
   - **Tech Stack:** Python (Selenium, BeautifulSoup), Power BI, EDA
   - **Highlights:** Built an automated web crawler to gather 163k+ real estate listings; cleaned and analyzed market distribution; built an interactive Power BI dashboard with DAX for regional price trends.
   - [GitHub Repo](https://github.com/LeThanhTin4081/hochiminh-city-house-price-analysis)

3. **Essential Commodity Price Analysis in Vietnam 2005 - 2025** 📈
   - **Tech Stack:** Excel (Power Query), Python, Power BI
   - **Highlights:** Consolidated 20 years of historical price data; linked commodity trends to economic events (COVID-19, 2008 Financial Crisis) using DAX models; provided actionable market volatility insights.
   - [GitHub Repo](https://github.com/LeThanhTin4081/phan-tich-bien-dong-gia-ca-vietnam-2005-2025)

---

## 💻 Tech Stack

- **Framework:** React 18 ⚛️
- **Language:** TypeScript 📘
- **Styling:** Tailwind CSS 🎨
- **Build Tool:** Vite ⚡
- **Icons:** Lucide React 🧩
- **Email Service:** EmailJS (`@emailjs/browser`) 📧

---

## 📂 Project Structure

```text
WEB_CV/
├── public/             🖼️ Static assets (CV, Images)
├── src/                💻 Source files
│   ├── components/     🧩 React components
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Hero.tsx
│   │   ├── Projects.tsx
│   │   └── Skills.tsx
│   ├── App.tsx         🚀 Main application component
│   ├── main.tsx        🎯 Application entry point
│   └── index.css       💅 Global styles (Tailwind directives)
├── .env.example        🔐 Environment variables template
├── package.json        📦 Project metadata and dependencies
├── tailwind.config.js  🛠️ Tailwind CSS configuration
└── vite.config.ts      ⚡ Vite configuration
```

---

## ⚙️ Installation & Setup

1. **Clone the repository** 📥
   ```bash
   git clone https://github.com/LeThanhTin4081/WEB_CV.git
   cd WEB_CV
   ```

2. **Install dependencies** 📦
   ```bash
   npm install
   ```

3. **Environment Variables** 🔑
   - Create a `.env` file in the root directory based on `.env.example`.
   - Add your EmailJS configuration keys to enable the contact form:
     ```env
     VITE_EMAILJS_SERVICE_ID=your_service_id
     VITE_EMAILJS_TEMPLATE_ID=your_template_id
     VITE_EMAILJS_PUBLIC_KEY=your_public_key
     ```

4. **Run the development server** 🏃‍♂️
   ```bash
   npm run dev
   ```
   > The application will be available at `http://localhost:5173` 🌍.

---

## 📦 Building for Production

To create a production-ready build, run:
```bash
npm run build
```
This will compile TypeScript and generate optimized static files in the `dist/` directory ✨. 

You can preview the production build locally using:
```bash
npm run preview
```

---
*Built with ❤️ by [Lê Thành Tin]*
