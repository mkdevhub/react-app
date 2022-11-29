function ModelChild(props) {
  return (
    <div className="modal-body">
      <p>Child component text goes here</p>
      <button
        onClick={function () {
          props.changeTitle("Title comes from child");
        }}
        type="button"
        className="btn btn-sm btn-secondary"
      >
        Update title
      </button>
    </div>
  );
}
export default ModelChild;
