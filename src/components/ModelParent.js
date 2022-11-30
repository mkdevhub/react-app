import ModelChild from "./ModelChild";
import { useState } from "react";

const words = [
  "spray",
  "Limit",
  "elite",
  "Exuberant",
  "destruction",
  "present",
];

function ModelParent() {
  const [title, setTitle] = useState("Heading");

  function handleType(event) {
    setTitle(event.target.value);
  }

  const searchedWord = words.filter((word) =>
    word.toLowerCase().includes(title.toLowerCase())
  );

  if(searchedWord.length > 0){
    console.log(searchedWord);
  }

  return (
    <div className="modal position-static d-block h-auto">
      <div className="modal-dialog mt-0">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Parent: {title}</h5>
          </div>
          <ModelChild onType={handleType} />
        </div>
      </div>
    </div>
  );
}
export default ModelParent;
