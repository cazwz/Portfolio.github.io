function calculate() {
    var input = document.getElementById("numberInput").value;
    
    var number = parseFloat(input);
    
    var result;
    
    if (number <= 10) {
      result = number * 5;
    } else if (number <= 20) {
      result = number * 4;
    } else if (number > 30) {
      result = number * 3.5;
    }
    
    document.getElementById("result").textContent = "R$" + result;
  }
