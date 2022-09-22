export const timeSince = (date: Date) => {
  if (typeof date !== "object") {
    date = new Date(date);
  }

  const seconds = Math.floor((new Date().valueOf() - date.valueOf()) / 1000);
  let intervalType;

  let interval = Math.floor(seconds / 31536000);
  if (interval >= 1) {
    intervalType = "year";
  } else {
    interval = Math.floor(seconds / 2592000);
    if (interval >= 1) {
      intervalType = "month";
    } else {
      interval = Math.floor(seconds / 86400);
      if (interval >= 1) {
        intervalType = "day";
      } else {
        interval = Math.floor(seconds / 3600);
        if (interval >= 1) {
          intervalType = "hour";
        } else {
          interval = Math.floor(seconds / 60);
          if (interval >= 1) {
            intervalType = "minute";
          } else {
            interval = seconds;
            intervalType = "second";
          }
        }
      }
    }
  }

  if (interval > 1 || interval === 0) {
    intervalType += "s";
  }

  return interval + " " + intervalType;
};

export const breakpoints = {
  xs: 0, // extra-small
  sm: 600, // small
  md: 900, // medium
  lg: 1200, // large
  xl: 1536, // extra-large
};
export const fetcher = (url: string) => fetch(url).then((res) => res.json());

/**
 *
 * @param arr It takes any type of array as parameter
 * @returns it returns unique array
 */

export const uniqArray = (arr: any[]): any[] =>
  Object.values(
    arr.reduce((acc, cur) => Object.assign(acc, { [cur.id]: cur }), {})
  );


export const startCase = (value: string | string[]): string => {
  if (!value || typeof value !== 'string') return '';

  return value.split(' ').map((item: string) => {
    const firstChar = item.charAt(0);
    const lastChars = item.split(firstChar)[1];

    return firstChar.toUpperCase() + lastChars
  }).join(" ")
}