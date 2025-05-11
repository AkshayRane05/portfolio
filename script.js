
// Configuration and personal data
const config = {
    username: "visitor",
    hostname: "portfolio",
    welcomeMessage: `
 ██████╗ ███████╗██╗   ██╗██████╗  ██████╗ ██████╗ ████████╗███████╗ ██████╗ ██╗     ██╗ ██████╗     
 ██╔══██╗██╔════╝██║   ██║██╔══██╗██╔═══██╗██╔══██╗╚══██╔══╝██╔════╝██╔═══██╗██║     ██║██╔═══██╗    
 ██║  ██║█████╗  ██║   ██║██████╔╝██║   ██║██████╔╝   ██║   █████╗  ██║   ██║██║     ██║██║   ██║    
 ██║  ██║██╔══╝  ╚██╗ ██╔╝██╔═══╝ ██║   ██║██╔══██╗   ██║   ██╔══╝  ██║   ██║██║     ██║██║   ██║    
 ██████╔╝███████╗ ╚████╔╝ ██║     ╚██████╔╝██║  ██║   ██║   ██║     ╚██████╔╝███████╗██║╚██████╔╝    
 ╚═════╝ ╚══════╝  ╚═══╝  ╚═╝      ╚═════╝ ╚═╝  ╚═╝   ╚═╝   ╚═╝      ╚═════╝ ╚══════╝╚═╝ ╚═════╝     
                                                                                                      
 ████████╗███████╗██████╗ ███╗   ███╗██╗███╗   ██╗ █████╗ ██╗                                         
 ╚══██╔══╝██╔════╝██╔══██╗████╗ ████║██║████╗  ██║██╔══██╗██║                                         
    ██║   █████╗  ██████╔╝██╔████╔██║██║██╔██╗ ██║███████║██║                                         
    ██║   ██╔══╝  ██╔══██╗██║╚██╔╝██║██║██║╚██╗██║██╔══██║██║                                         
    ██║   ███████╗██║  ██║██║ ╚═╝ ██║██║██║ ╚████║██║  ██║███████╗                                    
    ╚═╝   ╚══════╝╚═╝  ╚═╝╚═╝     ╚═╝╚═╝╚═╝  ╚═══╝╚═╝  ╚═╝╚══════╝                                    
    
[System Initializing... Ready]

Welcome to my interactive terminal portfolio! Type 'help' to see available commands.
Use the sidebar for quick navigation or explore like a real terminal.

<span class="typing">_</span>`,

    motd: "The Matrix has you...",
    currentPath: "~",

    fileSystem: {
        "~": {
            type: "directory",
            contents: {
                "about.txt": {
                    type: "file",
                    content: "Hello! I'm a developer passionate about creating unique web experiences.\n\nI specialize in front-end development with expertise in JavaScript, React, and CSS.\nI also have experience with back-end technologies like Node.js and Python.\n\nThis interactive terminal is just one example of how I like to blend creativity with functionality."
                },
                "contact.txt": {
                    type: "file",
                    content: "Email: your.email@example.com\nGitHub: github.com/yourusername\nLinkedIn: linkedin.com/in/yourusername\nTwitter: @yourusername"
                },
                "projects": {
                    type: "directory",
                    contents: {
                        "project1.txt": {
                            type: "file",
                            content: "Project: E-commerce Platform\n\nA full-stack e-commerce solution built with React and Node.js.\nFeatures include user authentication, product catalog, shopping cart, and payment processing.\n\nGitHub: github.com/yourusername/ecommerce-project"
                        },
                        "project2.txt": {
                            type: "file",
                            content: "Project: Weather App\n\nA responsive weather application using OpenWeatherMap API.\nBuilt with HTML, CSS, and vanilla JavaScript.\n\nGitHub: github.com/yourusername/weather-app"
                        },
                        "project3.txt": {
                            type: "file",
                            content: "Project: Terminal Portfolio\n\nThis website! A unique portfolio designed as an interactive terminal.\nBuilt with HTML, CSS, and JavaScript.\n\nGitHub: github.com/yourusername/terminal-portfolio"
                        }
                    }
                },
                "skills": {
                    type: "directory",
                    contents: {
                        "frontend.txt": {
                            type: "file",
                            content: "Frontend Skills:\n\n- HTML5 & CSS3\n- JavaScript (ES6+)\n- React.js\n- Vue.js\n- TypeScript\n- SASS/SCSS\n- Responsive Design\n- Web Accessibility"
                        },
                        "backend.txt": {
                            type: "file",
                            content: "Backend Skills:\n\n- Node.js\n- Express.js\n- Python\n- Django\n- RESTful APIs\n- GraphQL\n- MongoDB\n- PostgreSQL"
                        },
                        "tools.txt": {
                            type: "file",
                            content: "Tools & Others:\n\n- Git & GitHub\n- Docker\n- Webpack\n- Jest & Testing Library\n- CI/CD\n- Agile Development\n- Linux/Unix\n- AWS"
                        }
                    }
                },
                "resume.txt": {
                    type: "file",
                    content: "RESUME\n\nEDUCATION\n- B.S. Computer Science, University Name, 20XX-20XX\n\nEXPERIENCE\n- Senior Web Developer, Company Name, 20XX-Present\n  • Led development of company's main product\n  • Improved site performance by 40%\n\n- Frontend Developer, Previous Company, 20XX-20XX\n  • Built responsive web applications\n  • Collaborated with UX team on design implementation\n\nCERTIFICATIONS\n- AWS Certified Developer\n- Google Professional Web Developer"
                },
                "secret.txt": {
                    type: "file",
                    content: "You found a secret file! Good job exploring the system.\nHere's a little easter egg: Try the command 'matrix' for a surprise!"
                }
            }
        }
    },

    skills: [
        { name: "JavaScript", level: 90 },
        { name: "React", level: 85 },
        { name: "HTML/CSS", level: 95 },
        { name: "Node.js", level: 80 },
        { name: "Python", level: 75 },
        { name: "TypeScript", level: 70 },
        { name: "MongoDB", level: 65 },
        { name: "Git/GitHub", level: 90 }
    ],

    projects: [
        {
            title: "E-commerce Platform",
            description: "A full-stack e-commerce solution with user authentication, product catalog, shopping cart, and payment processing.",
            tags: ["React", "Node.js", "MongoDB", "Stripe"],
            icon: "fa-shopping-cart",
            github: "https://github.com/yourusername/ecommerce-project",
            demo: "#"
        },
        {
            title: "Weather Dashboard",
            description: "A responsive weather application that provides real-time weather data and forecasts for any location.",
            tags: ["JavaScript", "APIs", "CSS", "Responsive"],
            icon: "fa-cloud-sun",
            github: "https://github.com/yourusername/weather-app",
            demo: "#"
        },
        {
            title: "Terminal Portfolio",
            description: "This interactive terminal-style portfolio website you're currently using.",
            tags: ["HTML", "CSS", "JavaScript", "Creative UI"],
            icon: "fa-terminal",
            github: "https://github.com/yourusername/terminal-portfolio",
            demo: "#"
        }
    ]
};

