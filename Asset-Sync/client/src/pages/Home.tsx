import { useState, useMemo } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import Header from "@/components/Header";
import FilterBar, { UNIVERSITIES } from "@/components/FilterBar";
import BookCard, { type BookListing } from "@/components/BookCard";
import AddListingDialog from "@/components/AddListingDialog";
import ContactDialog from "@/components/ContactDialog";
import EmptyState from "@/components/EmptyState";
import LoadingSpinner from "@/components/LoadingSpinner";
import { useToast } from "@/hooks/use-toast";
import { apiRequest, queryClient } from "@/lib/queryClient";

export default function Home() {
  const [selectedUniversity, setSelectedUniversity] = useState<string>(UNIVERSITIES[0]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [contactListing, setContactListing] = useState<BookListing | null>(null);
  
  const { toast } = useToast();

  const { data: listings = [], isLoading, error } = useQuery<BookListing[]>({
    queryKey: ["/api/listings"],
  });

  const createListingMutation = useMutation({
    mutationFn: async (data: any) => {
      let price: number | null = null;
      if (data.type === "Satılık") {
        const parsedPrice = parseInt(data.price, 10);
        if (isNaN(parsedPrice) || parsedPrice <= 0) {
          throw new Error("Geçerli bir fiyat giriniz");
        }
        price = parsedPrice;
      }
      
      const response = await apiRequest("POST", "/api/listings", {
        title: data.title,
        author: data.author,
        university: data.university,
        type: data.type,
        price,
        condition: data.condition,
        notes: data.notes || null,
      });
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/listings"] });
      toast({
        title: "İlan oluşturuldu!",
        description: "Kitap ilanınız başarıyla yayınlandı.",
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Hata",
        description: error.message || "İlan oluşturulurken bir hata oluştu.",
        variant: "destructive",
      });
    },
  });

  const filteredListings = useMemo(() => {
    return listings.filter((listing) => {
      const matchesUniversity =
        selectedUniversity === UNIVERSITIES[0] ||
        listing.university === selectedUniversity;
      
      const searchLower = searchQuery.toLowerCase();
      const matchesSearch =
        !searchQuery ||
        listing.title.toLowerCase().includes(searchLower) ||
        listing.author.toLowerCase().includes(searchLower);

      return matchesUniversity && matchesSearch;
    });
  }, [listings, selectedUniversity, searchQuery]);

  const handleAddListing = (data: any) => {
    createListingMutation.mutate(data);
  };

  const handleContact = (listing: BookListing) => {
    setContactListing(listing);
  };

  if (error) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-destructive">İlanlar yüklenirken bir hata oluştu.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header
        onAddListing={() => setIsAddDialogOpen(true)}
        userId="demo-user"
        activeView="listings"
      />
      
      <FilterBar
        selectedUniversity={selectedUniversity}
        onUniversityChange={setSelectedUniversity}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {isLoading ? (
          <LoadingSpinner />
        ) : filteredListings.length === 0 ? (
          <EmptyState
            onAddListing={() => setIsAddDialogOpen(true)}
            hasFilter={!!searchQuery || selectedUniversity !== UNIVERSITIES[0]}
          />
        ) : (
          <>
            <div className="flex justify-between items-center mb-6">
              <p className="text-sm text-muted-foreground" data-testid="text-results-count">
                {filteredListings.length} ilan bulundu
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredListings.map((listing) => (
                <BookCard
                  key={listing.id}
                  listing={listing}
                  onContact={handleContact}
                />
              ))}
            </div>
          </>
        )}
      </main>

      <AddListingDialog
        open={isAddDialogOpen}
        onOpenChange={setIsAddDialogOpen}
        onSubmit={handleAddListing}
      />

      <ContactDialog
        open={!!contactListing}
        onOpenChange={(open) => !open && setContactListing(null)}
        listing={contactListing}
      />
    </div>
  );
}
