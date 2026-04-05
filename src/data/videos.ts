export interface Video {
  id: string;
  title: string;
  description: string;
  date: string;
  duration: string;
  thumbnail: string;
  videoUrl: string;
  instructor: string;
  tags: string[];
}

export const videos: Video[] = [
  {
    id: '1',
    title: 'Building AI Agents with LangChain: A Complete Guide',
    description: 'Learn how to build autonomous AI agents using LangChain, from simple chains to complex multi-agent systems that can use tools and make decisions.',
    date: '2026-04-01',
    duration: '1:24:33',
    thumbnail: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=640&q=80',
    videoUrl: '#',
    instructor: 'Dr. Sarah Chen',
    tags: ['LangChain', 'Agents', 'Python'],
  },
  {
    id: '2',
    title: 'Prompt Engineering Masterclass: Advanced Techniques',
    description: 'Go beyond basic prompting with chain-of-thought reasoning, few-shot examples, constitutional AI principles, and prompt optimization strategies.',
    date: '2026-03-28',
    duration: '58:17',
    thumbnail: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=640&q=80',
    videoUrl: '#',
    instructor: 'Marcus Weber',
    tags: ['Prompt Engineering', 'GPT', 'Claude'],
  },
  {
    id: '3',
    title: 'RAG Systems in Production: What Actually Works',
    description: 'A practical deep-dive into retrieval-augmented generation systems, covering chunking strategies, embedding models, vector databases, and evaluation.',
    date: '2026-03-24',
    duration: '1:12:08',
    thumbnail: 'https://images.unsplash.com/photo-1516110833967-0b5716ca1387?w=640&q=80',
    videoUrl: '#',
    instructor: 'Lena Müller',
    tags: ['RAG', 'Vector DB', 'Production'],
  },
  {
    id: '4',
    title: 'Automating Business Workflows with AI and n8n',
    description: 'Step-by-step tutorial on connecting AI models to business tools using n8n, including CRM integration, email automation, and document processing.',
    date: '2026-03-20',
    duration: '46:52',
    thumbnail: 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=640&q=80',
    videoUrl: '#',
    instructor: 'Tom Richter',
    tags: ['n8n', 'Automation', 'No-Code'],
  },
  {
    id: '5',
    title: 'Fine-Tuning LLMs: When, Why, and How',
    description: 'Understand when fine-tuning beats prompt engineering, explore LoRA and QLoRA techniques, and walk through a real fine-tuning project end-to-end.',
    date: '2026-03-15',
    duration: '1:38:45',
    thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=640&q=80',
    videoUrl: '#',
    instructor: 'Prof. Julia Kim',
    tags: ['Fine-Tuning', 'LoRA', 'Training'],
  },
  {
    id: '6',
    title: 'AI Security: Prompt Injection and Defense Strategies',
    description: 'A hands-on look at AI security vulnerabilities including prompt injection, jailbreaking, and data exfiltration — with practical defensive countermeasures.',
    date: '2026-03-10',
    duration: '52:21',
    thumbnail: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=640&q=80',
    videoUrl: '#',
    instructor: 'Alex Rivera',
    tags: ['Security', 'Prompt Injection', 'Defense'],
  },
];
