import { User } from "./models/User";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000";

const user = new User({ id: "7ea1" });

user.events.on("change", () => {
  console.log("change");
});

user.events.trigger("change");
