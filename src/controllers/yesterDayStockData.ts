import express from "express";
import dbConnect from "../../utils/DB/dbConfigure";

class yesterStockData {
  stockName: string;
  day: string;
  constructor(stockName: string, day: string) {
    this.stockName = stockName;
    this.day = day;
  }
}


export default function (req: express.Request, res: express.Response) {
  const data = new yesterStockData(req.body.stockName, req.body.day);
  // console.log('이것은 data', data.stockNaem);
  dbConnect.query(`select open from ${data.stockName}_${data.day}`, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  })

}
