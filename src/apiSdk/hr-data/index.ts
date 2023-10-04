import queryString from 'query-string';
import { HrDataInterface, HrDataGetQueryInterface } from 'interfaces/hr-data';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getHrData = async (query?: HrDataGetQueryInterface): Promise<PaginatedInterface<HrDataInterface>> => {
  return fetcher('/api/hr-data', {}, query);
};

export const createHrData = async (hrData: HrDataInterface) => {
  return fetcher('/api/hr-data', { method: 'POST', body: JSON.stringify(hrData) });
};

export const updateHrDataById = async (id: string, hrData: HrDataInterface) => {
  return fetcher(`/api/hr-data/${id}`, { method: 'PUT', body: JSON.stringify(hrData) });
};

export const getHrDataById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/hr-data/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteHrDataById = async (id: string) => {
  return fetcher(`/api/hr-data/${id}`, { method: 'DELETE' });
};
