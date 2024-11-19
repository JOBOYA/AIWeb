"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import type { ScrapeResult } from "@/lib/types";

interface SearchResultsProps {
  result: ScrapeResult;
}

export function SearchResults({ result }: SearchResultsProps) {
  return (
    <Card className="mt-6">
      <CardHeader>
        <CardTitle>{result.result.title || "Scraped Content"}</CardTitle>
        <CardDescription>
          Characters: {result.result.character_count}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {result.result.description && (
          <div>
            <h3 className="font-medium mb-2">Description</h3>
            <p className="text-sm text-muted-foreground">
              {result.result.description}
            </p>
          </div>
        )}

        {result.result.summary && (
          <div>
            <h3 className="font-medium mb-2">AI Summary</h3>
            <p className="text-sm text-muted-foreground">{result.result.summary}</p>
          </div>
        )}

        <div>
          <h3 className="font-medium mb-2">Content</h3>
          <ScrollArea className="h-[200px] rounded-md border p-4">
            <pre className="text-sm whitespace-pre-wrap">
              {result.result.content}
            </pre>
          </ScrollArea>
        </div>

        {result.result.urls && result.result.urls.length > 0 && (
          <div>
            <h3 className="font-medium mb-2">Found URLs</h3>
            <div className="flex flex-wrap gap-2">
              {result.result.urls.map((url, index) => (
                <Badge key={index} variant="secondary">
                  {url}
                </Badge>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}