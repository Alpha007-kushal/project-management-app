// Simple login validation
const loginBtn = document.getElementById('login-btn');
const loginError = document.getElementById('login-error');
const loginPage = document.getElementById('login-page');
const dashboardPage = document.getElementById('dashboard-page');

loginBtn.addEventListener('click', () => {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === "admin" && password === "admin123") {
        loginPage.classList.add('hidden');
        dashboardPage.classList.remove('hidden');
    } else {
        loginError.textContent = "Invalid username or password!";
    }
});

// Tab navigation
const tabLinks = document.querySelectorAll('.tab-link');
const tabContents = document.querySelectorAll('.tab-content');

tabLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        // Remove active class from all links
        tabLinks.forEach(tab => tab.classList.remove('active'));

        // Add active class to the clicked link
        link.classList.add('active');

        // Hide all tab content
        tabContents.forEach(tab => tab.classList.add('hidden'));

        // Show the clicked tab's content
        const selectedTab = document.getElementById(`${link.getAttribute('data-tab')}-tab`);
        selectedTab.classList.remove('hidden');
    });
});

// Logout functionality
const logoutBtn = document.getElementById('logout-btn');

logoutBtn.addEventListener('click', () => {
    dashboardPage.classList.add('hidden');
    loginPage.classList.remove('hidden');
});
