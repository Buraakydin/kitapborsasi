import { useState } from "react";
import FilterBar from "../FilterBar";

export default function FilterBarExample() {
  const [university, setUniversity] = useState("Tüm Üniversiteler");
  const [search, setSearch] = useState("");

  return (
    <FilterBar
      selectedUniversity={university}
      onUniversityChange={setUniversity}
      searchQuery={search}
      onSearchChange={setSearch}
    />
  );
}
