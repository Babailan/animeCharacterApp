import MobileNavbar from "./navbarMobile";

type Navbars = {
  width: number;
};

export default function Navbar({ width }: Navbars) {
  return <>{width < 750 ? <MobileNavbar /> : <h1>more than</h1>}</>;
}
