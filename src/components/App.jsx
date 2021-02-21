import React from "react";
import Card from "./Card.jsx";
import emojipedia from "../emojipedia.js";

//function used with mapping function to render emoji card.
function createCard(emojiCard) {
  return (
    <Card
      key={emojiCard.id}
      emoji={emojiCard.emoji}
      name={emojiCard.name}
      meaning={emojiCard.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(createCard)}</dl>
    </div>
  );
}

export default App;
