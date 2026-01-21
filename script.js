/* ===== STATE ===== */
    const display = document.getElementById("display");
    let currentInput = "";

    /* ===== APPEND VALUE TO DISPLAY ===== */
    function append(value) {
      if (display.textContent === "0") {
        currentInput = value;
      } else {
        currentInput += value;
      }
      display.textContent = currentInput;
    }

    /* ===== CLEAR ALL ===== */
    function clearAll() {
      currentInput = "";
      display.textContent = "0";
    }

    /* ===== DELETE LAST CHARACTER ===== */
    function deleteLast() {
      currentInput = currentInput.slice(0, -1);
      display.textContent = currentInput || "0";
    }

    /* ===== CALCULATE RESULT ===== */
    function calculate() {
      try {
        const result = eval(currentInput);
        display.textContent = result;
        currentInput = String(result);
      } catch {
        display.textContent = "Error";
        currentInput = "";
      }
    }