"use client"

import { useEffect, useState } from "react"
import Modal from "./components/Modal"
import Image from "next/image"

interface BlogPost {
  id: number
  title: string
  description: string
  content_text: string
  photo_url: string
  category: string
  created_at: string
}

export default function Home() {
  const [blogs, setBlogs] = useState<BlogPost[]>([])
  const [search, setSearch] = useState("")
  const [category, setCategory] = useState("All")
  const [selectedBlog, setSelectedBlog] = useState<BlogPost | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("https://api.slingacademy.com/v1/sample-data/blog-posts?offset=0&limit=10")
      .then(res => res.json())
      .then(data => {
        setBlogs(data.blogs)
        setLoading(false)
      })
  }, [])

  const categories = ["All", ...new Set(blogs.map(b => b.category))]

  const filteredBlogs = blogs.filter(blog => {
    const matchesSearch =
      blog.title.toLowerCase().includes(search.toLowerCase()) ||
      blog.description.toLowerCase().includes(search.toLowerCase()) ||
      blog.content_text.toLowerCase().includes(search.toLowerCase())

    const matchesCategory = category === "All" || blog.category === category

    return matchesSearch && matchesCategory
  })

  return (
    <main className="p-10 min-h-screen text-white">
      <header className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700 p-4 mb-8">
  <div className="max-w-6xl mx-auto flex justify-between items-center">
    <h1 className="text-xl font-bold">Sayan Tech Blog</h1>
    <nav className="space-x-6 text-sm text-slate-300">
      <a href="#" className="hover:text-white transition">Home</a>
      <a href="#" className="hover:text-white transition">Categories</a>
      <a href="#" className="hover:text-white transition">About</a>
    </nav>
  </div>
</header>

  {/* HERO SECTION START */}
<section className="text-center mb-12">
  <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
    Discover the Future of Technology
  </h2>
  <p className="text-slate-400 max-w-2xl mx-auto">
    Explore insightful articles on programming, AI, software development,
    and the latest trends shaping the digital world.
  </p>
</section>

      <input
        type="text"
        placeholder="Search articles..."
        className="w-full p-2 mb-4 rounded bg-slate-800 border border-slate-600"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select
        className="w-full p-2 mb-6 rounded bg-slate-800 border border-slate-600"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        {categories.map((cat, i) => (
          <option key={i}>{cat}</option>
        ))}
      </select>

      {loading ? (
        <p>Loading articles...</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {filteredBlogs.map(blog => (
            <div
              key={blog.id}
              onClick={() => setSelectedBlog(blog)}
              className="bg-slate-800 p-4 rounded-xl shadow-lg cursor-pointer hover:scale-105 transition"
            >
              
              <h2 className="font-bold text-lg">{blog.title}</h2>
              <p className="text-sm text-gray-400">
                {new Date(blog.created_at).toDateString()}
              </p>
              <p className="mt-2 text-sm">{blog.description}</p>
            </div>
          ))}
          {filteredBlogs.length === 0 && !loading && (
  <p className="text-center text-slate-400 mt-6">
    No articles found.
  </p>
)}

        </div>
        
      )}

      <Modal blog={selectedBlog} onClose={() => setSelectedBlog(null)} />
        <footer className="mt-16 border-t border-slate-700 pt-6 text-center text-sm text-slate-400">
  <p>© {new Date().getFullYear()} Sayan Tech Blog. All rights reserved.</p>
  <p className="mt-2">Built with Next.js & Tailwind CSS</p>
</footer>

    </main>
  )
}
