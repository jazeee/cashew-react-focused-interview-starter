import React from 'react';
import { FlashCard } from './Card';

/**
 * 
 * @param {*} props flashCards: IFlashCardProps[]
 */
export function FlashCardPage(props) {
  const { flashCards } = props;
  return (
    <div>
      {flashCards.map((card) => {
        return <FlashCard key={card.id} card={card} />
      })}
    </div>
  )
}