-- Insert sample projects
INSERT INTO projects (title, description, image_url, demo_url, github_url, technologies, featured) VALUES
('3D Portfolio Website', 'Interactive 3D portfolio built with Next.js, Three.js, and modern web technologies', '/placeholder.svg?height=400&width=600', 'https://portfolio.example.com', 'https://github.com/example/portfolio', ARRAY['Next.js', 'Three.js', 'TypeScript', 'Tailwind CSS'], true),
('E-commerce Platform', 'Full-stack e-commerce solution with payment integration and admin dashboard', '/placeholder.svg?height=400&width=600', 'https://shop.example.com', 'https://github.com/example/ecommerce', ARRAY['React', 'Node.js', 'PostgreSQL', 'Stripe'], true),
('Real-time Chat App', 'WebSocket-based chat application with rooms and file sharing', '/placeholder.svg?height=400&width=600', 'https://chat.example.com', 'https://github.com/example/chat', ARRAY['Socket.io', 'Express', 'MongoDB', 'React'], false),
('AI Image Generator', 'AI-powered image generation tool using OpenAI API', '/placeholder.svg?height=400&width=600', 'https://ai-gen.example.com', 'https://github.com/example/ai-generator', ARRAY['Python', 'FastAPI', 'OpenAI', 'React'], true);

-- Insert sample blog posts
INSERT INTO blog_posts (title, slug, excerpt, content, image_url, published, tags) VALUES
('Building 3D Web Experiences with Three.js', 'building-3d-web-experiences-threejs', 'Learn how to create immersive 3D experiences on the web using Three.js and modern JavaScript.', '# Building 3D Web Experiences with Three.js

Three.js has revolutionized how we create 3D content for the web. In this post, we''ll explore the fundamentals of building immersive 3D experiences...

## Getting Started

First, let''s set up a basic Three.js scene:

```javascript
import * as THREE from ''three'';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
