

//Business Logic
function add(number1, number2) {
    return number1 + number2;
  }
  
  function subtract(number3, number4) {
    return number3 - number4;
  }
  
  function multiply(number5, number6) {
    return number5 * number6;
  }
  
  function divide(number7, number8) {
    return number7 / number8;
  }


 
  // User Interface Logic
$(document).ready(function() {
    $("form#operationOne").submit(function(event) {
        const number1 = parseFloat($("#add1").val());
        const number2 = parseFloat($("#add2").val());
        const result = add(number1, number2);
        $("#outputOne").text(result);
    

      event.preventDefault();
    });

    $("form#operationTwo").submit(function(event) {
      const number3 = parseFloat($("#subtract1").val());
      const number4 = parseFloat($("#subtract2").val());
      const result1 = subtract(number3, number4);
      $("#outputTwo").text(result1);

      event.preventDefault();
    });

    $("form#operationThree").submit(function(event) {
      const number5 = parseFloat($("#multiply1").val());
      const number6 = parseFloat($("#multiply2").val());
      const result2 = multiply(number5, number6);
      $("#output3").text(result2);

      event.preventDefault();
    });

    
    $("form#operationFour").submit(function(event) {
      const number7 = parseFloat($("#divide1").val());
      const number8 = parseFloat($("#divide2").val());
      const result3 = divide(number7, number8);
      $("#output4").text(result3);

      event.preventDefault();
    });
  });