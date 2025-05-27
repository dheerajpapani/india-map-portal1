import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Banner() {
  const navigate = useNavigate();

  return (
    <div className="mb-4 bg-light rounded-3 text-center custom-banner p-4">
      <h1 className="display-4 fw-bold">India Map Portal</h1>
      <p className="fs-4">Self-hosted, open-source map tiles of India.</p>
      <Button onClick={() => navigate("/map")} variant="primary" size="lg">
        Explore the Map
      </Button>
    </div>
  );
}

export default Banner;
