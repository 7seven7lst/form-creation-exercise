import { useEffect, useState } from 'react';
import { getBandData, getBandPage } from '../api/mockBandApi';
import { IBandInfo, IPage } from '../types/band';

export function useBandApi(bandId: string) {
  const [band, setBand] = useState<IBandInfo | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!bandId) return;
    setLoading(true);
    setError(null);
    getBandData(bandId)
      .then(data => {
        setBand(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [bandId]);

  return { band, loading, error };
}

export function useBandPageApi(pageSize = 10, currentPage = 1) {
  const [bands, setBands] = useState<IBandInfo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    getBandPage(pageSize, currentPage)
      .then((response: IPage<IBandInfo>) => {
        setBands(response.data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [pageSize, currentPage]);

  return { bands, loading, error };
}
