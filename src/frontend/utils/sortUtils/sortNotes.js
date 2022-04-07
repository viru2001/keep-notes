const sortNotes = (notes, sortBy) => {
  if (sortBy === "OLDEST_FIRST")
    return [...notes].sort(
      (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
    );
  if (sortBy === "NEWEST_FIRST")
    return [...notes].sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );
  return notes;
};
export { sortNotes };
