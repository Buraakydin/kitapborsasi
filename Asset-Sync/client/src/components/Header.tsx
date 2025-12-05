import { BookOpen, Plus, User } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  onAddListing: () => void;
  userId?: string;
  activeView: "listings" | "add" | "profile";
}

export default function Header({ onAddListing, userId, activeView }: HeaderProps) {
  return (
    <header className="bg-card border-b border-card-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center gap-4">
        <div className="flex items-center gap-2 cursor-pointer" data-testid="link-home">
          <BookOpen className="w-8 h-8 text-primary" />
          <h1 className="text-xl sm:text-2xl font-bold text-foreground hidden sm:block">
            Üniversite Kitap Borsası
          </h1>
          <h1 className="text-xl font-bold text-foreground sm:hidden">
            Kitap Borsası
          </h1>
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
          <Button
            onClick={onAddListing}
            variant={activeView === "add" ? "default" : "outline"}
            className="rounded-full"
            data-testid="button-add-listing"
          >
            <Plus className="w-4 h-4 sm:mr-2" />
            <span className="hidden sm:inline">İlan Ver</span>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full"
            data-testid="button-profile"
          >
            <User className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}
