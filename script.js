const sendBtn = document.getElementById("sendBtn");
const statusText = document.getElementById("status");

sendBtn.addEventListener("click", sendRequest);

function sendRequest() {
  const baseString = "https://trigger.macrodroid.com/7f9096bb-4701-4975-b694-4fa9837dbe85/letothercontactme?msg=";
  const input = document.getElementById("userInput").value;

  if (!input) {
    statusText.textContent = "Please enter some text.";
    return;
  }

  const fullUrl = baseString + encodeURIComponent(input);

  fetch(fullUrl)
    .then(() => {
      statusText.textContent = "Sent";
    })
    .catch(() => {
      statusText.textContent = "Error sending request";
    });
}
