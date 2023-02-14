// // import React, { useState } from 'react';

// // const Droppable = () => {
// //     const [droppedItem, setDroppedItem] = useState(null);
  
// //     const handleDrop = (e) => {
// //       e.preventDefault();
// //       setDroppedItem(e.dataTransfer.getData("text"));
// //       console.log(e.dataTransfer.getData("text"))
// //     };
  
// //     const handleDragOver = (e) => {
// //       e.preventDefault();
// //     };
  
// //     return (
// //       <div
// //         style={{
// //           height: "100px",
// //           width: "100px",
// //           border: "1px solid black",
// //           backgroundColor:"red"
// //         }}
// //         onDrop={handleDrop}
// //         onDragOver={handleDragOver}
// //       >
// //         {droppedItem ? `Dropped: ${droppedItem}` : "Drop Here"}
// //       </div>
// //     );
// //   };
  
// //   export default Droppable



// const [resizing, setResizing] = useState(false);
// const [startX, setStartX] = useState(0);
// const [startY, setStartY] = useState(0);
// const [corner, setCorner] = useState("");

// const handleMouseDown = (e) => {
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

          