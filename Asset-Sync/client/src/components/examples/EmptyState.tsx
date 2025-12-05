import EmptyState from "../EmptyState";

export default function EmptyStateExample() {
  return (
    <EmptyState onAddListing={() => console.log("Add listing clicked")} />
  );
}
