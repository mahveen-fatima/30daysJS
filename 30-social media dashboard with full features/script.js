let posts = [];
let notifications = [];

// Load posts from local storage
function loadPosts() {
    const storedPosts = localStorage.getItem('posts');
    if (storedPosts) {
        posts = JSON.parse(storedPosts);
        displayPosts();
    }

    const storedNotifications = localStorage.getItem('notifications');
    if (storedNotifications) {
        notifications = JSON.parse(storedNotifications);
        displayNotifications();
    }
}

// Display posts in the feed
function displayPosts() {
    const postFeed = document.getElementById('post-feed');
    postFeed.innerHTML = ''; // Clear current posts

    const loggedInUser = sessionStorage.getItem('loggedInUser');

    posts.forEach((post, index) => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');

        if (post.username === loggedInUser) {
            postElement.classList.add('logged-in-user');
        }

        postElement.innerHTML = `
            <h3>${post.username}</h3>
            <p>${post.text}</p>
            ${post.image ? `<img src="${post.image}" alt="Post Image">` : ''}
            <div class="like-comment">
                <button onclick="likePost(${index})">Like (${post.likes})</button>
                <button onclick="toggleCommentSection(${index})">Comment (${post.comments.length})</button>
            </div>
            <div class="comments" id="comments-${index}" style="display: none;">
                ${post.comments.map(comment => `<p><strong>${comment.username}:</strong> ${comment.text}</p>`).join('')}
                <div class="comment-input">
                    <input type="text" id="comment-input-${index}" placeholder="Write a comment...">
                    <button onclick="addComment(${index})">Add</button>
                </div>
            </div>
        `;
        postFeed.appendChild(postElement);
    });
}

// Submit a new post
function submitPost() {
    const postText = document.getElementById('post-text').value;
    const postImage = document.getElementById('post-image').files[0];
    const loggedInUser = sessionStorage.getItem('loggedInUser');

    if (postText && loggedInUser) {
        let imageUrl = '';
        if (postImage) {
            const reader = new FileReader();
            reader.onload = function(event) {
                imageUrl = event.target.result;
                addPost(loggedInUser, postText, imageUrl);
            };
            reader.readAsDataURL(postImage);
        } else {
            addPost(loggedInUser, postText, imageUrl);
        }
    }
}

function addPost(username, text, image) {
    const newPost = {
        username,
        text,
        image,
        likes: 0,
        comments: []
    };

    posts.unshift(newPost); // Add new post to the beginning of the array
    localStorage.setItem('posts', JSON.stringify(posts));
    displayPosts();
}

// Like a post
function likePost(index) {
    posts[index].likes++;
    localStorage.setItem('posts', JSON.stringify(posts));
    displayPosts();

    const loggedInUser = sessionStorage.getItem('loggedInUser');
    const notification = {
        type: 'like',
        postIndex: index,
        by: loggedInUser,
        postOwner: posts[index].username
    };
    addNotification(notification);
}

// Toggle comment section visibility
function toggleCommentSection(index) {
    const commentSection = document.getElementById(`comments-${index}`);
    if (commentSection.style.display === 'none') {
        commentSection.style.display = 'block';
    } else {
        commentSection.style.display = 'none';
    }
}

// Add a comment to a post
function addComment(index) {
    const commentInput = document.getElementById(`comment-input-${index}`);
    const commentText = commentInput.value;
    const loggedInUser = sessionStorage.getItem('loggedInUser');

    if (commentText && loggedInUser) {
        const newComment = {
            username: loggedInUser,
            text: commentText
        };

        posts[index].comments.push(newComment);
        localStorage.setItem('posts', JSON.stringify(posts));
        displayPosts();

        const notification = {
            type: 'comment',
            postIndex: index,
            by: loggedInUser,
            postOwner: posts[index].username
        };
        addNotification(notification);
    }
}

// Add a notification
function addNotification(notification) {
    if (notification.by !== notification.postOwner) {
        notifications.unshift(notification); // Add new notification to the beginning
        localStorage.setItem('notifications', JSON.stringify(notifications));
        displayNotifications();
    }
}

// Display notifications
function displayNotifications() {
    const notificationList = document.getElementById('notification-list');
    notificationList.innerHTML = ''; // Clear current notifications

    notifications.forEach(notification => {
        const notificationElement = document.createElement('div');
        notificationElement.classList.add('notification');
        notificationElement.classList.add('new');

        if (notification.type === 'like') {
            notificationElement.innerHTML = `<p>${notification.by} liked your post.</p>`;
        } else if (notification.type === 'comment') {
            notificationElement.innerHTML = `<p>${notification.by} commented on your post.</p>`;
        }

        notificationList.appendChild(notificationElement);
    });
}

// Update user profile
function updateProfile() {
    const username = document.getElementById('profile-username').value;
    const email = document.getElementById('profile-email').value;
    const profilePictureUpload = document.getElementById('profile-picture-upload').files[0];

    if (username && email) {
        sessionStorage.setItem('loggedInUser', username);

        if (profilePictureUpload) {
            const reader = new FileReader();
            reader.onload = function(event) {
                sessionStorage.setItem('profilePicture', event.target.result);
                document.getElementById('profile-picture').src = event.target.result;
            };
            reader.readAsDataURL(profilePictureUpload);
        }

        document.getElementById('profile-picture').src = sessionStorage.getItem('profilePicture') || 'default-profile.png';
        alert('Profile updated successfully!');
    }
}

// Load user profile
function loadProfile() {
    const loggedInUser = sessionStorage.getItem('loggedInUser');
    if (loggedInUser) {
        document.getElementById('profile-username').value = loggedInUser;
    }

    const profilePicture = sessionStorage.getItem('profilePicture');
    if (profilePicture) {
        document.getElementById('profile-picture').src = profilePicture;
    }
}
