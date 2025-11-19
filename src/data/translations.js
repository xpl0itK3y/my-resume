const translations = {
    ru: {
        // TopBar
        portfolio: "Portfolio",
        
        // Header
        name: "Иван Петров",
        title: "Frontend Developer",
        
        // About
        aboutTitle: "👤 О себе",
        aboutText: "Passionate frontend developer с 3+ годами опыта в создании современных веб-приложений. Специализируюсь на React, TypeScript и современных CSS-фреймворках. Люблю создавать красивые и функциональные интерфейсы.",
        
        // Contacts
        contactsTitle: "📬 Контакты",
        email: "ivan.petrov@example.com",
        phone: "+7 (999) 123-45-67",
        location: "Москва, Россия",
        github: "github.com/ivanpetrov",
        telegram: "@ivanpetrov",
        
        // Experience
        experienceTitle: "💼 Опыт работы",
        experiences: [
            {
                position: "Senior Frontend Developer",
                company: "Tech Company",
                period: "2022 - настоящее время",
                description: "Разработка и поддержка крупных веб-приложений на React. Оптимизация производительности, код-ревью, менторинг джунов."
            },
            {
                position: "Frontend Developer",
                company: "Startup Inc",
                period: "2020 - 2022",
                description: "Создание MVP продукта с нуля. Интеграция API, работа с UI/UX дизайнерами, внедрение CI/CD."
            }
        ],
        
        // Education
        educationTitle: "🎓 Образование",
        education: [
            {
                degree: "Бакалавр компьютерных наук",
                institution: "МГУ",
                period: "2016 - 2020"
            }
        ],
        
        // Skills
        skillsTitle: "🚀 Технические навыки",
        softSkillsTitle: "💡 Soft Skills",
        technicalSkills: [
            { name: "React / Next.js", level: 90 },
            { name: "TypeScript", level: 85 },
            { name: "CSS / Tailwind", level: 88 },
            { name: "Node.js", level: 75 },
            { name: "Git", level: 85 }
        ],
        softSkills: ["Командная работа", "Agile/Scrum", "Английский (B2)", "Креативность"],
        
        // Projects
        projectsTitle: "🎨 Проекты",
        projects: [
            {
                name: "E-commerce Platform",
                tech: "React, Redux, Node.js",
                description: "Полнофункциональная платформа электронной коммерции с корзиной, оплатой и админ-панелью"
            },
            {
                name: "Social Network",
                tech: "Next.js, MongoDB, Socket.io",
                description: "Социальная сеть с real-time чатом и лентой новостей"
            }
        ]
    },
    
    en: {
        // TopBar
        portfolio: "Portfolio",
        
        // Header
        name: "Ivan Petrov",
        title: "Frontend Developer",
        
        // About
        aboutTitle: "👤 About Me",
        aboutText: "Passionate frontend developer with 3+ years of experience in creating modern web applications. I specialize in React, TypeScript and modern CSS frameworks. I love creating beautiful and functional interfaces.",
        
        // Contacts
        contactsTitle: "📬 Contacts",
        email: "ivan.petrov@example.com",
        phone: "+7 (999) 123-45-67",
        location: "Moscow, Russia",
        github: "github.com/ivanpetrov",
        telegram: "@ivanpetrov",
        
        // Experience
        experienceTitle: "💼 Work Experience",
        experiences: [
            {
                position: "Senior Frontend Developer",
                company: "Tech Company",
                period: "2022 - Present",
                description: "Development and maintenance of large React web applications. Performance optimization, code review, mentoring juniors."
            },
            {
                position: "Frontend Developer",
                company: "Startup Inc",
                period: "2020 - 2022",
                description: "Creating an MVP product from scratch. API integration, working with UI/UX designers, implementing CI/CD."
            }
        ],
        
        // Education
        educationTitle: "🎓 Education",
        education: [
            {
                degree: "Bachelor of Computer Science",
                institution: "MSU",
                period: "2016 - 2020"
            }
        ],
        
        // Skills
        skillsTitle: "🚀 Technical Skills",
        softSkillsTitle: "💡 Soft Skills",
        technicalSkills: [
            { name: "React / Next.js", level: 90 },
            { name: "TypeScript", level: 85 },
            { name: "CSS / Tailwind", level: 88 },
            { name: "Node.js", level: 75 },
            { name: "Git", level: 85 }
        ],
        softSkills: ["Teamwork", "Agile/Scrum", "English (B2)", "Creativity"],
        
        // Projects
        projectsTitle: "🎨 Projects",
        projects: [
            {
                name: "E-commerce Platform",
                tech: "React, Redux, Node.js",
                description: "Full-featured e-commerce platform with cart, payment and admin panel"
            },
            {
                name: "Social Network",
                tech: "Next.js, MongoDB, Socket.io",
                description: "Social network with real-time chat and news feed"
            }
        ]
    }
};

export default translations;