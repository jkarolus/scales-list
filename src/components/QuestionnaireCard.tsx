import { Questionnaire } from "@/types/questionnaire";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Calendar, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

interface QuestionnaireCardProps {
  questionnaire: Questionnaire;
}

export const QuestionnaireCard = ({ questionnaire }: QuestionnaireCardProps) => {
  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader>
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <CardTitle className="text-xl mb-2">{questionnaire.name}</CardTitle>
            <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground mb-3">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>{questionnaire.publicationYear}</span>
              </div>
              <div className="flex items-center gap-1">
                <Users className="h-4 w-4" />
                <span>{questionnaire.authors.join("; ")}</span>
              </div>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <p className="text-sm font-medium mb-1">Short Handle</p>
          <code className="text-sm bg-muted px-2 py-1 rounded">{questionnaire.shortHandle}</code>
        </div>
        
        <div>
          <p className="text-sm text-foreground leading-relaxed">
            {questionnaire.description}
          </p>
        </div>

        <div>
          <p className="text-sm font-medium mb-2">Categories</p>
          <div className="flex flex-wrap gap-2">
            {questionnaire.categories.map((category) => (
              <Badge key={category} variant="secondary" className="bg-badge text-badge-foreground">
                {category}
              </Badge>
            ))}
          </div>
        </div>

        {questionnaire.references.length > 0 && (
          <div>
            <p className="text-sm font-medium mb-2">References</p>
            <div className="flex flex-wrap gap-2">
              {questionnaire.references.map((ref, idx) => (
                <Button
                  key={idx}
                  variant="outline"
                  size="sm"
                  asChild
                  className="h-8"
                >
                  <a
                    href={ref.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1"
                  >
                    {ref.label}
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </Button>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
