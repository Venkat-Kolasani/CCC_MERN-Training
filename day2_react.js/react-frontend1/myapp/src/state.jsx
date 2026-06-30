// Spread operator and useState hook in ReactJS

import { useState } from "react";
function AddItemList() {
  const [item, setItem] = useState("");
  const [list, setList] = useState([]);
  function addItem() {
    setList([...list, item]);
    setItem("");
  }
  return (
    <>
      {/* jsx code */}
      <div>
        <input
          type="text"
          value={item}
          onChange={(e) => setItem(e.target.value)}
        />
        <button onClick={addItem}>Add</button>
        {/* for mapping */}
        {list.map((data, index) => (
          <h2 key={index}>{data}</h2>
        ))}

      </div>
    </>
  );
}
export default AddItemList;


