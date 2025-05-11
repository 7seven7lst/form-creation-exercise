export enum TicketTypeEnum {
  GENERAL = 'general',
  VIP = 'vip',
  MEET_AND_GREET = 'meet-and-greet',
}

export interface ITicketType {
  type: TicketTypeEnum;
  name: string;
  description: string;
  cost: number;
}

export interface IBandInfo {
  name: string;
  id: string;
  date: number;
  location: string;
  description_blurb: string;
  imgUrl: string;
  ticketTypes: ITicketType[];
}

export interface IPage<T> {
  data: T[];
  total: number;
  currentPage: number;
  pageSize: number;
}
