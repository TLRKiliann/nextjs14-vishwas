export const generateProductUrl = (text: string, textNumber: string) => {

    const formattedText = text.replace(/\s+/g, '').toLowerCase();
    const formattedNumber = textNumber;
    return `/products/decks/${formattedText}/${formattedNumber}`;
  };
  