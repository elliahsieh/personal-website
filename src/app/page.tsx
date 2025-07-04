export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white text-gray-700 p-8">
      <div className="max-w-2xl text-center">
        <h1 className="text-5xl font-bold mb-6">
          {"Welcome to Ellia's Studio 🧸"}
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          I build thoughtful digital experiences with code, stories, and soul.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="/projects"
            className="bg-black text-white px-6 py-2 rounded-full shadow-lg hover:bg-gray-800 transition-colors"
          >
            View Projects
          </a>
          <a
            href="/blog"
            className="border border-black text-black px-6 py-2 rounded-lg shadow-lg hover:bg-black hover:text-white transition-colors"
          >
            Read Blog
          </a>
        </div>
      </div>
    </main>
  );
}
