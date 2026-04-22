export function Footer() {
  return (
    <footer className="w-full py-3 bg-[#90C9E1] border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-[#141e22] text-sm">
          © {new Date().getFullYear()} Lara Krefski. Built with Next.js & Vercel. All rights reserved.
        </p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="https://www.linkedin.com/in/lara-krefski-3788371/" target="_blank" className="text-[#141e22] hover:opacity-80 transition-colors transition-opacity">LinkedIn</a>
          <a href="https://github.com/larakrefski" target="_blank" className="text-[#141e22] hover:opacity-80 transition-colors transition-opacity">GitHub</a>
        </div>
      </div>
    </footer>
  );
}