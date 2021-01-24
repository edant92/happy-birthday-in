import WORDS from "../data/languages.json";

export function getAllPhraseLanguages() {
  return WORDS.map((word) => {
    return {
      params: {
        language: word.language,
      },
    };
  });
}

export function getWordData(key) {
  // Get file names under /posts
  return WORDS.find((item) => item.language === key);
}
