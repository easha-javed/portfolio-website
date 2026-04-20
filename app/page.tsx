
"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, Download, ChevronDown } from "lucide-react"
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
                                    className={`text-sm transition-colors hover:text-amber-400 ${activeSection === item.id ? "text-amber-400" : "text-gray-300"
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
                    <a href="https://github.com/easha-javed" target="_blank" rel="noopener noreferrer">
                        <Github className="h-5 w-5" />
                    </a>
                </Button>
            </div>

{/* Hero Section */}
<section id="home" className="min-h-screen flex items-center justify-center px-6">
    <div className="container mx-auto text-center">

        <h1 className="text-7xl font-bold mb-6">
            Easha <span className="text-amber-400">Javed</span>
        </h1>

        <p className="text-2xl text-gray-300 mb-4">
            Computer Science Student | AI & Full-Stack Developer
        </p>

        <p className="text-lg text-gray-400 mb-10 max-w-xl mx-auto">
            Building full-stack applications and exploring machine learning, explainable AI, and real-world problem solving.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
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

        <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16 text-amber-400">
            About Me
        </h2>

        <div className="text-center">

            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                I'm a Computer Science student at FAST-NUCES, Lahore, with hands-on experience in building full-stack applications and system-level projects. I enjoy turning ideas into practical, working software with clean structure and reliable functionality.
            </p>

            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                My work ranges from role-based web systems and real-time platforms to applying machine learning concepts such as model evaluation, explainability (SHAP), and integrating LLMs for user-friendly outputs.
            </p>

            <p className="text-lg text-gray-300 mb-12 leading-relaxed">
                I'm particularly interested in building systems that balance backend logic, user experience, and intelligent features, with a focus on writing efficient, maintainable, and scalable code.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mt-12">

                {/* Technical Skills */}
                <div>
                    <h3 className="text-2xl font-semibold mb-6 text-amber-400">
                        Technical Skills
                    </h3>

                    <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                        {[
                            "Python",
                            "C++",
                            "JavaScript",
                            "Machine Learning",
                            "XGBoost",
                            "scikit-learn",
                            "SHAP (XAI)",
                            "NLP (Basic)",
                            "Flask",
                            "React.js",
                            "Node.js",
                            "MongoDB",
                            "SQL Server",
                            "Data Structures",
                            "OOP"
                        ].map((skill) => (
                            <Badge
                                key={skill}
                                variant="secondary"
                                className="bg-amber-900/30 text-amber-200 border-amber-700"
                            >
                                {skill}
                            </Badge>
                        ))}
                    </div>
                </div>

                {/* Courses */}
                <div>
                    <h3 className="text-2xl font-semibold mb-6 text-amber-400">
                        Courses
                    </h3>

                    <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                        {[
                            "Design & Analysis of Algorithms",
                            "Data Structures",
                            "Software Testing",
                            "Database Systems",
                            "Operating Systems",
                            "Computer Networks",
                            "Theory of Automata",
                            "Software Engineering",
                            "Artificial Intelligence",
                            "Computer Architecture"
                        ].map((course) => (
                            <Badge
                                key={course}
                                variant="outline"
                                className="border-gray-600 text-gray-300"
                            >
                                {course}
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
                                details: "Semesters: 6/8 | CGPA: 3.32/4",
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
    title: "MediRisk – Cardiovascular Risk Predictor",
    period: "Mar 2026 - Present",
    technologies: ["Python", "XGBoost", "Flask", "SHAP", "GPT"],
    description:
        "Developed an end-to-end AI system for cardiovascular risk prediction combining machine learning, explainable AI, and natural language generation.",
    features: [
        "ML Pipeline: XGBoost model with preprocessing, feature engineering, and evaluation (F1, AUC-ROC)",
        "Explainable AI: SHAP-based global and local feature attribution",
        "NLP Integration: GPT-based natural language explanations for patient-friendly insights",
        "Interactive System: Flask API with real-time prediction and Q&A interface",
        "End-to-End Design: Combines ML + XAI + LLM into a single deployable pipeline",
    ],
},
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
                                title: "Nexus – Student Digital Assistant (SDA)",
                                period: "Oct 2025 - Nov 2025",
                                technologies: ["React", "TypeScript", "Node.js", "Express", "MongoDB"],
                                description:
                                    "Developed a role-based social and academic assistant platform for university students, enabling connections, society exploration, real-time messaging, and campus-wide updates.",
                                features: [
                                    "User Management: Secure registration and login with role-based dashboards (students, admins)",
                                    "Friends Management: Search, add, and remove friends manually; view detailed profiles; real-time messaging",
                                    "Society & Announcements: Search societies; admins can create, update, or remove societies; post and moderate announcements",
                                    "Real-Time Interaction: Dynamic friends lists, chat, and live profile updates",
                                    "Security & Validation: JWT-based authentication, password hashing, and input validation",
                                    "Maintainability: Core OOP and SOLID principles applied for scalable, readable, and robust code",
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
                        {/* Email */}
                        <Card className="bg-gray-900/50 border-amber-900/30 hover:border-amber-600/50 transition-colors">
                            <CardContent className="p-8 text-center">
                                <Mail className="h-12 w-12 text-amber-400 mx-auto mb-4" />
                                <h3 className="text-xl font-semibold text-amber-400 mb-2">Email</h3>
                                <p className="text-gray-300">eashajaved896@gmail.com</p>
                            </CardContent>
                        </Card>

                        {/* LinkedIn */}
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

                        {/* GitHub */}
                        <Card className="bg-gray-900/50 border-amber-900/30 hover:border-amber-600/50 transition-colors">
                            <CardContent className="p-8 text-center">
                                <Github className="h-12 w-12 text-amber-400 mx-auto mb-4" />
                                <h3 className="text-xl font-semibold text-amber-400 mb-2">GitHub</h3>
                                <Button variant="link" className="text-gray-300 hover:text-amber-400 p-0" asChild>
                                    <a href="https://github.com/easha-javed" target="_blank" rel="noopener noreferrer">
                                        View Profile
                                    </a>
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-8 border-t border-amber-900/20 bg-black">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-gray-400">© 2026 Easha Javed. All rights reserved.</p>
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
                                <a href="https://github.com/easha-javed" target="_blank" rel="noopener noreferrer">
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
