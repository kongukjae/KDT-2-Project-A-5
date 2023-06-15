import { Request, Response } from 'express';
import dbConnect from "../../utils/DB/dbConfigure";


class taxiCreatemodule {
  taxiKeyData: string[];
  // taxiValueData: object[];
  constructor(...taxiKeyData: string[] ) {
    this.taxiKeyData = taxiKeyData;
    // this.taxiValueData = taxiValueData;
  }
}

export default function taxiCreate(req: Request, res: Response) {
  const taxiKeyData = Object.keys(req.body);
  const taxiValueData = Object.values(req.body);
  console.log(taxiValueData,taxiKeyData)
  const test  = new taxiCreatemodule(...taxiKeyData)
 
  // const test = taxiCreatemodule(req.body);
  // dbConnect.query(`insert into taxi(`, (err, result) => {

  // });
}

