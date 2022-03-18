import axios from "axios";
import { useEffect } from "react";

type Props = {
  characters: string;
};

const Index = ({ characters }: Props) => {
  function stars() {
    const containerStar = document.querySelector(".greetings-container");
    const count = 50;
    for (let i = 0; i < count; i++) {
      const star = document.createElement("i");
      const x = Math.floor(Math.random() * containerStar.clientWidth);
      const y = Math.floor(Math.random() * containerStar.clientHeight);

      const size = Math.random() * 4;
      star.style.left = x + "px";
      star.style.top = y + "px";
      star.style.width = 1 + size + "px";
      star.style.height = 1 + size + "px";
      containerStar.appendChild(star);
    }

    window.addEventListener("resize", () => {
      const containerStar = document.querySelector(".greetings-container");
      for (let i = 0; i < containerStar.childNodes.length; i++) {
        if (containerStar.childNodes[i].nodeName.toLowerCase() === "i") {
          containerStar.removeChild(containerStar.childNodes[i]);
          i--;
        }
      }
      for (let i = 0; i < count; i++) {
        const star = document.createElement("i");
        const x = Math.floor(Math.random() * containerStar.clientWidth);
        const y = Math.floor(Math.random() * containerStar.clientHeight);

        const size = Math.random() * 4;
        star.style.left = x + "px";
        star.style.top = y + "px";
        star.style.width = 1 + size + "px";
        star.style.height = 1 + size + "px";
        containerStar.appendChild(star);
      }
    });
  }
  useEffect(() => {
    stars();
  }, []);
  return (
    <div className="parent">
      {/* greetings entry */}
      <div className="greetings-container">
        <div className="greetings-container-letters">
          <h1>Welcome to Anime-World</h1>
          <p>
            Discover anime and manga, track your progress, watch anime, read
            manga.
          </p>
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps(context: object) {
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
