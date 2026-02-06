import { useState, useMemo } from "react";
import { questionnaires, allCategories } from "@/data/questionnaires";
import { QuestionnaireCard } from "@/components/QuestionnaireCard";
import { FilterPanel } from "@/components/FilterPanel";
import { SearchBar } from "@/components/SearchBar";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const handleCategoryToggle = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const handleClearAll = () => {
    setSelectedCategories([]);
    setSearchQuery("");
  };

  const filteredQuestionnaires = useMemo(() => {
    return questionnaires.filter((q) => {
      // Category filter
      if (selectedCategories.length > 0) {
        const hasMatchingCategory = q.categories.some((cat) =>
          selectedCategories.includes(cat)
        );
        if (!hasMatchingCategory) return false;
      }

      // Search filter
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesSearch =
          q.name.toLowerCase().includes(query) ||
          q.shortHandle.toLowerCase().includes(query) ||
          q.description.toLowerCase().includes(query) ||
          q.authors.some((author) => author.toLowerCase().includes(query));
        if (!matchesSearch) return false;
      }

      return true;
    });
  }, [searchQuery, selectedCategories]);

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-foreground">
            Questionnaire Database
          </h1>
          <p className="text-muted-foreground mt-2">
            A comprehensive collection of research questionnaires and scales
          </p>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Filter Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-4">
              <FilterPanel
                allCategories={allCategories}
                selectedCategories={selectedCategories}
                onCategoryToggle={handleCategoryToggle}
                onClearAll={handleClearAll}
                resultCount={filteredQuestionnaires.length}
                totalCount={questionnaires.length}
              />
            </div>
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-3 space-y-6">
            <SearchBar value={searchQuery} onChange={setSearchQuery} />

            <div className="space-y-4 lg:max-h-[calc(100vh-13rem)] lg:overflow-y-auto lg:overscroll-contain lg:pr-2">
              {filteredQuestionnaires.length > 0 ? (
                filteredQuestionnaires.map((questionnaire) => (
                  <QuestionnaireCard
                    key={questionnaire.id}
                    questionnaire={questionnaire}
                  />
                ))
              ) : (
                <div className="text-center py-12 bg-card border border-border rounded-lg">
                  <p className="text-muted-foreground">
                    No questionnaires found matching your criteria.
                  </p>
                  <button
                    onClick={handleClearAll}
                    className="mt-4 text-primary hover:underline"
                  >
                    Clear all filters
                  </button>
                </div>
              )}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Index;
