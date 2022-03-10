const dbInterface = require('../db/fileWriter')

const readFlashcards = () => {
    return dbInterface.readTable('flashcards')
};

const writeFlashcards = async (flashCard) => {
    await dbInterface.addObjectToTable('flashcards', flashCard)
};

module.exports = {
    readFlashcards,
    writeFlashcards
};
