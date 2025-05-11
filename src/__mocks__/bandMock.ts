import { IBandInfo, TicketTypeEnum } from '../types/band';

export const band: IBandInfo = {
  name: 'Test Band',
  id: 'test-band',
  date: 1893456000000, // some future timestamp
  location: '123 Test Venue, Test City',
  description_blurb: '<p>This is a test band for testing purposes.</p>',
  imgUrl: 'https://placehold.co/600x400',
  ticketTypes: [
    { type: TicketTypeEnum.VIP, name: 'VIP', description: 'VIP ticket', cost: 10000 },
    {
      type: TicketTypeEnum.GENERAL,
      name: 'General Admission',
      description: 'GA ticket',
      cost: 5000,
    },
  ],
};
