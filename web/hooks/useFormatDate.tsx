import moment from "moment";

export default function useFormatDate(isoString: string) {
  const formatedDate = moment(isoString, "YYYY-MM-DDTHH:mm:ssZ").fromNow();

  return formatedDate;
}
