"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const SearchForm = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const router = useRouter();

  const onSearch = (event: React.FormEvent) => {
    event.preventDefault();
    const encodedSearchQuery = encodeURI(searchQuery);
    router.push(`/search?q=${encodedSearchQuery}`);

    console.log(`current query`, encodedSearchQuery);
  };

  return (
    <div className="flex flex-row items-center justify-center py-5 px-4">
      <form className="flex w-2/3 justify-center" onSubmit={onSearch}>
        <input
          type="text"
          placeholder="Search here.."
          onChange={(event) => setSearchQuery(event.target.value)}
          className="w-full items-center justify-center rounded-full bg-zinc-700 p-3 text-left text-zinc-100"
        />
      </form>
    </div>
  );
};

export default SearchForm;
