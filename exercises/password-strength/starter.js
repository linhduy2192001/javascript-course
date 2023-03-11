window.addEventListener("load", function () {
  const input = document.querySelector(".input");
  input.addEventListener("input", function (e) {
    const value = e.target.value;
    const checkLength = e.target.parentNode.querySelector(".check-length");
    const checkItems = e.target.parentNode.querySelectorAll(".check-item");
    const checkUpper = e.target.parentNode.querySelector(".check-upper");
    const checkNumber = e.target.parentNode.querySelector(".check-number");
    const checkSpecial = e.target.parentNode.querySelector(".check-special");

    if (!value) {
      [...checkItems].forEach((item) => {
        item.classList.remove("active");
        item.classList.remove("unactive");
      });
      return;
    }
    if (value.length < 8) {
      checkLength.classList.add("unactive");
    } else {
      checkLength.classList.remove("unactive");
      checkLength.classList.add("active");
    }

    // if (!/[A-Z]/.test(value)) {
    //   checkUpper.classList.add("unactive");
    //   checkUpper.classList.remove("active");
    // } else {
    //   checkUpper.classList.add("active");
    //   checkUpper.classList.remove("unactive");
    // }
    // if (!/[0-9]/.test(value)) {
    //   checkNumber.classList.add("unactive");
    //   checkNumber.classList.remove("active");
    // } else {
    //   checkNumber.classList.add("active");
    //   checkNumber.classList.remove("unactive");
    // }
    // if (!/[/[\]#?!@$%^&*-]/.test(value)) {
    //   checkSpecial.classList.add("unactive");
    //   checkSpecial.classList.remove("active");
    // } else {
    //   checkSpecial.classList.add("active");
    //   checkSpecial.classList.remove("unactive");
    // }
    passwordInputClass(checkUpper, value, /[A-Z]/);
    passwordInputClass(checkNumber, value, /[0-9]/);
    passwordInputClass(checkSpecial, value, /[/[\]#?!@$%^&*-]/);

    function passwordInputClass(selector, value, regex) {
      if (!regex.test(value)) {
        selector.classList.add("unactive");
        selector.classList.remove("active");
      } else {
        selector.classList.add("active");
        selector.classList.remove("unactive");
      }
    }
  });
});
