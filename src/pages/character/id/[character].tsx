import axios from "axios";

function Character({ character }) {
  console.log(character);
  return <div className="parent">h1</div>;
}

export async function getServerSideProps(context: any) {
  const req = await axios.get(
    `https://api.jikan.moe/v4/characters/${context.params.character}`
  );
  return {
    props: { character: req.data.data }, // will be passed to the page component as props
  };
}

export default Character;
