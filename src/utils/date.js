export const formatDate = (dateString) => {
  if (!dateString) return "";
  const [month, day, year] = dateString.split("/"); // MM/DD/YYYY format
  const date = new Date(`${year}-${month}-${day}`); // Convert to YYYY-MM-DD

  return new Intl.DateTimeFormat("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
};
