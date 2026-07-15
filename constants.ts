import { Project, TimelineEvent, Service } from './types';

export const HERO_DATA = {
  headline: "I build custom digital experiences for businesses.",
  subheadline: "Freelance Web Developer, App Developer, and UI/UX Designer. I specialize in turning your ideas into fully functional, high-performance applications tailored to your specific goals.",
  values: [
    {
      title: "Web Development",
      content: "Responsive, fast, and SEO-friendly websites built with modern technologies like React and Tailwind CSS."
    },
    {
      title: "App Development",
      content: "Native and cross-platform mobile applications for iOS and Android that deliver seamless user experiences."
    },
    {
      title: "UI/UX Design",
      content: "Clean, intuitive, and conversion-optimized interfaces that reflect your brand and engage your users."
    },
    {
      title: "AI Voice Agents",
      content: "Automated AI receptionists that handle customer calls, appointments, and support inquiries 24/7."
    },
    {
      title: "Maintenance & Support",
      content: "Subscription-based plans to keep your digital products updated, secure, and running flawlessly after launch."
    }
  ]
};

export const TIMELINE: TimelineEvent[] = [
  {
    year: "2022",
    title: "The Beginning",
    type: "milestone",
    description: "Started my journey in web development, building simple landing pages and learning the fundamentals of UI design."
  },
  {
    year: "2023",
    title: "Full-Stack & Apps",
    type: "learning",
    description: "Expanded my skillset to include full-stack development and mobile app creation. Delivered my first end-to-end client projects."
  },
  {
    year: "2024",
    title: "Freelance Agency",
    type: "pivot",
    description: "Transitioned to full-time freelancing. Partnered with startups and established businesses to revamp their digital presence."
  },
  {
    year: "Present",
    title: "Scaling Solutions",
    type: "milestone",
    description: "Focused on building scalable, performant custom software and crafting high-quality user experiences for clients worldwide."
  }
];

export const STRENGTHS = [
  { title: "End-to-End Delivery", desc: "From wireframes to deployment, I handle the entire product lifecycle so you can focus on your business." },
  { title: "User-Centric Design", desc: "I prioritize the needs of your customers, ensuring that every interface is intuitive, accessible, and delightful to use." },
  { title: "Business Alignment", desc: "I don't just write code; I build solutions that solve real business problems and drive measurable growth." }
];

export const SERVICES: Service[] = [
  { name: "Custom Websites", category: "web", context: "Landing pages, corporate websites, and complex web applications tailored to your brand." },
  { name: "E-Commerce", category: "web", context: "Scalable online stores with secure payment gateways and inventory management." },
  { name: "SEO Optimization", category: "web", context: "Technical and on-page SEO to improve your visibility in search engine rankings." },
  { name: "iOS Applications", category: "app", context: "Native-feeling apps designed specifically for the Apple ecosystem." },
  { name: "Android Applications", category: "app", context: "High-performance applications tailored for Android devices." },
  { name: "Cross-Platform Apps", category: "app", context: "React Native and Flutter apps that run flawlessly on both platforms, saving time and cost." },
  { name: "Wireframing & Prototyping", category: "design", context: "Low and high-fidelity mockups to visualize the product before development begins." },
  { name: "Brand Identity", category: "design", context: "Logo design, color palettes, and typography guidelines to establish a strong brand presence." },
  { name: "AI Voice Agents (AI Receptionist)", category: "ai", context: "Intelligent, conversational voice bots that handle customer calls, book appointments, and provide 24/7 automated support." },
  { name: "After-Development Support", category: "support", context: "Subscription-based maintenance plans ensuring your website or app stays secure, fast, and up-to-date post-launch." }
];

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "Hair Salon PWA",
    subtitle: "A Progressive Web App for a local hair salon",
    tags: ["React", "PWA", "Vite", "Tailwind CSS"],
    demoLink: "https://salon-app-nu-six.vercel.app",
    caseStudy: {
      problem: "The salon needed a modern, installable booking experience for clients without the friction of a traditional app store download.",
      importance: "An easy-to-access application increases client retention and simplifies appointment management.",
      approach: "Developed a Progressive Web App (PWA) using React and Tailwind CSS, allowing users to install the app directly from their browser on any device.",
      technicalDecisions: [
        "Implemented PWA capabilities (manifest, service workers) for offline support and home screen installation.",
        "Built a responsive layout that looks and feels like a native app on mobile devices.",
        "Optimized load times to ensure quick access for users on the go."
      ],
      stack: ["React", "Vite", "Tailwind CSS", "PWA"],
      outcome: "Delivered a fast, app-like experience that improved the booking process for both the salon and its clients.",
      learnings: "PWAs are a powerful and cost-effective alternative to native apps for small businesses."
    }
  }
];

export const SOCIALS = {
  email: "prathmeshbhilare52@gmail.com",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  instagram: "https://www.instagram.com/prathmesh.py?igsh=MWJrM2psY3hqNXBwbQ==",
  whatsapp: "+91 9022536817"
};
