import axios from "axios";
import crypto from 'crypto';
import dotenv from "dotenv";
import express, { Request, Response } from "express";
import http from "http";
import path from "path";
import { Server } from "socket.io";
import fs from "fs";
import dbConnect from "../../utils/DB/dbConfigure";
const apiKey = process.env.alphaApiKey;

// 데이터 받아 오기
// fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=${apiKey}`, {
//   method: 'GET',

// })
//   .then(response => {
//     return response.json();
//   })
//   .then(data => {
//     const datatest = JSON.stringify(data, null, 2);
//     fs.writeFile('test.json', datatest, (error) => {

//     });
//     console.log("이게 데이터야", data); // 여기서 데이터를 사용합니다
//   })
//   .catch(error => {
//     console.error(error);
//   })

// 하루 갱신 하고 나서 파일 삭제 및 데이터 업데이틑 하는 모듈로 만들기

// 금일 갱신한 데이터 파일 읽기
const datatest = fs.readFileSync('./test.json', 'utf8');
// 금일 갱신한 데이터 파일 읽기 
let testdata = JSON.parse(datatest);

//  console.log('data', testdata['Time Series (5min)']);
let dayList: string[] = [];
//  console.log(testdata['Time Series (5min)']);
for (const key in testdata['Time Series (5min)']) {
  dayList.push(key)
}

const dayTime = dayList.length - 1;
const day = dayList[dayTime].split(' ', 2)[0];
day.split('-');
day.split('-').join();
// 시간이랑 날짜를 구별해 주는 데이터
console.log('dayList', day.split('-').join(''));
console.log('dadat', Object.values(testdata['Time Series (5min)'][dayList[dayTime]]));

// dbConnect.query(`create table IBM_${day.split('-').join('')}(
//       open DOUBLE,
//       high DOUBLE,
//       low DOUBLE,
//       close DOUBLE,
//       volume DOUBLE
//     );`, (err, result) => {
//   console.log(result);
//   if (err) {
//     console.log(err)
//   }


// })

// 데이터 전날꺼 추가
// dbConnect.query(`insert  INTO IBM_${day.split('-').join('')}( open, high, low,close, volume) VALUES("${Object.values(testdata['Time Series (5min)'][dayList[dayTime]])[0]}",${Object.values(testdata['Time Series (5min)'][dayList[dayTime]])[1]}, ${Object.values(testdata['Time Series (5min)'][dayList[dayTime]])[2]}, ${Object.values(testdata['Time Series (5min)'][dayList[dayTime]])[3]}, ${Object.values(testdata['Time Series (5min)'][dayList[dayTime]])[4]});`, (err, result) => {
//   if (err) {
//     console.log(err)
//   }
//   console.log("성공")
// })




// 초기 값
// parseInt() 함수를 사용하여 문자열을 정수로 변환
const initialValue: number = parseInt('134.2700');
// 최종 값
// parseFloat() 함수를 사용하여 문자열을 부동 소수점 숫자로 변환
const finalValue: number = parseInt('131.3800');


// 증가율 계산
const increasePercent: number = ((finalValue - initialValue) / initialValue) * 100;

// 소수 둘째 자리까지 반올림
const roundedIncreasePercent: number = Math.round(increasePercent * 100) / 100;

console.log(`증가율: ${roundedIncreasePercent.toFixed(2)}%`);
