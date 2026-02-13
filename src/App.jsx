import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center">
      <div className="bg-white/95 backdrop-blur-sm p-12 rounded-3xl shadow-2xl text-center max-w-2xl mx-4">
        <h1 className="text-5xl font-bold text-primary mb-4">🌲 GreenLearn</h1>
        <p className="text-gray-600 text-lg">به مخزن یادگیری من خوش اومدی!</p>
        <div className="w-24 h-1 bg-accent mx-auto mt-6 rounded-full"></div>
      </div>
    </div>
  );
}

function Projects() {
  return <div className="min-h-screen bg-gray-50 p-8">صفحه پروژه‌ها</div>;
}

function About() {
  return <div className="min-h-screen bg-gray-50 p-8">درباره من</div>;
}

function Contact() {
  return <div className="min-h-screen bg-gray-50 p-8">تماس</div>;
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;