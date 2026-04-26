# Lara's Portfolio

A high-performance, responsive professional portfolio built with Next.js 15 and Tailwind CSS v4.

## 🚀 Live Demo

[View Live Site](https://lara-portfolio-phi.vercel.app)

## 🛠 Tech Stack

* **Framework:** Next.js 15 (App Router)
* **Styling:** Tailwind CSS v4
* **CMS:** Sanity
* **Analytics:** Vercel Analytics & Google Analytics 4 (@next/third-parties)
* **Language:** TypeScript

## 📁 Project Structure

```text
├── public/         # Static assets (images, icons, PDFs)
└── src/
    ├── app/            # Pages, Layouts, & Global CSS
    ├── components/     # UI Components
    ├── sanity/         # CMS Configuration
    └── types/          # TypeScript Definitions
```

## 🛠 Installation & Setup

1. **Clone the repo**
   Open your terminal and run:
   ```bash
   git clone [https://github.com/your-username/lara-portfolio.git](https://github.com/your-username/lara-portfolio.git)
   ```

2. **Install dependencies**
   Open your terminal and run:
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory and add:
   ```text
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```

4. **Run the development server**
   Open your terminal and run:
   ```bash
   npm run dev
   ```

## 📈 Analytics Setup Check
If Google Analytics shows "Data collection not active":
* **Vercel Settings:** Ensure `NEXT_PUBLIC_GA_ID` is added to your Vercel Dashboard under Settings > Environment Variables.
* **Redeploy:** You MUST trigger a new deployment for Vercel to inject the variable into your build.
* **Layout Check:** Verify `GoogleAnalytics` from `@next/third-parties/google` is inside the `body` tag in `app/layout.tsx`.
* **Realtime Test:** Visit your site in an Incognito window and check the "Realtime" report in GA4. If you see yourself, the tag is working perfectly!

---
*Built by Lara*