/**
 * Get the number of items to show depending on the window width.
 * @returns {number} The number of items in container.
 */
export const getContainerSize = () => (window.innerWidth <= 768 ? 2 : 6);

/**
 * Get the number of placeholders required to fill the grid.
 * @param {Array} books - Array of books to be displayed.
 * @param {number} containerSize - Number of items per page.
 * @returns {number} The number of placeholders.
 */
export const getPlaceholderAmount = (books, containerSize) => {
  return books.length < containerSize ? containerSize - books.length : 0;
};
