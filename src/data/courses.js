// src/data/courses.js
import professional from '../Assets/basic.jpg'
import tally from '../Assets/tally.jpg'
import embed from '../Assets/embed.jpg'

export const courses = [
  {
    id: "fullstack",
    title: "Full Stack Development",
    image:
      professional,
    shortDesc:
      "Master web development from frontend to backend with hands-on projects.",
    details: {
      description:
        "Our Full Stack Development program provides comprehensive training in frontend (HTML, CSS, JavaScript, React) and backend (Node.js, Express, MongoDB).",
      schedule:
        "Every Monday: 1-hour test. 1-hour class + 1-hour lab session daily. Professional course students do 4 hours (Class → Lab → Class → Lab).",
      syllabus: [
        "HTML, CSS, JavaScript",
        "React.js",
        "Node.js, Express.js",
        "MongoDB, Mongoose",
        "Deployment (Render, Vercel, Netlify)",
      ],
      projects: [
        "Personal Portfolio Website",
        "E-commerce Store",
        "Social Media App",
        "Blog Platform",
      ],
    },
  },
  {
    id: "tally",
    title: "Tally Prime & GST",
    image:
      tally,
    shortDesc:
      "Learn Tally Prime, GST, payroll management, and financial reporting.",
    details: {
      description:
        "This course covers accounting fundamentals, GST compliance, payroll processing, and Tally Prime’s advanced features.",
      schedule:
        "Every Monday: 1-hour test. Daily: 1-hour theory + 1-hour practical.",
      syllabus: [
        "Tally Prime Basics",
        "GST Returns",
        "Payroll Processing",
        "Inventory Management",
      ],
      projects: [
        "GST Filing Simulation",
        "Business Accounting Report",
      ],
    },
  },
  {
    id: "vlsi",
    title: 'Embed system',
    image:
     embed,
    shortDesc:
      "Dive into Very Large Scale Integration and chip design concepts.",
    details: {
      description:
        "Learn semiconductor basics, digital logic design, and VLSI tools.",
      schedule:
        "Every Monday: 1-hour test. Daily: Class + Lab structure as per syllabus.",
      syllabus: [
        "Semiconductor Fundamentals",
        "Digital Logic Design",
        "FPGA Programming",
        "ASIC Flow",
      ],
      projects: [
        "Digital Clock Design",
        "Microcontroller-based Automation",
      ],
    },
  },
];
