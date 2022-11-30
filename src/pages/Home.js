import { useState } from "react";

import ModelParent from "../components/ModelParent";
import * as Media from "../components/Media";

const Home = (props) => {
  let [qty, setQty] = useState(0);

  const [color, setColor] = useState("Red");
  setTimeout(() => setColor("Green"), 5000);

  let staticColor = "Red";
  setTimeout(() => (staticColor = "Green"), 5000);

  function addCart() {
    setQty((qty += 1));
    props.changeQty(qty);
  }

  return (
    <div className="row">
      <div className="col-sm-8">
        <h2>Main component</h2>
        {/* <Comp1 name="Test" /> */}
        <div className="mt-5"></div>
        <button onClick={addCart} type="button" className="btn btn-success">
          Add 1+ to cart
        </button>
        <Media.Image src="https://via.placeholder.com/400x200?text=Image+component" />
        <Media.Video src="https://www.w3schools.com/html/mov_bbb.mp4" />
      </div>
      <div className="col-sm-4">
        <h5>
          This will re-render once the state change (after 5s):
          <span style={{ color: color }}> {color}</span>
        </h5>
        <br />
        <h5>
          This static variable will stay same even after changed (after 5s):
          <span style={{ color: staticColor }}> {staticColor}</span>
        </h5>
        <br />

        <ModelParent />
        <ModelParent />
        <ModelParent />
      </div>
    </div>
  );
};

export default Home;
