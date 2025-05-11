import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

function NotFound() {
  return (
    <div className="container py-5">
      <Card className="text-center">
        <Card.Body>
          <h1 className="display-1 fw-bold text-muted">404</h1>
          <h2 className="h4 mb-4">Page Not Found</h2>
          <p className="text-muted mb-4">
            Oops! The page you are looking for does not exist or has been moved.
          </p>
          <Link to="/" className="btn btn-primary btn-lg px-4">
            Return Home
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
}

export default React.memo(NotFound);
