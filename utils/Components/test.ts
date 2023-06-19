let test : any[]=[];
let test2 = [['하이1',['테스트1',{'안녕?1' : 'ss'}]],['하이2',['테스트2',{'안녕?2' : 'ss'}]],['하이3',['테스트3',{'안녕?3' : 'ss'}]]]
test2.map((data :any, index:number)=> {
  test.push(data[1][1])
})
console.log(test)