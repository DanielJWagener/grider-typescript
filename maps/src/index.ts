/// <reference types="@types/google.maps" />

// import { User } from "./User";
// import { Company } from "./Company";

let map: google.maps.Map;
async function initMap(): Promise<void> {
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  map = new Map(document.getElementById("map") as HTMLElement, {
    center: { lat: 0, lng: 0 },
    zoom: 1
  });
}

initMap();
