import React, { useState } from "react";
import data from "../data";
function Accordian() {
  const [selected, setSelected] = useState(null);
  const [enableSelected, setEnableSelected] = useState(false);
  const [multple, setMultple] = useState([]);
  function handlesingle(getcurent) {
    setSelected(getcurent === selected ? null : getcurent);
    // console.log(selected);
  }
  function handlemultiselcted(getcurrentId) {
    const copymultiple = [...multple];
    const findindexofcurentid = copymultiple.indexOf(getcurrentId);
    if (findindexofcurentid === -1) {
      copymultiple.push(getcurrentId);
    } else {
      copymultiple.splice(findindexofcurentid, 1);
    }
    setMultple(copymultiple);
  }
  console.log(selected, multple);
  return (
    <div className="wrapper">
      <button onClick={() => setEnableSelected(!enableSelected)}>
        Multi Enable Selected
      </button>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataItems) => (
            <div className="items">
              <div
                onClick={
                  enableSelected
                    ? () => handlemultiselcted(dataItems.id)
                    : () => handlesingle(dataItems.id)
                }
                className="title"
              >
                <h3>{dataItems.question}</h3>
                <span>+</span>
              </div>
              {enableSelected
                ? multple.indexOf(dataItems.id) !== -1 && (
                    <div className="content">{dataItems.answers}</div>
                  )
                : selected === dataItems.id && (
                    <div className="content">{dataItems.answers}</div>
                  )}
              {/* {selected === dataItems.id ? (
                <div className="content">{dataItems.answers}</div>
              ) : null} */}
            </div>
          ))
        ) : (
          <div>No found Data?</div>
        )}
      </div>
    </div>
  );
}

export default Accordian;
