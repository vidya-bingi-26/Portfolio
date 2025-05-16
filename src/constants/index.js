// ... existing code ...

// Import the project images
import ecommerce from "../assets/images/ecommerce.png";
import passwordvault from "../assets/images/password vault.png";
import aimhire from "../assets/images/aimhire.png";

export const projects = [
  {
    name: "ONDC Buyer App",
    description: `Shopzia – ONDC Buyer App (Sponsored by Innobytes)
Currently working on an ONDC-compliant buyer app using the MERN stack, sponsored by Innobytes, as part of an industry-level project. The app focuses on enhancing user experience through AI/ML-powered product recommendations, including related items and recently viewed products based on user interactions.

Planned future enhancements include:
- Image-based product search using computer vision
- Style suggestions tailored to user's body type and preferred color palette
- Makeup shade recommendations based on skin tone detection

The project aims to blend intelligent shopping with personalized fashion & beauty guidance.`,
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
      {
        name: "mern",
        color: "orange-text-gradient",
      },
    ],
    image: ecommerce,
    source_code_link: null,
    live_demo_link: null,
  },
  {
    name: "Password Vault",
    description: "Built a secure desktop password manager using Java Swing and MySQL. Implemented AES-256 encryption with PBKDF2 and dynamic IVs to securely store passwords. Features include master-password access, encrypted password storage and retrieval, inline decryption for editing, and keyword-based search.",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "swing",
        color: "green-text-gradient",
      },
      {
        name: "mysql",
        color: "pink-text-gradient",
      },
      {
        name: "encryption",
        color: "orange-text-gradient",
      },
    ],
    image: passwordvault,
    source_code_link: "https://github.com/vidya-bingi-26/super30_sem2_project.git",
    live_demo_link: null, // No live demo link provided
  },
  {
    name: "Job Portal",
    description: `AimHire is a full-stack job portal designed to streamline the hiring process for recruiters and job seekers while offering robust admin control. The platform supports three user roles:

Admin: Manages user access by activating, deactivating, or deleting accounts.

Recruiter: Posts job listings, views applicants, and shortlists or rejects candidates.

Job Seeker: Builds a personalized profile with resume and photo, applies for jobs, and tracks applications. Advanced filters help users search jobs by location, skills, and company.

`,
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "mysql",
        color: "pink-text-gradient",
      },
      {
        name: "React.js",
        color: "orange-text-gradient",
      },
    ],
    image: aimhire,
    source_code_link: "",
    live_demo_link: null, 
  }
];

// ... rest of your constants ...