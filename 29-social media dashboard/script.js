// script.js

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const postForm = document.getElementById('post-form');
    const loginSection = document.getElementById('login-section');
    const newPostSection = document.getElementById('new-post');
    const postsContainer = document.getElementById('posts-container');
    const postsDiv = document.getElementById('posts');

    // Array to store posts
    const postsArray = [];

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // For demonstration purposes, this checks a hardcoded username and password
        if (username === 'user' && password === 'pass') {
            localStorage.setItem('loggedInUser', username);
            loginSection.style.display = 'none';
            newPostSection.style.display = 'block';
            postsContainer.style.display = 'block';
        } else {
            alert('Invalid username or password');
        }
    });

    postForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const postContent = document.getElementById('post-content').value;
        const postImageInput = document.getElementById('post-image');
        const postImageFile = postImageInput.files[0];
        const username = localStorage.getItem('loggedInUser');
        const timestamp = new Date().toLocaleString();

        // Create a new post object
        const newPost = {
            text: postContent,
            image: postImageFile ? URL.createObjectURL(postImageFile) : null,
            username: username,
            timestamp: timestamp,
            likes: 0,
            comments: []
        };

        // Add the new post to the array
        postsArray.push(newPost);

        // Clear the input fields
        document.getElementById('post-content').value = '';
        postImageInput.value = '';

        // Display the new post
        displayPosts();
    });

    function displayPosts() {
        // Clear existing posts
        postsDiv.innerHTML = '';

        // Get the logged-in user's username
        const currentUsername = localStorage.getItem('loggedInUser');

        // Iterate over the posts array and display each post
        postsArray.forEach((post, index) => {
            const postElement = document.createElement('div');
            postElement.className = 'post';
            // Apply a distinct style for the logged-in user's posts
            postElement.classList.add(post.username === currentUsername ? 'current-user' : 'other-user');

            postElement.innerHTML = `
                <div class="post-header">
                    <span class="username">${post.username}</span>
                    <span class="timestamp">${post.timestamp}</span>
                </div>
                <div class="post-content">
                    <p>${post.text}</p>
                    ${post.image ? `<img src="${post.image}" alt="Post Image">` : ''}
                </div>
                <div class="post-footer">
                    <button onclick="likePost(${index})">Like (${post.likes})</button>
                    <button onclick="toggleCommentSection(${index})">Comment (${post.comments.length})</button>
                </div>
                <div class="comments" id="comments-${index}" style="display: none;">
                    <div class="comment-input">
                        <input type="text" id="comment-input-${index}" placeholder="Write a comment...">
                        <button onclick="addComment(${index})">Add Comment</button>
                    </div>
                    <div class="comment-list" id="comment-list-${index}">
                        ${post.comments.map(comment => `<div class="comment">${comment}</div>`).join('')}
                    </div>
                </div>
            `;
            postsDiv.appendChild(postElement);
        });
    }

    window.likePost = function(index) {
        postsArray[index].likes++;
        displayPosts();
    };

    window.toggleCommentSection = function(index) {
        const commentSection = document.getElementById(`comments-${index}`);
        commentSection.style.display = commentSection.style.display === 'none' ? 'block' : 'none';
    };

    window.addComment = function(index) {
        const commentInput = document.getElementById(`comment-input-${index}`);
        const commentText = commentInput.value.trim();

        if (commentText !== '') {
            postsArray[index].comments.push(commentText);
            commentInput.value = '';
            displayPosts();
        }
    };

    // Check if user is already logged in
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
        loginSection.style.display = 'none';
        newPostSection.style.display = 'block';
        postsContainer.style.display = 'block';
    }
});
