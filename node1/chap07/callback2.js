let obj = {
  count: 0,
  startTimer: function () {
    console.log(this.count)
    let callback = () => {
      console.log(this.count++)
    }
    setInterval(callback, 1000)
  },
}

obj.startTimer()

/*

function 키워드로 구현한 함수와 화살표 함수의 차이점은,
function 키워드 함수에는 this 문제가 발생할 수 있지만, 
화살표 함수에서는 this 문제가 발생하지 않는다는 점이다.

화살표 함수가 콜백함수로 전달되어서 호출될 때,
화살표 함수 본문의 this는, 화살표 함수가 구현된 소스코드 문맥에서의 this 이다.

function 키워드 함수가 콜백함수로 전달되어 호출될 때,
function 키워드 함수 본문의 this는, 이 함수가 호출되는 문맥에서의 this 이다.

*/
