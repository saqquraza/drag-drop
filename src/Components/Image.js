import React, { useState } from "react";

const Image = ({ src }) => {

  const [images, setImages] = useState([
    {id: 1, src: 'src\Components\download.jpg'},
    {id: 2, src: "https://via.placeholder.com/100x100" },
    {id: 3, src: "https://via.placeholder.com/100x100" },
  ]);

  console.log(images)

  const [droppedItems, setDroppedItems] = useState([]);

  const handleDrop = (e) => {
    e.preventDefault();
    setDroppedItems([...droppedItems, e.dataTransfer.getData("text")]);
    console.log(e.dataTransfer.getData("text"));
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDragStart = (e) => {
    e.dataTransfer.setData("text", e.target.id);
    console.log(e.dataTransfer.getData("text"));
  };

  const handleDrag = (e) => {
    e.preventDefault();
  };

  return (
    <>
      {images.map((image , index) => (
        <img
          key={index}
          id={image.id}
          src={image.src}
          draggable={true}
          onDragStart={handleDragStart}
          onDrag={handleDrag}
          style={{
            //   position: "absolute",
            //   left: position.x + "px",
            //   top: position.y + "px",
            margin: "10px",
          }}
        />
      ))}
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        style={{
          width: "300px",
          height: "300px",
          border: "1px solid black",
        }}
      >
        {droppedItems.map((droppedItem) => {
          console.log("droppedItem:", droppedItem);
          console.log("images:", images);
          const image = images.find((image) => {
            console.log("image.id:", image.id);
            return image.id==droppedItem;
        });
          if (!image) {
            console.error(`Image with id ${droppedItem} not found`);
            return null;
          }
          return <img key={droppedItem} src={image.src} />;
        })}
      </div>
    </>
  );
};
export default Image;
