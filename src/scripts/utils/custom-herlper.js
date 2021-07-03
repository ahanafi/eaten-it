const ucWords = (string) => (`${string} `)
  .replace(/^(.)|\s+(.)/g, ($1) => $1.toUpperCase());

export { ucWords };
