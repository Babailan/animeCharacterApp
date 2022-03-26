import Image from "next/image";

function DropSearch({ category, data, onClickBox }) {
  return (
    <div className="dropDrop">
      {category === "characters" &&
        data.map(({ name, images, mal_id }, index: number) => {
          return (
            <div
              key={index}
              className="card-bar"
              onClick={(e) => onClickBox(e, mal_id)}
            >
              <div
                style={{
                  width: "100%",
                  maxWidth: "30px",
                  maxHeight: "fit-content",
                }}
              >
                <Image
                  src={images.webp.image_url}
                  width={"25px"}
                  height={"40px"}
                  layout={"responsive"}
                  loading={"lazy"}
                />
              </div>

              <p className={"name"}>{name}</p>
            </div>
          );
        })}
      {category === "anime" &&
        data.map(({ title, images }, index: number) => {
          return (
            <div key={index} className="card-bar">
              <div
                style={{
                  width: "100%",
                  maxWidth: "30px",
                  maxHeight: "fit-content",
                }}
              >
                <Image
                  src={images.webp.image_url}
                  width={"25px"}
                  height={"40px"}
                  layout={"responsive"}
                  loading={"lazy"}
                />
              </div>
              <p>{title}</p>
            </div>
          );
        })}
      {category === "manga" &&
        data.map(({ images, title }, index: number) => {
          return (
            <div key={index} className="card-bar">
              <div
                style={{
                  width: "100%",
                  maxWidth: "30px",
                  maxHeight: "fit-content",
                }}
              >
                <Image
                  src={images.webp.image_url}
                  width={"25px"}
                  height={"40px"}
                  layout={"responsive"}
                  loading={"lazy"}
                />
              </div>
              <p className={"name"}>{title}</p>
            </div>
          );
        })}
    </div>
  );
}

export default DropSearch;
