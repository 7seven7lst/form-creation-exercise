import { IBandInfo, IPage } from '../types/band';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function getBandPage(pageSize = 10, currentPage = 1): Promise<IPage<IBandInfo>> {
  const bands: IBandInfo[] = [];
  const skaBand = await import('../band-json/ska-band.json');
  const kpopBand = await import('../band-json/kpop-band.json');
  const punkBand = await import('../band-json/punk-band.json');

  bands.push(skaBand.default as IBandInfo);
  bands.push(kpopBand.default as IBandInfo);
  bands.push(punkBand.default as IBandInfo);
  return {
    data: bands,
    total: 3,
    currentPage: 1,
    pageSize: 10,
  } as IPage<IBandInfo>;
}

export async function getBandData(bandId: string): Promise<IBandInfo> {
  switch (bandId) {
    case 'flaming-potatoes':
      return import('../band-json/ska-band.json').then(m => m.default as IBandInfo);
    case 'btess':
      return import('../band-json/kpop-band.json').then(m => m.default as IBandInfo);
    case 'cindy':
      return import('../band-json/punk-band.json').then(m => m.default as IBandInfo);
    default:
      return Promise.reject(new Error('Band not found'));
  }
}
