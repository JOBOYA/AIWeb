"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function ApiReference() {
  return (
    <section id="api-reference" className="py-16">
      <h2 className="text-3xl font-bold tracking-tight mb-8">API Reference</h2>
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="endpoints">Endpoints</TabsTrigger>
          <TabsTrigger value="parameters">Parameters</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          <Card>
            <CardHeader>
              <CardTitle>Base URL</CardTitle>
              <CardDescription>
                All API requests should be made to the following base URL:
              </CardDescription>
            </CardHeader>
            <CardContent>
              <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
                https://ai-web-scraper1.p.rapidapi.com
              </code>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="endpoints">
          <Card>
            <CardHeader>
              <CardTitle>Available Endpoints</CardTitle>
              <CardDescription>
                The API provides the following endpoint for web scraping:
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium">POST /scrape</h4>
                  <p className="text-sm text-muted-foreground">
                    Scrapes the specified URL and returns the extracted data
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="parameters">
          <Card>
            <CardHeader>
              <CardTitle>Request Parameters</CardTitle>
              <CardDescription>
                The following parameters are required for making API requests:
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium">url (required)</h4>
                  <p className="text-sm text-muted-foreground">
                    The URL of the webpage to scrape
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-medium">summary (optional)</h4>
                  <p className="text-sm text-muted-foreground">
                    Boolean flag to enable AI-powered summarization
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </section>
  );
}