const doing = document.querySelector('.doing');
const hour = document.querySelector('.hour');
const result = document.querySelector('.main4');
const more = document.querySelector('.main5');

const showBtn = document.querySelector('.main3 button');

function showResult(event) {
  event.preventDefault();
  if(!doing.value || !hour.value) {
    alert("모두 채워주세요");
  } else if (hour.value > 24 || hour.value < 1) {
    alert("시간을 정확히 입력해주세요.");
  } else {
    result.firstElementChild.firstElementChild.textContent = doing.value;
    result.lastElementChild.lastElementChild.textContent = Math.floor(10000/hour.value);
    result.classList.remove("hide");
  }
}

showBtn.addEventListener("click", showResult);