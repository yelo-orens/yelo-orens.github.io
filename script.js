
document.addEventListener("DOMContentLoaded", () => {


    const typingElement = document.getElementById("typing");

    if (typingElement) {
    const text = "Computer Engineering Student";
    let index = 0;
    let isDeleting = false;

    function typeLoop() {
        if (!isDeleting) {
            // Typing forward
            typingElement.textContent = text.substring(0, index++);
            
            if (index > text.length) {
                isDeleting = true;
                setTimeout(typeLoop, 1500); // pause before deleting
                return;
            }

        } else {
            // Deleting
            typingElement.textContent = text.substring(0, index--);

            if (index <= 1) {
                isDeleting = false;
                index = 1;
            }
        }

        setTimeout(typeLoop, isDeleting ? 25 : 50);
    }

    typeLoop();
}


  
    const toggleBtn = document.getElementById("theme-toggle");

    if (toggleBtn) {

        function updateIcon() {
            toggleBtn.textContent =
                document.body.classList.contains("dark") ? "🌙" : "☀️";
        }

        // Load saved theme
        if (localStorage.getItem("theme") === "dark") {
            document.body.classList.add("dark");
        }

        updateIcon();

        toggleBtn.addEventListener("click", () => {
            document.body.classList.toggle("dark");

            localStorage.setItem(
                "theme",
                document.body.classList.contains("dark") ? "dark" : "light"
            );

            updateIcon();
        });
    }



    const elements = document.querySelectorAll(".section, .job");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, {
        threshold: 0.2
    });

    elements.forEach(el => observer.observe(el));


    const cursor = document.createElement("div");
    cursor.classList.add("cursor-glow");
    document.body.appendChild(cursor);

    document.addEventListener("mousemove", (e) => {
        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";
    });


    document.querySelectorAll(".skills-grid div").forEach(skill => {
        skill.addEventListener("mouseenter", () => {
            skill.title = "Click to expand (future feature)";
        });
    });

});