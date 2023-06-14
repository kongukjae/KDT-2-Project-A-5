import express from "express";
import dbConnect from "../../utils/DB/dbConfigure";

class yesterStockData {
  stockNaem: string;
  day: string;
  constructor(stockNaem: string, day: string) {
    this.stockNaem = stockNaem;
    this.day = day;
  }
}


export default function (req: express.Request, res: express.Response) {
  const data = new yesterStockData(req.body.stockName, req.body.day);
  console.log('이것은 data', data.stockNaem);
  dbConnect.query(`select open from ${data.stockNaem}_${data.day}`, (err, result) => {
    if (err) {
      console.log(err);
    }
    console.log(result);
  })

}
