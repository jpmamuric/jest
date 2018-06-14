const googleDatabase = [
  'nba.com',
  'youtube.com',
  'gmail.com',
  'hangouts.com',
  'googlemaps.com'
];

const googleSearch = (searchInput) => {
  const matches = googleDatabase.filter(website => {
    return website.includes(searchInput);
  });

  return matches.length > 3 ? matches.slice(0,3) : matches;
}

console.log(googleSearch('g'));
