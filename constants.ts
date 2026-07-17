import { Project, TimelineEvent, Service } from './types';

export const HERO_DATA = {
  headline: "I handle the tech, so you can focus on your business.",
  subheadline: "I take complete ownership of your digital presence. From making sure your website looks premium and ranks at the top of Google, to building apps that your customers love to use. I solve your digital headaches and drive real growth.",
  values: [
    {
      title: "Beautiful, Conversion-Focused Websites",
      content: "Websites that don't just look incredible, but are specifically designed to turn visitors into paying customers."
    },
    {
      title: "Top of Google (SEO)",
      content: "I implement proven strategies so your business shows up first when customers search for your services."
    },
    {
      title: "Custom Applications",
      content: "Seamless mobile and web apps that simplify your operations and give your customers a premium experience."
    },
    {
      title: "Zero Headaches & Complete Support",
      content: "I take full responsibility for updates, security, and maintenance. You never have to worry about the tech breaking."
    }
  ]
};

export const TIMELINE: TimelineEvent[] = [
  {
    year: "Phase 1",
    title: "Understanding Business Needs",
    type: "milestone",
    description: "Started by helping local businesses establish their first digital footprint, realizing that beautiful design must be paired with real results."
  },
  {
    year: "Phase 2",
    title: "Driving Growth",
    type: "learning",
    description: "Expanded my services to include SEO and conversion optimization, helping clients actually get a return on their investment."
  },
  {
    year: "Phase 3",
    title: "Complete Digital Partner",
    type: "pivot",
    description: "Transitioned to offering end-to-end solutions. I now act as a technical partner, taking all the tech burden off the business owner's shoulders."
  },
  {
    year: "Present",
    title: "Scaling Client Success",
    type: "milestone",
    description: "Focused on building premium digital assets that predictably increase sales and streamline operations for established brands."
  }
];

export const STRENGTHS = [
  { title: "I Take Full Responsibility", desc: "From the first design to keeping the servers running years later, I handle everything. You never have to touch a line of code." },
  { title: "Designed For Sales", desc: "Every button, color, and layout choice is made with one goal: to increase your conversions and grow your bottom line." },
  { title: "Premium Brand Image", desc: "Your digital presence will scream quality, immediately establishing trust and authority with your potential clients." }
];

export const SERVICES: Service[] = [
  { name: "Premium Websites", category: "web", context: "Visually stunning websites that establish immediate trust and convince visitors to buy." },
  { name: "Google Ranking (SEO)", category: "web", context: "Strategies that put your business at the top of search results so customers find you first." },
  { name: "Mobile Applications", category: "app", context: "Apps that your customers will actually want to use, keeping them connected to your business." },
  { name: "Automated Booking Systems", category: "web", context: "Systems that handle your appointments automatically, saving you hours of admin work." },
  { name: "Brand Design", category: "design", context: "A cohesive, professional look across all your digital assets that sets you apart from competitors." },
  { name: "AI Receptionist", category: "ai", context: "Never miss a lead. An AI assistant that answers calls and books clients for you, 24/7." },
  { name: "Worry-Free Maintenance", category: "support", context: "I monitor, update, and secure everything. If something goes wrong, I fix it before you even notice." }
];

export const PROJECTS: Project[] = [
  {
    id: "hair-salon-website",
    title: "Premium Hair Salon Website",
    subtitle: "A visually striking digital storefront designed for high-end salons.",
    tags: ["More Bookings", "Premium Brand", "Local SEO"],
    demoLink: "https://salon-nexus-prototype.prathmeshbhilare52.workers.dev/",
    caseStudy: {
      problem: "The salon relied heavily on word-of-mouth and had an outdated website that didn't reflect their high-end services.",
      importance: "Clients judge a beauty business by its visual presentation. A poor website was actively losing them premium clients.",
      approach: "Built a visually striking, incredibly fast landing page that immediately communicates luxury and makes booking frictionless.",
      benefits: [
        "A flawless, high-end visual identity that matches their in-store experience.",
        "A streamlined booking flow that turns casual browsers into confirmed appointments.",
        "Optimized for local search so they appear when people look for salons nearby."
      ],
      outcome: "Transformed their online presence into their #1 source of new, high-paying clients.",
      learnings: "In the beauty industry, a premium digital experience is just as important as the service itself."
    }
  },
  {
    id: "hair-salon-pwa",
    title: "Hair Salon PWA Application",
    subtitle: "A mobile-first progressive web app for frictionless bookings.",
    tags: ["PWA", "App-Like Experience", "High Conversion"],
    demoLink: "https://salon-app-nu-six.vercel.app",
    caseStudy: {
      problem: "Clients wanted a faster, app-like experience on their phones without having to download a bulky native app from the store.",
      importance: "Reducing friction in the booking process directly correlates to a higher volume of appointments.",
      approach: "Developed a Progressive Web App (PWA) that offers native-like performance, offline capabilities, and instant loading times.",
      benefits: [
        "Installs directly to the user's home screen for easy access.",
        "Blazing fast performance and smooth animations.",
        "Drives repeat business by keeping the salon top-of-mind."
      ],
      outcome: "Increased mobile bookings significantly by providing a flawless, native-app feel directly through the browser.",
      learnings: "PWAs are the perfect solution for service businesses wanting an app presence without the overhead of native app stores."
    }
  },
  {
    id: "beauty-parlour",
    title: "Luxe Beauty Studio Platform",
    subtitle: "An elegant website that answers client questions and drives sales.",
    tags: ["Lead Generation", "Trust Building", "Mobile Optimized"],
    demoLink: "https://beautybook.prathmeshbhilareml.workers.dev/",
    caseStudy: {
      problem: "Staff spent hours answering the same questions on the phone about pricing and service details instead of serving clients.",
      importance: "Time spent on phone admin is time (and money) lost on the salon floor.",
      approach: "Created a comprehensive digital brochure with perfectly structured service menus, transparent pricing, and clear calls to action.",
      benefits: [
        "Drastically reduced phone inquiries by answering client questions upfront.",
        "Built immediate trust through a highly professional, beautiful layout.",
        "Ensured the site looks perfect and loads instantly on mobile phones where most clients browse."
      ],
      outcome: "Freed up staff time while simultaneously increasing the volume of online bookings.",
      learnings: "Clarity and transparency online directly translate to more confident buying decisions."
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
