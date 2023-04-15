// 1. При изменении значения в input с id="from", значение содержащееся в нем должно моментально отображаться в span. То есть при печати в input'е тег span также должен меняться.

const changeSpan = () => {
  const input = document.getElementById("from");
  const span = document.querySelector("span");
  span.textContent = input.value;
};
const input = document.getElementById("from");
input.addEventListener("input", changeSpan);

// 2. При клике на кнопку с классом messageBtn необходимо элементу с классом message:
// - добавить два класса: animate_animated и animate_fadeInLeftBig
// - поставить данному элементу стиль visibility в значение 'visible'.

const messageBtn = document.querySelector(".messageBtn");
messageBtn.addEventListener("click", () => {
  const message = document.querySelector(".message");
  message.classList.add("animate_animated", "animate_fadeInLeftBig");
  message.style.visibility = "visible";
});

// 3. Необходимо при отправке формы проверить, заполнены ли все поля в этой форме. Если какое-либо поле не заполнено, форма не должна отправляться, также должны быть подсвечены незаполненные поля (необходимо поставить класс error незаполненным полям). Как только пользователь начинает заполнять какое-либо поле, необходимо, при вводе в данное поле, произвести проверку:
// - Если поле пустое, необходимо данное поле подсветить (поставить класс error данному полю).
// - Если поле было чем-либо заполнено, подсветку (класс error) необходимо убрать.

const form = document.querySelector("form");
const input1 = document.querySelectorAll(".form-control");
form.addEventListener("submit", (event) => {
  input1.forEach((input) => {
    if (input.value === "") {
      input.classList.add("error");
      input.style.border = "2px solid red";
      event.preventDefault();
    }
  });
});

input1.forEach((element) => {
  element.addEventListener("input", (event) => {
    if (event.target.value === "") {
      event.target.classList.add("error");
      event.target.style.border = "2px solid red";
    } else {
      event.target.classList.remove("error");
      event.target.style.border = "";
    }
  });
});
