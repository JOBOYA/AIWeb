export interface ScrapeResult {
  status: string;
  message: string;
  result: {
    title: string;
    description: string;
    character_count: number;
    urls: string[];
    content: string;
    summary?: string;
  };
}

export interface SearchFormData {
  url: string;
  summary: boolean;
}