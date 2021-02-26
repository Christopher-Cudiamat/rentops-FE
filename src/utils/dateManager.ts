import moment from "moment";


export const isPropertyNew = (createdDate: Date | string) => {
  const threeDaysAgoDate = moment().subtract(3, 'days');
  const todaysDate = new Date();
  const propertyIsNew = moment(createdDate).isBetween(threeDaysAgoDate, todaysDate);
  return propertyIsNew;
}