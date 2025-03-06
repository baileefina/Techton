const editor = document.getElementById('editor');
const runButton = document.getElementById('runButton');
const output = document.getElementById('output');

runButton.addEventListener('click', () => {
  try {
    // Temporarily override console.log
    const originalConsoleLog = console.log;
    console.log = function(message) {
      output.textContent += message + "\n";
    };

    output.textContent = '';

    // Execute the code
    const code = editor.value;
    eval(code);

    // Restore the original console.log
    console.log = originalConsoleLog;

  } catch (error) {
    output.textContent = "Error: " + error.message;
  }
});
