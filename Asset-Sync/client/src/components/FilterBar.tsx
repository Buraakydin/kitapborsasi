import { MapPin, Search } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";

export const UNIVERSITIES = [
  "Tüm Üniversiteler",
  "Boğaziçi Üniversitesi",
  "İstanbul Teknik Üniversitesi",
  "Orta Doğu Teknik Üniversitesi",
  "Ege Üniversitesi",
  "Hacettepe Üniversitesi",
  "Ankara Üniversitesi",
  "İstanbul Üniversitesi",
  "Marmara Üniversitesi",
  "Yıldız Teknik Üniversitesi",
] as const;

interface FilterBarProps {
  selectedUniversity: string;
  onUniversityChange: (university: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export default function FilterBar({
  selectedUniversity,
  onUniversityChange,
  searchQuery,
  onSearchChange,
}: FilterBarProps) {
  return (
    <div className="bg-card border-b border-card-border py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Kitap veya yazar ara..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="pl-10"
              data-testid="input-search"
            />
          </div>
          <Select value={selectedUniversity} onValueChange={onUniversityChange}>
            <SelectTrigger
              className="w-full sm:w-[280px]"
              data-testid="select-university"
            >
              <MapPin className="w-4 h-4 text-primary mr-2" />
              <SelectValue placeholder="Üniversite Seçin" />
            </SelectTrigger>
            <SelectContent>
              {UNIVERSITIES.map((uni) => (
                <SelectItem key={uni} value={uni} data-testid={`option-${uni}`}>
                  {uni}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}
