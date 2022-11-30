//Arrow function + props destructuring in function signature - const { onType } = props;
const ModelChild = ({ onType }) => (
  <div className="modal-body">
    <input
      className="form-control"
      type="text"
      onChange={onType}
      placeholder="Enter text to change parent heading"
    />
  </div>
);
export default ModelChild;
