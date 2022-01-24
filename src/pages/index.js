import axios from "axios";
import { useState } from "react";
import Image from "next/image";

export default function Home({ res, setCharacterPreview }) {
  const [page, setPage] = useState(1);
  const [characters, setCharacters] = useState(res);
  const nextPage = async () => {
    const result = await axios.request({
      method: "get",
      url: "https://api.jikan.moe/v4/characters",
      params: { limit: 24, order_by: "favorites", page: page + 1 },
    });
    setCharacters(result.data);
    setPage((prev) => prev + 1);
    console.log(page);
  };
  const previewCharacterTrigger = (about, image, name) => {
    console.log(image);
    setCharacterPreview({
      bool: true,
      character: { about, image, name },
    });
  };
  const previousPage = async () => {
    const result = await axios.request({
      method: "get",
      url: "https://api.jikan.moe/v4/characters",
      params: { limit: 24, order_by: "favorites", page: page - 1 },
    });
    setPage((prev) => prev - 1);
    setCharacters(result.data);
    console.log(page);
  };

  return (
    <>
      <div className="container">
        {characters.data.map(({ about, images, name }, index) => {
          if (about === null) {
            about = "No description available";
          }
          return (
            <div className="character" key={index}>
              <Image
                loading="lazy"
                src={images.jpg.image_url}
                className="imageCharac"
                layout="responsive"
                alt={name}
                width={500}
                height={500}
                onClick={() => previewCharacterTrigger(about, images, name)}
              />
              <h1>{name}</h1>
              <p>{about}</p>
            </div>
          );
        })}
      </div>
      <div className="navigate">
        {page !== 1 ? (
          <button className="previouspage" onClick={previousPage}>
            previous page
          </button>
        ) : null}
        {res.pagination.has_next_page ? (
          <button className="nextpage" onClick={nextPage}>
            next page
          </button>
        ) : null}
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const res = await axios.request({
    method: "get",
    url: "https://api.jikan.moe/v4/characters",
    params: { limit: 24, order_by: "favorites", page: 1 },
  });
  const data = res.data;
  return {
    props: {
      res: data,
    },
  };
}
