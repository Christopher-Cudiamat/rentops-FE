export const formatToThousand = (num: number) => {
  let numThousand = num * 1000;
  return numThousand.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export const formatAddComa = (num: number) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}