import axios from "axios";
import Home from "../components/home";

type Props = {
  characters: any;
};

const Index = ({ characters }: Props) => {
  return (
    <>
      {/* greetings entry */}
      <Home />
    </>
  );
};

export async function getServerSideProps() {
  const req = await axios.get("https://api.jikan.moe/v4/characters", {
    params: {
      q: "",
      order_by: "favorites",
    },
  });
  return {
    props: { characters: req.data }, // will be passed to the page component as props
  };
}

export default Index;
