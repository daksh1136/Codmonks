export const blogList = [
    {
        id: 'future-web-dev',
        title: 'The Future of Web Development: Trends to Watch in 2024',
        description:
            "Explore the cutting-edge technologies and frameworks that are shaping the future of web development. From AI integration to progressive web apps, discover what's next in the digital landscape.",
        author: 'CodMonks Team',
        date: 'Dec 15, 2024',
        readTime: '6 min read',
        tags: ['Web Development', 'AI', 'SSR', 'PWAs'],
        image: '/assets/images/future-web.jpg',
        content: `
            # 1. AI-Powered Development Tools
            AI tools like GitHub Copilot, ChatGPT plugins, and Tabnine are streamlining development and boosting productivity.

            **Pro Tip:** Try GitHub Copilot in VSCode to speed up repetitive code.

            # 2. Server-Side Rendering Renaissance
            Frameworks like Next.js and Nuxt are driving SEO, performance, and better user experience.

            # 3. PWAs
            Progressive Web Apps are now installable, offline-capable, and nearly indistinguishable from native apps.

            # 4. WASM
            WebAssembly enables ultra-fast performance and new use cases for browsers.

            # 5. Micro-Frontend Architecture
            Split monolith UIs into independently deployable apps. Boost dev velocity and scalability.

            # Looking Ahead
            The future is modular, AI-enhanced, and performance-driven. Stay agile, and keep learning.`
    },
    {
        id: 'responsive-css',
        title: 'Building Responsive Layouts with CSS Grid and Flexbox',
        description:
            'Master the art of creating flexible, responsive layouts using modern CSS techniques. Learn when to use Grid vs Flexbox and best practices.',
        author: 'CodMonks Team',
        date: 'Dec 12, 2024',
        readTime: '5 min read',
        tags: ['CSS', 'HTML', 'Responsive'],
        image: '/assets/images/responsive-css.jpg',
        content: `
            # Grid vs Flexbox
            Use Flexbox for one-dimensional layouts and Grid for two-dimensional structures.

            # Responsive Design Strategy
            Combine media queries with layout utilities to handle multiple screen sizes.

            # Practical Tips
            - Use minmax() for flexible Grid columns.
            - Avoid fixed widths; prefer relative units.
            - Always test layouts on real devices.`
    },
    {
        id: 'mobile-dev',
        title: 'Mobile App Development: Native vs Cross-Platform',
        description:
            'Compare the pros and cons of native and cross-platform mobile development approaches to make the right choice for your project.',
        author: 'CodMonks Team',
        date: 'Dec 10, 2024',
        readTime: '3 min read',
        tags: ['Mobile', 'React Native', 'Flutter'],
        image: '/assets/images/mobile-dev.jpg',
        content: `
            # Native Development
            Offers better performance and access to device-specific APIs.

            # Cross-Platform Tools
            React Native and Flutter offer faster development and shared codebases.

            # Choosing Wisely
            Pick native for high-performance apps (games, AR), and cross-platform for budget-conscious projects.`
    },
    {
        id: 'seo-best-practices',
        title: 'SEO Best Practices for Modern Websites',
        description:
            "Boost your website's search engine rankings with these proven SEO strategies and techniques that work in 2024.",
        author: 'CodMonks Team',
        date: 'Dec 8, 2024',
        readTime: '7 min read',
        tags: ['SEO', 'Marketing', 'Analytics'],
        image: '/assets/images/seo-best.jpg',
        content: `
            # Core Web Vitals
            Improve LCP, FID, and CLS scores for better rankings.

            # Structured Data
            Implement schema.org to enhance snippets.

            # Mobile-First
            Ensure full responsiveness and usability on all devices.

            # Content
            Use targeted keywords, rich media, and regular updates.`
    },
    {
        id: 'react-hooks-guide',
        title: 'Complete Guide to React Hooks',
        description:
            'Understand how to use React Hooks effectively and take full advantage of functional components in your React applications.',
        author: 'CodMonks Team',
        date: 'Dec 5, 2024',
        readTime: '8 min read',
        tags: ['React', 'Hooks'],
        image: '/assets/images/react-hooks.jpg',
        content: `
            # useState & useEffect
            Manage state and side effects in function components.

            # useCallback & useMemo
            Optimize rendering and improve performance.

            # Custom Hooks
            Encapsulate logic for reuse and cleaner codebases.`
    },
    {
        id: 'db-optimization',
        title: 'Database Optimization Tips',
        description:
            'Speed up your applications with practical database optimization strategies, indexing techniques, and performance tuning.',
        author: 'CodMonks Team',
        date: 'Dec 3, 2024',
        readTime: '6 min read',
        tags: ['Database', 'Optimization'],
        image: '/assets/images/db-optimization.jpg',
        content: `
            # Indexing
            Use proper indexes to speed up query execution.

            # Query Optimization
            Avoid SELECT *, use joins wisely, and cache frequent queries.

            # Maintenance
            Regularly vacuum and analyze your database.`
    },
    {
        id: 'api-security',
        title: 'API Security Best Practices',
        description:
            'Learn how to protect your APIs from common vulnerabilities and follow security best practices to keep your applications safe.',
        author: 'CodMonks Team',
        date: 'Dec 1, 2024',
        readTime: '4 min read',
        tags: ['API', 'Security', 'Web'],
        image: '/assets/images/api-security.jpg',
        content: `
            # Authentication
            Always use OAuth 2.0 or JWTs.

            # Rate Limiting
            Prevent abuse with throttling and quotas.

            # Data Validation
            Sanitize all inputs to avoid injection attacks.

            # Encryption
            Use HTTPS and encrypt sensitive data at rest and in transit.`
    }
];
