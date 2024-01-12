import type { ListOfDecksProps } from "@/app/lib/definitions";
import { listOfBaker, listOfElement, listOfBlind, listOfGirl } from "@/app/lib/labels";

export const generateProductUrl = (text: string, textNumber: string) => {

  const formattedText: string | undefined = text.replace(/\s+/g, '').toLowerCase();

  const formattedNumber: string | undefined = textNumber;
  
  let listChecked: ListOfDecksProps[] = [];

  if (formattedNumber === undefined) {
    if (formattedText === "baker") {
      return `/products/decks/baker`;
    }
    else if (formattedText === "blind") {
      return `/products/decks/blind`;
    }
    else if (formattedText === "element") {
      return `/products/decks/element`;
    }
    else if (formattedText === "girl") {
      return `/products/decks/girl`;
    }
    else if (formattedText === "wheels" || formattedText === "wheel") {
      return `/products/wheels`;
    }
    else if (formattedText === "trucks" || formattedText === "truck") {
      return `/products/trucks`;
    }  
  }
  
  if (formattedNumber !== undefined) {
    if (formattedText === "baker") {
      listChecked = listOfBaker;
    } else if (formattedText === "element") {
      listChecked = listOfElement;
    } else if (formattedText === "blind") {
      listChecked = listOfBlind;
    } else if (formattedText === "girl") {
      listChecked = listOfGirl;
    } else {
      console.log("No product exists for your search")
    }
  }

  const mappingNumber = listChecked?.find((list: ListOfDecksProps) => list.name === formattedNumber);
  const mappingLabel = listChecked?.find((list: ListOfDecksProps) => list.label === formattedText);
  
  return `/products/decks/${mappingLabel?.label}/${mappingNumber?.id}`;
};
