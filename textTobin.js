function convert() {
  const input = document.querySelector("#text").value;
  const output = document.querySelector("#ans");
  output.innerHTML = "";
  for (var i = 0; i < input.length; i++) {
    output.innerHTML += input[i].charCodeAt(0).toString(2) + " ";
  }
}

// Copy function

function copyText() {
  // Get the text field
const output = document.querySelector("#ans");
  // Select the text field
  output.select();
  output.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text inside the text field
  navigator.clipboard.writeText(output.value);

  // Alert the copied text
  alert("Copied the text: " + output.value);
}
