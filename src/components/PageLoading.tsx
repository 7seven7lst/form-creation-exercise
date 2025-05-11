import React from 'react';

function PageLoading() {
  return (
    <div className="text-center my-5" aria-live="polite">
      <p className="mt-3">Loading the show...</p>
    </div>
  );
}

export default React.memo(PageLoading);
