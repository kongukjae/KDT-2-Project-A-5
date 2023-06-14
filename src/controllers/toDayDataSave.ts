
import dbConnect from "../../utils/DB/dbConfigure";
const apiKey = process.env.alphaApiKey;

// 데이터 받아 오기
fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=${apiKey}`, {
  method: 'GET',

})
  .then(response => {
    return response.json();
  })
  .then(data => {
    const datatest = JSON.stringify(data, null, 2);
    let testdata = JSON.parse(datatest);
    let dayList: string[] = [];
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

    dbConnect.query(`create table IBM_${day.split('-').join('')}(
      open DOUBLE,
      high DOUBLE,
      low DOUBLE,
      close DOUBLE,
      volume DOUBLE
    );`, (err, result) => {
      console.log(result);
      if (err) {
        console.log(err)
      }
      else {
        dbConnect.query(`INSERT INTO IBM_${day.split('-').join('')}(open, high, low, close, volume) VALUES (${Object.values(testdata['Time Series (5min)'][dayList[dayTime]])[0]}, ${Object.values(testdata['Time Series (5min)'][dayList[dayTime]])[1]}, ${Object.values(testdata['Time Series (5min)'][dayList[dayTime]])[2]}, ${Object.values(testdata['Time Series (5min)'][dayList[dayTime]])[3]}, ${Object.values(testdata['Time Series (5min)'][dayList[dayTime]])[4]});`, (err, result) => {
          if (err) {
            console.log(err)
          } else {
            console.log("성공")
          }
        });
        
      }

    })
    // 여기서 데이터를 사용합니다
  })
  .catch(error => {
    console.error(error);
  })
