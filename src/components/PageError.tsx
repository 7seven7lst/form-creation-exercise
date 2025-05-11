import React from 'react';
import Alert from 'react-bootstrap/esm/Alert';

function PageError({ error }: { error: string }) {
  return (
    <Alert variant="danger" className="my-5 text-center" aria-live="assertive">
      <Alert.Heading>Oops! Something went wrong</Alert.Heading>
      <p>{error}</p>
    </Alert>
  );
}

export default React.memo(PageError);
