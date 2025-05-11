import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, ButtonGroup, Button } from 'react-bootstrap';
import { useBandPageApi } from '../hooks/useBandApi';
import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';

function Home() {
  const navigate = useNavigate();
  const { bands, loading, error } = useBandPageApi();
  if (loading) {
    return <PageLoading />;
  }
  if (error) {
    return <PageError error={error} />;
  }

  return (
    <Container className="text-center mb-5">
      <Row>
        <Col>
          <h1 className="display-4 mb-4 text-gradient">Rock the Stage</h1>
          <p className="lead mb-5">
            Choose your favorite band and get ready for an unforgettable night!
          </p>
          <ButtonGroup vertical aria-label="Band selection" className="w-100 gap-3">
            {bands.map(band => (
              <Button
                key={band.name}
                variant="primary"
                size="lg"
                className="px-4 py-3"
                onClick={() => navigate(`/band/${band.id}`)}
                aria-label={`Select ${band.name}`}
              >
                <div className="d-flex flex-column align-items-center">
                  <span className="h4 mb-2">{band.name}</span>
                  <small className="text-white-50">{band.id}</small>
                </div>
              </Button>
            ))}
          </ButtonGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
