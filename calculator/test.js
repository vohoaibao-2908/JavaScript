var input = document.getElementById('input'), // input/output button
number = document.querySelectorAll('.numbers div'), // number buttons
operators = document.querySelectorAll('.operators div'), // operator buttons
result = document.getElementById('result'), // equal button
clear = document.getElementById('clear'), // clear button
resultDisplayed = false; // flag to keep an eye on what output is displayed

//lấy phần tử trong
for (var i = 0; i < number.length; i++) {
  number[i].addEventListener("click", function (e) {
    var current = input.innerHTML;
    var lastChar = current[current.length - 1];

    //tiếp tục nhập khi chưa nhấn bằng
    if (resultDisplayed === false) {
      input.innerHTML += e.target.innerHTML;
    } else if (
      (resultDisplayed && lastChar === "+") ||
      lastChar === "-" ||
      lastChar === "x" ||
      lastChar === "÷"
    ) {
      // continous sau khi đã có kết quả
      resultDisplayed = false;
      input.innerHTML += e.target.innerHTML;
    } else {
      // tiếp tục thực hiện phép toán mới
      resultDisplayed = false;
      input.innerHTML = "";
      input.innerHTML += e.target.innerHTML;
    }
  });
}
// operator
for (var i = 0; i < operators.length; i++) {
  operators[i].addEventListener("click", function (e) {
    var current = input.innerHTML;
    var lastChar = current[current.length - 1];
    if (
      lastChar == "+" ||
      lastChar == "-" ||
      lastChar == "x" ||
      lastChar == "÷"
    ) {
      var newString =
        current.substring(0, current.length - 1) + e.target.innerHTML;
      console.log(newString);
      input.innerHTML = newString;
    } else if (current.length == 0) {
      input.innerHTML = "input number first";
    } else {
      input.innerHTML += e.target.innerHTML;
    }
  });
}

//result
result.addEventListener("click", function () {
  //tách chuỗi lấy toán tử
  var inputString = input.innerHTML;

  var number = inputString.split(/\+|\-|\x|\÷/g);
  var operators = inputString.replace(/[0-9]|\./g, "").split("");

  var divide = operators.indexOf("÷");
  while (divide != -1) {
    number.splice(divide, 2, number[divide] / number[divide + 1]);
    operators.splice(divide, 1);
    divide = operators.indexOf("÷");
  }
  var multiply = operators.indexOf("x");

  while (multiply != -1) {
    number.splice(multiply, 2, number[multiply] * number[multiply + 1]);
    operators.splice(multiply, 1);
    multiply = operators.indexOf("x");
  }
  var substrat = operators.indexOf("-");
  while (substrat != -1) {
    number.splice(substrat, 2, (number[substrat] - number[substrat+1]));
    operators.splice(substrat, 1);
    substrat = operators.indexOf("-");
  }
  var add = operators.indexOf('+');
  while (add != -1) {
    number.splice(add, 2, parseFloat(number[add]) + parseFloat(number[add + 1]));
    operators.splice(add, 1);
    add = operators.indexOf("+");
  }

  input.innerHTML = number[0];
  resultDisplayed = true;
});
//clear
clear.addEventListener("click", function () {
  input.innerHTML = "";
});
