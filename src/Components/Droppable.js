import React, { useState } from 'react';

const Droppable = () => {
    const [droppedItem, setDroppedItem] = useState(null);
  
    const handleDrop = (e) => {
      e.preventDefault();
      setDroppedItem(e.dataTransfer.getData("text"));
      console.log(e.dataTransfer.getData("text"))
    };
  
    const handleDragOver = (e) => {
      e.preventDefault();
    };
  
    return (
      <div
        style={{
          height: "100px",
          width: "100px",
          border: "1px solid black",
          backgroundColor:"red"
        }}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        {droppedItem ? `Dropped: ${droppedItem}` : "Drop Here"}
      </div>
    );
  };
  
  export default Droppable