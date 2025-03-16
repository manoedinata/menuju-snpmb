export const getNearestAgendas = (events) => {
  const today = new Date(); // Ganti dengan new Date() untuk tanggal sekarang

  return events.filter((event) => {
    const startDate = new Date(event.start);
    const endDate = event.end ? new Date(event.end) : startDate;

    return (
      startDate.getTime() <= today.getTime(), // Sudah mulai
      !endDate || endDate.getTime() >= today.getTime() // Belum berakhir atau masih berlangsung
    );
  });
};

export const agendaIsNear = (largeArr, smallArr) => {
  if (!largeArr || !Array.isArray(largeArr)) return false;

  return smallArr.every((smallItem) => {
    return largeArr.some(
      (largeItem) =>
        smallItem.agenda === largeItem.agenda &&
        smallItem.start === largeItem.start &&
        smallItem.end === largeItem.end
    );
  });
};
