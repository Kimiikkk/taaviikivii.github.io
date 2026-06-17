const clock = document.getElementById("clock");

function updateClock() {

    const now = new Date();

const time = now.toLocaleTimeString(
    "en-IN",
    {
        hour: "2-digit",
        minute: "2-digit"
    }
);
    clock.textContent = time + " IST";
}

setInterval(updateClock, 1000);

updateClock();


const toggleBtn = document.getElementById("theme-toggle");

toggleBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    const darkMode =
        document.body.classList.contains("dark");

    localStorage.setItem(
        "theme",
        darkMode ? "dark" : "light"
    );

    toggleBtn.textContent =
        darkMode ? "🌙" : "☀";
});


if (localStorage.getItem("theme") === "dark") {

    document.body.classList.add("dark");

    toggleBtn.textContent = "🌙";
}