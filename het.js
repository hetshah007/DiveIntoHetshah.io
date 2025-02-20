// Advanced Digital Portfolio for Het Shah with Project Links and Platforms
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button, Table } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Sun, Moon, Link as LinkIcon } from "lucide-react";

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div
      className={`min-h-screen transition-colors duration-500 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-800"
      }`}
    >
      <header className="text-center py-12 relative">
        <motion.h1
          className="text-5xl font-extrabold"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Het Shah
        </motion.h1>
        <p className="text-lg">B.Tech in ICT | Web & Embedded Systems Enthusiast</p>
        <Button
          onClick={toggleDarkMode}
          className="absolute top-4 right-4"
          variant="outline"
        >
          {darkMode ? <Sun /> : <Moon />}
        </Button>
      </header>

      <motion.main
        className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { delay: 0.3, duration: 0.5 } },
        }}
      >
        <AnimatedCard title="About Me">
          <p>
            Third-year B.Tech student at Pandit Deendayal Energy University passionate
            about web development, embedded systems, and AI solutions. Seeking
            internship opportunities to apply skills and gain industry experience.
          </p>
        </AnimatedCard>

        <AnimatedCard title="Technical Skills">
          <ul className="list-disc pl-5 space-y-1">
            <li>C/C++ (OOP)</li>
            <li>HTML, CSS, JavaScript, React.js, Node.js</li>
            <li>SQL & DBMS, Git & GitHub</li>
            <li>Matlab, Ansys Software, JFLAP, LOGISIM</li>
          </ul>
        </AnimatedCard>

        <AnimatedCard title="Projects & Platforms" fullWidth>
          <Table className="w-full text-center border-collapse border border-gray-300 dark:border-gray-700">
            <thead>
              <tr className="bg-gray-200 dark:bg-gray-800">
                <th className="border p-3">Project</th>
                <th className="border p-3">Platform Used</th>
                <th className="border p-3">Link</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project, index) => (
                <tr
                  key={index}
                  className="hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                >
                  <td className="border p-3">{project.name}</td>
                  <td className="border p-3">{project.platform}</td>
                  <td className="border p-3">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 text-blue-500 hover:underline"
                    >
                      <LinkIcon size={16} /> Visit
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </AnimatedCard>

        <AnimatedCard title="Contact" fullWidth>
          <div className="flex justify-center gap-8">
            <ContactItem icon={<Phone />} text="+91 6351593996" />
            <ContactItem icon={<Mail />} text="hetshah1704@gmail.com" />
            <ContactItem icon={<MapPin />} text="Ahmedabad, India" />
          </div>
        </AnimatedCard>

        <div className="w-full text-center md:col-span-2">
          <motion.div whileHover={{ scale: 1.05 }}>
            <Button className="text-lg p-4" variant="default">
              <a href="/resume.pdf" download>
                Download Resume
              </a>
            </Button>
          </motion.div>
        </div>
      </motion.main>
    </div>
  );
}

const projects = [
  { name: "Personal Portfolio Website", platform: "GitHub Pages", link: "https://hetshahportfolio.com" },
  { name: "Embedded AI for Fault Detection in IoT", platform: "ESP32/Raspberry Pi", link: "https://github.com/hetshah/embedded-ai-iot" },
  { name: "Triband Square Slot Antenna Design", platform: "Ansys", link: "https://hetshahprojects.com/antenna-design" },
  { name: "CPU Design in Multisim/Logisim", platform: "Logisim", link: "https://github.com/hetshah/cpu-design" },
  { name: "Astable Multivibrator with 555 Timer", platform: "Analog Circuit Design Lab", link: "https://hetshahprojects.com/astable-multivibrator" },
];

function AnimatedCard({ title, children, fullWidth = false }) {
  return (
    <motion.div
      className={`${fullWidth ? "md:col-span-2" : ""}`}
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Card className="shadow-2xl rounded-2xl">
        <CardContent className="p-6">
          <h2 className="text-2xl font-semibold mb-4">{title}</h2>
          {children}
        </CardContent>
      </Card>
    </motion.div>
  );
}

function ContactItem({ icon, text }) {
  return (
    <div className="flex items-center space-x-2">
      {icon}
      <span>{text}</span>
    </div>
  );
}