// Initialize terminal
const terminal = document.getElementById('terminal');
const userInput = document.getElementById('user-input');
const prompt = document.getElementById('prompt');

// Command history
let commandHistory = [];
let historyIndex = -1;

// Path tracking
let currentPath = config.currentPath;

// Initialize background animation
function initBackgroundAnimation() {
    const bg = document.getElementById('bgAnimation');

    // Create particles
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');

        // Random position, size and animation duration
        const size = Math.random() * 3 + 1;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${Math.random() * 100}%`;

        // Random animation duration and delay
        const duration = Math.random() * 30 + 10;
        const delay = Math.random() * 15;
        particle.style.animation = `float ${duration}s linear ${delay}s infinite`;

        bg.appendChild(particle);
    }
}

// Matrix rain effect
function initMatrixRain() {
    const canvas = document.getElementById('matrixRain');
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Characters to display
    const characters = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz$+-*/=%"\'#&_(),.;:?!\\|{}<>[]^~';
    const charArray = characters.split('');

    const fontSize = 14;
    const columns = canvas.width / fontSize;

    // Array to track the y position of each drop
    const drops = [];
    for (let i = 0; i < columns; i++) {
        drops[i] = 1;
    }

    // Drawing the matrix rain
    function drawMatrixRain() {
        // Semi-transparent black to create fade effect for previous characters
        ctx.fillStyle = 'rgba(0, 5, 15, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Set the color and font for characters
        ctx.fillStyle = '#0f0';
        ctx.font = `${fontSize}px monospace`;

        // Loop through each drop
        for (let i = 0; i < drops.length; i++) {
            // Random character to print
            const text = charArray[Math.floor(Math.random() * charArray.length)];

            // x coordinate for the drop
            const x = i * fontSize;
            // y coordinate for the drop
            const y = drops[i] * fontSize;

            // Draw the character
            ctx.fillText(text, x, y);

            // Randomly reset the drop to top after it reaches a point or randomly
            if (y > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }

            // Move the drop down
            drops[i]++;
        }
    }

    // Initial opacity
    canvas.style.opacity = '0.1';

    // Animation loop
    setInterval(drawMatrixRain, 33);

    // Show matrix more prominently when requested
    window.showMatrix = function () {
        canvas.style.opacity = '0.8';
        canvas.style.zIndex = '0';
        setTimeout(() => {
            canvas.style.opacity = '0.1';
            canvas.style.zIndex = '-1';
        }, 5000);
    };

    // Resize handler
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

// Function to update prompt
function updatePrompt() {
    prompt.textContent = `${config.username}@${config.hostname}:${currentPath}<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Terminal Portfolio</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
    <style>
        :root {
            --bg-color: #0a0a16;
            --prompt-color: #0f0;
            --text-color: #f0f0f0;
            --accent-color: #0f0;
            --error-color: #ff2b2b;
            --link-color: #5e8aff;
            --dir-color: #5f9cf9;
            --file-color: #f9db5f;
            --highlight-color: #ff79c6;
            --command-color: #0f0;
            --terminal-bg: rgba(0, 5, 15, 0.85);
            --success-color: #52fa7c;
            --warning-color: #ffaf3d;
            --input-height: 40px;
        }
        
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }
        
        body {
            background-color: var(--bg-color);
            color: var(--text-color);
            font-family: 'Courier New', monospace;
            margin: 0;
            padding: 0;
            height: 100vh;
            overflow: hidden;
            position: relative;
        }
        
        /* Background animation */
        .bg-animation {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -1;
            overflow: hidden;
        }
        
        .particle {
            position: absolute;
            width: 1px;
            height: 1px;
            background-color: rgba(60, 255, 130, 0.5);
            border-radius: 50%;
            animation: float 30s linear infinite;
        }
        
        @keyframes float {
            0% {
                transform: translateY(100vh) translateX(0);
                opacity: 1;
            }
            100% {
                transform: translateY(-100vh) translateX(50px);
                opacity: 0;
            }
        }
        
        .matrix-rain {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -1;
        }
        
        /* Terminal styling */
        .container {
            display: flex;
            height: 100vh;
            position: relative;
            z-index: 1;
        }
        
        .sidebar {
            width: 60px;
            background-color: rgba(12, 12, 24, 0.8);
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 20px 0;
            box-shadow: 2px 0 10px rgba(0, 0, 0, 0.5);
            transition: width 0.3s ease;
        }
        
        .sidebar:hover {
            width: 180px;
        }
        
        .sidebar-item {
            margin: 15px 0;
            cursor: pointer;
            color: #888;
            font-size: 24px;
            transition: color 0.3s, transform 0.2s;
            display: flex;
            align-items: center;
            width: 100%;
            padding: 10px;
            text-decoration: none;
        }
        
        .sidebar-item i {
            min-width: 40px;
            text-align: center;
        }
        
        .sidebar-item span {
            display: none;
            margin-left: 10px;
            white-space: nowrap;
            font-size: 16px;
        }
        
        .sidebar:hover .sidebar-item span {
            display: inline;
        }
        
        .sidebar-item:hover {
            color: var(--accent-color);
            transform: scale(1.1);
        }
        
        .sidebar-item.active {
            color: var(--accent-color);
        }
        
        .main-content {
            flex: 1;
            display: flex;
            flex-direction: column;
            position: relative;
        }
        
        .terminal-window {
            background-color: var(--terminal-bg);
            border-radius: 8px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
            width: 95%;
            height: 85%;
            margin: 30px auto;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            backdrop-filter: blur(5px);
            border: 1px solid rgba(100, 255, 150, 0.3);
        }
        
        .terminal-header {
            background-color: rgba(20, 20, 40, 0.7);
            padding: 10px 15px;
            display: flex;
            align-items: center;
            border-bottom: 1px solid rgba(100, 255, 150, 0.2);
        }
        
        .window-buttons {
            display: flex;
            margin-right: 15px;
        }
        
        .window-button {
            width: 12px;
            height: 12px;
            border-radius: 50%;
            margin-right: 8px;
            cursor: pointer;
        }
        
        .close {
            background-color: #ff5f56;
        }
        
        .minimize {
            background-color: #ffbd2e;
        }
        
        .maximize {
            background-color: #27c93f;
        }
        
        .terminal-title {
            flex: 1;
            text-align: center;
            font-size: 14px;
            font-weight: 500;
            letter-spacing: 1px;
            color: #ccc;
        }
        
        #terminal {
            flex: 1;
            overflow-y: auto;
            padding: 20px;
            white-space: pre-wrap;
            word-wrap: break-word;
            scrollbar-width: thin;
            scrollbar-color: rgba(100, 255, 150, 0.5) transparent;
        }
        
        #terminal::-webkit-scrollbar {
            width: 6px;
        }
        
        #terminal::-webkit-scrollbar-track {
            background: transparent;
        }
        
        #terminal::-webkit-scrollbar-thumb {
            background-color: rgba(100, 255, 150, 0.5);
            border-radius: 3px;
        }
        
        #input-line {
            display: flex;
            padding: 10px 15px;
            background-color: rgba(10, 10, 30, 0.7);
            border-top: 1px solid rgba(100, 255, 150, 0.2);
            align-items: center;
            height: var(--input-height);
        }
        
        #prompt {
            color: var(--prompt-color);
            margin-right: 10px;
            font-weight: bold;
            text-shadow: 0 0 5px rgba(0, 255, 0, 0.5);
        }
        
        #user-input {
            background: transparent;
            border: none;
            color: var(--text-color);
            font-family: 'Courier New', monospace;
            font-size: 16px;
            flex: 1;
            outline: none;
            caret-color: var(--accent-color);
        }
        
        .output {
            margin: 5px 0;
            line-height: 1.4;
        }
        
        .command {
            color: var(--command-color);
            text-shadow: 0 0 5px rgba(0, 255, 0, 0.3);
        }
        
        .error {
            color: var(--error-color);
            text-shadow: 0 0 8px rgba(255, 0, 0, 0.4);
        }
        
        .success {
            color: var(--success-color);
        }
        
        .info {
            color: #42a5f5;
        }
        
        .warning {
            color: var(--warning-color);
        }
        
        .directory {
            color: var(--dir-color);
            font-weight: bold;
        }
        
        .file {
            color: var(--file-color);
        }
        
        .highlight {
            color: var(--highlight-color);
            font-weight: bold;
        }
        
        /* Terminal typing animation */
        .typing {
            border-right: 2px solid var(--accent-color);
            animation: blinking-cursor 0.8s step-end infinite;
        }
        
        @keyframes blinking-cursor {
            from, to { border-color: transparent; }
            50% { border-color: var(--accent-color); }
        }
        
        /* ASCII art styling */
        .ascii-art {
            color: var(--accent-color);
            line-height: 1.2;
            font-family: monospace;
            margin: 10px 0;
            text-shadow: 0 0 5px rgba(0, 255, 0, 0.5);
            transform: perspective(500px) rotateX(5deg);
            transform-origin: center top;
        }
        
        /* Help menu styling */
        .help-command {
            color: var(--warning-color);
            font-weight: bold;
        }
        
        .help-desc {
            color: #ccc;
        }
        
        /* Progress bar styling */
        .progress-container {
            width: 100%;
            height: 10px;
            background-color: rgba(255, 255, 255, 0.1);
            border-radius: 5px;
            margin: 5px 0;
            overflow: hidden;
        }
        
        .progress-bar {
            height: 100%;
            background: linear-gradient(90deg, var(--accent-color), #5fffbc);
            border-radius: 5px;
            transition: width 0.3s ease;
            position: relative;
        }
        
        .progress-bar::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(
                90deg,
                rgba(255, 255, 255, 0) 25%,
                rgba(255, 255, 255, 0.4) 50%,
                rgba(255, 255, 255, 0) 75%
            );
            animation: shimmer 1.5s infinite;
        }
        
        @keyframes shimmer {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
        }
        
        /* Card styling */
        .card-container {
            display: flex;
            flex-wrap: wrap;
            gap: 15px;
            margin: 15px 0;
        }
        
        .card {
            background-color: rgba(30, 30, 50, 0.7);
            border-radius: 5px;
            padding: 15px;
            border-left: 3px solid var(--accent-color);
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
            width: calc(50% - 15px);
            transition: transform 0.3s, box-shadow 0.3s;
        }
        
        .card:hover {
            transform: translateY(-5px);
            box-shadow: 0 7px 15px rgba(0, 0, 0, 0.3);
        }
        
        .card-title {
            color: var(--accent-color);
            margin-bottom: 10px;
            font-size: 18px;
            font-weight: bold;
        }
        
        .card-content {
            color: #ddd;
            font-size: 14px;
        }
        
        /* About section styling */
        .profile-container {
            display: flex;
            margin: 20px 0;
            gap: 20px;
            background-color: rgba(30, 30, 50, 0.7);
            border-radius: 8px;
            padding: 20px;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
        }
        
        .profile-image {
            width: 150px;
            height: 150px;
            border-radius: 50%;
            background-color: #333;
            border: 4px solid var(--accent-color);
            box-shadow: 0 0 20px rgba(0, 255, 0, 0.3);
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
        }
        
        .profile-image img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        
        .profile-image i {
            font-size: 60px;
            color: var(--accent-color);
        }
        
        .profile-info {
            flex: 1;
        }
        
        .profile-name {
            font-size: 24px;
            color: var(--accent-color);
            margin-bottom: 10px;
            text-shadow: 0 0 5px rgba(0, 255, 0, 0.3);
        }
        
        .profile-title {
            font-size: 18px;
            color: #aaa;
            margin-bottom: 15px;
        }
        
        .profile-description {
            line-height: 1.6;
            color: #ddd;
        }
        
        .skill-tag {
            display: inline-block;
            background-color: rgba(0, 255, 0, 0.15);
            color: var(--accent-color);
            padding: 3px 8px;
            border-radius: 12px;
            font-size: 12px;
            margin: 3px;
            border: 1px solid rgba(0, 255, 0, 0.3);
        }
        
        /* Social links styling */
        .social-links {
            display: flex;
            gap: 15px;
            margin-top: 15px;
        }
        
        .social-link {
            width: 35px;
            height: 35px;
            border-radius: 50%;
            background-color: rgba(30, 30, 50, 1);
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--accent-color);
            font-size: 18px;
            transition: transform 0.3s, background-color 0.3s;
            border: 1px solid rgba(0, 255, 0, 0.3);
        }
        
        .social-link:hover {
            transform: scale(1.2);
            background-color: var(--accent-color);
            color: #000;
        }
        
        /* Project cards */
        .project-card {
            background-color: rgba(30, 30, 50, 0.7);
            border-radius: 8px;
            overflow: hidden;
            margin-bottom: 20px;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
            border: 1px solid rgba(0, 255, 0, 0.2);
            transition: transform 0.3s;
        }
        
        .project-card:hover {
            transform: translateY(-5px);
        }
        
        .project-image {
            height: 150px;
            background: linear-gradient(120deg, #222750, #0a0a16);
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
        }
        
        .project-image i {
            font-size: 50px;
            color: var(--accent-color);
        }
        
        .project-content {
            padding: 20px;
        }
        
        .project-title {
            color: var(--accent-color);
            font-size: 20px;
            margin-bottom: 10px;
        }
        
        .project-description {
            color: #ddd;
            margin-bottom: 15px;
            line-height: 1.5;
        }
        
        .project-tags {
            display: flex;
            flex-wrap: wrap;
            gap: 5px;
            margin-bottom: 15px;
        }
        
        .project-tag {
            background-color: rgba(0, 255, 0, 0.15);
            color: var(--accent-color);
            padding: 2px 8px;
            border-radius: 12px;
            font-size: 12px;
            border: 1px solid rgba(0, 255, 0, 0.3);
        }
        
        .project-links {
            display: flex;
            gap: 15px;
        }
        
        .project-link {
            padding: 5px 12px;
            background-color: rgba(0, 255, 0, 0.2);
            color: var(--accent-color);
            border-radius: 4px;
            font-size: 14px;
            text-decoration: none;
            transition: background-color 0.3s;
            border: 1px solid rgba(0, 255, 0, 0.4);
        }
        
        .project-link:hover {
            background-color: rgba(0, 255, 0, 0.4);
        }
        
        /* Contact form styling */
        .contact-form {
            background-color: rgba(30, 30, 50, 0.7);
            border-radius: 8px;
            padding: 20px;
            margin-top: 20px;
        }
        
        .form-group {
            margin-bottom: 15px;
        }
        
        .form-label {
            display: block;
            margin-bottom: 5px;
            color: #ccc;
        }
        
        .form-input {
            width: 100%;
            padding: 10px;
            background-color: rgba(0, 0, 0, 0.3);
            border: 1px solid rgba(0, 255, 0, 0.3);
            border-radius: 4px;
            color: #fff;
            font-family: inherit;
        }
        
        .form-input:focus {
            outline: none;
            border-color: var(--accent-color);
            box-shadow: 0 0 5px rgba(0, 255, 0, 0.5);
        }
        
        .form-textarea {
            min-height: 100px;
            resize: vertical;
        }
        
        .form-button {
            background-color: rgba(0, 255, 0, 0.2);
            color: var(--accent-color);
            border: 1px solid rgba(0, 255, 0, 0.4);
            padding: 10px 20px;
            border-radius: 4px;
            cursor: pointer;
            font-family: inherit;
            font-size: 16px;
            transition: background-color 0.3s;
        }
        
        .form-button:hover {
            background-color: rgba(0, 255, 0, 0.4);
        }
        
        /* Custom command hints */
        .command-hints {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            margin-top: 10px;
        }
        
        .command-hint {
            background-color: rgba(0, 0, 0, 0.3);
            border: 1px solid rgba(0, 255, 0, 0.3);
            border-radius: 4px;
            padding: 5px 10px;
            color: var(--accent-color);
            font-size: 14px;
            cursor: pointer;
            transition: background-color 0.3s, transform 0.2s;
        }
        
        .command-hint:hover {
            background-color: rgba(0, 255, 0, 0.2);
            transform: translateY(-2px);
        }
        
        /* Loading animation */
        .terminal-loader {
            display: inline-block;
            margin-right: 10px;
            color: var(--accent-color);
        }
        
        .terminal-loader::after {
            content: "";
            animation: dots 1.5s steps(5, end) infinite;
        }
        
        @keyframes dots {
            0%, 20% { content: ""; }
            40% { content: "."; }
            60% { content: ".."; }
            80%, 100% { content: "..."; }
        }
        
        /* Mobile responsive */
        @media (max-width: 768px) {
            .sidebar {
                width: 50px;
            }
            
            .sidebar:hover {
                width: 140px;
            }
            
            .card {
                width: 100%;
            }
            
            .terminal-window {
                width: 95%;
                height: 80%;
                margin: 20px auto;
            }
            
            .profile-container {
                flex-direction: column;
                align-items: center;
                text-align: center;
            }
            
            .social-links {
                justify-content: center;
            }
        }
    </style>
</head>
<body>
    <!-- Background Animation -->
    <div class="bg-animation" id="bgAnimation"></div>
    <canvas id="matrixRain"></canvas>
    
    <div class="container">
        <!-- Sidebar Navigation -->
        <div class="sidebar">
            <div class="sidebar-item active" onclick="executeCommand('banner')">
                <i class="fas fa-terminal"></i>
                <span>Terminal</span>
            </div>
            <div class="sidebar-item" onclick="executeCommand('about')">
                <i class="fas fa-user"></i>
                <span>About Me</span>
            </div>
            <div class="sidebar-item" onclick="executeCommand('skills')">
                <i class="fas fa-code"></i>
                <span>Skills</span>
            </div>
            <div class="sidebar-item" onclick="executeCommand('projects')">
                <i class="fas fa-project-diagram"></i>
                <span>Projects</span>
            </div>
            <div class="sidebar-item" onclick="executeCommand('contact')">
                <i class="fas fa-envelope"></i>
                <span>Contact</span>
            </div>
            <div class="sidebar-item" onclick="executeCommand('github')">
                <i class="fab fa-github"></i>
                <span>GitHub</span>
            </div>
            <div class="sidebar-item" onclick="executeCommand('linkedin')">
                <i class="fab fa-linkedin"></i>
                <span>LinkedIn</span>
            </div>
            <div class="sidebar-item" onclick="executeCommand('resume')">
                <i class="fas fa-file-alt"></i>
                <span>Resume</span>
            </div>
            <div class="sidebar-item" onclick="executeCommand('help')">
                <i class="fas fa-question-circle"></i>
                <span>Help</span>
            </div>
        </div>
        
        <!-- Main Content -->
        <div class="main-content">
            <div class="terminal-window">
                <div class="terminal-header">
                    <div class="window-buttons">
                        <div class="window-button close"></div>
                        <div class="window-button minimize"></div>
                        <div class="window-button maximize"></div>
                    </div>
                    <div class="terminal-title">visitor@portfolio ~ bash</div>
                </div>
                <div id="terminal"></div>
                <div id="input-line">
                    <span id="prompt">visitor@portfolio:~$</span>
                    <input type="text" id="user-input" autofocus>
                </div>
            </div>
        </div>
    </div>

    <script>
        // Configuration and personal data
        const config = {
            username: "visitor",
            hostname: "portfolio",
            welcomeMessage: `
 ██████╗ ███████╗██╗   ██╗██████╗  ██████╗ ██████╗ ████████╗███████╗ ██████╗ ██╗     ██╗ ██████╗     
 ██╔══██╗██╔════╝██║   ██║██╔══██╗██╔═══██╗██╔══██╗╚══██╔══╝██╔════╝██╔═══██╗██║     ██║██╔═══██╗    
 ██║  ██║█████╗  ██║   ██║██████╔╝██║   ██║██████╔╝   ██║   █████╗  ██║   ██║██║     ██║██║   ██║    
 ██║  ██║██╔══╝  ╚██╗ ██╔╝██╔═══╝ ██║   ██║██╔══██╗   ██║   ██╔══╝  ██║   ██║██║     ██║██║   ██║    
 ██████╔╝███████╗ ╚████╔╝ ██║     ╚██████╔╝██║  ██║   ██║   ██║     ╚██████╔╝███████╗██║╚██████╔╝    
 ╚═════╝ ╚══════╝  ╚═══╝  ╚═╝      ╚═════╝ ╚═╝  ╚═╝   ╚═╝   ╚═╝      ╚═════╝ ╚══════╝╚═╝ ╚═════╝     
                                                                                                      
 ████████╗███████╗██████╗ ███╗   ███╗██╗███╗   ██╗ █████╗ ██╗                                         
 ╚══██╔══╝██╔════╝██╔══██╗████╗ ████║██║████╗  ██║██╔══██╗██║                                         
    ██║   █████╗  ██████╔╝██╔████╔██║██║██╔██╗ ██║███████║██║                                         
    ██║   ██╔══╝  ██╔══██╗██║╚██╔╝██║██║██║╚██╗██║██╔══██║██║                                         
    ██║   ███████╗██║  ██║██║ ╚═╝ ██║██║██║ ╚████║██║  ██║███████╗                                    
    ╚═╝   ╚══════╝╚═╝  ╚═╝╚═╝     ╚═╝╚═╝╚═╝  ╚═══╝╚═╝  ╚═╝╚══════╝

    [System Initializing...Ready]

Welcome to my interactive terminal portfolio! Type 'help' to see available commands.
Use the sidebar for quick navigation or explore like a real terminal.

< span class="typing" > _</span > `,
            
            motd: "The Matrix has you...",
            currentPath: "~",
            
            fileSystem: {
                "~": {
                    type: "directory",
                    contents: {
                        "about.txt": {
                            type: "file",
                            content: "Hello! I'm a developer passionate about creating unique web experiences.\n\nI specialize in front-end development with expertise in JavaScript, React, and CSS.\nI also have experience with back-end technologies like Node.js and Python.\n\nThis interactive terminal is just one example of how I like to blend creativity with functionality."
                        },
                        "contact.txt": {
                            type: "file",
                            content: "Email: your.email@example.com\nGitHub: github.com/yourusername\nLinkedIn: linkedin.com/in/yourusername\nTwitter: @yourusername"
                        },
                        "projects": {
                            type: "directory",
                            contents: {
                                "project1.txt": {
                                    type: "file",
                                    content: "Project: E-commerce Platform\n\nA full-stack e-commerce solution built with React and Node.js.\nFeatures include user authentication, product catalog, shopping cart, and payment processing.\n\nGitHub: github.com/yourusername/ecommerce-project"
                                },
                                "project2.txt": {
                                    type: "file",
                                    content: "Project: Weather App\n\nA responsive weather application using OpenWeatherMap API.\nBuilt with HTML, CSS, and vanilla JavaScript.\n\nGitHub: github.com/yourusername/weather-app"
                                },
                                "project3.txt": {
                                    type: "file",
                                    content: "Project: Terminal Portfolio\n\nThis website! A unique portfolio designed as an interactive terminal.\nBuilt with HTML, CSS, and JavaScript.\n\nGitHub: github.com/yourusername/terminal-portfolio"
                                }
                            }
                        },
                        "skills": {
                            type: "directory",
                            contents: {
                                "frontend.txt": {
                                    type: "file",
                                    content: "Frontend Skills:\n\n- HTML5 & CSS3\n- JavaScript (ES6+)\n- React.js\n- Vue.js\n- TypeScript\n- SASS/SCSS\n- Responsive Design\n- Web Accessibility"
                                },
                                "backend.txt": {
                                    type: "file",
                                    content: "Backend Skills:\n\n- Node.js\n- Express.js\n- Python\n- Django\n- RESTful APIs\n- GraphQL\n- MongoDB\n- PostgreSQL"
                                },
                                "tools.txt": {
                                    type: "file",
;
        }
        
        // Function to display output
        function displayOutput(content, className = '') {
            const output = document.createElement('div');
            output.className = `output ${ className } `;
            output.innerHTML = content;
            terminal.appendChild(output);
            terminal.scrollTop = terminal.scrollHeight;
        }
        
        // Show command in terminal
        function displayCommand(command) {
            displayOutput(`< span class="command" > ${ config.username } @${ config.hostname }:${ currentPath }$ ${ command }</span > `);
        }
        
        // Display welcome message on load
        function initialize() {
            displayOutput(`< pre class="ascii-art" > ${ config.welcomeMessage }</pre > `);
            
            // Display command hints
            displayCommandHints();
            
            updatePrompt();
            initBackgroundAnimation();
            initMatrixRain();
        }
        
        // Display command hints
        function displayCommandHints() {
            const hints = ['help', 'about', 'projects', 'skills', 'contact'];
            let hintsHTML = '<div class="command-hints">';
            
            for (const hint of hints) {
                hintsHTML += `< div class="command-hint" onclick = "executeCommand('${hint}')" > ${ hint }</div > `;
            }
            
            hintsHTML += '</div>';
            displayOutput(hintsHTML);
        }
        
        // Simulate typing effect
        function typeWriter(text, element, speed = 50, callback = null) {
            let i = 0;
            element.innerHTML = '';
            
            function type() {
                if (i < text.length) {
                    element.innerHTML += text.charAt(i);
                    i++;
                    setTimeout(type, speed);
                } else if (callback) {
                    callback();
                }
            }
            
            type();
        }
        
        // Execute command from UI
        function executeCommand(command) {
            userInput.value = command;
            processCommand(command);
            userInput.focus();
        }
        
        // Process commands with animation
        function processCommand(input) {
            const args = input.trim().split(' ');
            const command = args[0].toLowerCase();
            const parameters = args.slice(1);
            
            // Log command to history
            if (input.trim() !== '') {
                commandHistory.push(input);
                historyIndex = commandHistory.length;
            }
            
            // Display command in terminal
            displayCommand(input);
            
            // Don't process empty commands
            if (command === '') return;
            
            // First show the processing animation for realistic effect
            const processingOutput = document.createElement('div');
            processingOutput.className = 'output';
            processingOutput.innerHTML = '<span class="terminal-loader">Processing</span>';
            terminal.appendChild(processingOutput);
            
            // Simulate processing time
            setTimeout(() => {
                // Remove the processing output
                terminal.removeChild(processingOutput);
                
                // Process different commands
                switch (command) {
                    case 'help':
                        showHelp();
                        break;
                    case 'clear':
                        clearTerminal();
                        break;
                    case 'whoami':
                        displayOutput(`< span class="success" > ${ config.username }</span > `);
                        break;
                    case 'ls':
                        listDirectory(parameters);
                        break;
                    case 'cd':
                        changeDirectory(parameters[0]);
                        break;
                    case 'cat':
                        showFileContents(parameters[0]);
                        break;
                    case 'pwd':
                        displayOutput(`< span class="info" > ${ currentPath }</span > `);
                        break;
                    case 'echo':
                        displayOutput(parameters.join(' '));
                        break;
                    case 'date':
                        displayOutput(new Date().toString(), 'info');
                        break;
                    case 'skills':
                        showSkills();
                        break;
                    case 'projects':
                        showProjects();
                        break;
                    case 'contact':
                        showContact();
                        break;
                    case 'about':
                        showAbout();
                        break;
                    case 'github':
                        window.open('https://github.com/yourusername', '_blank');
                        displayOutput('<i class="fab fa-github"></i> Opening GitHub profile...', 'success');
                        break;
                    case 'linkedin':
                        window.open('https://linkedin.com/in/yourusername', '_blank');
                        displayOutput('<i class="fab fa-linkedin"></i> Opening LinkedIn profile...', 'success');
                        break;
                    case 'resume':
                        showResume();
                        break;
                    case 'banner':
                        displayOutput(`< pre class="ascii-art" > ${ config.welcomeMessage }</pre > `);
                        break;
                    case 'matrix':
                        displayOutput('<span class="success">Initializing The Matrix...</span>');
                        window.showMatrix();
                        setTimeout(() => {
                            displayOutput('<span class="warning">Wake up, Neo...</span>');
                        }, 1000);
                        break;
                    case 'motd':
                        displayOutput(`< span class="info" > ${ config.motd }</span > `);
                        break;
                    case 'exit':
                        displayOutput('<span class="error">Sorry, there is no escape from this matrix!</span>');
                        setTimeout(() => {
                            displayOutput('<span class="info">(This is a website, not a real terminal)</span>');
                        }, 1000);
                        break;
                    case 'sudo':
                        displayOutput('<span class="error">Permission denied: Nice try!</span>');
                        break;
                    case 'rm':
                        if (parameters[0] === '-rf' && parameters[1] === '/') {
                            displayOutput('<span class="error">Nice try! This is a portfolio, not a real system.</span>');
                        } else {
                            displayOutput('<span class="warning">This is a read-only file system.</span>');
                        }
                        break;
                    case 'hack':
                        simulateHacking();
                        break;
                    case 'game':
                        displayOutput('<span class="info">Would you like to play a game? Try "snake" or "tetris".</span>');
                        break;
                    case 'snake':
                        displayOutput('<span class="warning">Snake game is currently in development. Check back later!</span>');
                        break;
                    case 'tetris':
                        displayOutput('<span class="warning">Tetris game is currently in development. Check back later!</span>');
                        break;
                    case 'theme':
                        displayOutput('<span class="info">Theme switching is currently in development.</span>');
                        break;
                    case 'hello':
                    case 'hi':
                        displayOutput(`< span class="success" > Hello there! Welcome to my terminal portfolio.Type 'help' to see available commands.</span > `);
                        break;
                    default:
                        displayOutput(`Command not found: ${ command }. Type 'help' to see available commands.`, 'error');
                }
                
                // Display command hints if the terminal is nearly empty
                if (terminal.childElementCount < 5) {
                    displayCommandHints();
                }
            }, 300); // Simulate a short processing delay
        }
        
        // Simulate hacking effect
        function simulateHacking() {
            const hackingLines = [
                'Accessing mainframe...',
                'Bypassing security protocols...',
                'Decrypting passwords...',
                'Downloading database...',
                'Erasing tracks...',
                'Mission accomplished!'
            ];
            
            let i = 0;
            const hackingInterval = setInterval(() => {
                if (i < hackingLines.length) {
                    const className = i === hackingLines.length - 1 ? 'success' : 'warning';
                    displayOutput(hackingLines[i], className);
                    i++;
                } else {
                    clearInterval(hackingInterval);
                    displayOutput('<span class="error">Just kidding! This is just a harmless animation. 😉</span>');
                }
            }, 800);
        }
        
        // Help menu
        function showHelp() {
            const helpContent = `
        < span class="highlight" > AVAILABLE COMMANDS:</span >

            <span class="help-command">help</span> - <span class="help-desc">Show this help menu</span>
<span class="help-command">clear</span> - <span class="help-desc">Clear the terminal</span>
<span class="help-command">whoami</span> - <span class="help-desc">Display current user</span>
<span class="help-command">ls</span> - <span class="help-desc">List directory contents</span>
<span class="help-command">cd</span> - <span class="help-desc">Change directory</span>
<span class="help-command">cat</span> - <span class="help-desc">Display file contents</span>
<span class="help-command">pwd</span> - <span class="help-desc">Print working directory</span>
<span class="help-command">date</span> - <span class="help-desc">Display current date and time</span>
<span class="help-command">about</span> - <span class="help-desc">Display information about me</span>
<span class="help-command">skills</span> - <span class="help-desc">List my technical skills</span>
<span class="help-command">projects</span> - <span class="help-desc">Show my portfolio projects</span>
<span class="help-command">contact</span> - <span class="help-desc">Display contact information</span>
<span class="help-command">github</span> - <span class="help-desc">Open my GitHub profile</span>
<span class="help-command">linkedin</span> - <span class="help-desc">Open my LinkedIn profile</span>
<span class="help-command">resume</span> - <span class="help-desc">Display my resume</span>
<span class="help-command">banner</span> - <span class="help-desc">Display the welcome banner</span>
<span class="help-command">matrix</span> - <span class="help-desc">Special Matrix effect</span>
<span class="help-command">hack</span> - <span class="help-desc">Simulate hacking (just for fun)</span>

<span class="info">Use the sidebar for quick navigation or type commands directly.</span>
    `;
            displayOutput(helpContent);
        }
        
        // Clear terminal
        function clearTerminal() {
            terminal.innerHTML = '';
        }
        
        // List directory contents
        function listDirectory(params) {
            const path = resolvePathForCommand(params[0] || '.');
            if (!path) return;
            
            const node = getNodeAtPath(path);
            if (!node || node.type !== 'directory') {
                displayOutput(`ls: cannot access '${params[0] || currentPath}': No such directory`, 'error');
                return;
            }
            
            let output = '';
            for (const [name, item] of Object.entries(node.contents)) {
                // Colorize based on type
                const className = item.type === 'directory' ? 'directory' : 'file';
                output += `< span class="${className}" > ${ name }${ item.type === 'directory' ? '/' : '' }</span > `;
            }
            displayOutput(output);
        }
        
        // Change directory
        function changeDirectory(path) {
            if (!path || path === '~') {
                currentPath = '~';
                updatePrompt();
                return;
            }
            
            const newPath = resolvePathForCommand(path);
            if (!newPath) return;
            
            const node = getNodeAtPath(newPath);
            if (!node) {
                displayOutput(`cd: no such directory: ${ path } `, 'error');
                return;
            }
            
            if (node.type !== 'directory') {
                displayOutput(`cd: not a directory: ${ path } `, 'error');
                return;
            }
            
            currentPath = newPath;
            updatePrompt();
        }
        
        // Show file contents
        function showFileContents(path) {
            if (!path) {
                displayOutput('cat: missing file operand', 'error');
                return;
            }
            
            const resolvedPath = resolvePathForCommand(path);
            if (!resolvedPath) return;
            
            const node = getNodeAtPath(resolvedPath);
            
            if (!node) {
                displayOutput(`cat: ${ path }: No such file or directory`, 'error');
                return;
            }
            
            if (node.type === 'directory') {
                displayOutput(`cat: ${ path }: Is a directory`, 'error');
                return;
            }
            
            // Add some style to the content
            displayOutput(`< span class="highlight" > ${ path }:</span >\n\n${ node.content } `);
        }
        
        // Helper function to resolve path
        function resolvePathForCommand(path) {
            if (!path) return currentPath;
            
            // Handle home directory shortcut
            if (path === '~') return '~';
            
            // Handle absolute paths
            if (path.startsWith('~')) {
                return path;
            }
            
            // Handle current directory
            if (path === '.') return currentPath;
            
            // Handle parent directory
            if (path === '..') {
                if (currentPath === '~') return '~';
                const parts = currentPath.split('/');
                return parts.slice(0, -1).join('/') || '~';
            }
            
            // Handle relative paths
            return currentPath === '~' ? `~/${path}` : `${currentPath}/${ path } `;
        }
        
        // Get file system node at path
        function getNodeAtPath(path) {
            if (path === '~') return config.fileSystem['~'];
            
            const parts = path.replace('~/', '').split('/').filter(Boolean);
            let current = config.fileSystem['~'];
            
            for (const part of parts) {
                if (part === '.') continue;
                if (part === '..') {
                    // Go up one level - but we're not implementing this fully
                    continue;
                }
                
                if (!current.contents[part]) {
                    return null;
                }
                
                current = current.contents[part];
            }
            
            return current;
        }
        
        // Show skills with progress bars
        function showSkills() {
            let output = `< div class="profile-container" >
                <div class="profile-image">
                    <i class="fas fa-code"></i>
                </div>
                <div class="profile-info">
                    <div class="profile-name">MY SKILLS</div>
                    <div class="profile-description">Here are my technical skills with proficiency levels:</div>
                    <div style="margin-top:15px;">`;
            
            config.skills.forEach(skill => {
                output += `
                    <div style="margin-bottom:10px;">
                        <div style="display:flex;justify-content:space-between;margin-bottom:5px;">
                            <span>${skill.name}</span>
                            <span>${skill.level}%</span>
                        </div>
                        <div class="progress-container">
                            <div class="progress-bar" style="width:${skill.level}%"></div>
                        </div>
                    </div>`;
            });
            
            output += `
                    </div>
                    <div style="margin-top:20px;display:flex;flex-wrap:wrap;gap:5px;">
                        <span class="skill-tag">HTML5</span>
                        <span class="skill-tag">CSS3</span>
                        <span class="skill-tag">JavaScript</span>
                        <span class="skill-tag">React</span>
                        <span class="skill-tag">Node.js</span>
                        <span class="skill-tag">Python</span>
                        <span class="skill-tag">Git/GitHub</span>
                        <span class="skill-tag">RESTful APIs</span>
                        <span class="skill-tag">MongoDB</span>
                        <span class="skill-tag">Express.js</span>
                    </div>
                </div>
            </div > `;
            
            displayOutput(output);
        }
        
        // Show projects as cards
        function showProjects() {
            let output = `< div class="highlight" style = "margin-bottom:15px;font-size:24px;" > MY PROJECTS</div > `;
            
            config.projects.forEach(project => {
                let tagsHTML = '';
                project.tags.forEach(tag => {
                    tagsHTML += `< span class="project-tag" > ${ tag }</span > `;
                });
                
                output += `
        < div class="project-card" >
                    <div class="project-image">
                        <i class="fas ${project.icon}"></i>
                    </div>
                    <div class="project-content">
                        <div class="project-title">${project.title}</div>
                        <div class="project-description">${project.description}</div>
                        <div class="project-tags">
                            ${tagsHTML}
                        </div>
                        <div class="project-links">
                            <a href="${project.github}" target="_blank" class="project-link"><i class="fab fa-github"></i> GitHub</a>
                            <a href="${project.demo}" target="_blank" class="project-link"><i class="fas fa-external-link-alt"></i> Demo</a>
                        </div>
                    </div>
                </div > `;
            });
            
            displayOutput(output);
        }
        
        // Show contact form
        function showContact() {
            const contactHTML = `
        < div class="profile-container" >
                <div class="profile-image">
                    <i class="fas fa-envelope"></i>
                </div>
                <div class="profile-info">
                    <div class="profile-name">CONTACT ME</div>
                    <div class="profile-description">Feel free to reach out through any of these channels:</div>
                    
                    <div style="margin-top:20px;">
                        <div style="margin-bottom:10px;"><i class="fas fa-envelope"></i> Email: <a href="mailto:your.email@example.com" style="color:var(--accent-color);text-decoration:none;">your.email@example.com</a></div>
                        <div style="margin-bottom:10px;"><i class="fas fa-phone"></i> Phone: +1 (123) 456-7890</div>
                        <div style="margin-bottom:10px;"><i class="fas fa-map-marker-alt"></i> Location: New York, NY</div>
                    </div>
                    
                    <div class="social-links">
                        <a href="https://github.com/yourusername" target="_blank" class="social-link"><i class="fab fa-github"></i></a>
                        <a href="https://linkedin.com/in/yourusername" target="_blank" class="social-link"><i class="fab fa-linkedin-in"></i></a>
                        <a href="https://twitter.com/yourusername" target="_blank" class="social-link"><i class="fab fa-twitter"></i></a>
                        <a href="https://instagram.com/yourusername" target="_blank" class="social-link"><i class="fab fa-instagram"></i></a>
                    </div>
                </div>
            </div >

        <div class="contact-form">
            <div style="font-size:18px;color:var(--accent-color);margin-bottom:15px;">Send me a message</div>
            <div class="form-group">
                <label class="form-label">Name</label>
                <input type="text" class="form-input" placeholder="Your name">
            </div>
            <div class="form-group">
                <label class="form-label">Email</label>
                <input type="email" class="form-input" placeholder="Your email">
            </div>
            <div class="form-group">
                <label class="form-label">Message</label>
                <textarea class="form-input form-textarea" placeholder="Your message"></textarea>
            </div>
            <button class="form-button">Send Message</button>
        </div>`;
            
            displayOutput(contactHTML);
            
            // Add event listener for form (just for show)
            setTimeout(() => {
                const formButton = terminal.querySelector('.form-button');
                if (formButton) {
                    formButton.addEventListener('click', () => {
                        displayOutput('<span class="success">Message functionality is not implemented in this demo.</span>');
                    });
                }
            }, 100);
        }
        
        // Show about section
        function showAbout() {
            const aboutHTML = `
            < div class="profile-container" >
                <div class="profile-image">
                    <i class="fas fa-user"></i>
                </div>
                <div class="profile-info">
                    <div class="profile-name">John Doe</div>
                    <div class="profile-title">Full Stack Web Developer</div>
                    <div class="profile-description">
                        Hello! I'm a passionate developer with a love for creating beautiful, functional web applications. With over 5 years of experience in web development, I specialize in building responsive and user-friendly interfaces.
                        <br><br>
                        This interactive terminal portfolio is just one example of how I like to blend creativity with functionality. Feel free to explore using commands or the sidebar navigation.
                    </div>
                    
                    <div style="margin-top:15px;display:flex;flex-wrap:wrap;gap:5px;">
                        <span class="skill-tag">JavaScript</span>
                        <span class="skill-tag">React</span>
                        <span class="skill-tag">Node.js</span>
                        <span class="skill-tag">CSS/SASS</span>
                        <span class="skill-tag">Python</span>
                        <span class="skill-tag">MongoDB</span>
                    </div>
                    
                    <div class="social-links">
                        <a href="https://github.com/yourusername" target="_blank" class="social-link"><i class="fab fa-github"></i></a>
                        <a href="https://linkedin.com/in/yourusername" target="_blank" class="social-link"><i class="fab fa-linkedin-in"></i></a>
                        <a href="https://twitter.com/yourusername" target="_blank" class="social-link"><i class="fab fa-twitter"></i></a>
                    </div>
                </div>
            </div>`;
            
            displayOutput(aboutHTML);
        }
        
        // Show resume
        function showResume() {
            const resumeHTML = `
        < div style = "font-size:28px;color:var(--accent-color);margin-bottom:20px;text-align:center;text-shadow:0 0 5px rgba(0,255,0,0.3);" > RESUME</div >

            <div style="background-color:rgba(30,30,50,0.7);border-radius:8px;padding:20px;margin-bottom:20px;border-left:3px solid var(--accent-