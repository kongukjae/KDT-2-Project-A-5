
import fs from 'fs'
import axios from 'axios'

// 포켓몬 API의 기본 URL
const baseUrl = 'https://pokeapi.co/api/v2';

// 모든 포켓몬 이름을 가져오는 API 엔드포인트
const allPokemonEndpoint = '/pokemon?limit=1000';

// API 요청 보내기
axios.get(baseUrl + allPokemonEndpoint)
  .then(response => {
    const pokemonList = response.data.results.map(pokemon => pokemon.name);
    const jsonData = JSON.stringify(pokemonList);

    // JSON 데이터를 파일로 저장
    fs.writeFile('pokemon_names.json', jsonData, err => {
      if (err) {
        console.error('파일 저장 중 에러 발생:', err);
      } else {
        console.log('JSON 파일 저장이 완료되었습니다.');
      }
    });
  })
  .catch(error => {
    console.error('API 요청 중 에러 발생:', error);
  });

