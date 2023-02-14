// import React, { useState } from "react";
// import img3 from '../Images/download121.jpg';
// import img2 from '../Images/download23.jpg';
// import img1 from '../Images/tree.jpg'

// const Image = ({ src }) => {

//   const [images, setImages] = useState([
//     {id: 1, src: img1},
//     {id: 2, src: img2 },
//     {id: 3, src: img3},
//   ]);
//   const [droppedItems, setDroppedItems] = useState([]);
//   const [resizing, setResizing] = useState(false);
//   const [startX, setStartX] = useState(0);
//   const [startY, setStartY] = useState(0);
//   const [corner, setCorner] = useState("");

//   const handleDrop = (e) => {
//     e.preventDefault();
//     setDroppedItems([...droppedItems, e.dataTransfer.getData("text")]);
//     console.log(e.dataTransfer.getData("text"));
//   };

//   const handleDragOver = (e) => {
//     e.preventDefault();
//   };

//   const handleDragStart = (e) => {
//     e.dataTransfer.setData("text", e.target.id);
//     console.log(e.dataTransfer.getData("text"));
//   };

//   const handleDrag = (e) => {
//     e.preventDefault();
//   };


//   const handleMouseDown = (e) => {
//     const image = e.target;
//     const imageRect = image.getBoundingClientRect();
//     const imageX = imageRect.left + window.pageXOffset;
//     const imageY = imageRect.top + window.pageYOffset;
//     const mouseX = e.clientX;
//     const mouseY = e.clientY;
//     if (mouseX < imageX + 20 && mouseY < imageY + 20) {
//         setCorner("top-left");
//     } else if (mouseX > imageX + imageRect.width - 20 && mouseY < imageY + 20) {
//         setCorner("top-right");
//     } else if (mouseX < imageX + 20 && mouseY > imageY + imageRect.height - 20) {
//         setCorner("bottom-left");
//     } else if (mouseX > imageX + imageRect.width - 20 && mouseY > imageY + imageRect.height - 20) {
//         setCorner("bottom-right");
//     } else {
//         return;
//     }
//     setResizing(true);
//     setStartX(e.clientX);
//     setStartY(e.clientY);
// };

// const handleMouseUp = () => {
//     setResizing(false);
// };

// const handleMouseMove = (e) => {
//     if (!resizing) {
//         return;
//     }
//     const image = e.target;
//     const diffX = e.clientX - startX;
//     const diffY = e.clientY - startY;
//     switch (corner) {
//         case "top-left":
//             image.style.width = `${image.offsetWidth - diffX}px`;
//             image.style.height = `${image.offsetHeight - diffY}px`;
//             image.style.left = `${image.offsetLeft + diffX}px`;
//             image.style.top = `${image.offsetTop + diffY}px`;
//             break;
//         case "top-right":
//             image.style.width = `${image.offsetWidth + diffX}px`;
//             image.style.height = `${image.offsetHeight - diffY}px`;
//             image.style.top = `${image.offsetTop + diffY}px`;
//             break;
//         case "bottom-left":
//             image.style.width = `${image.offsetWidth - diffX}px`;
//             image.style.height = `${image.offsetHeight + diffY}px`;
//             image.style.left = `${image.offsetLeft + diffX}px`;
//             break;
//             case "bottom-right":
//               image.style.width =` ${image.offsetWidth + diffX}px`;
//               image.style.height = `${image.offsetHeight + diffY}px`;
//               break;
//               default:
//               break;
//               }
//               setStartX(e.clientX);
//               setStartY(e.clientY);
//               };


//   return (
//     <>
//       {images.map((image , index) => (
//         <img
//           key={index}
//           id={image.id}
//           src={image.src}
//           draggable={true}
//           onDragStart={handleDragStart}
//           onDrag={handleDrag}
//           style={{
//             //   position: "absolute",
//             //   left: position.x + "px",
//             //   top: position.y + "px",
//             margin: "10px",
//           }}
//         />
//       ))}
//       <div
//         onDrop={handleDrop}
//         onDragOver={handleDragOver}
//         onMouseDown={handleMouseDown}
//            onMouseUp={handleMouseUp}
//           onMouseMove={handleMouseMove}
//         style={{
//           width: "800px",
//           height: "400px",
//           border: "1px solid black",
//           margin:"10px"
//         }}
//       >
//         {droppedItems.map((droppedItem) => {
//           const image = images.find((image) => {
//             console.log("image.id:", image.id);
//             return image.id==droppedItem;
//         });
//           if (!image) {
//             console.error(`Image with id ${droppedItem} not found`);
//             return null;
//           }
//           return <img 
//           key={droppedItem}
//            src={image.src} 
//            style={{margin:'5px'}}
           
//            />;
//         })}
//       </div>
//     </>
//   );
// };
// export default Image;


import React, { useState } from 'react';
import img1 from '../Images/tree.jpg'

function Image() {
  const [size, setSize] = useState({ width: 300, height: 300 });
  const [aspectRatio, setAspectRatio] = useState(size.width / size.height);

  const handleDrag = (event) => {
    const startSize = size;
    const startPosition = { x: event.pageX, y: event.pageY };
    
    function onMouseMove(event) {
      const newWidth = startSize.width - startPosition.x + event.pageX;
      const newHeight = newWidth / aspectRatio;

      setSize({ width: newWidth, height: newHeight });
    }
    function onMouseUp() {
      document.body.removeEventListener("mousemove", onMouseMove);
      document.body.removeEventListener("mouseup", onMouseUp);
    }
    
    document.body.addEventListener("mousemove", onMouseMove);
    document.body.addEventListener("mouseup", onMouseUp ,{ once: true });
  };

  return (
    <div style={{ width: size.width, height: size.height, position: 'relative' , margin:'200px'}} >
      <img src={img1} alt="resizeable" style={{ width: '100%', height: '100%' }} />
      <button type="button" style={{ position: 'absolute', bottom: 0, right: 0 }}  onMouseDown={handleDrag}>Resize</button>
    </div>
  );
}

export default Image;
