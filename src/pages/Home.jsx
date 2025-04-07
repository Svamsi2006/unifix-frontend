import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-800 px-6 py-10">
      <header className="flex justify-between items-center mb-10">
        <h1 className="text-3xl font-bold">UniFix</h1>
        <nav className="space-x-4">
          <a href="#about" className="hover:underline">About</a>
          <a href="#join" className="hover:underline">Join</a>
        </nav>
      </header>
      <section className="text-center py-20">
        <h2 className="text-4xl font-bold mb-4">Students Helping Students</h2>
        <p className="text-lg mb-6 max-w-xl mx-auto">
          UniFix is a campus-powered micro-solution network. Offer your skills. Get help fast. Grow together.
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-2xl hover:bg-blue-700">Offer a Skill</button>
          <button className="bg-green-600 text-white px-6 py-2 rounded-2xl hover:bg-green-700">Request Help</button>
        </div>
      </section>
      <section id="about" className="py-16 border-t">
        <h3 className="text-2xl font-semibold text-center mb-4">What is UniFix?</h3>
        <p className="text-center max-w-3xl mx-auto text-gray-600">
          UniFix is a student-run platform where anyone can offer services like design, tutoring, editing, or tech support – and others can request help. It runs on talent, trust, and teamwork. Built by students, for students.
        </p>
      </section>
      <footer className="text-center text-sm text-gray-500 mt-16 border-t pt-4">
        © 2025 UniFix Campus | Built with 💡 by Students
      </footer>
    </main>
  );
}