export function formatDate(created_at) {
  const formattedDate = new Date(created_at).toLocaleDateString();
  return formattedDate;
}
