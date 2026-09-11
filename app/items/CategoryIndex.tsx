"use client";

import type { ItemCategory } from "./data";

export default function CategoryIndex({ categories }: { categories: ItemCategory[] }) {
  const goToCategory = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}#${id}`);
  };

  return <nav className="item-category-index" aria-label="物品分類快速導覽">
    {categories.map((category) => <button type="button" onClick={() => goToCategory(category.id)} key={category.id}><span>{category.number}</span>{category.title}<small>{category.items.length}</small></button>)}
  </nav>;
}
