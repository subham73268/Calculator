function appendValue(value) {
  document.getElementById("result").value += value;
}

function clearResult() {
  document.getElementById("result").value = "";
}

function backspace() {
  let val = document.getElementById("result").value;
  document.getElementById("result").value = val.slice(0, -1);
}

function calculateResult() {
  try {
    document.getElementById("result").value = eval(document.getElementById("result").value);
  } catch {
    document.getElementById("result").value = "Error";
  }
}
