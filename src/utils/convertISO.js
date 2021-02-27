import moment from 'moment';

export function convertISO(time) {
 if (!time) {
  return
 }

 return moment.duration(time).asMinutes();
}