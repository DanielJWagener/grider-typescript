/// <reference types="@types/google.maps" />
import { CustomMap } from "./CustomMap";
import { User } from "./User";
import { Company } from "./Company";

const user = new User();
const company = new Company();

CustomMap.initializeMap("map").then(customMap => {
  customMap.addMarker(user);
  customMap.addMarker(company);
});
