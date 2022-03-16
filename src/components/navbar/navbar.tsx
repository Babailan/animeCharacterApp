import MobileNavbar from "./navbarMobile";

export default function Navbar(props: any) {
  return <>{props.width < 750 ? <MobileNavbar /> : <h1>more than</h1>}</>;
}
