document.addEventListener("DOMContentLoaded", function() {
    const blogForm = document.getElementById("blogForm");
    const errorMessage = document.getElementById("errorMessage");

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
});
