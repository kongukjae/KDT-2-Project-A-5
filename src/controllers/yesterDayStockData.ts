import express from "express";
 
export default function(req: express.Request, res: express.Response){
    console.log('이것은 data', req.body);

    next();
}
