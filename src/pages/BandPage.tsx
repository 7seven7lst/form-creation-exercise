import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { useBandApi } from '../hooks/useBandApi';
import BandInfo from '../components/BandInfo/BandInfo';
import TicketForm from '../components/TicketForm/TicketForm';
import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';
import './BandPage.scss';

function BandPage() {
  const { bandId } = useParams();
  const { loading, error, band } = useBandApi(bandId as string);

  if (loading) {
    return <PageLoading />;
  }

  if (error) {
    return <PageError error={error} />;
  }

  if (!band) return null;

  return (
    <Container as="main" aria-labelledby="band-info-heading" className="py-5">
      <Row className="band-form-container p-4 hide-scrollbar">
        <Col md={6} className="pe-md-4">
          <BandInfo band={band} />
        </Col>
        <Col md={6} className="ps-md-4">
          <TicketForm band={band} />
        </Col>
      </Row>
    </Container>
  );
}

export default BandPage;
