import { Routes, Route, BrowserRouter as Router, } from "react-router-dom";
import React, {useEffect, useState} from "react";
import { FlashCardPage } from "./FlashCard/Page";


const DUMMY_FLASH_CARDS = [
  {
    id: 1,
    term: 'andrew',
    definition: 'spencer',
  },
];

// Make sure this is unique!
let nextId = 2;

/**
 * 
 * @param {*} props onSubmit function
 */
function FlashCardForm(props) {
  const { onSubmit } = props;
  // Could use this to edit existing data, so initial values would be here:
  const [term, setTerm] = useState('');
  const [definition, setDefinition] = useState('');
  const [dataIsPosting, setDataIsPosting] = useState(false);

  return (
    <form onSubmit={(event) => {
      event.preventDefault();
      // POST to API, deal with errors, etc. with { term, definition }
      // Return an object with those values and unique id.
      // Trigger reload.
      const id = nextId;
      nextId += 1;
      setDataIsPosting(true);
      // If we add `await onSubmit`, then the button should be disabled.
      onSubmit({ id, term, definition });
      setDataIsPosting(false);
      setTerm('');
      setDefinition('');
    }}>
      <label htmlFor="flashCardTerm">Term:</label>
      <input id="flashCardTerm" name="term" value={term} onChange={(event) => {
        setTerm(event.target.value);
      }} />
      <label htmlFor="flashCardDefinition">Definition:</label>
      <input id="flashCardDefinition" name="definition" value={definition} onChange={(event) => {
        setDefinition(event.target.value);
      }} />
      <button type="submit" disabled={dataIsPosting}>Add New Flash Card</button>
    </form>
  )
}

const FlashCards = () => {
  const [flashCards, setFlashCards] = useState([]);
  const [dataIsLoading, setDataIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const [flashCardFormIsVisible, setFlashCardFormIsVisible] = useState(false);

  useEffect(() => {
    let requestIsCurrent = true;

    async function getFlashCards() {
      try {
        setDataIsLoading(true);
        const apiFlashCards = await new Promise((resolve) => {
          setTimeout(() => {
            resolve(DUMMY_FLASH_CARDS);
          }, 500);
        });
        if (requestIsCurrent) {
          setFlashCards(apiFlashCards);
          setDataIsLoading(false);
        }
      } catch (error) {
        if (requestIsCurrent) {
          setErrorMessage(string(error));
        }
      }
    }
    getFlashCards();
    return () => {
      requestIsCurrent = false;
    }
  }, []);
  if (dataIsLoading) {
    return <p>Data Is Loading...</p>
  }
  if (errorMessage) {
    return <p>Data failed to load: {errorMessage}</p>
  }
  return (
  <>
    <FlashCardPage flashCards={flashCards} />
    <button onClick={() => {setFlashCardFormIsVisible(true)}}>Add Flash Card</button>
    {flashCardFormIsVisible && "test"}
    {flashCardFormIsVisible && <FlashCardForm onSubmit={
      (newCard) => {
        setFlashCards((flashCards) => {
          return [...flashCards, newCard];
        })
      }
    }/>}
  </>);
};

function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
              <Route path="/flashcards" element={<FlashCards/>} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
