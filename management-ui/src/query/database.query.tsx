import { useQuery } from '@tanstack/react-query';
import { MINUTES, getAPI } from 'src/config/ultis';
const { apiURL } = JSON.parse(localStorage.getItem('config') || '{}');
const fetchBinlog = async () => {
  const requests = servers.map((server) => {
    return getAPI(`${apiURL}/binlog?server=${server}`).then((response) => ({
      [server]: response.data,
    }));
  });
  const results = await Promise.all(requests);
  return results.reduce((acc, result) => ({ ...acc, ...result }), {}) as any;
};
export const useDatabaseQuery = () => {
  return useQuery({
    queryKey: ['databases'],
    queryFn: fetchBinlog,
    staleTime: 5 * MINUTES,
    gcTime: Infinity,
  });
};
const servers = ['production', 'sft'].sort();
