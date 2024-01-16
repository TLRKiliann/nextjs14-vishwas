import type { ListOfDecksProps } from "@/app/lib/definitions";
import { 
  listOfBaker, 
  listOfElement, 
  listOfBlind, 
  listOfGirl,
  listOfBones,
  listOfSlimballs,
  listOfSpitfire
} from "@/app/lib/labels";

export const generateProductUrl = (text: string, textNumber: string) => {

  const formattedText: string | undefined = text.replace(/\s+/g, '').toLowerCase();

  const formattedNumber: string | undefined = textNumber;
  
  let listChecked: ListOfDecksProps[] = [];

  if (formattedNumber === undefined) {
    switch (formattedText) {
      case "baker":
        return `/products/decks/baker`;
      case "blind":
        return `/products/decks/blind`;
      case "element":
        return `/products/decks/element`;
      case "girl":
        return `/products/decks/girl`;
      case "wheels":
        return `/products/wheels`;
      case "bones":
        return `/products/wheels`;
      case "slimballs":
        return `/products/wheels`;
      case "spitfire":
        return `/products/wheels`;
      case "trucks":
        return `/products/trucks`;
    }
  }
  
  if (formattedNumber !== undefined) {
    switch (formattedText) {
      case "baker":
        listChecked = listOfBaker;
        break;
      case "element":
        listChecked = listOfElement;
        break;
      case "blind":
        listChecked = listOfBlind;
        break;
      case "girl":
        listChecked = listOfGirl;
        break;
      case "bones":
        listChecked = listOfBones;
        break;
      case "slimballs":
        listChecked = listOfSlimballs;
        break;
      case "spitfire":
        listChecked = listOfSpitfire;
        break;
    }
  }

  const mappingNumber: ListOfDecksProps | undefined = listChecked?.find((list: ListOfDecksProps) => list.name === formattedNumber);
  const mappingLabel = listChecked?.find((list: ListOfDecksProps) => list.label === formattedText);

  const mapWheels: number | undefined= mappingNumber?.id;

  if (mapWheels && (mapWheels > 36)) {
    return `/products/wheels/${mappingLabel?.label}/${mappingNumber?.id}`;
  } else if (mapWheels && (mapWheels < 36)) {
    return `/products/decks/${mappingLabel?.label}/${mappingNumber?.id}`;
  }
};
