const renderGifts = async () => {
  const response = await fetch("/shardbearers");
  const data = await response.json();

  const mainContent = document.getElementById("main-content");

  if (data) {
    data.map((shardbearer) => {
      const card = document.createElement("div");
      card.classList.add("card");

      const topContainer = document.createElement("div");
      topContainer.classList.add("top-container");

      const bottomContainer = document.createElement("div");
      bottomContainer.classList.add("bottom-container");

      topContainer.style.backgroundImage = `url(${shardbearer.image})`;

      const name = document.createElement("h3");
      name.textContent = shardbearer.name;
      bottomContainer.appendChild(name);

      const greatrune = document.createElement("p");
      greatrune.textContent = "Great Rune: " + shardbearer.greatrune;
      bottomContainer.appendChild(greatrune);

      const link = document.createElement("a");
      link.textContent = "Read More >";
      link.setAttribute("role", "button");
      link.href = `/shardbearers/${shardbearer.id}`;
      bottomContainer.appendChild(link);

      card.appendChild(topContainer);
      card.appendChild(bottomContainer);

      mainContent.appendChild(card);
    });
  } else {
    const message = document.createElement("h2");
    message.textContent = "No Shardbearers Present";
    mainContent.appendChild(message);
  }
};

const requestedUrl = window.location.href.split("/").pop();

if (requestedUrl) {
  window.location.href = "../404.html";
} else {
  renderGifts();
}
