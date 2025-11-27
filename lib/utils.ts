/**
 * Formats the current date in a readable format
 * @returns Formatted date string like "19 November 2025"
 */
export function getLastUpdatedDate(): string {
  const date = new Date();
  const options: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  };
  return date.toLocaleDateString('en-US', options);
}

