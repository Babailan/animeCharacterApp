import axios from "axios";

function Slug({ res }) {
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
            <div className="character" key={index}>
              <img src={images.jpg.image_url} className="imageCharac" />
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
