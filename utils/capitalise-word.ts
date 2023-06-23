export function capitalizeFirstLetter(sentence: string): string {
  // Check if the sentence is not empty
  if (sentence.length > 0) {
    // Convert the first character to uppercase
    const firstLetter = sentence.charAt(0).toUpperCase();
    // Get the rest of the sentence
    const restOfSentence = sentence.slice(1);
    // Concatenate the capitalized first letter with the rest of the sentence
    const capitalizedSentence = firstLetter + restOfSentence;
    return capitalizedSentence;
  }

  // Return an empty string if the sentence is empty
  return "";
}
