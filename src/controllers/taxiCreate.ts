import { Request, Response } from 'express';
import dbConnect from "../../utils/DB/dbConfigure";


export default function taxiCreate(req: Request, res: Response){
  console.log(req.body);
}

