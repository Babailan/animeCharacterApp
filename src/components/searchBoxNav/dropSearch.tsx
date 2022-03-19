function DropSearch({ category, data, onClickBox }) {
  return (
    <div className="dropDrop">
      {category === "characters"
        ? data.map(({ name, images, mal_id }, index: number) => {
            return (
              <div
                key={index}
                className="card-bar"
                onClick={(e) => onClickBox(e, mal_id)}
              >
                <img
                  src={images.webp.image_url}
                  width={"25px"}
                  height={"40px"}
                  className="card-bar-image"
                />
                <p>{name}</p>
              </div>
            );
          })
        : null}
      {category === "anime"
        ? data.map(({ title, images }, index: number) => {
            return (
              <div key={index} className="card-bar">
                <img
                  src={images.webp.image_url}
                  width={"25px"}
                  height={"40px"}
                  className="card-bar-image"
                />
                <p>{title}</p>
              </div>
            );
          })
        : null}
    </div>
  );
}

export default DropSearch;
