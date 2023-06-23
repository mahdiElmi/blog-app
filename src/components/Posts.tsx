"use client";

import BlogPostCard from "@/components/BlogPostCard";
import posts from "@/postsData";
import { useMemo, useState } from "react";

function Posts() {
  const [searchInput, setSearchInput] = useState("");
  const postElements = useMemo(
    () =>
      posts.reduce<JSX.Element[]>((prev, post) => {
        const regex = new RegExp(`${escapeRegex(searchInput)}`, "gi");

        if (regex.test(post.title) === false) return prev;
        prev.push(
          <BlogPostCard
            key={post.id}
            id={post.id}
            title={post.title}
            description={post.description}
          />
        );
        return prev;
      }, []),
    [searchInput]
  );

  return (
    <section className="flex flex-grow flex-col gap-8">
      <label className="group relative flex w-full flex-row items-center self-center md:w-3/4">
        <input
          className="w-full rounded-full border-2 border-transparent bg-gray-200 p-1 ps-14 text-4xl font-medium tracking-tight hover:border-gray-300"
          type="text"
          placeholder="Search by title"
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.currentTarget.value);
          }}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="absolute left-2 h-10 w-10 opacity-70 group-focus-within:opacity-100 group-hover:opacity-100"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </label>

      <h1 className="text-4xl font-semibold tracking-tight">
        {searchInput.length === 0 ? "Latest Articles" : "Search Results"}
      </h1>

      <div className="grid h-full flex-grow grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {postElements.length > 0 ? (
          postElements
        ) : (
          <div className="col-span-full mt-20 max-w-lg justify-self-center text-center">
            <h2 className="text-2xl font-semibold text-gray-800 ">
              No results found
            </h2>
            <p className="text-xl font-medium text-gray-600">
              We can’t find anything with that term at the moment, try searching
              something else.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

function escapeRegex(string: string) {
  return string.replace(/[/\-\\^$*+?.()|[\]{}]/g, "\\$&");
}

export default Posts;
