// Load post data from sessionStorage
document.addEventListener('DOMContentLoaded', () => {
    const postData = sessionStorage.getItem('currentPost');
    
    if (!postData) {
        // If no post data, redirect to home
        window.location.href = 'index.html';
        return;
    }
    
    const post = JSON.parse(postData);
    displayPost(post);
});

// Display post content
function displayPost(post) {
    // Set page title
    document.title = `${post.title} - Akash Ananthula`;
    
    // Set post image
    const postImage = document.getElementById('postImage');
    postImage.src = post.image;
    postImage.alt = post.title;
    
    // Set post tags
    const postTags = document.getElementById('postTags');
    postTags.innerHTML = post.tags.map(tag => 
        `<span class="post-tag">${tag}</span>`
    ).join('');
    
    // Set post title
    document.getElementById('postTitle').textContent = post.title;
    
    // Set post date
    const postDate = document.getElementById('postDate');
    postDate.innerHTML += formatDate(post.date);
    
    // Set post read time
    const postReadTime = document.getElementById('postReadTime');
    postReadTime.innerHTML += post.readTime;
    
    // Set post content
    document.getElementById('postContent').innerHTML = post.content;
}

// Format date
function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

// Share on Twitter
function shareOnTwitter() {
    const post = JSON.parse(sessionStorage.getItem('currentPost'));
    const text = encodeURIComponent(`Check out this article: ${post.title}`);
    const url = encodeURIComponent(window.location.href);
    window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank');
}

// Share on LinkedIn
function shareOnLinkedIn() {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
}

// Copy link to clipboard
function copyLink() {
    const url = window.location.href;
    
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(url).then(() => {
            showCopyNotification();
        }).catch(err => {
            console.error('Failed to copy:', err);
            fallbackCopyTextToClipboard(url);
        });
    } else {
        fallbackCopyTextToClipboard(url);
    }
}

// Fallback copy method for older browsers
function fallbackCopyTextToClipboard(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.top = '0';
    textArea.style.left = '0';
    textArea.style.opacity = '0';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
        document.execCommand('copy');
        showCopyNotification();
    } catch (err) {
        console.error('Fallback: Failed to copy', err);
    }
    
    document.body.removeChild(textArea);
}

// Show copy notification
function showCopyNotification() {
    const btn = document.querySelector('.share-btn.copy');
    const originalText = btn.innerHTML;
    
    btn.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
        Copied!
    `;
    
    btn.style.background = 'var(--accent-1)';
    btn.style.color = 'white';
    
    setTimeout(() => {
        btn.innerHTML = originalText;
        btn.style.background = '';
        btn.style.color = '';
    }, 2000);
}
