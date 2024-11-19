import { Hero } from "@/components/hero";
import { SearchForm } from "@/components/search-form";
import { ApiReference } from "@/components/api-reference";
import { Examples } from "@/components/examples";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Hero />
      <div className="py-16">
        <h2 className="text-3xl font-bold tracking-tight mb-8 text-center">
          Try It Out
        </h2>
        <SearchForm />
      </div>
      <ApiReference />
      <Examples />
    </div>
  );
}