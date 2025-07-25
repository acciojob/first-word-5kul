function firstWord(s) {
  if (!s) return ''; // If string is empty or null

  s = s.trimStart(); // Remove leading spaces
  const spaceIndex = s.indexOf(' ');

  // If there's no space, return the entire string
  return spaceIndex === -1 ? s : s.slice(0, spaceIndex);
}

// Do not change the code below
const s = prompt("Enter String:");
alert(firstWord(s));
