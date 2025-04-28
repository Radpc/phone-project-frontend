import { DateTime } from 'luxon';

export const formatISODate = (dateString: string) => {
  return DateTime.fromISO(dateString).toFormat('dd/MM/yyyy');
};
