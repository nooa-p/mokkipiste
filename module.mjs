// @ts-check
import { module } from "@prisma/composer";
import mokkipisteService from "./service.mjs";

export default module("mokkipiste", ({ provision }) => {
  provision(mokkipisteService);
});
