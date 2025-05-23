import React from 'react';

const dictionary = async ({ word }) => {
  try {
    const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }
    const json = await response.json();
    if (!json.length || !json[0].meanings.length || !json[0].meanings[0].definitions.length) {
      throw new Error("No valid definition found");
    }
    return json[0].meanings[0].definitions[0].definition;
  } catch (error) {
    console.error("Error fetching definition:", error);
    return "Definition not found.";
  }
}

export default dictionary;