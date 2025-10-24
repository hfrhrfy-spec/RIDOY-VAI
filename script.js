const correctNumber = "5922";
const correctPassword = "im bukacuda";

const cartoon = document.getElementById("cartoon");
const loginPage = document.getElementById("loginPage");
const loginForm = document.getElementById("loginForm");
const numberInput = document.getElementById("numberInput");
const passwordInput = document.getElementById("passwordInput");
const errorMsg = document.getElementById("errorMsg");
const dashboard = document.getElementById("dashboard");
const logoutBtn = document.getElementById("logoutBtn");

// কার্টুন ক্লিক
cartoon.addEventListener("click", () => {
    cartoon.classList.add("fade-out");
    setTimeout(() => {
        cartoon.style.display = "none";
        loginPage.style.display = "block";
        loginPage.setAttribute("aria-hidden", "false");
        numberInput.focus();
    }, 1000);
});

// লগইন চেক
loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    errorMsg.textContent = "";
    const enteredNumber = numberInput.value.trim();
    const enteredPassword = passwordInput.value;

    if (enteredNumber === correctNumber && enteredPassword === correctPassword) {
        loginPage.style.display = "none";
        loginPage.setAttribute("aria-hidden", "true");
        dashboard.style.display = "block";
        dashboard.setAttribute("aria-hidden", "false");
    } else {
        errorMsg.textContent = "আপনার পাসওয়ার্ড ভুল";
        loginPage.animate([
            { transform: "translateX(0px)" },
            { transform: "translateX(-8px)" },
            { transform: "translateX(8px)" },
            { transform: "translateX(0px)" }
        ], { duration: 300 });
    }
});

logoutBtn.addEventListener("click", () => {
    dashboard.style.display = "none";
    dashboard.setAttribute("aria-hidden", "true");
    loginPage.style.display = "block";
    loginPage.setAttribute("aria-hidden", "false");
    numberInput.value = "";
    passwordInput.value = "";
    errorMsg.textContent = "";
    numberInput.focus();
});