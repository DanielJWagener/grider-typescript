import { User } from "./models/User";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000";

const user = new User({ id: "7ea1" });

user.fetch();

user.set({ name: "NEW NAME", age: 9999 });
user.save();

const user2 = new User({ name: "new record", age: 0 });
user2.save();
