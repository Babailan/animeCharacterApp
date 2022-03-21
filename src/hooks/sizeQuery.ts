import { createContext } from "react";

const sizeQuery = {
  mobileNav: "(max-width: 640px)",
  DesktopNav: "(min-width: 641px)",
};
const Query = createContext(sizeQuery);

export { Query, sizeQuery };
