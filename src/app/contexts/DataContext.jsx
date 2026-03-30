import React, { createContext, useContext, useState, useEffect } from 'react';

const DataContext = createContext();

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within DataProvider');
  }
  return context;
};

// Initial mock data
const initialHeroData = {
  greeting: "Hello, I'm",
  name: "Omar Gamal Abdelhamed",
  description: "FullStack Developer specialized in React & Laravel.",
  profileImage: "src/assets/images/profileImg.jpg"
};

const initialProjects = [
  {
    id: 1,
    title: "Bistro Elegance Restaurant",
    description: "--",
    image: "/ProjectsCover/BistroEleganceRestaurant.png",
    githubLink: "https://github.com/Omarrr-Gamal/Bistro-Elegance-Restaurant.git",
    liveLink: "https://omarrr-gamal.github.io/Bistro-Elegance-Restaurant/",
    featured: true
  },
  {
    id: 2,
    title: "Dentist Site",
    description: "--",
    image: "/ProjectsCover/DentistSite.png",
    githubLink: "https://github.com/Omarrr-Gamal/Dentist.git",
    liveLink: "https://omarrr-gamal.github.io/Dentist/",
    featured: true
  },
  {
    id: 3,
    title: "Educopete",
    description: "--",
    image: "/ProjectsCover/Educopete.png",
    githubLink: "https://github.com/Hagargaballah/Educompete.git",
    liveLink: "https://hagargaballah.github.io/Educompete/",
    featured: true
  },
  {
    id: 4,
    title: "Furni Project",
    description: "--",
    image: "/ProjectsCover/FurniProject.png",
    githubLink: "https://github.com/Omarrr-Gamal/Furni-Project.git",
    liveLink: "https://omarrr-gamal.github.io/Furni-Project/",
    featured: false
  }
];

const initialSkills = [
  { id: 1, name: "React", icon: "/Skills/react.png" },
  { id: 1, name: "Html", icon: "/Skills/html.png" },
  { id: 1, name: "Css", icon: "/Skills/css.png" },
  { id: 2, name: "JavaScript", icon: "/Skills/js.png" },
  { id: 2, name: "BootStrap", icon: "/Skills/bootstrap.png" },
  { id: 5, name: "Tailwind", icon: "/Skills/Tailwind.png" },
  { id: 4, name: "TypeScript", icon: "/Skills/ts.png" },
  { id: 6, name: "SQL", icon: "/Skills/sql.png" },
  { id: 10, name: "Git", icon: "/Skills/git.png" },
  { id: 10, name: "Figma", icon: "/Skills/figma.png" },
  { id: 10, name: "Canva", icon: "/Skills/canva.png" },
  { id: 10, name: "Laravel", icon: "/Skills/laravel.png" },
];

const initialAbout = {
  text: "I'm a passionate full-stack developer with 2+ years of experience building modern web applications. I specialize in React, Laravel, and cloud technologies. My goal is to create beautiful, functional, and user-friendly applications that solve real problems."
};

const initialContact = {
  email: "gomar0935@gmail.com",
  phone: "+201550649921",
  location: "Cairo, Egypt",
  whatsapp: "01550649921",
  socials: {
    facebook: "https://www.facebook.com/omar.gamal.323462?sfnsn=scwspwa&mibextid=RUbZ1f",
    instagram: "https://www.instagram.com/omar.gamal_190?utm_source=qr&igsh=ZzB1M3phYW85ZnJw",
    github: "https://github.com/Omarrr-Gamal",
    linkedin: "https://www.linkedin.com/in/omar-gamal-b21527369"
  }
};



export const DataProvider = ({ children }) => {
  const [heroData, setHeroData] = useState(() => {
    const saved = localStorage.getItem('heroData');
    return saved ? JSON.parse(saved) : initialHeroData;
  });

  const [projects, setProjects] = useState(() => {
    const saved = localStorage.getItem('projects');
    return saved ? JSON.parse(saved) : initialProjects;
  });

  const [skills, setSkills] = useState(() => {
    const saved = localStorage.getItem('skills');
    return saved ? JSON.parse(saved) : initialSkills;
  });

  const [aboutData, setAboutData] = useState(() => {
    const saved = localStorage.getItem('aboutData');
    return saved ? JSON.parse(saved) : initialAbout;
  });

  const [contactData, setContactData] = useState(() => {
    const saved = localStorage.getItem('contactData');
    return saved ? JSON.parse(saved) : initialContact;
  });

  useEffect(() => {
    localStorage.setItem('heroData', JSON.stringify(heroData));
  }, [heroData]);

  useEffect(() => {
    localStorage.setItem('projects', JSON.stringify(projects));
  }, [projects]);

  useEffect(() => {
    localStorage.setItem('skills', JSON.stringify(skills));
  }, [skills]);

  useEffect(() => {
    localStorage.setItem('aboutData', JSON.stringify(aboutData));
  }, [aboutData]);

  useEffect(() => {
    localStorage.setItem('contactData', JSON.stringify(contactData));
  }, [contactData]);

  const updateHeroData = (data) => {
    setHeroData(prev => ({ ...prev, ...data }));
  };

  const addProject = (project) => {
    const newProject = { ...project, id: Date.now() };
    setProjects(prev => [...prev, newProject]);
    return newProject;
  };

  const updateProject = (id, updates) => {
    setProjects(prev => prev.map(p => p.id === id ? { ...p, ...updates } : p));
  };

  const deleteProject = (id) => {
    setProjects(prev => prev.filter(p => p.id !== id));
  };

  const addSkill = (skill) => {
    const newSkill = { ...skill, id: Date.now() };
    setSkills(prev => [...prev, newSkill]);
    return newSkill;
  };

  const deleteSkill = (id) => {
    setSkills(prev => prev.filter(s => s.id !== id));
  };

  const updateAbout = (text) => {
    setAboutData({ text });
  };

  const updateContact = (data) => {
    setContactData(prev => ({
      ...prev,
      ...data,
      socials: {
        ...prev.socials,
        ...data.socials
      }
    }));
  };


  return (
    <DataContext.Provider value={{
      heroData,
      projects,
      skills,
      aboutData,
      updateHeroData,
      addProject,
      updateProject,
      deleteProject,
      addSkill,
      deleteSkill,
      updateAbout,
      contactData,
      updateContact
    }}>
      {children}
    </DataContext.Provider>
  );
};
