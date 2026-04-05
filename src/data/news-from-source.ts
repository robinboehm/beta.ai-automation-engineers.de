import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

export interface SourceNewsItem {
  id: string;
  title: string;
  date: string;
  source: string;
  sourceUrl: string;
  category: string;
  excerpt: string;
  url: string;
  author: string;
  tags: string[];
  image?: string;
  readTime?: string;
  slug: string;
}

// Map source categories to our display categories
function mapCategory(category: string): string {
  const lower = (category ?? '').toLowerCase();
  if (lower.includes('release') || lower.includes('model') || lower.includes('announcement')) return 'releases';
  if (lower.includes('research') || lower.includes('science') || lower.includes('studie')) return 'research';
  if (lower.includes('business') || lower.includes('enterprise') || lower.includes('wirtschaft')) return 'business';
  return 'tools';
}

// Parse YAML frontmatter from markdown content (simple regex-based parser)
function parseFrontmatter(content: string): Record<string, unknown> {
  const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match) return {};

  const fm: Record<string, unknown> = {};
  const yaml = match[1];

  for (const line of yaml.split('\n')) {
    const colonIdx = line.indexOf(':');
    if (colonIdx < 0) continue;

    const key = line.slice(0, colonIdx).trim();
    const rawVal = line.slice(colonIdx + 1).trim();

    if (!key) continue;

    // Handle arrays on single line: ['a', 'b'] or [a, b]
    if (rawVal.startsWith('[')) {
      fm[key] = rawVal
        .slice(1, rawVal.lastIndexOf(']'))
        .split(',')
        .map((s) => s.trim().replace(/^['"]|['"]$/g, ''));
    } else {
      fm[key] = rawVal.replace(/^['"]|['"]$/g, '');
    }
  }

  return fm;
}

export function getSourceNewsItems(): SourceNewsItem[] {
  const dir = fileURLToPath(new URL('../../news-source/src/pages/news', import.meta.url));

  if (!fs.existsSync(dir)) {
    console.warn('[news-from-source] Submodule not found at:', dir);
    return [];
  }

  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const items: SourceNewsItem[] = [];

  for (const entry of entries) {
    if (!entry.isDirectory()) continue;

    const indexPath = path.join(dir, entry.name, 'index.md');
    if (!fs.existsSync(indexPath)) continue;

    const content = fs.readFileSync(indexPath, 'utf-8');
    const fm = parseFrontmatter(content);

    const title = fm.title as string;
    const pubDate = fm.pubDate as string;
    if (!title || !pubDate) continue;

    const slug = entry.name;
    items.push({
      id: slug,
      title,
      date: pubDate,
      source: 'AI Automation Engineers',
      sourceUrl: 'https://ai-automation-engineers.de',
      category: mapCategory(fm.category as string ?? ''),
      excerpt: (fm.description as string) ?? '',
      url: `https://ai-automation-engineers.de/news/${slug}/`,
      author: (fm.author as string) ?? 'Robin Böhm',
      tags: (fm.tags as string[]) ?? [],
      image: fm.image as string | undefined,
      readTime: fm.readTime as string | undefined,
      slug,
    });
  }

  // Sort newest first
  return items.sort((a, b) => b.date.localeCompare(a.date));
}

export const sourceCategories = ['all', 'releases', 'research', 'business', 'tools'] as const;
