"use client";

import { useState } from "react";
import { Copy } from "lucide-react";
import { Button } from "@/components/ui/button";

const examples = [
  {
    title: "Basic Request",
    description: "Scrape a webpage without summarization",
    code: `{
  "url": "https://example.com",
  "summary": false
}`,
  },
  {
    title: "Request with Summarization",
    description: "Scrape a webpage with AI-powered summarization",
    code: `{
  "url": "https://example.com",
  "summary": true
}`,
  },
];

export function Examples() {
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = (code: string, title: string) => {
    navigator.clipboard.writeText(code);
    setCopied(title);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold tracking-tight mb-8">Examples</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {examples.map((example) => (
          <div
            key={example.title}
            className="rounded-lg border bg-card text-card-foreground shadow-sm"
          >
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-2">{example.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">
                {example.description}
              </p>
              <div className="relative">
                <pre className="rounded-md bg-muted p-4 overflow-x-auto">
                  <code className="text-sm">{example.code}</code>
                </pre>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-2 right-2"
                  onClick={() => copyToClipboard(example.code, example.title)}
                >
                  <Copy className="h-4 w-4" />
                  <span className="sr-only">Copy code</span>
                </Button>
                {copied === example.title && (
                  <div className="absolute top-2 right-12 text-sm text-muted-foreground">
                    Copied!
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}