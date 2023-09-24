const renderShardbearer = async () => {
  const requestedID = parseInt(window.location.href.split("/").pop());

  const response = await fetch("/shardbearers");
  const data = await response.json();

  const shardbearerContent = document.getElementById("shardbearer-content");

  let shardbearer;

  shardbearer = data.find((shardbearer) => shardbearer.id === requestedID);

  if (shardbearer) {
    document.getElementById("image").src = shardbearer.image;
    document.getElementById("name").textContent = shardbearer.name;
    document.getElementById("greatrune").textContent =
      "Great Rune: " + shardbearer.greatrune;
    document.title = `Sharbearer - ${shardbearer.name}`;
  } else {
    const message = document.createElement("h2");
    message.textContent = "Shardbearer does not exist";
    shardbearerContent.appendChild(message);
  }
};

renderShardbearer();
