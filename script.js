// Main JavaScript file for Hermes Agent Web App

// Messages for the interactive button
const messages = [
    "Hello from Hermes Agent! 🚀",
    "Your AI assistant is ready to help",
    "Auto-deployment works perfectly on Vercel",
    "This app was created in seconds!",
    "Built with modern web standards"
];

let messageIndex = 0;

// Main action function
function performAction() {
    const responseEl = document.getElementById('response');
    const message = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    
    responseEl.textContent = message;
    responseEl.style.animation = 'none';
    setTimeout(() => {
        responseEl.style.animation = 'fadeIn 0.5s ease';
    }, 10);
}

// Add fade-in animation dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(-10px); }
        to { opacity: 1; transform: translateY(0); }
    }
`;
document.head.appendChild(style);

// Log that the app loaded successfully
console.log('Hermes Agent Web App loaded successfully!');