export interface AITool {
  slug: string;
  name: string;
  logo: string;
  category: string;
  tagline: string;
  description: string;
  rating: number;
  reviewCount: number;
  pricing: string;
  pricingModel: "Free" | "Freemium" | "Paid" | "Free Trial";
  features: string[];
  affiliateUrl: string;
  isFeatured?: boolean;
  isNew?: boolean;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
}

export interface Category {
  name: string;
  slug: string;
  icon: string;
  count: number;
  description: string;
}

export const categories: Category[] = [
  { name: "AI Writing", slug: "ai-writing", icon: "PenTool", count: 42, description: "AI-powered content creation and copywriting tools" },
  { name: "AI Image", slug: "ai-image", icon: "Image", count: 38, description: "Generate and edit images with artificial intelligence" },
  { name: "AI Video", slug: "ai-video", icon: "Video", count: 25, description: "Create and edit videos using AI technology" },
  { name: "AI Code", slug: "ai-code", icon: "Code", count: 31, description: "AI coding assistants and code generation tools" },
  { name: "AI Chatbots", slug: "ai-chatbots", icon: "MessageSquare", count: 28, description: "Conversational AI and chatbot platforms" },
  { name: "AI SEO", slug: "ai-seo", icon: "Search", count: 19, description: "SEO optimization and keyword research tools" },
  { name: "AI Productivity", slug: "ai-productivity", icon: "Zap", count: 35, description: "Boost productivity with AI-powered workflow tools" },
  { name: "AI Marketing", slug: "ai-marketing", icon: "Megaphone", count: 22, description: "Marketing automation and analytics tools" },
];

export const tools: AITool[] = [
  {
    slug: "chatgpt",
    name: "ChatGPT",
    logo: "C",
    category: "AI Chatbots",
    tagline: "The AI assistant that started it all",
    description: "OpenAI's flagship conversational AI model capable of generating text, answering questions, writing code, and assisting with a wide range of tasks through natural language interaction.",
    rating: 4.7,
    reviewCount: 12840,
    pricing: "From $20/mo",
    pricingModel: "Freemium",
    features: ["GPT-4o Access", "Image Generation", "Code Interpreter", "Web Browsing", "Custom GPTs"],
    affiliateUrl: "#",
    isFeatured: true,
  },
  {
    slug: "jasper-ai",
    name: "Jasper AI",
    logo: "J",
    category: "AI Writing",
    tagline: "Enterprise-grade AI content platform",
    description: "Jasper helps marketing teams create on-brand AI content across all channels. With features like brand voice, campaign management, and collaboration tools.",
    rating: 4.5,
    reviewCount: 5620,
    pricing: "From $49/mo",
    pricingModel: "Paid",
    features: ["Brand Voice", "Campaign Builder", "SEO Mode", "Templates", "API Access"],
    affiliateUrl: "#",
    isFeatured: true,
  },
  {
    slug: "midjourney",
    name: "Midjourney",
    logo: "M",
    category: "AI Image",
    tagline: "Create stunning AI artwork",
    description: "Midjourney is an AI art generator that creates images from textual descriptions, producing highly detailed and artistic visuals used by designers and artists worldwide.",
    rating: 4.8,
    reviewCount: 8930,
    pricing: "From $10/mo",
    pricingModel: "Paid",
    features: ["V6 Model", "Style Tuner", "Variations", "Upscale", "Pan & Zoom"],
    affiliateUrl: "#",
    isFeatured: true,
  },
  {
    slug: "github-copilot",
    name: "GitHub Copilot",
    logo: "G",
    category: "AI Code",
    tagline: "Your AI pair programmer",
    description: "GitHub Copilot uses OpenAI Codex to suggest code completions in real-time. It integrates directly into your IDE and supports multiple programming languages.",
    rating: 4.6,
    reviewCount: 7210,
    pricing: "From $10/mo",
    pricingModel: "Paid",
    features: ["Code Completion", "Chat Assistant", "CLI Support", "Multi-IDE", "Copilot Workspace"],
    affiliateUrl: "#",
    isFeatured: true,
  },
  {
    slug: "notion-ai",
    name: "Notion AI",
    logo: "N",
    category: "AI Productivity",
    tagline: "AI-powered workspace for teams",
    description: "Notion AI brings artificial intelligence directly into your workspace. Summarize notes, generate content, translate text, and automate workflows within Notion.",
    rating: 4.4,
    reviewCount: 4380,
    pricing: "From $10/mo",
    pricingModel: "Freemium",
    features: ["AI Writing", "Summarization", "Translation", "Action Items", "Q&A on Docs"],
    affiliateUrl: "#",
    isFeatured: true,
  },
  {
    slug: "copy-ai",
    name: "Copy.ai",
    logo: "C",
    category: "AI Writing",
    tagline: "AI copywriting for growth teams",
    description: "Copy.ai uses advanced AI to generate marketing copy, blog posts, social media content, and more. Built for go-to-market teams who need content at scale.",
    rating: 4.3,
    reviewCount: 3450,
    pricing: "Free plan available",
    pricingModel: "Freemium",
    features: ["90+ Templates", "Workflow Builder", "Brand Voice", "Infobase", "API"],
    affiliateUrl: "#",
  },
  {
    slug: "surfer-seo",
    name: "Surfer SEO",
    logo: "S",
    category: "AI SEO",
    tagline: "AI-driven content optimization",
    description: "Surfer SEO combines AI with real-time SERP data to help you create content that ranks. Get detailed guidelines, keyword suggestions, and content scores.",
    rating: 4.5,
    reviewCount: 2890,
    pricing: "From $89/mo",
    pricingModel: "Paid",
    features: ["Content Editor", "Keyword Research", "SERP Analyzer", "AI Outline", "Audit Tool"],
    affiliateUrl: "#",
  },
  {
    slug: "runway-ml",
    name: "Runway ML",
    logo: "R",
    category: "AI Video",
    tagline: "Next-generation video creation",
    description: "Runway ML offers powerful AI tools for video generation and editing. Create videos from text prompts, remove backgrounds, and apply AI-powered effects.",
    rating: 4.4,
    reviewCount: 2150,
    pricing: "From $12/mo",
    pricingModel: "Freemium",
    features: ["Gen-3 Alpha", "Text to Video", "Image to Video", "Motion Brush", "Green Screen"],
    affiliateUrl: "#",
    isNew: true,
  },
  {
    slug: "grammarly",
    name: "Grammarly",
    logo: "G",
    category: "AI Writing",
    tagline: "AI writing assistant for everyone",
    description: "Grammarly uses advanced AI to check grammar, style, and tone in real-time. It works across browsers, email, documents, and social media platforms.",
    rating: 4.6,
    reviewCount: 15300,
    pricing: "Free plan available",
    pricingModel: "Freemium",
    features: ["Grammar Check", "Tone Detection", "Clarity Suggestions", "Plagiarism Checker", "AI Rewrite"],
    affiliateUrl: "#",
  },
  {
    slug: "descript",
    name: "Descript",
    logo: "D",
    category: "AI Video",
    tagline: "Edit videos like a doc",
    description: "Descript is an all-in-one video and podcast editor that uses AI to let you edit media by editing text. Features include filler word removal and AI voice cloning.",
    rating: 4.3,
    reviewCount: 1870,
    pricing: "From $24/mo",
    pricingModel: "Free Trial",
    features: ["Text-Based Editing", "AI Voice", "Filler Removal", "Screen Recording", "Transcription"],
    affiliateUrl: "#",
  },
  {
    slug: "claude",
    name: "Claude",
    logo: "C",
    category: "AI Chatbots",
    tagline: "Anthropic's thoughtful AI assistant",
    description: "Claude by Anthropic is designed to be helpful, harmless, and honest. Excels at long-form content, analysis, coding, and nuanced conversations with large context windows.",
    rating: 4.6,
    reviewCount: 6420,
    pricing: "Free plan available",
    pricingModel: "Freemium",
    features: ["200K Context", "Artifacts", "Projects", "Vision", "Code Generation"],
    affiliateUrl: "#",
    isNew: true,
  },
  {
    slug: "semrush",
    name: "Semrush",
    logo: "S",
    category: "AI SEO",
    tagline: "All-in-one digital marketing suite",
    description: "Semrush is a comprehensive SEO and digital marketing platform with AI-powered features for keyword research, site auditing, competitor analysis, and content optimization.",
    rating: 4.5,
    reviewCount: 9180,
    pricing: "From $139/mo",
    pricingModel: "Free Trial",
    features: ["Keyword Magic", "Site Audit", "Position Tracking", "Content Shake", "AI Writing"],
    affiliateUrl: "#",
  },
];

