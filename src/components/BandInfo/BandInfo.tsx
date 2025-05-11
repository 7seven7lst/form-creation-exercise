import React from 'react';
import Card from 'react-bootstrap/Card';
import { IBandInfo } from '../../types/band';
import { formatDate } from '../../utils';

function BandInfo({ band }: { band: IBandInfo }) {
  return (
    <Card className="m-2">
      <Card.Img variant="top" src={band.imgUrl} alt={band.name} />
      <Card.Body>
        <Card.Title>{band.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          <span role="img" aria-label="calendar">
            📅
          </span>{' '}
          {formatDate(band.date)}
        </Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted">
          <span role="img" aria-label="location">
            📍
          </span>{' '}
          {band.location}
        </Card.Subtitle>
        <Card.Text as="div" dangerouslySetInnerHTML={{ __html: band.description_blurb }} />
      </Card.Body>
    </Card>
  );
}

export default React.memo(BandInfo);
