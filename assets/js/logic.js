document.addEventListener("DOMContentLoaded", function() {
    const blogForm = document.getElementById("blogForm");
    const errorMessage = document.getElementById("errorMessage");
    const toggleModeButton = document.getElementById("toggleMode");

    if (blogForm) {
        blogForm.addEventListener("submit", function(event) {
            event.preventDefault();

            const username = document.getElementById("username").value;
            const title = document.getElementById("title").value;
            const content = document.getElementById("content").value;

            if (!username || !title || !content) {
                errorMessage.textContent = "Please complete all fields.";
                return;
            }

            const post = { username, title, content };

            let posts = JSON.parse(localStorage.getItem("posts")) || [];
            posts.push(post);
            localStorage.setItem("posts", JSON.stringify(posts));

            window.location.href = "blog.html";
        });
    }

    // Toggle dark mode
    if (toggleModeButton) {
        toggleModeButton.addEventListener("click", function() {
            document.body.classList.toggle("dark-mode");
            document.querySelector('.header').classList.toggle('dark-mode');
            document.querySelector('.header-line').classList.toggle('dark-mode');
            document.querySelector('.center-lines').classList.toggle('dark-mode');
            if (document.querySelector('.right')) {
                document.querySelector('.right').classList.toggle('dark-mode');
            }
            toggleModeButton.textContent = document.body.classList.contains("dark-mode") ? "🌙" : "☀️";
        });
    }
});
