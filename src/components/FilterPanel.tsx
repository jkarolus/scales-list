import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { X } from "lucide-react";

interface FilterPanelProps {
  allCategories: string[];
  selectedCategories: string[];
  onCategoryToggle: (category: string) => void;
  onClearAll: () => void;
  resultCount: number;
  totalCount: number;
}

export const FilterPanel = ({
  allCategories,
  selectedCategories,
  onCategoryToggle,
  onClearAll,
  resultCount,
  totalCount,
}: FilterPanelProps) => {
  return (
    <div className="bg-card border border-border rounded-lg p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Filters</h2>
        {selectedCategories.length > 0 && (
          <Button
            variant="ghost"
            size="sm"
            onClick={onClearAll}
            className="h-8 text-primary hover:text-primary hover:bg-primary/10"
          >
            Clear All
          </Button>
        )}
      </div>

      <div className="space-y-4">
        <div>
          <h3 className="text-sm font-medium mb-3">Categories</h3>
          <div className="space-y-2">
            {allCategories.map((category) => (
              <div key={category} className="flex items-center space-x-2">
                <Checkbox
                  id={category}
                  checked={selectedCategories.includes(category)}
                  onCheckedChange={() => onCategoryToggle(category)}
                />
                <Label
                  htmlFor={category}
                  className="text-sm font-normal cursor-pointer flex-1"
                >
                  {category}
                </Label>
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedCategories.length > 0 && (
        <div className="pt-4 border-t border-border">
          <p className="text-xs text-muted-foreground mb-2">Active Filters</p>
          <div className="flex flex-wrap gap-2">
            {selectedCategories.map((category) => (
              <Badge
                key={category}
                variant="secondary"
                className="bg-primary/10 text-primary hover:bg-primary/20 pr-1"
              >
                {category}
                <button
                  onClick={() => onCategoryToggle(category)}
                  className="ml-1 hover:bg-primary/30 rounded-full p-0.5"
                >
                  <X className="h-3 w-3" />
                </button>
              </Badge>
            ))}
          </div>
        </div>
      )}

      <div className="pt-4 border-t border-border">
        <p className="text-sm text-muted-foreground">
          Results ({resultCount} of {totalCount})
        </p>
      </div>
    </div>
  );
};
