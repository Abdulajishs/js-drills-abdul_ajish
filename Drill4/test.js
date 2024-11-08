import { users } from "./users.js";
import { usersInterestedPlaying, userStaying, usersMaster, groupByProgrammingLanguage } from "./solution.js";


console.log(usersInterestedPlaying(users,"Playing Video Games"))

console.log(userStaying(users,"Germany"));

console.log(usersMaster(users,"Masters"));

console.log(groupByProgrammingLanguage(users));