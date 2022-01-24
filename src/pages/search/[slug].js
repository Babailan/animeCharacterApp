import axios from "axios";
import Image from "next/image";

function Slug({ res, setCharacterPreview }) {
  const previewCharacterTrigger = (about, image, name) => {
    console.log(image);
    setCharacterPreview({
      bool: true,
      character: { about, image, name },
    });
  };
  return (
    <div className="container">
      {res.data.length === 0 ? (
        <h1>No result found</h1>
      ) : (
        res.data.map(({ about, images, name }, index) => {
          if (about === null) {
            about = "No description available";
          }
          return (
            <div
              className="character"
              key={index}
              onClick={() => previewCharacterTrigger(about, images, name)}
            >
              <Image
                src={images.jpg.image_url}
                className="imageCharac"
                alt={name}
                width={500}
                height={500}
                priority="true"
              />
              <h1>{name}</h1>
              <p>{about}</p>
            </div>
          );
        })
      )}
    </div>
  );
}

export default Slug;

export async function getServerSideProps(context) {
  const { slug } = context.query;
  const res = await axios.request({
    method: "get",
    url: "https://api.jikan.moe/v4/characters",
    params: { q: slug },
  });
  return {
    props: {
      res: res.data,
    },
  };
}
