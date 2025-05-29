"use client";
import { useState } from "react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function PortfolioSite() {
  const [entered, setEntered] = useState(false);
  const [selectedSection, setSelectedSection] = useState("about");

  if (!entered) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-gray-900">
        <Button onClick={() => setEntered(true)} className="text-5xl text-white bg-black p-10 rounded-full shadow-xl hover:scale-105 transition-transform">
          VERDICONICS
        </Button>
      </div>
    );
  }

  const sections = [
    { id: "about", label: "About Me" },
    { id: "portfolio", label: "Portfolio" },
    { id: "business", label: "Business Ideas" },
    { id: "uiux", label: "UI/UX" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-silver p-6 text-black">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold">Verdiconics</h1>
        <p className="text-lg text-gray-700 mt-2">
          Cloud Solutions Architect | Semiconductor & Organic Farming Visionary | Social Entrepreneur
        </p>
        <div className="mt-4 flex flex-wrap justify-center gap-3">
          {sections.map((section) => (
            <Button key={section.id} onClick={() => setSelectedSection(section.id)} variant="outline">
              {section.label}
            </Button>
          ))}
        </div>
      </header>

      {selectedSection === "about" && (
        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">About Me</h2>
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-6 text-gray-800">
              <p>
                I'm Kurra Chandra Shekar, a Cloud Solutions Architect currently working with Jio Platforms Limited...
              </p>
            </CardContent>
          </Card>
        </motion.section>
      )}

      {selectedSection === "portfolio" && (
        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">Portfolio Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-4">
                <h3 className="text-xl font-semibold">Cloud Engineering @ Jio Platforms</h3>
                <p>Delivered cloud infrastructure solutions...</p>
              </CardContent>
            </Card>
          </div>
        </motion.section>
      )}

      {selectedSection === "business" && (
        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">Future Vision & Business Ideas</h2>
          <Card><CardContent className="p-4"><h3>Semiconductor Innovation Campus</h3></CardContent></Card>
        </motion.section>
      )}

      {selectedSection === "uiux" && (
        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">UI/UX Focus</h2>
          <Card className="max-w-4xl mx-auto"><CardContent className="p-6">User-centric design, responsive layouts...</CardContent></Card>
        </motion.section>
      )}

      <footer className="text-center text-gray-600 mt-16">
        <p>Contact: <a href="mailto:shekar.innovates@gmail.com" className="underline">shekar.innovates@gmail.com</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/chandra-shekar-kurra-41a222191/" className="underline">/chandra-shekar-kurra</a></p>
      </footer>
    </div>
  );
}
