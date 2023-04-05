import React from 'react';

/**
 * interface IFlashCard {
 *  id: number;
 *  term: string;
 *  definition: string;
 * }}
 * interface IFlashCardProps { 
 *  card: IFlashCard;
 * }
 */

export function FlashCard(props) {
  const { card: { term, definition } } = props;

  return (
    <div>
      <p>Term: {term}</p>
      <p>Definition: {definition}</p>
    </div>
  );
}
