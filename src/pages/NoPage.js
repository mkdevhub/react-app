import { Link } from 'react-router-dom';

const NoPage = () => {
  return (
    <div>
      <h1>404</h1>
      <p style={{ textAlign: "center", fontSize:"80px" }}>
        <Link to="/">Go to Home </Link>
      </p>
    </div>
  );
};

export default NoPage;
