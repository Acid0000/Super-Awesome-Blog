document.addEventListener("DOMContentLoaded", function() {
    const toggleModeButton = document.getElementById("toggleMode");
    const backButton = document.getElementById("backButton");
    const mainContent = document.querySelector(".main-content");

    // Load blog posts from localStorage
    const posts = JSON.parse(localStorage.getItem("posts")) || [];

    // Render blog posts
    if (posts.length > 0) {
        posts.forEach(post => {
            const postElement = document.createElement("div");
            postElement.className = "post";
            postElement.innerHTML = `
                <h2>${post.title}</h2>
                <p>${post.content}</p>
                <p><em>Posted by: ${post.username}</em></p>
            `;
            mainContent.appendChild(postElement);
        });
    } else {
        mainContent.innerHTML = "<p>No blog posts available.</p>";
    }

    // Toggle dark mode
    if (toggleModeButton) {
        toggleModeButton.addEventListener("click", function() {
            document.body.classList.toggle("dark-mode");
            document.querySelectorAll('.post').forEach(post => post.classList.toggle('dark-mode'));
            document.querySelector('.header').classList.toggle('dark-mode');
            document.querySelector('.header-line').classList.toggle('dark-mode');
            document.querySelector('footer').classList.toggle('dark-mode');
            toggleModeButton.textContent = document.body.classList.contains("dark-mode") ? "🌙" : "☀️";
        });
    }

    // Back button to go back to the landing page
    if (backButton) {
        backButton.addEventListener("click", function() {
            window.location.href = "index.html";
        });
    }
});
