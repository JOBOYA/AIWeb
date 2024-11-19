"use client";

import { Terminal } from "lucide-react";

export function Hero() {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <div className="mb-8">
        <Terminal className="h-20 w-20 text-primary animate-pulse" />
      </div>
      <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl mb-4">
        AI Web Scraper API
      </h1>
      <p className="max-w-[700px] text-lg text-muted-foreground mb-8">
        Extract data from any website with AI-powered insights and summarization
      </p>
      <div className="flex gap-4">
        <a
          href="#api-reference"
          className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
        >
          Get Started
        </a>
        <a
          href="https://t.me/search_hero"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
        >
          Contact Support
        </a>
      </div>
    </div>
  );
}