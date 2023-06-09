import data from "../../utils/naverNewsApi/newsApi";

const price = {
  "2023.06.05": {
    open: 0,
    high: 0,
    low: 0,
    close: 0,
  },
  "2023.06.06": {
    open: 0,
    high: 0,
    low: 0,
    close: 0,
  },
  "2023.06.7": {
    open: 0,
    high: 0,
    low: 0,
    close: 0,
  },
  "2023.06.08": {
    open: 0,
    high: 0,
    low: 0,
    close: 0,
  },
  "2023.06.09": {
    open: 0,
    high: 0,
    low: 0,
    close: 0,
  },
  "2023.06.10": {
    open: 0,
    high: 0,
    low: 0,
    close: 0,
  },
  "2023.06.11": {
    open: 0,
    high: 0,
    low: 0,
    close: 0,
  },
  "2023.06.12": {
    open: 0,
    high: 0,
    low: 0,
    close: 0,
  },
};

const priceArray: {
  date: string;
  open: number;
  high: number;
  low: number;
  close: number;
}[] = Object.entries(price).map(([date, data]) => {
  return {
    date,
    ...data,
  };
});

console.log(priceArray);

export default priceArray;
