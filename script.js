// Sample blog posts data
const blogPosts = [
    {
        id: 1,
        title: "Building Scalable Web Applications with Modern Architecture",
        description: "Explore best practices for designing and implementing scalable web applications using microservices, containerization, and cloud-native technologies.",
        date: "2026-04-10",
        readTime: "8 min read",
        tags: ["web", "ai"],
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
        content: `
            <h2>Introduction</h2>
            <p>In today's digital landscape, building scalable web applications is crucial for success. This comprehensive guide explores modern architectural patterns that enable applications to handle millions of users efficiently.</p>
            
            <h2>Microservices Architecture</h2>
            <p>Microservices break down monolithic applications into smaller, independent services. Each service handles a specific business capability and can be developed, deployed, and scaled independently.</p>
            <ul>
                <li>Service isolation and independence</li>
                <li>Technology diversity across services</li>
                <li>Easier maintenance and updates</li>
                <li>Better fault isolation</li>
            </ul>
            
            <h2>Containerization with Docker</h2>
            <p>Docker containers provide consistent environments across development, testing, and production. They encapsulate applications with all dependencies, ensuring "it works on my machine" becomes a thing of the past.</p>
            
            <h2>Cloud-Native Technologies</h2>
            <p>Leveraging cloud platforms like AWS, Azure, or Google Cloud enables automatic scaling, high availability, and global distribution. Key technologies include:</p>
            <ul>
                <li>Kubernetes for container orchestration</li>
                <li>Load balancers for traffic distribution</li>
                <li>CDNs for content delivery</li>
                <li>Serverless functions for event-driven architecture</li>
            </ul>
            
            <h2>Best Practices</h2>
            <p>Implement proper monitoring, logging, and alerting systems. Use CI/CD pipelines for automated testing and deployment. Design for failure and implement circuit breakers to handle service outages gracefully.</p>
            
            <h2>Conclusion</h2>
            <p>Building scalable applications requires careful planning and the right technology stack. By following these architectural patterns, you can create systems that grow with your business needs.</p>
        `
    },
    {
        id: 2,
        title: "Deep Dive into Machine Learning Algorithms",
        description: "Understanding the fundamentals of ML algorithms, from linear regression to neural networks, with practical implementation examples.",
        date: "2026-04-05",
        readTime: "12 min read",
        tags: ["ai", "research"],
        image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80",
        content: `
            <h2>Introduction to Machine Learning</h2>
            <p>Machine Learning has revolutionized how we solve complex problems. This guide covers fundamental algorithms that power modern AI applications.</p>
            
            <h2>Supervised Learning</h2>
            <p>Supervised learning algorithms learn from labeled data to make predictions on new, unseen data.</p>
            <h3>Linear Regression</h3>
            <p>The foundation of predictive modeling, linear regression finds relationships between variables. Perfect for predicting continuous values like house prices or stock trends.</p>
            
            <h3>Decision Trees and Random Forests</h3>
            <p>These algorithms create tree-like models of decisions. Random Forests combine multiple trees to improve accuracy and reduce overfitting.</p>
            
            <h2>Neural Networks</h2>
            <p>Inspired by the human brain, neural networks consist of layers of interconnected nodes. Deep learning uses multiple hidden layers to learn complex patterns.</p>
            <ul>
                <li>Convolutional Neural Networks (CNNs) for image processing</li>
                <li>Recurrent Neural Networks (RNNs) for sequential data</li>
                <li>Transformers for natural language processing</li>
            </ul>
            
            <h2>Unsupervised Learning</h2>
            <p>These algorithms find patterns in unlabeled data through clustering and dimensionality reduction techniques like K-means and PCA.</p>
            
            <h2>Practical Implementation</h2>
            <p>Modern frameworks like TensorFlow, PyTorch, and scikit-learn make implementing these algorithms accessible. Start with simple problems and gradually increase complexity.</p>
        `
    },
    {
        id: 3,
        title: "React Native: Building Cross-Platform Mobile Apps",
        description: "A comprehensive guide to creating beautiful, performant mobile applications using React Native and modern development practices.",
        date: "2026-03-28",
        readTime: "10 min read",
        tags: ["mobile", "web"],
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
        content: `
            <h2>Why React Native?</h2>
            <p>React Native enables developers to build native mobile apps using JavaScript and React. Write once, deploy to both iOS and Android platforms.</p>
            
            <h2>Getting Started</h2>
            <p>Setting up your development environment is straightforward. Install Node.js, React Native CLI, and either Xcode (for iOS) or Android Studio (for Android).</p>
            
            <h2>Core Components</h2>
            <p>React Native provides essential building blocks:</p>
            <ul>
                <li>View - The fundamental container component</li>
                <li>Text - For displaying text content</li>
                <li>Image - For rendering images</li>
                <li>ScrollView - For scrollable content</li>
                <li>FlatList - For efficient list rendering</li>
            </ul>
            
            <h2>Navigation</h2>
            <p>React Navigation is the standard library for routing and navigation. It supports stack navigation, tab navigation, and drawer navigation patterns.</p>
            
            <h2>State Management</h2>
            <p>Choose from various state management solutions like Redux, MobX, or React Context API based on your app's complexity.</p>
            
            <h2>Performance Optimization</h2>
            <p>Optimize your app by using PureComponent, memoization, lazy loading, and avoiding unnecessary re-renders. Profile your app regularly to identify bottlenecks.</p>
            
            <h2>Deployment</h2>
            <p>Learn the process of building, signing, and submitting your app to the App Store and Google Play Store. Implement over-the-air updates using CodePush.</p>
        `
    },
    {
        id: 4,
        title: "Mastering Data Structures and Algorithms",
        description: "Essential DSA concepts every developer should know, with detailed explanations and coding challenges to sharpen your problem-solving skills.",
        date: "2026-03-20",
        readTime: "15 min read",
        tags: ["dsa"],
        image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=800&q=80",
        content: `
            <h2>Why DSA Matters</h2>
            <p>Data Structures and Algorithms form the foundation of computer science. They're essential for writing efficient code and acing technical interviews.</p>
            
            <h2>Fundamental Data Structures</h2>
            <h3>Arrays and Strings</h3>
            <p>The most basic data structures. Master operations like searching, sorting, and manipulation.</p>
            
            <h3>Linked Lists</h3>
            <p>Dynamic data structures that excel at insertions and deletions. Understand singly, doubly, and circular linked lists.</p>
            
            <h3>Stacks and Queues</h3>
            <p>LIFO and FIFO structures used in countless applications from browser history to task scheduling.</p>
            
            <h3>Trees and Graphs</h3>
            <p>Hierarchical and network structures. Learn binary trees, BSTs, heaps, and graph traversal algorithms.</p>
            
            <h2>Essential Algorithms</h2>
            <h3>Sorting Algorithms</h3>
            <p>QuickSort, MergeSort, HeapSort - understand their time complexity and use cases.</p>
            
            <h3>Searching Algorithms</h3>
            <p>Binary search, DFS, BFS - master these fundamental search techniques.</p>
            
            <h3>Dynamic Programming</h3>
            <p>Break complex problems into simpler subproblems. Essential for optimization challenges.</p>
            
            <h2>Practice Strategy</h2>
            <p>Start with easy problems on platforms like LeetCode, HackerRank, or CodeForces. Gradually increase difficulty and focus on understanding patterns.</p>
            
            <h2>Interview Preparation</h2>
            <p>Practice explaining your thought process. Learn to analyze time and space complexity. Study common patterns like sliding window, two pointers, and backtracking.</p>
        `
    },
    {
        id: 5,
        title: "The Future of AI: Trends and Predictions",
        description: "Analyzing emerging trends in artificial intelligence, from large language models to autonomous systems and their impact on society.",
        date: "2026-03-15",
        readTime: "7 min read",
        tags: ["ai", "research"],
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
        content: `
            <h2>The AI Revolution</h2>
            <p>Artificial Intelligence is transforming every aspect of our lives. Let's explore the trends shaping the future of AI technology.</p>
            
            <h2>Large Language Models</h2>
            <p>Models like GPT-4, Claude, and Gemini demonstrate unprecedented language understanding. They're revolutionizing content creation, coding assistance, and customer service.</p>
            
            <h2>Multimodal AI</h2>
            <p>The next generation of AI systems can process and generate multiple types of data - text, images, audio, and video - simultaneously.</p>
            
            <h2>AI in Healthcare</h2>
            <p>AI is accelerating drug discovery, improving diagnostic accuracy, and personalizing treatment plans. Machine learning models can detect diseases earlier than traditional methods.</p>
            
            <h2>Autonomous Systems</h2>
            <p>Self-driving cars, drones, and robots are becoming more sophisticated. They're learning to navigate complex environments and make real-time decisions.</p>
            
            <h2>Ethical Considerations</h2>
            <p>As AI becomes more powerful, we must address concerns about bias, privacy, job displacement, and AI safety. Responsible AI development is crucial.</p>
            
            <h2>AI Democratization</h2>
            <p>Tools and platforms are making AI accessible to everyone. No-code AI solutions enable non-technical users to leverage machine learning.</p>
            
            <h2>The Road Ahead</h2>
            <p>AI will continue to evolve rapidly. Staying informed and adaptable is key to thriving in an AI-powered future.</p>
        `
    },
    {
        id: 6,
        title: "Web Performance Optimization Techniques",
        description: "Learn how to optimize your web applications for speed and efficiency using modern tools, techniques, and best practices.",
        date: "2026-03-10",
        readTime: "9 min read",
        tags: ["web"],
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
        content: `
            <h2>Why Performance Matters</h2>
            <p>Website speed directly impacts user experience, SEO rankings, and conversion rates. A one-second delay can reduce conversions by 7%.</p>
            
            <h2>Core Web Vitals</h2>
            <p>Google's Core Web Vitals measure user experience:</p>
            <ul>
                <li>LCP (Largest Contentful Paint) - Loading performance</li>
                <li>FID (First Input Delay) - Interactivity</li>
                <li>CLS (Cumulative Layout Shift) - Visual stability</li>
            </ul>
            
            <h2>Optimization Techniques</h2>
            <h3>Image Optimization</h3>
            <p>Use modern formats like WebP and AVIF. Implement lazy loading and responsive images with srcset.</p>
            
            <h3>Code Splitting</h3>
            <p>Break your JavaScript into smaller chunks. Load only what's needed for the current page.</p>
            
            <h3>Caching Strategies</h3>
            <p>Implement browser caching, CDN caching, and service workers for offline functionality.</p>
            
            <h3>Minification and Compression</h3>
            <p>Minify CSS, JavaScript, and HTML. Enable Gzip or Brotli compression on your server.</p>
            
            <h2>Monitoring Tools</h2>
            <p>Use Lighthouse, WebPageTest, and Chrome DevTools to measure and monitor performance. Set up real user monitoring (RUM) for production insights.</p>
            
            <h2>Best Practices</h2>
            <p>Optimize critical rendering path, reduce HTTP requests, use HTTP/2, and implement preloading for critical resources.</p>
        `
    },
    {
        id: 7,
        title: "Advanced React Patterns and Best Practices",
        description: "Discover advanced React patterns including custom hooks, compound components, and state management strategies for complex applications.",
        date: "2026-03-05",
        readTime: "11 min read",
        tags: ["web"],
        image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80",
        content: `
            <h2>Elevating Your React Skills</h2>
            <p>Master advanced React patterns to build maintainable, scalable applications. These techniques will make you a more effective React developer.</p>
            
            <h2>Custom Hooks</h2>
            <p>Extract reusable logic into custom hooks. They promote code reuse and make components cleaner and more focused.</p>
            
            <h2>Compound Components</h2>
            <p>Create flexible, composable components that work together. This pattern provides implicit state sharing between components.</p>
            
            <h2>Render Props</h2>
            <p>Share code between components using a prop whose value is a function. This pattern offers great flexibility for component composition.</p>
            
            <h2>Higher-Order Components</h2>
            <p>Wrap components to add additional functionality. HOCs are powerful for cross-cutting concerns like authentication and logging.</p>
            
            <h2>State Management</h2>
            <p>Choose the right solution for your needs:</p>
            <ul>
                <li>Context API for simple global state</li>
                <li>Redux for complex state with time-travel debugging</li>
                <li>Zustand for lightweight state management</li>
                <li>Jotai or Recoil for atomic state management</li>
            </ul>
            
            <h2>Performance Optimization</h2>
            <p>Use React.memo, useMemo, and useCallback wisely. Profile your app to identify performance bottlenecks.</p>
            
            <h2>Testing Strategies</h2>
            <p>Write comprehensive tests using React Testing Library. Focus on testing user behavior rather than implementation details.</p>
        `
    },
    {
        id: 8,
        title: "Mobile App Security: Protecting User Data",
        description: "Essential security practices for mobile app development, including encryption, secure storage, and authentication strategies.",
        date: "2026-02-28",
        readTime: "8 min read",
        tags: ["mobile"],
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
        content: `
            <h2>Security First Approach</h2>
            <p>Mobile apps handle sensitive user data. Implementing robust security measures is not optional - it's essential for protecting users and maintaining trust.</p>
            
            <h2>Data Encryption</h2>
            <p>Encrypt data both at rest and in transit. Use AES-256 for local storage and TLS 1.3 for network communications.</p>
            
            <h2>Secure Storage</h2>
            <p>Never store sensitive data in plain text. Use platform-specific secure storage:</p>
            <ul>
                <li>iOS: Keychain Services</li>
                <li>Android: Keystore System</li>
                <li>React Native: react-native-keychain</li>
            </ul>
            
            <h2>Authentication Best Practices</h2>
            <p>Implement multi-factor authentication, use OAuth 2.0 for third-party authentication, and store tokens securely. Never store passwords in plain text.</p>
            
            <h2>API Security</h2>
            <p>Use HTTPS exclusively, implement certificate pinning, validate all inputs, and use API keys securely. Implement rate limiting to prevent abuse.</p>
            
            <h2>Code Obfuscation</h2>
            <p>Protect your code from reverse engineering using ProGuard (Android) or similar tools. Remove debug logs from production builds.</p>
            
            <h2>Regular Security Audits</h2>
            <p>Conduct penetration testing, keep dependencies updated, and monitor for security vulnerabilities. Use tools like OWASP Mobile Security Testing Guide.</p>
            
            <h2>Privacy Compliance</h2>
            <p>Ensure compliance with GDPR, CCPA, and other privacy regulations. Be transparent about data collection and usage.</p>
        `
    },
    {
        id: 9,
        title: "Graph Algorithms: From Theory to Practice",
        description: "Comprehensive exploration of graph algorithms including BFS, DFS, Dijkstra's, and their real-world applications.",
        date: "2026-02-20",
        readTime: "13 min read",
        tags: ["dsa"],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
        content: `
            <h2>Understanding Graphs</h2>
            <p>Graphs are versatile data structures that model relationships between objects. They're used in social networks, maps, recommendation systems, and more.</p>
            
            <h2>Graph Representations</h2>
            <p>Learn two main ways to represent graphs:</p>
            <ul>
                <li>Adjacency Matrix - Good for dense graphs</li>
                <li>Adjacency List - Efficient for sparse graphs</li>
            </ul>
            
            <h2>Breadth-First Search (BFS)</h2>
            <p>BFS explores graphs level by level. It's perfect for finding shortest paths in unweighted graphs and level-order traversal.</p>
            
            <h2>Depth-First Search (DFS)</h2>
            <p>DFS explores as far as possible along each branch. Use it for topological sorting, cycle detection, and finding connected components.</p>
            
            <h2>Dijkstra's Algorithm</h2>
            <p>Find the shortest path in weighted graphs. Essential for GPS navigation, network routing, and many optimization problems.</p>
            
            <h2>Minimum Spanning Trees</h2>
            <p>Kruskal's and Prim's algorithms find the minimum cost to connect all nodes. Used in network design and clustering.</p>
            
            <h2>Advanced Algorithms</h2>
            <p>Explore Bellman-Ford for negative weights, Floyd-Warshall for all-pairs shortest paths, and A* for heuristic-based pathfinding.</p>
            
            <h2>Real-World Applications</h2>
            <p>Graphs power social networks (friend recommendations), maps (route planning), web crawlers (page ranking), and dependency resolution in package managers.</p>
        `
    },
    {
        id: 10,
        title: "Natural Language Processing: A Practical Guide",
        description: "Understanding NLP fundamentals and building practical applications using transformers, embeddings, and modern frameworks.",
        date: "2026-02-15",
        readTime: "10 min read",
        tags: ["ai", "research"],
        image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80",
        content: `
            <h2>Introduction to NLP</h2>
            <p>Natural Language Processing enables computers to understand, interpret, and generate human language. It powers chatbots, translation services, and sentiment analysis.</p>
            
            <h2>Text Preprocessing</h2>
            <p>Clean and prepare text data through tokenization, stemming, lemmatization, and removing stop words. Quality preprocessing is crucial for model performance.</p>
            
            <h2>Word Embeddings</h2>
            <p>Represent words as dense vectors that capture semantic meaning. Popular techniques include Word2Vec, GloVe, and FastText.</p>
            
            <h2>Transformer Architecture</h2>
            <p>Transformers revolutionized NLP with attention mechanisms. They power models like BERT, GPT, and T5.</p>
            
            <h2>Common NLP Tasks</h2>
            <ul>
                <li>Sentiment Analysis - Determine emotional tone</li>
                <li>Named Entity Recognition - Identify people, places, organizations</li>
                <li>Text Classification - Categorize documents</li>
                <li>Machine Translation - Translate between languages</li>
                <li>Question Answering - Extract answers from text</li>
            </ul>
            
            <h2>Modern Frameworks</h2>
            <p>Use Hugging Face Transformers for pre-trained models, spaCy for production pipelines, and NLTK for educational purposes.</p>
            
            <h2>Building Your First NLP App</h2>
            <p>Start with a simple sentiment analysis project. Use pre-trained models, fine-tune on your data, and deploy with FastAPI or Flask.</p>
            
            <h2>Future Directions</h2>
            <p>Explore multimodal models, few-shot learning, and prompt engineering. The field is evolving rapidly with new breakthroughs regularly.</p>
        `
    }
];

