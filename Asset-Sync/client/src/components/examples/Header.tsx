import Header from "../Header";

export default function HeaderExample() {
  return (
    <Header
      onAddListing={() => console.log("Add listing clicked")}
      userId="user123"
      activeView="listings"
    />
  );
}
