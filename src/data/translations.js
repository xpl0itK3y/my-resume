const translations = {
    ru: {
        // TopBar
        portfolio: "Резюме",
        
        // Header
        name: "Владимир Николаевич",
        title: "Fullstack Developer",
        
        // About
        aboutTitle: "👤 О себе",
        aboutText: "Fullstack-разработчик с опытом разработки комплексных веб-приложений и AI-powered решений. Начинал карьеру с frontend-разработки, углубился в backend-технологии, сейчас специализируюсь на fullstack-разработке с акцентом на создание масштабируемых приложений. Владею широким стеком технологий: JavaScript/TypeScript (React, Node.js), Python (FastAPI), Go, PHP, а также опытом работы с Docker, базами данных и интеграцией AI-сервисов. Разрабатывал чат-боты, системы автоматизации и веб-приложения с интеграцией языковых моделей. Имею опыт оптимизации производительности, работы с многопоточностью и построения CI/CD пайплайнов.",
        
        // Contacts
        contactsTitle: "📬 Контакты",
        email: "chiglinzev.vladimir@icloud.com",
        phone: "+7 (707) 749-41-33",
        location: "Казахстан, Павлодар",
        github: "github.com/Modern-Messiah",
        telegram: "@Inf1n1teVoid",
        
        // Experience
        experienceTitle: "💼 Опыт работы",
        experiences: [
            {
                position: "Fullstack-разработчик",
                company: "Фриланс",
                period: "Июль 2025 - настоящее время",
                description: "Проектирование и разработка fullstack веб-приложений с интеграцией AI-сервисов и языковых моделей. Разработка Telegram-ботов различной сложности: от простых уведомлений до сложных диалоговых систем с AI-функционалом, обработкой команд, платёжными системами и автоматизацией бизнес-процессов. Реализация RESTful API на FastAPI с асинхронной архитектурой, JWT-аутентификацией, системами ролей и real-time обновлениями. Интеграция Telegram Bot API через aiogram и Telethon для создания интеллектуальных чат-ботов, автоответчиков и CRM-систем. Создание адаптивных пользовательских интерфейсов с использованием React, Vue и Vanilla JavaScript. Оптимизация производительности через многопоточность (asyncio, threading, ThreadPoolExecutor) для обработки высоких нагрузок. Проектирование баз данных (PostgreSQL, SQLite, MongoDB), реализация кэширования (Redis). Контейнеризация приложений с Docker/Docker Compose для быстрого развёртывания.",
                technologies: ["Python", "FastAPI", "Aiogram", "Telethon", "JavaScript", "React", "Vue.js", "Docker", "Docker Compose", "PostgreSQL", "SQLite", "MongoDB", "Redis", "DeepSeek API", "Asyncio", "Threading", "JWT", "Git", "aiohttp", "Webhooks"]
            },
            {
                position: "Fullstack-разработчик",
                company: "Фриланс: PrestigeFly",
                period: "Декабрь 2024 - Июнь 2025",
                description: "Разрабатывал и внедрял веб-решения для внутренних систем компании на основе бизнес-требований. Поддерживал и оптимизировал существующий код, повышая стабильность и производительность. Участвовал в проектировании архитектуры и интеграции с внешними сервисами. Проводил тестирование, отладку и рефакторинг кода. Сотрудничал с командой дизайнеров и менеджеров для реализации функционала в срок. Контакты: artemis@prestigefly․com",
                technologies: ["React", "JavaScript", "Node.js"]
            },
            {
                position: "Frontend-разработчик",
                company: "Tele2 Kazakhstan",
                period: "Февраль 2024 - Июнь 2024",
                description: "Разработал веб-приложение для автоматизации учета продаж 20+ менеджеров. Внедрил систему аналитики с Pandas - руководство получило инструмент для принятия решений. Реализовал ролевую модель доступа (менеджер/администратор) с Django ORM. Создал дашборд для мониторинга выполнения планов с визуализацией. Внедрил контроль выполнения планов продаж с визуализацией данных Настроил контейнеризацию приложения с помощью Docker.",
                technologies: ["Python", "Django", "SQLite", "Pandas", "Docker", "Linux", "HTML/CSS/JavaScript"]
            },
            {
                position: "Fullstack PHP разработчик",
                company: "Фриланс",
                period: "Октябрь 2023 - Январь 2024",
                description: "Разработал интернет-магазин на Laravel с использованием паттернов Repository, Service Layer. Реализовал каталог товаров с системой фильтрации и поиском. Интегрировал платежные системы и способы доставки. Создал личный кабинет пользователя и административную панель. Разработал систему управления заказами, скидок и промокодов. Настроил email-уведомления о статусе заказов. Реализовал систему авторизации и регистрации пользователей.",
                technologies: ["PHP", "Laravel", "MySQL", "Docker"]
            },
            {
                position: "1С-разработчик (1С:Предприятие 8.3)",
                company: "Фриланс",
                period: "Сентябрь 2023 - Декабрь 2023",
                description: "Разработал системы автоматизации для книжного магазина на базе 1С:Предприятие 8.3 Реализовал полный цикл проведения продаж: оформление заказов, работа с клиентами, формирование документов. Разработал систему отчетов для анализа продаж, остатков, прибыльности. Создал ролевую модель доступа с разграничением прав (продавец, кассир, менеджер, администратор). Настроил учет товаров на складе с контролем остатков. Автоматизировал формирование первичных документов (накладные, акты, счета). Результат: убрали ручной учет в Excel, ускорили обработку заказов в 2-3 раза",
                technologies: ["1С:Предприятие 8.3", "1С", "механизм ролей", "печатные формы"]
            }
        ],
        
        // Education
        educationTitle: "🎓 Образование",
        education: [
            {
                degree: "Вычислительная техника и программное обеспечение",
                institution: "Инновационный Евразийский Университет",
                period: "2020 - 2024"
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
        softSkills: ["Командная работа", "Agile/Scrum", "Английский (B2)", "Креативность", "Самоорганизация", "Быстрое обучение", "Решение проблем", "Внимание к деталям", "Техническая документация", "Аналитическое мышление"],
        
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
        portfolio: "Resume",
        
        // Header
        name: "Vladimir Nikolayevich",
        title: "Full-stack Developer",
        
        // About
        aboutTitle: "👤 About Me",
        aboutText: "Full-stack developer with experience in developing complex web applications and AI-powered solutions. I started my career in front-end development, delved into back-end technologies, and now specialize in full-stack development with a focus on creating scalable applications. I have a broad technology stack: JavaScript/TypeScript (React, Node.js), Python (FastAPI), Go, PHP, as well as experience with Docker, databases, and AI service integration. I have developed chatbots, automation systems, and web applications with language model integration. I have experience in performance optimization, multithreading, and building CI/CD pipelines.",
        
        // Contacts
        contactsTitle: "📬 Contacts",
        email: "chiglinzev.vladimir@icloud.com",
        phone: "+7 (707) 749-41-33",
        location: "Kazakhstan, Pavlodar",
        github: "github.com/Modern-Messiah",
        telegram: "@Inf1n1teVoid",
        
        // Experience
        experienceTitle: "💼 Work Experience",
        experiences: [
            {
                position: "Full-stack developer",
                company: "Freelance",
                period: "July 2025 - present",
                description: "Design and development of fullstack web applications with AI service and language model integration. Development of Telegram bots of varying complexity: from simple notifications to sophisticated conversational systems with AI functionality, command processing, payment systems, and business process automation. Implementation of RESTful APIs on FastAPI with asynchronous architecture, JWT authentication, role-based systems, and real-time updates. Integration of Telegram Bot API via aiogram and Telethon to create intelligent chatbots, auto-responders, and CRM systems. Creation of responsive user interfaces using React, Vue, and Vanilla JavaScript. Performance optimization through multithreading (asyncio, threading, ThreadPoolExecutor) for high-load processing. Database design (PostgreSQL, SQLite, MongoDB), caching implementation (Redis). Application containerization with Docker/Docker Compose for rapid deployment.",
                technologies: ["Python", "FastAPI", "Aiogram", "Telethon", "JavaScript", "React", "Vue.js", "Docker", "Docker Compose", "PostgreSQL", "SQLite", "MongoDB", "Redis", "DeepSeek API", "Asyncio", "Threading", "JWT", "Git", "aiohttp", "Webhooks"]
            },
            {
                position: "Full-stack developer",
                company: "Freelance: PrestigeFly",
                period: "December 2024 - June 2025",
                description: "Developed and implemented web solutions for internal company systems based on business requirements. Maintained and optimized existing codebase, improving stability and performance. Participated in architecture design and integration with external services. Conducted testing, debugging, and code refactoring. Collaborated with design and management teams to deliver functionality on schedule. Contact: artemis@prestigefly.com",
                technologies: ["React", "JavaScript", "Node.js"]
            },
            {
                position: "Front-end developer",
                company: "Tele2 Kazakhstan",
                period: "February 2024 - June 2024",
                description: "Developed a web application to automate sales tracking for 20+ managers. Implemented an analytics system with Pandas - providing management with a decision-making tool. Built a role-based access model (manager/administrator) using Django ORM. Created a dashboard for monitoring sales plan completion with data visualization. Set up application containerization using Docker.",
                technologies: ["Python", "Django", "SQLite", "Pandas", "Docker", "Linux", "HTML/CSS/JavaScript"]
            },
            {
                position: "Full-stack PHP developer",
                company: "Freelance",
                period: "October 2023 - January 2024",
                description: "Developed an e-commerce platform on Laravel using Repository and Service Layer patterns. Implemented product catalog with filtering system and search functionality. Integrated payment systems and delivery methods. Created user personal cabinet and administrative panel. Developed order management system, discounts, and promo codes. Set up email notifications for order status updates. Implemented user authentication and registration system.",
                technologies: ["PHP", "Laravel", "MySQL", "Docker"]
            },
            {
                position: "1C Developer (1C:Enterprise 8.3)",
                company: "Freelance",
                period: "September 2023 - December 2023",
                description: "Developed automation systems for a bookstore based on 1C:Enterprise 8.3. Implemented a complete sales cycle: order processing, customer management, document generation. Built a reporting system for analyzing sales, inventory, and profitability. Created a role-based access model with permission differentiation (salesperson, cashier, manager, administrator). Set up inventory tracking with stock control. Automated generation of primary documents (delivery notes, acts, invoices). Result: eliminated manual Excel tracking, accelerated order processing by 2-3x.",
                technologies: ["1C:Enterprise 8.3", "1С", "role mechanism", "printing forms"]
            }
        ],
        
        // Education
        educationTitle: "🎓 Education",
        education: [
            {
                degree: "Computer Engineering and Software",
                institution: "Innovative University of Eurasia",
                period: "2020 - 2024"
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
        softSkills: ["Team Collaboration", "Agile/Scrum", "English (B2)", "Creativity", "Self-Organization", "Fast Learning", "Problem Solving", "Attention to Detail", "Technical Documentation", "Analytical Thinking"],
        
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