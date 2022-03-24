import Router from "next/router";
import { createContext } from "react";

const sizeQuery = {
  mobileNav: "(max-width: 640px)",
  DesktopNav: "(min-width: 641px)",
  router: Router,
};
const Query = createContext(sizeQuery);

export { Query, sizeQuery };
