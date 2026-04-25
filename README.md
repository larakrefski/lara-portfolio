# Lara's Portfolio

A high-performance, responsive professional portfolio built with the latest web technologies. This project focuses on clean typography, fluid layouts, and optimized SEO.

## 🚀 Live Demo
[View Live Site](https://lara-portfolio-phi.vercel.app)

## 🛠 Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) (CSS-first configuration)
- **Analytics:** Vercel Analytics & Google Analytics 4 (GA4)
- **Performance:** Vercel Speed Insights
- **Deployment:** [Vercel](https://vercel.com)
- **Language:** TypeScript

## ✨ Key Features

- **Responsive Design:** Optimized for all screen sizes, including specific layout adjustments for iPad Air and mobile devices.
- **Modern CSS:** Leveraging Tailwind v4's new engine for faster builds and modern CSS variables.
- **SEO Optimized:** Dynamic `sitemap.xml`, `robots.txt`, and comprehensive Meta tags for search engine visibility.
- **Privacy-Focused Analytics:** Integrated tracking without compromising user experience.
- **Secure Architecture:** Environment variables managed via `.env` and Vercel for secure API handling.

## 📁 Project Structure

```text
.
├── public/         # Static assets (images, icons, PDFs)
└── src/
    ├── app/        # Next.js App Router & Global CSS
    ├── components/ # UI Components
    ├── sanity/     # CMS Configuration
    └── types/      # TypeScript Definitions

🛠 Installation & Setup
    1. Clone the repository:
        In Bash run the below command:
          git clone [https://github.com/your-username/lara-portfolio.git](https://github.com/your-username/lara-portfolio.git)

    2. Install dependencies:
        In Bash run the below command:
          npm install

    3. Set up environment variables:
        Create a .env.local file and add your GA4 ID:
          NEXT_PUBLIC_GA_ID=your-google-analytics-id

    4. Run the development server:
        In Bash run the below command:
          npm run dev

Built by Lara