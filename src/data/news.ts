export interface NewsItem {
  id: string;
  title: string;
  date: string;
  source: string;
  sourceUrl: string;
  category: 'releases' | 'research' | 'business' | 'tools' | 'all';
  excerpt: string;
  url: string;
}

export const newsItems: NewsItem[] = [
  {
    id: '1',
    title: 'GPT-5 Released: Unprecedented Reasoning Capabilities',
    date: '2026-04-04',
    source: 'OpenAI Blog',
    sourceUrl: 'https://openai.com',
    category: 'releases',
    excerpt: 'OpenAI announces its most capable model yet with major improvements in multi-step reasoning, code generation, and scientific analysis.',
    url: '#',
  },
  {
    id: '2',
    title: 'New Research: LLMs Show Emergent Planning Behavior at Scale',
    date: '2026-04-03',
    source: 'arXiv',
    sourceUrl: 'https://arxiv.org',
    category: 'research',
    excerpt: 'A landmark study from Stanford shows that large language models develop sophisticated planning strategies as parameter counts exceed certain thresholds.',
    url: '#',
  },
  {
    id: '3',
    title: 'EU AI Act Compliance Deadline: What Businesses Need to Know',
    date: '2026-04-02',
    source: 'TechCrunch',
    sourceUrl: 'https://techcrunch.com',
    category: 'business',
    excerpt: 'As the EU AI Act enforcement deadline approaches, companies are scrambling to understand their compliance obligations and implement required safeguards.',
    url: '#',
  },
  {
    id: '4',
    title: 'Cursor AI Reaches 10 Million Developers',
    date: '2026-04-01',
    source: 'Cursor Blog',
    sourceUrl: 'https://cursor.com',
    category: 'tools',
    excerpt: 'The AI-powered code editor announces a major milestone as adoption among professional developers accelerates dramatically.',
    url: '#',
  },
  {
    id: '5',
    title: 'Anthropic Claude 4 Sets New Benchmark in Safety Evaluations',
    date: '2026-03-31',
    source: 'Anthropic',
    sourceUrl: 'https://anthropic.com',
    category: 'releases',
    excerpt: 'Claude 4 achieves highest-ever scores on safety benchmarks while maintaining state-of-the-art performance across coding, writing, and analysis tasks.',
    url: '#',
  },
  {
    id: '6',
    title: 'AI Automation Saves 2.3 Billion Work Hours in Q1 2026',
    date: '2026-03-30',
    source: 'McKinsey Global Institute',
    sourceUrl: 'https://mckinsey.com',
    category: 'business',
    excerpt: 'New report quantifies the massive productivity gains from AI adoption across industries, with knowledge work seeing the biggest impact.',
    url: '#',
  },
  {
    id: '7',
    title: 'n8n 2.0: Visual AI Workflow Builder Now with Agent Support',
    date: '2026-03-29',
    source: 'n8n Blog',
    sourceUrl: 'https://n8n.io',
    category: 'tools',
    excerpt: 'Popular workflow automation tool launches major update with native AI agent orchestration, making complex automation accessible to non-developers.',
    url: '#',
  },
  {
    id: '8',
    title: 'Mixture of Experts: How Sparse Models Achieve Dense Results',
    date: '2026-03-28',
    source: 'Distill.pub',
    sourceUrl: 'https://distill.pub',
    category: 'research',
    excerpt: 'A deep dive into the architecture behind today\'s most efficient AI models and why sparse activation is becoming the dominant paradigm.',
    url: '#',
  },
];

export const categories = ['all', 'releases', 'research', 'business', 'tools'] as const;
