import React, { useState, useEffect } from "react";
import AnimatedItem from "./AnimatedItem";
import Modal from "./Modal";
import Image from "next/image";

const cardData = [
  { id: 1, value: "A", imageUrl: "g1.svg" },
  { id: 2, value: "B", imageUrl: "g2.svg" },
  { id: 3, value: "C", imageUrl: "g3.svg" },
  { id: 4, value: "D", imageUrl: "g4.svg" },
  { id: 5, value: "E", imageUrl: "g5.svg" },
  { id: 6, value: "F", imageUrl: "g6.svg" },
  { id: 7, value: "A", imageUrl: "g1.svg" },
  { id: 8, value: "B", imageUrl: "g2.svg" },
  { id: 9, value: "C", imageUrl: "g3.svg" },
  { id: 10, value: "D", imageUrl: "g4.svg" },
  { id: 11, value: "E", imageUrl: "g5.svg" },
  { id: 12, value: "F", imageUrl: "g6.svg" },
];

const Game = ({ game, setGame }) => {
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [solved, setSolved] = useState([]);
  const [moveCount, setMoveCount] = useState(0);

  useEffect(() => {
    const shuffledCards = shuffleArray([...cardData, ...cardData]);
    setCards(shuffledCards);
  }, []);

  useEffect(() => {
    if (flipped.length === 2) {
      if (cards[flipped[0]].value === cards[flipped[1]].value) {
        setSolved([...solved, cards[flipped[0]].id, cards[flipped[1]].id]);
      }
      setTimeout(() => setFlipped([]), 1000);
    }
  }, [cards, flipped, solved]);

  const handleCardClick = (index) => {
    if (
      flipped.length < 2 &&
      !flipped.includes(index) &&
      !solved.includes(cards[index].id)
    ) {
      setFlipped([...flipped, index]);
      setMoveCount(moveCount + 1);
    }
  };

  const shuffleArray = (array) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  };
  const renderCard = (card, index) => {
    const isFlipped = flipped.includes(index) || solved.includes(card.id);

    return (
      <button
        type="button"
        key={index}
        aria-label={isFlipped ? `Card: ${card.value}` : "Hidden card"}
        className={`basis-2/12 flex items-center justify-center w-[100px] h-[100px] text-center font-Rubik font-medium text-3xl bg-black bg-opacity-30 border-2 border-gray-400 border-opacity-10 backdrop-blur-xl p-4 rounded-xl memory-card focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${
          isFlipped ? "flipped" : ""
        }`}
        onClick={() => {
          const audio = new Audio("click.wav");
          audio.play();
          handleCardClick(index);
        }}
      >
        {isFlipped ? (
          <Image
            src={`../../${card.imageUrl}`}
            alt=""
            width={80}
            height={80}
            className="object-contain"
          />
        ) : (
          <span aria-hidden="true">?</span>
        )}
      </button>
    );
  };
  return (
    <Modal
      isOpen={game}
      onClose={() => setGame(false)}
      className="w-[1000px] h-auto overflow-y-scroll smbelow:w-[95%]"
    >
      <AnimatedItem animationConfig={{ delay: 0.1 }}>
        <div className="flex flex-col w-full">
          <h1 className="text-white">Moves: {moveCount}</h1>
          <section className="mt-2 text-white">
            <div className="flex justify-center items-center">
              <div className="memory-match-game">
                <div className="flex flex-row flex-wrap card-grid ">
                  {cards.map((card, index) => renderCard(card, index))}
                </div>
              </div>
            </div>
          </section>
        </div>
      </AnimatedItem>
    </Modal>
  );
};

export default Game;
