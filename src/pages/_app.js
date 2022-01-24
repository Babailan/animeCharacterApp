import "../style/index.css";
import "../style/home.css";
import Navbar from "../components/navbar";
import Image from "next/image";
import { useState } from "react";
export default function App({ Component, pageProps }) {
  const [characterPreview, setCharacterPreview] = useState({
    bool: false,
    character: {},
  });
  const date = new Date();
  return (
    <>
      {characterPreview.bool ? (
        <div className="previewCharacter">
          <p
            className="exit"
            onClick={() => {
              setCharacterPreview({ bool: false, character: {} });
            }}
          >
            x
          </p>
          <Image
            loading="lazy"
            src={characterPreview.character.image.jpg.image_url}
            className="imageCharac"
            alt={characterPreview.character.name}
            // alt={name}
            width={250}
            height={250}
          />
          <div className="aboutPreview">
            <h1>{characterPreview.character.name}</h1>
            <p>{characterPreview.character.about}</p>
          </div>
        </div>
      ) : null}
      <Navbar />
      <Component
        {...pageProps}
        setCharacterPreview={setCharacterPreview}
        characterPreview={characterPreview}
      />
      <footer
        style={{
          fontFamily: "serif",
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          fontWeight: 600,
        }}
      >
        &copy;{" "}
        <p
          style={{
            marginLeft: "6px",
            fontSize: "1em",
            fontFamily: "serif",
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            fontWeight: 500,
          }}
        >
          {date.getFullYear()} BABAILAN
        </p>
      </footer>
    </>
  );
}
