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

export const getNearestAgendas = (data) => {
  const today = new Date(); // Replace with `new Date()` for real-time

  // Convert JSON dates to Date objects
  const upcomingEvents = data
    .map((event) => ({
      ...event,
      startDate: new Date(
        event.start.split("/")[2],
        event.start.split("/")[0] - 1,
        event.start.split("/")[1]
      ),
    }))
    .filter((event) => event.startDate <= today) // Only future or ongoing events
    .sort((a, b) => b.startDate - a.startDate); // Sort by nearest date

  if (upcomingEvents.length === 0) return [];

  // Get the nearest start date
  const nearestDate = upcomingEvents[0].startDate;

  // Return all events that have the same nearest start date
  return upcomingEvents.filter(
    (event) => event.startDate.getTime() === nearestDate.getTime()
  );
};
