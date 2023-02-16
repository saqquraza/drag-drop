import React, { useState } from "react";
import img3 from "../Images/download121.jpg";
import img2 from "../Images/download23.jpg";
import img1 from "../Images/tree.jpg";
import './Image.css'

const Image = () => {
  const [images, setImages] = useState([
    { id: 1, src: img1 },
    { id: 2, src: img2 },
    { id: 3, src: img3 },
  ]);
  const [droppedItems, setDroppedItems] = useState([]);
  const [size, setSize] = useState({ width: 100, height: 100 });
  const [aspectRatio, setAspectRatio] = useState(size.width / size.height);
  const [selectedImage, setSelectedImage] = useState(null);
  const[imgId,setImgId]=useState(0);
  // const [selectedItem, setSelectedItem] = useState(null);

  const handleDragImage = (event) => {
    // if (selectedItem === null) return;
    const startSize = size;
    const startPosition = { x: event.pageX, y: event.pageY };

    function onMouseMove(event) {
      const newWidth = startSize.width - startPosition.x + event.pageX;
      const newHeight = newWidth ;

      setSize({ width: newWidth, height: newHeight });
    }
    function onMouseUp() {
      myDiv.removeEventListener("mousemove", onMouseMove);
      myDiv.removeEventListener("mouseup", onMouseUp);
      setSelectedImage(null);
      // setSelectedItem(null);
    }
const myDiv=document.querySelector("#my-div");
myDiv.addEventListener("mousemove", onMouseMove);
myDiv.addEventListener("mouseup", onMouseUp, { once: true });
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDroppedItems([...droppedItems, e.dataTransfer.getData("text")]);
    
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDragStart = (e) => {
    e.dataTransfer.setData("text", e.target.id);
   
  };

  const handleDrag = (e) => {
    e.preventDefault();
  };

  const handleImageClick = (event, imageId) => {
    setSelectedImage(imageId);
    event.stopPropagation();
  };

  return (
    <>
      <div style={{ display: "flex" }}>
        <div className="image-cont">
          {images.map((image, index) => (
            <img
              key={index}
              id={image.id}
              src={image.src}
              draggable={true}
              onDragStart={handleDragStart}
              onDrag={handleDrag}
              style={{ margin: "10px" }}
            />
          ))}
        </div>
        <div id="my-div"
           onDrop={handleDrop}
          onDragOver={handleDragOver}
          draggable={false}
        >
          {droppedItems.map((droppedItem, index) => {
            const image = images.find((image) => {
            
              return image.id == droppedItem;
            });
            const isSelected = selectedImage === image.id;
           
            // const isSelectedItem = index === selectedItem;
           
            return (
              <>
                <div className="div-cont-img"
                draggable={false}
                  style={{
                    width:  size.width,
                    height: size.height,
                   
                  }}
                >
                  <img
                      draggable={false}
                      onClick={(event) => handleImageClick(event, image.id)}
                      src={image.src}
                      style={{
                      width: "100%",
                      height: "100%",
                      border: isSelected ? "1px solid blue" : "none",
                    }}
                  />
                  <div className="top-left-div"
                    onMouseDown={handleDragImage}
                  ></div>
                  <div className="bottom-right-div"
                    onMouseDown={handleDragImage}
                  ></div>
                  <div className="top-right-div"
                    onMouseDown={handleDragImage}
                  ></div>
                  <div className="bottom-left-div"
                    onMouseDown={handleDragImage}
                  ></div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Image;
