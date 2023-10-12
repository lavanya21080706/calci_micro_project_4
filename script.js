document.addEventListener("DOMContentLoaded", function () {
    const upperBox = document.getElementById("upper_box");
    const buttons = document.querySelectorAll(".btn");
    const resetButton = document.querySelector(".reset");
    const equalButton = document.querySelector(".equalsto");
    const delButton = document.querySelector(".del");
  
    let expression = "";
  
    // buttons.forEach((button) => {
    //   button.addEventListener("click", () => {
    //     const value = button.value === 'x' ? '*' : button.value;
    //     expression += value;
    //     upperBox.value = expression;
    //   });
    // });


    buttons.forEach((button) => {
        button.addEventListener("click", () => {
          let value = button.value;
          if (value === 'multiply') {
            value = '*';
          }
          expression += value;
          upperBox.value = expression;
        });
      });
  
    delButton.addEventListener("click", () => {
      expression = expression.slice(0, -1);
      upperBox.value = expression;
    });
  
    resetButton.addEventListener("click", () => {
      expression = "";
      upperBox.value = "0";
    });
  
    equalButton.addEventListener("click", () => {
      try {
        expression = calculateExpression(expression).toString();
        upperBox.value = expression;
      } catch (error) {
        upperBox.value = "Error";
        expression = "";
      }
    });
  
    function calculateExpression(expression) {
      try {
        return eval(expression);
      } catch (error) {
        throw new Error("Invalid expression");
      }
    }
  });
  