/// <reference path="../node_modules/@workadventure/iframe-api-typings/iframe_api.d.ts" />

import { bootstrapExtra } from "@workadventure/scripting-api-extra";

// The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure.
bootstrapExtra().catch((e) => console.error(e));

const handleTextPopup = (
  layerName: string,
  popupName: string,
  text: string
) => {
  let currentPopup: any = undefined;

  WA.room.onEnterLayer(layerName).subscribe(() => {
    currentPopup = WA.ui.openPopup(popupName, text, []);
  });

  WA.room.onLeaveLayer(layerName).subscribe(() => {
    if (currentPopup !== undefined) {
      currentPopup.close();
      currentPopup = undefined;
    }
  });
};

handleTextPopup(
  "popupZones/conferenceRoomPopupNameZone",
  "conferenceRoomPopupName",
  "SSV Normandy SR-1\r\n(Salle de conférence)"
);
handleTextPopup(
  "popupZones/meetingRoom1PopupNameZone",
  "meetingRoom1PopupName",
  "BatSalle\r\n(Salle de réunion)"
);
handleTextPopup(
  "popupZones/meetingRoom2PopupNameZone",
  "meetingRoom2PopupName",
  "BZH\r\n(Salle de réunion)"
);
handleTextPopup(
  "popupZones/meetingRoom3PopupNameZone",
  "meetingRoom3PopupName",
  "Dunder Mifflin\r\n(Salle de réunion)"
);
handleTextPopup(
  "popupZones/meetingRoom4PopupNameZone",
  "meetingRoom4PopupName",
  "Tatooine\r\n(Salle de réunion)"
);
handleTextPopup(
  "popupZones/openSpacePopupNameZone",
  "openSpacePopupName",
  "Central Perk\r\n(Open Space)"
);
handleTextPopup(
  "popupZones/LibraryPopupNameZone",
  "LibraryPopupName",
  "Librairie\r\n(Wiki/Documents internes)"
);
handleTextPopup(
  "popupZones/rainbowHousePopupNameZone",
  "rainbowHousePopupName",
  "La super maison de l'équipe rainbow !"
);
handleTextPopup(
  "popupZones/WelcomePopup",
  "WelcomePopup",
  "Bienvenue chez The Tribe Mobile !\r\nPrennez vos aises dans nos bureaux virtuels :)"
);

WA.player.setOutlineColor(7, 55, 208);
