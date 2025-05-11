import React from 'react';
import { render, screen } from '@testing-library/react';
import BandInfo from './BandInfo';
import { band } from '../../__mocks__/bandMock';

describe('BandInfo', () => {
  it('renders band details', () => {
    render(<BandInfo band={band} />);
    expect(screen.getByRole('img', { name: band.name })).toBeInTheDocument();
    expect(screen.getByText(band.name)).toBeInTheDocument();
    expect(screen.getByText(/Test Venue/)).toBeInTheDocument();
    expect(screen.getByText(/This is a test band/)).toBeInTheDocument();
  });
});
