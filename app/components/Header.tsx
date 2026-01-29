export default function Header() {
  return (
     <header className="sticky top-0 z-50 bg-slate-900/70 backdrop-blur-md border-b border-slate-700">
  <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
    <h1 className="text-xl font-bold text-white">Tech Blog</h1>
    <nav className="space-x-6 text-slate-300 text-sm">
      <a href="#" className="hover:text-white transition">Home</a>
      <a href="#" className="hover:text-white transition">Categories</a>
      <a href="#" className="hover:text-white transition">About</a>
    </nav>
  </div>
</header>

  );
}
