const form = document.querySelector(".personal");
const nameSpans = document.querySelectorAll(".username span");
const ageSpans = document.querySelectorAll(".age span");
const addSpans = document.querySelectorAll(".address span");
const submit = document.querySelector(".last button");
const formWrapper = document.querySelector(".form-wrapper");
const newDiv = document.querySelector(".info");
const textarea = document.querySelector("#write");
const wrapper = document.querySelector('.wrapper')


const namePattern = /^[a-zA-Z]{3,}/;
const agePattern = /^[0-9]{2}/;
const addPattern = /^[a-zA-Z]{5,}/;

window.addEventListener("submit", (e) => {
  e.preventDefault();
});

formValidate = (field, fieldSpans, fieldPattern) => {
  if (fieldPattern.test(field)) {
    fieldSpans[0].style.opacity = "1";
    fieldSpans[0].style.color = "green";

    setTimeout(() => {
      fieldSpans[0].style.opacity = "0";
    }, 2000);
  } else {
    fieldSpans[1].style.opacity = "1";
    setTimeout(() => {
      fieldSpans[1].style.opacity = "0";
    }, 2000);
  }
};

form.addEventListener("keyup", (e) => {
  e.preventDefault();
  let name = form.names.value;
  formValidate(name, nameSpans, namePattern);
});
form.addEventListener("keyup", (e) => {
  e.preventDefault();
  let age = form.age.value;
  formValidate(age, ageSpans, agePattern);
});
form.addEventListener("keyup", (e) => {
  e.preventDefault();
  let add = form.address.value;
  formValidate(add, addSpans, addPattern);
});
submit.addEventListener("click", (e) => {
  e.preventDefault();
  formWrapper.innerHTML = "";
  wrapper.style.height = '110vh'
  formWrapper.classList.add("new");
  newDiv.removeAttribute("style");
  window.scrollTo(0, 0);
});
submit.addEventListener("click", (e) => {
  console.log(textarea.value);
  const now = new Date();
  const message = {
    message: textarea.value,
    sent_at: firebase.firestore.Timestamp.fromDate(now),
    name:form.name.value,

  };
  db.collection("message").add(message);
});
