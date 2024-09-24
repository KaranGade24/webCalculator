const btn = document.querySelector(".all-btn");
const input = document.querySelector(".input-box");
const output = document.querySelector(".output-box")
const historyBtn = document.getElementById("history-btn");
const KeyboardBtn = document.querySelector("#Keyboard-btn");
const historyContainer = document.querySelector(".history-container");
const historyBox = document.getElementById("history");
const clearHistoryBtn = document.getElementById("clear-history-btn");


// all flags
var historyFlag = 0;
var signFlag = 0;
var noFlag = 0,
  dotFlag = 0,
  result = 0,
  temp;
historyCount = 0;


//All click events

// (1) click event for number
btn.addEventListener("click", (e) => {
  a = e.target.innerHTML;

  if (a == "0") {
    numbers(a);
  } else if (a == "1") {
    numbers(a);
  } else if (a == "2") {
    numbers(a);
  } else if (a == "3") {
    numbers(a);
  } else if (a == "4") {
    numbers(a);
  } else if (a == "5") {
    numbers(a);
  } else if (a == "6") {
    numbers(a);
  } else if (a == "7") {
    numbers(a);
  } else if (a == "8") {
    numbers(a);
  } else if (a == "9") {
    numbers(a);
  }

  // (2) click event for signs
  else if (a == "+") {
    signs(a);
  } else if (a == "-") {
    signs(a);
  } else if (a == "*") {
    signs(a);
  } else if (a == "/") {
    signs(a);
  } else if (a == "%") {
    signs(a);
  } else if (a == ".") {
    signs(a);
  } else if (a == "C") {
    clear();
  } else if (a == "=") {
    equall();
  } else if (a == "X") {
    backspace();
  }
});

//All  key events

// (1) Key event for numbers

document.body.addEventListener("keydown", (e) => {
  if (e.key == "0") {
    numbers("0");
  } else if (e.key == "1") {
    numbers("1");
  } else if (e.key == "2") {
    numbers("2");
  } else if (e.key == "3") {
    numbers("3");
  } else if (e.key == "4") {
    numbers("4");
  } else if (e.key == "5") {
    numbers("5");
  } else if (e.key == "6") {
    numbers("6");
  } else if (e.key == "7") {
    numbers("7");
  } else if (e.key == "8") {
    numbers("8");
  } else if (e.key == "9") {
    numbers("9");
  }

  // (2) Key event for signs
  else if (e.key == "+") {
    signs("+");
  } else if (e.key == "-") {
    signs("-");
  } else if (e.key == "*") {
    signs("*");
  } else if (e.key == "/") {
    signs("/");
  } else if (e.key == "%") {
    signs("%");
  } else if (e.key == ".") {
    signs(".");
  } else if (e.key == "c" || e.key == "Delete") {
    clear();
  } else if (e.key == "=") {
    equall();
  } else if (e.key == "Backspace") {
    backspace();
  }
});


// Function for numbers in input box

function numbers(no) {
  if (temp == result) {
    input.innerHTML = "";
    output.innerHTML = "";
    input.innerHTML += no;
    temp = 1;
    result = 2;
  } else if (no == 0 && input.innerHTML == "") {
    input.innerHTML = no;
  } else if (no != 0 && input.innerHTML == "0") {
    input.innerHTML = "";
    input.innerHTML += no;
  } else if (no == "0" && input.innerHTML != "0") {
    input.innerHTML += no;
  } else if (no != 0) {
    input.innerHTML += no;
  }
  signFlag = 0;
}

// Function for signs in input box

function signs(sign) {
  if (sign == "." && dotFlag == 0) {
    if (input.innerHTML == "") {
      input.innerHTML = "0.";
      dotFlag = 1;
    } else if (input.innerHTML != "") {
      input.innerHTML += ".";
      dotFlag = 1;
    }
    // input.innerHTML += sign;
  }
  if (sign != ".") {
    if (input.innerHTML == "") {
      alert(`You can't add sign first`);
    } else if (signFlag == 0) {
      if (output.innerHTML != "") {
        input.innerHTML = output.innerHTML;
        output.innerHTML = "";
      }
      input.innerHTML += sign;
      signFlag = 1;
      dotFlag = 0;
      historyFlag = 0;
    }
  }
  temp = 1;
  result = 2;
}

//Function that clear the input box

function clear() {
  input.innerHTML = "";
  output.innerHTML = "";
  signFlag = 0;
  dotFlag = 0;
  historyFlag = 0;
}

//Function that give result of input box

function equall() {
  try {
    result = eval(input.innerHTML);
    // console.log(result);

    if (result == "Infinity") {
      alert(`can't divide by zero`);
    } else {
      output.innerHTML = result;
      f = 1;
      historyStorage();
    }
  } catch (error) {
    alert("unaccepted input");
    f = 0;
  }
  if (f == 1) {
    temp = result;
  }
}

//Function that clear the input box  one by one

function backspace() {
  temp = input.innerHTML.slice(0, input.innerHTML.length - 1);
  input.innerHTML = temp;
}


historyContainer.style.display = "none";

historyBtn.addEventListener("click", () => {
  // console.log("click");
  // console.log("if");
  historyContainer.style.display = "block";
})

KeyboardBtn.addEventListener("click", () => {
  historyContainer.style.display = "none";
})



function createHistoryElement(ip, op) {
  const newHis = document.createElement("div");
  const brr = document.createElement("br");

  newHis.style.cursor = "pointer";
  newHis.innerHTML = (ip);
  newHis.appendChild(brr);
  const out = op;
  newHis.innerHTML += (`= ${out} <hr>`);

  historyCount = historyBox.children.length;
  // console.log({ historyCount });
  localStorage.setItem('historyCount', (historyCount + 1));




  var localHistory = [
    {
      cal: ip,
      ans: op,
    }
  ]

  keyName = "history" + (historyCount + 1);

  localStorage.setItem(keyName, JSON.stringify(localHistory[0]));

  // console.log(JSON.parse(localStorage.getItem(keyName)));


  newHis.addEventListener("click", () => {
    // console.log(output.innerHTML);
    output.innerHTML = "";
    // console.log(output.innerHTML);

    if (input.innerText != "") {
      if (signFlag) {
        input.innerText += newHis.innerText.split("=")[1];
        signFlag = 0;
      }
      else {
        input.innerText = newHis.innerText.split("=")[1];
        output.innerText = "";
      }
    }
    else {
      input.innerText = newHis.innerText.split("=")[1];
    }
  })

  historyBox.appendChild(newHis);
}


function historyStorage() {
  if (input.innerHTML != "" && output.innerHTML != "" && historyFlag == 0) {
    createHistoryElement(input.innerHTML, output.innerHTML);
    historyFlag = 1;
  }

}

clearHistoryBtn.addEventListener("click", () => {
  const userConfirm = confirm("You want to clear history?");
  if (userConfirm) {
    historyBox.innerHTML = "";
    localStorage.clear();
  }
})




// 
count = localStorage.getItem('historyCount');

// console.log({ count });
for (let i = 1; i <= count; i++) {
  data = JSON.parse(localStorage.getItem(`history${i}`));
  // console.log({ data });
  createHistoryElement(data.cal, data.ans)
}

