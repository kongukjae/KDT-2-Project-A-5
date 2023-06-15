import { Request, Response } from 'express';
import dbConnect from "../../utils/DB/dbConfigure";


class taxiCreatemodule {
  taxiData: object[];
  constructor(...taxiData: Object[]) {
    this.taxiData = taxiData;
  }
}

export default function taxiCreate(req: Request, res: Response) {
  const taxiData = Object.entries(req.body);
  const test = new taxiCreatemodule(...taxiData)
  console.log(test)
  // const test = taxiCreatemodule(req.body);
  dbConnect.query('insert into taxi', (err, result) => {

  });
}

