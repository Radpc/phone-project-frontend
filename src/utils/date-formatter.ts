import { DateTime } from 'luxon';

export const formatISODate = (dateString: string, includeTime?: boolean) => {
  return (
    DateTime.fromISO(dateString).toFormat(
      'dd/MM/yyyy' + (includeTime ? ' HH:mm' : '')
    ) + (includeTime ? 'h' : '')
  );
};
