"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, Phone, Download, ChevronDown } from "lucide-react"
import Image from "next/image"
import { useState, useEffect } from "react"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "education", "projects", "connect"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-sm border-b border-amber-900/20 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold text-amber-100">Easha Javed</h1>
            <div className="hidden md:flex space-x-8">
              {[
                { id: "home", label: "Home" },
                { id: "about", label: "About" },
                { id: "education", label: "Education" },
                { id: "projects", label: "Projects" },
                { id: "connect", label: "Connect" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm transition-colors hover:text-amber-400 ${
                    activeSection === item.id ? "text-amber-400" : "text-gray-300"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Social Media Sidebar */}
      <div className="fixed left-6 top-1/2 transform -translate-y-1/2 z-40 hidden lg:flex flex-col gap-4">
        <Button variant="ghost" size="icon" className="text-gray-400 hover:text-amber-400" asChild>
          <a href="mailto:eashajaved896@gmail.com">
            <Mail className="h-5 w-5" />
          </a>
        </Button>
        <Button variant="ghost" size="icon" className="text-gray-400 hover:text-amber-400" asChild>
          <a href="https://www.linkedin.com/in/easha-javed-a27055263" target="_blank" rel="noopener noreferrer">
            <Linkedin className="h-5 w-5" />
          </a>
        </Button>
        <Button variant="ghost" size="icon" className="text-gray-400 hover:text-amber-400" asChild>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <Github className="h-5 w-5" />
          </a>
        </Button>
      </div>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
            <div className="text-center lg:text-left max-w-2xl">
              <h1 className="text-5xl lg:text-7xl font-bold mb-6">
               <span className="text-amber-400">Easha Javed</span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 mb-8">
                Computer Science Junior | Web & Game Development Enthusiast
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  size="lg"
                  className="bg-amber-600 hover:bg-amber-700 text-black font-semibold"
                  onClick={() => scrollToSection("projects")}
                >
                  View Projects
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-amber-600 text-amber-400 hover:bg-amber-600 hover:text-black bg-transparent"
                  onClick={() => scrollToSection("connect")}
                >
                  Let's Connect!
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-gray-600 text-gray-300 hover:bg-gray-700 flex items-center gap-2 bg-transparent"
                  asChild
                >
                  <a href="/easha-resume.pdf" download="Easha_Javed_Resume.pdf">
                    <Download className="h-4 w-4" />
                    Download CV
                  </a>
                </Button>
              </div>
            </div>
            <div className="flex-shrink-0">
              <div className="relative">
                <Image
                  src="/profile.png"
                  alt="Easha Javed"
                  width={350}
                  height={350}
                  className="w-[350px] h-[350px] rounded-full object-cover border-4 border-amber-600/30 shadow-2xl"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-amber-600/20 to-transparent"></div>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-16">
            <button
              onClick={() => scrollToSection("about")}
              className="flex flex-col items-center text-gray-400 hover:text-amber-400 transition-colors"
            >
              <span className="text-sm mb-2">Scroll down</span>
              <ChevronDown className="h-6 w-6 animate-bounce" />
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-gray-900/50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16 text-amber-400">About Me</h2>
          <div className="text-center">
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              I'm a Computer Science student at FAST-NUCES, Lahore. I have a strong interest in both web development and
              game development, and I enjoy creating interactive, user-focused experiences using code.
            </p>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              I'm curious by nature and always eager to explore new technologies, improve my skills, and apply what I
              learn in meaningful ways. Whether it's designing intuitive interfaces or experimenting with low-level
              systems, I like working on things that challenge me and help me grow as a developer.
            </p>
            <p className="text-lg text-gray-300 mb-12 leading-relaxed">
              Outside of academics, I value simplicity, learning by doing, and staying open to new ideas—both in tech
              and in life.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-amber-400">Technical Skills</h3>
                <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                  {[
                    "C++",
                    "React.js",
                    "Assembly (IAPX 8088)",
                    "SFML",
                    "Ubuntu",
                    "DOSBox",
                    "Object Oriented Programming",
                    "Data Structures",
                    "Process Synchronization",
                  ].map((skill) => (
                    <Badge key={skill} variant="secondary" className="bg-amber-900/30 text-amber-200 border-amber-700">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-amber-400">Interests</h3>
                <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                  {[
                    "Game Development & Design",
                    "Web Development",
                    "Virtual Machines",
                    "Literature",
                    "Photography",
                  ].map((interest) => (
                    <Badge key={interest} variant="outline" className="border-gray-600 text-gray-300">
                      {interest}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16 text-amber-400">Education</h2>
          <div className="space-y-8">
            {[
              {
                degree: "Bachelor of Computer Science",
                institution: "FAST-NUCES",
                location: "Lahore, Pakistan",
                period: "2023 - 2027",
                details: "Semesters: 4/8 | CGPA: 3.27/4",
                type: "current",
              },
              {
                degree: "FSc (Pre-Engineering)",
                institution: "Kinnaird College for Women University",
                location: "Lahore, Pakistan",
                period: "2021 - 2023",
                details: "Subjects: Mathematics, Physics, Chemistry | Score: 958/1100",
                type: "completed",
              },
              {
                degree: "Matriculation",
                institution: "Divisional Public School",
                location: "Lahore, Pakistan",
                period: "2019 - 2021",
                details: "Subjects: Biology, Chemistry, Physics, Mathematics | Score: 1098/1100",
                type: "completed",
              },
            ].map((edu, index) => (
              <Card
                key={index}
                className="bg-gray-900/50 border-amber-900/30 hover:border-amber-600/50 transition-colors"
              >
                <CardHeader>
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl text-amber-400 flex items-center gap-3">
                        {edu.degree}
                        <Badge
                          variant={edu.type === "current" ? "default" : "secondary"}
                          className={edu.type === "current" ? "bg-amber-600 text-black" : "bg-gray-700 text-gray-300"}
                        >
                          {edu.type === "current" ? "Current" : "Completed"}
                        </Badge>
                      </CardTitle>
                      <CardDescription className="text-lg text-gray-300 font-medium">{edu.institution}</CardDescription>
                      <p className="text-gray-400">{edu.location}</p>
                    </div>
                    <div className="text-amber-400 font-semibold">{edu.period}</div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">{edu.details}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-gray-900/50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16 text-amber-400">Projects</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {[
              {
                title: "Library Management System",
                period: "Mar 2025 - Apr 2025",
                technologies: ["React", "Node", "Express", "SQL"],
                description:
                  "Developed a comprehensive, role-based Library Management System designed to streamline book borrowing, inventory tracking, and user management for both members and librarians.",
                features: [
                  "User Management: Secure member registration and login, role-based access",
                  "Book Management: Add, edit, delete books with detailed metadata and ISBN scanning",
                  "Borrowing & Returns: Automated inventory updates and due date management",
                  "Fines & Payments: Auto-calculated overdue fines and payment tracking",
                  "Advanced Search: Filter by title, author, genre, ISBN, and availability",
                  "Reservation System: First-come, first-served queue with auto-issue",
                ],
              },
              {
                title: "Maze Runner",
                period: "Dec 2024",
                technologies: ["Assembly"],
                description:
                  "Developed an interactive 2D maze game using low-level Assembly programming for the Intel IAPX 8088 architecture, showcasing proficiency in hardware-near programming.",
                features: [
                  "Random Maze Generation: Dynamic maze structures for unique gameplay",
                  "Real-Time Timer: Live countdown mechanism for enhanced engagement",
                  "Game Mechanics: Player navigates to collect gems while avoiding enemies",
                  "Score System: Points increment/decrement based on gem collection/collision",
                  "Collision Detection: Efficient memory and register-level operations",
                  "Graphics Rendering: Text-mode graphics with optimized interrupts",
                ],
              },
              {
                title: "Chess Game",
                period: "May 2024",
                technologies: ["C++", "SFML", "OOP"],
                description:
                  "Designed and developed a fully interactive 2D chess game using C++ and the SFML graphics library, leveraging object-oriented programming principles.",
                features: [
                  "Turn-Based Mechanics: Enforced alternating player turns with validation",
                  "Valid Move Detection: Rule-based logic for all chess pieces including en passant",
                  "Checkmate Recognition: Accurate endgame condition detection",
                  "Interactive UI: SFML rendering with piece movement animations",
                  "Clean OOP Architecture: Structured classes for maintainability",
                  "Real-time Updates: Dynamic game state management",
                ],
              },
              {
                title: "Bejeweled Blitz",
                period: "Nov 2023 - Dec 2023",
                technologies: ["C++", "SFML"],
                description:
                  "Developed a clone of Bejeweled Blitz game using C++ and SFML graphics library, emphasizing real-time user interaction and score-based progression.",
                features: [
                  "Match Detection: +30 for 3 jewels, +40 for 4, +50 for 5 in a line",
                  "Automatic Elimination: Cascading jewels after successful matches",
                  "Timer Integration: Real-time countdown for gameplay urgency",
                  "High Score Tracking: Persistent scoring system across sessions",
                  "Grid-Based Mechanics: Efficient jewel swapping and validation",
                  "Dynamic Graphics: SFML rendering with interactive effects",
                ],
              },
            ].map((project, index) => (
              <Card
                key={index}
                className="bg-black/50 border-amber-900/30 hover:border-amber-600/50 transition-all duration-300 hover:shadow-xl hover:shadow-amber-600/10"
              >
                <CardHeader>
                  <div className="flex justify-between items-start mb-4">
                    <CardTitle className="text-2xl text-amber-400">{project.title}</CardTitle>
                    <span className="text-sm text-gray-400">{project.period}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <div
                        key={tech}
                        className="flex items-center justify-center w-12 h-12 rounded-full bg-amber-600/20 border border-amber-600/30"
                      >
                        <span className="text-xs text-amber-400 font-semibold text-center leading-tight px-1">
                          {tech.length > 8 ? tech.substring(0, 3) : tech.split(" ")[0]}
                        </span>
                      </div>
                    ))}
                  </div>
                  <CardDescription className="text-gray-300 text-base leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {project.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 flex-shrink-0"></div>
                        <p className="text-sm text-gray-400">{feature}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Connect Section */}
      <section id="connect" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-16 text-amber-400">Connect With Me</h2>
          <p className="text-xl text-gray-300 mb-12">Let's collaborate and create something amazing together!</p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="bg-gray-900/50 border-amber-900/30 hover:border-amber-600/50 transition-colors">
              <CardContent className="p-8 text-center">
                <Phone className="h-12 w-12 text-amber-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-amber-400 mb-2">Phone</h3>
                <p className="text-gray-300">03254217680</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-amber-900/30 hover:border-amber-600/50 transition-colors">
              <CardContent className="p-8 text-center">
                <Mail className="h-12 w-12 text-amber-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-amber-400 mb-2">Email</h3>
                <p className="text-gray-300">eashajaved896@gmail.com</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-amber-900/30 hover:border-amber-600/50 transition-colors">
              <CardContent className="p-8 text-center">
                <Linkedin className="h-12 w-12 text-amber-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-amber-400 mb-2">LinkedIn</h3>
                <Button variant="link" className="text-gray-300 hover:text-amber-400 p-0" asChild>
                  <a href="https://www.linkedin.com/in/easha-javed-a27055263" target="_blank" rel="noopener noreferrer">
                    View Profile
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-black font-semibold" asChild>
              <a href="mailto:eashajaved896@gmail.com">
                <Mail className="h-4 w-4 mr-2" />
                Send Email
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-amber-600 text-amber-400 hover:bg-amber-600 hover:text-black bg-transparent"
              asChild
            >
              <a href="https://www.linkedin.com/in/easha-javed-a27055263" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-4 w-4 mr-2" />
                Connect on LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-amber-900/20 bg-black">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400">© 2024 Easha Javed. All rights reserved.</p>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-amber-400" asChild>
                <a href="mailto:eashajaved896@gmail.com">
                  <Mail className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-amber-400" asChild>
                <a href="https://www.linkedin.com/in/easha-javed-a27055263" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-amber-400" asChild>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
