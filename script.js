const rates = {
    USD: { EUR: 0.92, CZK: 21, USD: 1 },
    EUR: { USD: 1.09, CZK: 24, EUR: 1 },
    CZK: { USD: 1 / 21, EUR: 1 / 24, CZK: 1 }
  };
  
  function convert() {
    const amount = parseFloat(document.getElementById("amount").value);
    const from = document.getElementById("from").value;
    const to = document.getElementById("to").value;
  
    if (isNaN(amount)) {
      document.getElementById("result").textContent = "Enter of sum: ";
      return;
    }
  
    const rate = rates[from][to];
    const result = amount * rate;
  
    document.getElementById("result").textContent =
      `${amount} ${from} = ${result.toFixed(2)} ${to}`;
  }
  