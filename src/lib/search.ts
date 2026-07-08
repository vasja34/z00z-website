export type SearchItem = {
  body: string;
  description: string;
  href: string;
  title: string;
};

type RankedSearchItem = SearchItem & {
  score: number;
};

function normalize(value: string): string {
  return value.trim().toLowerCase();
}

function includesAllTokens(haystack: string, tokens: string[]): boolean {
  return tokens.every((token) => haystack.includes(token));
}

function scoreSearchItem(item: SearchItem, query: string): RankedSearchItem | null {
  const normalizedQuery = normalize(query);

  if (!normalizedQuery) {
    return {
      ...item,
      score: Number.MAX_SAFE_INTEGER,
    };
  }

  const title = normalize(item.title);
  const description = normalize(item.description);
  const body = normalize(item.body);
  const haystack = `${title} ${description} ${body}`.trim();
  const tokens = normalizedQuery.split(/\s+/).filter(Boolean);

  if (!includesAllTokens(haystack, tokens)) {
    return null;
  }

  if (title === normalizedQuery) {
    return { ...item, score: 0 };
  }

  if (title.startsWith(normalizedQuery)) {
    return { ...item, score: 10 };
  }

  if (title.includes(normalizedQuery)) {
    return { ...item, score: 20 };
  }

  if (includesAllTokens(title, tokens)) {
    return { ...item, score: 30 };
  }

  if (description.startsWith(normalizedQuery)) {
    return { ...item, score: 40 };
  }

  if (description.includes(normalizedQuery)) {
    return { ...item, score: 50 };
  }

  if (includesAllTokens(description, tokens)) {
    return { ...item, score: 60 };
  }

  if (body.includes(normalizedQuery)) {
    return { ...item, score: 70 };
  }

  return { ...item, score: 80 };
}

export function searchDocsItems(items: SearchItem[], query: string, limit: number): SearchItem[] {
  const normalizedQuery = normalize(query);

  if (!normalizedQuery) {
    return items.slice(0, limit);
  }

  return items
    .map((item) => scoreSearchItem(item, normalizedQuery))
    .filter((item): item is RankedSearchItem => item !== null)
    .sort((left, right) => {
      if (left.score !== right.score) {
        return left.score - right.score;
      }

      const titleOrder = left.title.localeCompare(right.title);

      if (titleOrder !== 0) {
        return titleOrder;
      }

      return left.href.localeCompare(right.href);
    })
    .slice(0, limit)
    .map((item) => ({
      body: item.body,
      description: item.description,
      href: item.href,
      title: item.title,
    }));
}
