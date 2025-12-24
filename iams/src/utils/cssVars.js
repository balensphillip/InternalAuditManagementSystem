export const cssVar = (name) =>
  `rgb(${getComputedStyle(document.documentElement)
    .getPropertyValue(name)
    .trim()})`;
