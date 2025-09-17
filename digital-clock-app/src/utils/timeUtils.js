/**
 * Format a Date object into time and date strings
 * @param {Date} date - The date to format
 * @returns {Object} - Object containing formatted time and date strings
 */
export const formatTime = (date) => {
  return {
    time: date.toLocaleTimeString('en-US', { 
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    }),
    date: date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  };
};

/**
 * Get current timestamp for logging
 * @returns {string} - Formatted timestamp
 */
export const getTimestamp = () => {
  return new Date().toLocaleTimeString();
};
