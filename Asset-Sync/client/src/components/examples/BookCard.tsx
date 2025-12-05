import BookCard, { type BookListing } from "../BookCard";

const mockListing: BookListing = {
  id: "1",
  title: "Yapay Zeka ve Algoritmalar",
  author: "Prof. Dr. Ahmet Yılmaz",
  university: "Boğaziçi Üniversitesi",
  type: "Satılık",
  price: 150,
  condition: "Çok İyi",
  notes: "Kitap çok temiz, üzerinde not yok. Acil satılık.",
  createdAt: "01.12.2024",
};

export default function BookCardExample() {
  return (
    <div className="max-w-sm">
      <BookCard
        listing={mockListing}
        onContact={(listing) => console.log("Contact clicked:", listing.title)}
      />
    </div>
  );
}