export const blogPosts: BlogPost[] = [
  {
    slug: "chatgpt-vs-claude-2026",
    title: "ChatGPT vs Claude in 2026: The Ultimate AI Chatbot Showdown",
    excerpt: "We compared ChatGPT-5 and Claude 4 across 15 categories including reasoning, coding, creativity, and cost. Here's which AI assistant wins in 2026.",
    category: "Comparisons",
    author: "WTechni Team",
    date: "2026-07-28",
    readTime: "12 min read",
    image: "",
  },
  {
    slug: "best-ai-writing-tools",
    title: "11 Best AI Writing Tools in 2026 (Tested & Reviewed)",
    excerpt: "After testing 30+ AI writing tools over 6 months, we've identified the top 11 that actually improve your content quality and save time.",
    category: "Listicles",
    author: "WTechni Team",
    date: "2026-07-25",
    readTime: "15 min read",
    image: "",
  },
  {
    slug: "midjourney-v6-review",
    title: "Midjourney V6.5 Review: Is It Still the Best AI Image Generator?",
    excerpt: "Midjourney released V6.5 with major improvements. We tested it against DALL-E 4 and Stable Diffusion XL to see which creates the best images.",
    category: "Reviews",
    author: "WTechni Team",
    date: "2026-07-22",
    readTime: "10 min read",
    image: "",
  },
  {
    slug: "notion-ai-complete-guide",
    title: "Notion AI Complete Guide: 20 Ways to Automate Your Workflow",
    excerpt: "Learn how to leverage Notion AI for task management, content creation, meeting notes, project planning, and much more in this comprehensive guide.",
    category: "Tutorials",
    author: "WTechni Team",
    date: "2026-07-20",
    readTime: "18 min read",
    image: "",
  },
  {
    slug: "free-ai-tools-everyone",
    title: "25 Free AI Tools That Are Actually Worth Using in 2026",
    excerpt: "Not all free AI tools are created equal. We've curated 25 genuinely useful free AI tools across writing, image, video, and productivity categories.",
    category: "Listicles",
    author: "WTechni Team",
    date: "2026-07-18",
    readTime: "14 min read",
    image: "",
  },
  {
    slug: "ai-seo-tools-comparison",
    title: "Surfer SEO vs Semrush vs Jasper: Which AI SEO Tool Wins?",
    excerpt: "Three of the most popular AI-powered SEO tools go head-to-head. We tested each on content optimization, keyword research, and ROI.",
    category: "Comparisons",
    author: "WTechni Team",
    date: "2026-07-15",
    readTime: "16 min read",
    image: "",
  },
];
