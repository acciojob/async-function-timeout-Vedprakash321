//your JS code here. If required.
document.getElementById('myForm').addEventListener('submit', async function(event) {
      event.preventDefault();
      const textInput = document.getElementById('text').value;
      const delayInput = document.getElementById('delay').value;

      await delay(delayInput);
      displayMessage(textInput);
    });

    function delay(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }

    function displayMessage(message) {
      const outputDiv = document.getElementById('output');
      outputDiv.textContent = message;
    }