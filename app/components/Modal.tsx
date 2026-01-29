"use client"
import { useEffect } from "react"

export default function Modal({ blog, onClose }: any) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", handleEsc)
    return () => window.removeEventListener("keydown", handleEsc)
  }, [onClose])

  if (!blog) return null

  return (
    <div
      className="fixed inset-0 bg-black/60 flex justify-center items-center p-4 z-50"
      onClick={onClose}
    >
      <div
  className="bg-slate-900 text-white p-6 rounded-xl max-w-2xl w-full relative max-h-[80vh] overflow-y-auto"
  onClick={(e) => e.stopPropagation()}
   

      >
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-xl"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold mb-2">{blog.title}</h2>
        <p className="text-sm text-gray-400 mb-4">
          {new Date(blog.created_at).toDateString()}
        </p>

        <p>{blog.content_text}</p>
      </div>
    </div>
  )
}
