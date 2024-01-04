import { listOfBaker, listOfElement, listOfBlind, listOfGirl } from "@/app/lib/labels";
import type { ListOfDecksProps } from "@/app/lib/definitions";

export const generateProductUrl = (text: string, textNumber: string) => {

  const formattedText = text.replace(/\s+/g, '').toLowerCase();
  const formattedNumber = textNumber;
  
  let listChecked;

  if (formattedText === "baker") {
    listChecked = listOfBaker;
  } else if (formattedText === "element") {
    listChecked = listOfElement;
  } else if (formattedText === "blind") {
    listChecked = listOfBlind;
  } else if (formattedText === "girl") {
    listChecked = listOfGirl;
  } else {
    console.log("No deck exists for your search")
  }

  const mappingNumber = listChecked?.find((list: ListOfDecksProps) => list.name === formattedNumber);
  const mappingLabel = listChecked?.find((list: ListOfDecksProps) => list.label === formattedText);
  
  return `/products/decks/${mappingLabel?.label}/${mappingNumber?.id}`;
};
