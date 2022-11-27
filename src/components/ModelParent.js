import ModelChild from "./ModelChild";
import { useState } from "react";

function ModelParent() {
  const [title, setTitle] = useState("Heading");
  return (
    <div className="modal position-static d-block h-auto">
      <div className="modal-dialog mt-0">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Parent: {title}</h5>
          </div>
          <ModelChild
            changeTitle={function (text) {
              // ChangeTitle trigger from child
              // param: text comes from child
              setTitle(text); //Callback function
            }}
          />
        </div>
      </div>
    </div>
  );
}
export default ModelParent;
