const translations = {
    ru: {
        // TopBar
        portfolio: "Portfolio",
        
        // Header
        name: "Иван Петров",
        title: "Fullstack Developer",
        
        // About
        aboutTitle: "👤 О себе",
        aboutText: "Fullstack-разработчик с опытом разработки комплексных веб-приложений и AI-powered решений. Начинал карьеру с frontend-разработки, углубился в backend-технологии, сейчас специализируюсь на fullstack-разработке с акцентом на создание масштабируемых приложений. Владею широким стеком технологий: JavaScript/TypeScript (React, Node.js), Python (FastAPI), Go, PHP, а также опытом работы с Docker, базами данных и интеграцией AI-сервисов. Разрабатывал чат-боты, системы автоматизации и веб-приложения с интеграцией языковых моделей. Имею опыт оптимизации производительности, работы с многопоточностью и построения CI/CD пайплайнов.",
        
        // Contacts
        contactsTitle: "📬 Контакты",
        email: "ivan.petrov@example.com",
        phone: "+7 (999) 123-45-67",
        location: "Казахстан, Павлодар",
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
            // Frontend
            { name: "React / Next.js", level: 90 },
            { name: "TypeScript", level: 85 },
            { name: "JavaScript", level: 90 },
            { name: "Vue.js", level: 80 },
            { name: "HTML5", level: 95 },
            { name: "CSS / Tailwind", level: 88 },
            
            // Backend
            { name: "Node.js", level: 85 },
            { name: "Python", level: 80 },
            { name: "FastAPI", level: 80 },
            { name: "Django", level: 75 },
            { name: "Pandas", level: 75 },
            { name: "PHP", level: 75 },
            { name: "Laravel", level: 75 },
            { name: "Symfony", level: 70 },
            { name: "Go", level: 70 },
            
            // Databases
            { name: "PostgreSQL", level: 85 },
            { name: "MongoDB", level: 80 },
            { name: "Redis", level: 75 },
            { name: "MySQL", level: 80 },
            { name: "Sqlite", level: 80 },
            
            // DevOps & Tools
            { name: "Docker", level: 85 },
            { name: "Kubernetes", level: 75 },
            { name: "Git", level: 90 },
            { name: "Nginx", level: 80 },
            { name: "Linux", level: 85 },
            
            // Testing & CI/CD
            { name: "Jest", level: 80 },
            { name: "GitHub Actions", level: 75 },
            { name: "Pytest", level: 75 },
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
        title: "Fullstack Developer",
        
        // About
        aboutTitle: "👤 About Me",
        aboutText: "Full-stack developer with experience in developing complex web applications and AI-powered solutions. I started my career in front-end development, delved into back-end technologies, and now specialize in full-stack development with a focus on creating scalable applications. I have a broad technology stack: JavaScript/TypeScript (React, Node.js), Python (FastAPI), Go, PHP, as well as experience with Docker, databases, and AI service integration. I have developed chatbots, automation systems, and web applications with language model integration. I have experience in performance optimization, multithreading, and building CI/CD pipelines.",
        
        // Contacts
        contactsTitle: "📬 Contacts",
        email: "ivan.petrov@example.com",
        phone: "+7 (999) 123-45-67",
        location: "Kazakhstan, Pavlodar",
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
            // Frontend
            { name: "React / Next.js", level: 90 },
            { name: "TypeScript", level: 85 },
            { name: "JavaScript", level: 90 },
            { name: "Vue.js", level: 80 },
            { name: "HTML5", level: 95 },
            { name: "CSS / Tailwind", level: 88 },
            
            // Backend
            { name: "Node.js", level: 85 },
            { name: "Python", level: 80 },
            { name: "FastAPI", level: 80 },
            { name: "Django", level: 75 },
            { name: "Pandas", level: 75 },
            { name: "PHP", level: 75 },
            { name: "Laravel", level: 75 },
            { name: "Symfony", level: 70 },
            { name: "Go", level: 70 },
        
            
            // Databases
            { name: "PostgreSQL", level: 85 },
            { name: "MongoDB", level: 80 },
            { name: "Redis", level: 75 },
            { name: "MySQL", level: 80 },
            { name: "Sqlite", level: 80 },
            
            // DevOps & Tools
            { name: "Docker", level: 85 },
            { name: "Kubernetes", level: 75 },
            { name: "Git", level: 90 },
            { name: "Nginx", level: 80 },
            { name: "Linux", level: 85 },
            
            // Testing & CI/CD
            { name: "Jest", level: 80 },
            { name: "GitHub Actions", level: 75 },
            { name: "Pytest", level: 75 },
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