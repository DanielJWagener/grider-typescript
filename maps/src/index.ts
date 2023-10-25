/// <reference types="@types/google.maps" />

import { CustomMap } from "./CustomMap";

CustomMap.initializeMap("map").then(customMap => {
  customMap.googleMap;
});
