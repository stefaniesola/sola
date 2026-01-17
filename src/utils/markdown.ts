import { marked } from "marked";

export interface TocItem {
  id: string;
  text: string;
  level: number;
}

/**
 * Decode HTML entities to plain text
 */
function decodeHtmlEntities(text: string): string {
  const textarea = { innerHTML: text } as { innerHTML: string };
  // Use a simple approach to decode common entities
  return text
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, " ");
}

/**
 * Generate a slug from a heading text
 */
function slugify(text: string): string {
  // First decode HTML entities, then slugify
  const decoded = decodeHtmlEntities(text);
  return decoded
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "") // Remove special characters
    .replace(/[\s_-]+/g, "-") // Replace spaces and underscores with hyphens
    .replace(/^-+|-+$/g, ""); // Remove leading/trailing hyphens
}

/**
 * Extract headings from markdown content
 */
export function extractHeadings(markdown: string): TocItem[] {
  const headings: TocItem[] = [];
  const lines = markdown.split("\n");

  for (const line of lines) {
    // Match markdown headings (# ## ### etc.)
    const match = line.match(/^(#{1,6})\s+(.+)$/);
    if (match) {
      const level = match[1].length;
      const text = match[2].trim();
      const id = slugify(text);
      headings.push({ id, text, level });
    }
  }

  return headings;
}

/**
 * Process markdown content and return HTML with TOC
 */
export function processMarkdown(markdown: string): {
  html: string;
  toc: TocItem[];
} {
  if (!markdown) {
    return { html: "", toc: [] };
  }

  // Extract headings before processing
  const toc = extractHeadings(markdown);

  // Render markdown to HTML first (this handles all inline tokens properly)
  let html = marked.parse(markdown) as string;
  
  // Post-process the HTML to add IDs to headings
  // Match all heading tags and add IDs based on their text content
  html = html.replace(/<h([1-6])([^>]*)>(.*?)<\/h[1-6]>/g, (match, level, attrs, content) => {
    // Extract plain text from the heading content (remove HTML tags)
    const textContent = content.replace(/<[^>]+>/g, "").trim();
    if (textContent) {
      const id = slugify(textContent);
      // Check if ID already exists in attributes
      if (!attrs.includes('id=')) {
        return `<h${level}${attrs} id="${id}">${content}</h${level}>`;
      }
    }
    return match;
  });

  return { html, toc };
}
