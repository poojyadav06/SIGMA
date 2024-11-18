// Shared bot and gesture data
const bots = [];
const gestures = [];

// Function to update bot status (only on the home page)
function updateBotStatus() {
    const botStatusDiv = document.getElementById('bot-status');
    if (botStatusDiv) {
        botStatusDiv.innerHTML = bots.length ? 
            `<p>Total Bots: ${bots.length}</p>` : 
            `<p>No bots available.</p>`;
    }
}

// Function to add a bot
function addBot() {
    const botName = prompt("Enter bot name:");
    if (botName) {
        bots.push(botName);
        renderBotList();
        updateBotStatus();
    }
}

// Function to render the bot list
function renderBotList() {
    const botListDiv = document.getElementById('bot-list');
    if (botListDiv) {
        botListDiv.innerHTML = bots.map(bot => `<p>${bot}</p>`).join('');
    }
}

// Function to configure gestures
function configureGestures() {
    const gestureName = prompt("Enter gesture name:");
    if (gestureName) {
        gestures.push(gestureName);
        renderGestureList();
    }
}

// Function to render the gesture list
function renderGestureList() {
    const gestureListDiv = document.getElementById('gesture-list');
    if (gestureListDiv) {
        gestureListDiv.innerHTML = gestures.length ? 
            gestures.map(gesture => `<p>${gesture}</p>`).join('') : 
            `<p>No gestures configured.</p>`;
    }
}

function logout() {
    // Clear session data
    sessionStorage.clear();
    localStorage.clear();

    // Redirect to the login page and replace history
    window.location.replace('Login.html');
}

// Disable back navigation after logging out
window.addEventListener("pageshow", function (event) {
    if (event.persisted || (window.performance && window.performance.navigation.type === 2)) {
        // If the page was loaded from cache or navigated back, redirect to the login page
        window.location.replace('Login.html');
    }
});


// Event listeners for buttons
document.addEventListener('DOMContentLoaded', () => {
    const addBotButton = document.getElementById('add-bot');
    const configureGesturesButton = document.getElementById('configure-gestures');
    
    if (addBotButton) addBotButton.addEventListener('click', addBot);
    if (configureGesturesButton) configureGesturesButton.addEventListener('click', configureGestures);
    
    // Update bot status on the home page
    updateBotStatus();
});
