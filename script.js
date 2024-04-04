const data ={
    "customerDetails": {
      "name": "Customer Name",
      "address": "Customer Address",
      "phone": "Customer Phone",
      "cardNumber": "454546792834XXXX"
    },
    "summary": {
      "statementDate": "01-09-2022",
      "statementDuration": "01-08-2022 to 01-09-2022",
      "dueDate": "16-10-2022",
      "totalDue": "15000",
      "minimumDue": "750",
      "creditLimit": "50000",
      "availableCreditLimit": "45000",
      "availableCashLimit": "40000"
    },
    "calculation": {
      "openingBalance": "0",
      "debit": "17000",
      "financeCharge": "0",
      "credit": "2000",
      "totalDue": "15000"
    },
    "transactions": [
      {
        "date": "10-08-2022",
        "descriptions": "Amazon India",
        "debit": "9000",
        "credit": "0"
      },
      {
        "date": "14-08-2022",
        "descriptions": "Amazon India",
        "debit": "6000",
        "credit": "0"
      },
      {
        "date": "17-08-2022",
        "descriptions": "Amazon India",
        "debit": "0",
        "credit": "2000"
      },
      {
        "date": "19-08-2022",
        "descriptions": "Amazon India",
        "debit": "2000",
        "credit": "0"
      }
    ]
  }
  document.addEventListener('DOMContentLoaded', () => {

// Function to find summary cell by label
function findSummaryCell(key) {
    const summaryLabels = document.querySelectorAll('.summary-cell .summary-label');
    for (const label of summaryLabels) {
      if (label.textContent.trim() === key) {
        return label.parentNode;
      }
    }
    return null;
  }
  
  // Function to find calculation cell by label
  function findCalculationCell(key) {
    const calculationLabels = document.querySelectorAll('.calculation-cell .calculation-label');
    for (const label of calculationLabels) {
      if (label.textContent.trim() === key) {
        return label.parentNode;
      }
    }
    return null;
  }
  
  // Function to render summary
  function renderSummary(data) {
    const summary = data.summary;
    for (const key in summary) {
      const summaryCell = findSummaryCell(key);
      if (summaryCell) {
        const valueDiv = document.createElement('div');
        valueDiv.classList.add('summary-value');
        valueDiv.textContent = summary[key];
        summaryCell.appendChild(valueDiv);
      }
    }
  }
  
  // Function to render calculation
  function renderCalculation(data) {
    const calculation = data.calculation;
    for (const key in calculation) {
      const calculationCell = findCalculationCell(key);
      if (calculationCell) {
        const valueDiv = document.createElement('div');
        valueDiv.classList.add('calculation-value');
        valueDiv.textContent = calculation[key];
        calculationCell.appendChild(valueDiv);
      }
    }
  }
  
  // Function to render transactions
  function renderTransactions(data) {
    const transactionsTable = document.getElementById('transactions');
    const tbody = transactionsTable.querySelector('tbody');
    const transactions = data.transactions;
  
    transactions.forEach(transaction => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${transaction.date}</td>
        <td>${transaction.descriptions}</td>
        <td>${transaction.debit}</td>
        <td>${transaction.credit}</td>
      `;
      tbody.appendChild(tr);
    });
  }
  
  // Render all sections
  function renderAllSections(data) {
    renderSummary(data);
    renderCalculation(data);
    renderTransactions(data);
  }
  
  // Call renderAllSections with the provided data
  renderAllSections(data);
  
  
});