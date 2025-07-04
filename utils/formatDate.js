//Date formatting utilities
const DEFAULT_TIMEZONE = 'Asia/Kolkata';

export function dashboardFormatDate(dateInput, options = {}, timeZone = DEFAULT_TIMEZONE) {
    const date = new Date(dateInput);
    const formatter = new Intl.DateTimeFormat('en-US', {
        timeZone,
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        ...options,
    });

    return formatter.format(date);
}

export function formatKeywordDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}