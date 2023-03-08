"use client";
import { useSearchParams } from "next/navigation";
import React from "react";

const SearchPage = () => {
  const search = useSearchParams();
  const searchQuery = search ? search.get("q") : null;

  const encodedSearchQuery = encodeURI(searchQuery || "");

  console.log("Search Params", encodedSearchQuery);

  return <div>SearchPage</div>;
};

export default SearchPage;
