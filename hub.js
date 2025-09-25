document.getElementById('ddgForm').onsubmit = (e) => {
  e.preventDefault();
  const q = document.getElementById('ddgQuery').value.trim();
  if (q) {
    document.getElementById('gameFrame').src =
      `https://duckduckgo.com/?q=${encodeURIComponent(q)}`;
  }
};
