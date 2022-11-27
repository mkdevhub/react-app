export const Image = function (props) {
  return (
    <div className="my-5">
      <img src={props.src} alt="Media component" />
    </div>
  );
};


export const Video = function (props) {
  return (
    <div className="my-5">
      <video width="400" height="auto" controls>
        <source src={props.src} type="video/mp4" />
      </video>
    </div>
  );
};