// Function to create blog card HTML
function createBlogCard(post) {
    return `
        <article class="blog-card" data-tags="${post.tags.join(',')}" onclick="openBlogPost(${post.id})">
            <div class="blog-card-image">
                <img src="${post.image}" alt="${post.title}" loading="lazy">
            </div>
            <div class="blog-card-content">
                <div class="blog-card-meta">
                    <span class="blog-card-date">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                            <line x1="16" y1="2" x2="16" y2="6"></line>
                            <line x1="8" y1="2" x2="8" y2="6"></line>
                            <line x1="3" y1="10" x2="21" y2="10"></line>
                        </svg>
                        ${formatDate(post.date)}
                    </span>
                    <span class="blog-card-read-time">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="12" cy="12" r="10"></circle>
                            <polyline points="12 6 12 12 16 14"></polyline>
                        </svg>
                        ${post.readTime}
                    </span>
                </div>
                <h2 class="blog-card-title">${post.title}</h2>
                <p class="blog-card-description">${post.description}</p>
                <div class="blog-card-tags">
                    ${post.tags.map(tag => `<span class="blog-card-tag">${tag}</span>`).join('')}
                </div>
            </div>
        </article>
    `;
}

// Format date
function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

// Render blog posts
function renderBlogPosts(filter = 'all') {
    const blogGrid = document.getElementById('blogGrid');
    const filteredPosts = filter === 'all' 
        ? blogPosts 
        : blogPosts.filter(post => post.tags.includes(filter));
    
    blogGrid.innerHTML = filteredPosts.map(post => createBlogCard(post)).join('');
}

// Filter functionality
function setupFilters() {
    const tags = document.querySelectorAll('.tag');
    
    tags.forEach(tag => {
        tag.addEventListener('click', () => {
            // Remove active class from all tags
            tags.forEach(t => t.classList.remove('active'));
            // Add active class to clicked tag
            tag.classList.add('active');
            // Filter posts
            const filterTag = tag.getAttribute('data-tag');
            renderBlogPosts(filterTag);
        });
    });
}

// Open blog post in new page
function openBlogPost(postId) {
    const post = blogPosts.find(p => p.id === postId);
    if (post) {
        // Store post data in sessionStorage
        sessionStorage.setItem('currentPost', JSON.stringify(post));
        // Open blog post page
        window.location.href = 'post.html';
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderBlogPosts();
    setupFilters();
});
