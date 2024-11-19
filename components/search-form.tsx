"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { SearchResults } from "@/components/search-results";
import type { ScrapeResult, SearchFormData } from "@/lib/types";

const searchFormSchema = z.object({
  url: z.string().url({ message: "Please enter a valid URL" }),
  summary: z.boolean().default(false),
});

export function SearchForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<ScrapeResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<SearchFormData>({
    resolver: zodResolver(searchFormSchema),
    defaultValues: {
      url: "",
      summary: false,
    },
  });

  async function onSubmit(data: SearchFormData) {
    setIsLoading(true);
    setError(null);
    setResult(null);

    try {
      const rapidApiKey = process.env.NEXT_PUBLIC_X_RAPIDAPI_KEY;
      const rapidApiHost = process.env.NEXT_PUBLIC_X_RAPIDAPI_HOST;

      if (!rapidApiKey || !rapidApiHost) {
        throw new Error("API credentials are not configured");
      }

      const response = await fetch("https://ai-web-scraper1.p.rapidapi.com/", {
        method: "POST",
        headers: {
          "x-rapidapi-key": rapidApiKey,
          "x-rapidapi-host": rapidApiHost,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          url: data.url,
          summary: data.summary,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const result = await response.json();
      setResult(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="max-w-2xl mx-auto">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="url"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Website URL</FormLabel>
                <FormControl>
                  <Input placeholder="https://example.com" {...field} />
                </FormControl>
                <FormDescription>
                  Enter the URL of the website you want to scrape
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="summary"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel>Generate AI Summary</FormLabel>
                  <FormDescription>
                    Get an AI-powered summary of the scraped content
                  </FormDescription>
                </div>
              </FormItem>
            )}
          />
          <Button type="submit" disabled={isLoading}>
            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {isLoading ? "Scraping..." : "Scrape Website"}
          </Button>
        </form>
      </Form>

      {error && (
        <div className="mt-6 p-4 rounded-md bg-destructive/10 text-destructive">
          {error}
        </div>
      )}

      {result && <SearchResults result={result} />}
    </div>
  );
}