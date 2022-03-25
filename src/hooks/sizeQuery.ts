import Router from "next/router";
import { createContext } from "react";

const sizeQuery = {
  mobileNav: 640,//minwidth
  DesktopNav: 641,//maxwidth
  router: Router,
};
const Query = createContext(sizeQuery);

export { Query, sizeQuery };
