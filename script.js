const games = [
  {
    id: 1,
    title: "NOVA 2 full game",
    description: "Explore the galaxy in this exciting adventure game.",
    image: "https://raw.githubusercontent.com/liya-hub/epic_games/main/images/Nova2clipart.jpeg",
    downloadLink: "#"
  },
  {
    id: 2,
    title: "Medieval Quest",
    description: "Embark on an epic journey through medieval times.",
    image: "https://files.catbox.moe/example2.jpg",
    downloadLink: "#"
  }
];

function renderGames(gamesArray) {
  const container = document.getElementById('games-container');
  if (!container) return;

  container.innerHTML = '';
  gamesArray.forEach(game => {
    const card = document.createElement('div');
    card.classList.add('game-card');

    card.innerHTML = `
      <div class="game-image">
        <img src="${game.image}" alt="${game.title}">
      </div>
      <div class="game-details">
        <h3 class="game-title">${game.title}</h3>
        <p class="game-description">${game.description}</p>
        <a href="${game.downloadLink}" class="game-button">Download</a>
      </div>
    `;
    container.appendChild(card);
  });
}

function toggleTheme() {
  document.body.classList.toggle('dark-mode');
  document.body.classList.toggle('light-mode');
}

document.addEventListener('DOMContentLoaded', () => {
  renderGames(games);

  const searchInput = document.querySelector('.search-input');
  if (searchInput) {
    searchInput.addEventListener('input', function (e) {
      const search = e.target.value.toLowerCase();
      const filtered = games.filter(game =>
        game.title.toLowerCase().includes(search) || game.description.toLowerCase().includes(search)
      );
      renderGames(filtered);
    });
  }

  const menuToggle = document.querySelector('.mobile-menu-toggle');
  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      document.getElementById('main-nav').classList.toggle('active');
    });
  }
});
