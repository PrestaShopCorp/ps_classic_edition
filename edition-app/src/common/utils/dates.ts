import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
import "dayjs/locale/fr";

dayjs.extend(localizedFormat);

export const formatTimestamp = (value: number, format = "LL", locale = navigator.language): string =>
  dayjs.unix(value).locale(locale).format(format);
