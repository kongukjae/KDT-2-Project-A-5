const axios = require('axios');

const endpoint = 'https://apis.data.go.kr/1160100/service/GetStockSecuritiesInfoService';
const apiKey = 'M809KE66iMKV1ZjIibyUDIjUL/zCxYoq93RS+c3BVh8o0wLSRKm/dHq72CEXBKG6IamCPeOwdQoJ9kxOppskFg=='; // 여기에 인증키를 입력하세요

// 인증키 인코딩
const encodedApiKey = encodeURIComponent(apiKey);

// XML 요청 바디
const xmlBody = `
<Request>
  <parameter1>value1</parameter1>
  <parameter2>value2</parameter2>
  ...
</Request>
`;

// XML 요청 헤더 설정
const headers = {
  'Content-Type': 'text/xml',
};

// XML 요청 보내기
axios.post(endpoint, xmlBody, { headers })
  .then(response => {
    console.log(response.data);
    // 요청에 대한 응답 처리
  })
  .catch(error => {
    console.error(error);
    // 요청 실패 시 에러 처리
  });
