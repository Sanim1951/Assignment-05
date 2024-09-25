document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("blog-btn").addEventListener("click", function () {
      console.log("blog btn clicked");
      window.location.href = "../blog.html";
    });
  
  
  
    let currentBalance = document.getElementById("currency");
    let history = [];
  
    document
      .getElementById("donation-btn")
      .addEventListener("click", function () {
        document.getElementById("donation-container").classList.remove("hidden");
        document.getElementById("history-section").classList.add("hidden");
        this.classList.add("btn-success");
        document.getElementById("history-btn").classList.remove("btn-success");
      });
  
    document.getElementById("history-btn").addEventListener("click", function () {
      document.getElementById("history-section").classList.remove("hidden");
      document.getElementById("donation-container").classList.add("hidden");
      this.classList.add("btn-success");
      document.getElementById("donation-btn").classList.remove("btn-success");
      updateHistory();
    });
  
    function handleDonation(cardId, donationAmountId, cardBalanceId, cardTitle) {
      const donateButton = document.getElementById(cardId);
      donateButton.addEventListener("click", function () {
        console.log(`${cardId} clicked`);
  
        const donationAmount = document.getElementById(donationAmountId).value;
        const cardBalance = document.getElementById(cardBalanceId).innerText;
        const donationNumber = parseFloat(donationAmount);
        const cardBalanceNumber = parseFloat(cardBalance);
        const currentBalanceNumber = parseFloat(currentBalance.innerText);
  
        if (donationNumber > 0 && donationNumber <= currentBalanceNumber) {
          const newCardBalance = donationNumber + cardBalanceNumber;
          document.getElementById(cardBalanceId).innerText = newCardBalance;
  
          const newOverallBalance = currentBalanceNumber - donationNumber;
          currentBalance.innerText = newOverallBalance;
  
          const date = new Date().toLocaleString();
          history.push({
            title: cardTitle,
            amount: donationNumber,
            date: date,
          });
  
          alert(
            `You donated ${donationNumber} BDT. New card balance: ${newCardBalance} BDT. New overall balance: ${newOverallBalance} BDT.`
          );
        } else {
          alert("Invalid donation amount or insufficient balance.");
        }
      });
    }
  
    handleDonation(
      "donate1",
      "inputAmount1",
      "card1Currency",
      "Flood at Noakhali, Bangladesh"
    );
    handleDonation(
      "donate2",
      "inputAmount2",
      "card2Currency",
      "Flood Relief in Feni, Bangladesh"
    );
    handleDonation(
      "donate3",
      "inputAmount3",
      "card3Currency",
      "Aid for Injured in the Quota Movement"
    );
  
    function updateHistory() {
      const historyList = document.getElementById("history-list");
      historyList.innerHTML = "";
  
      history.forEach((entry) => {
        const historyItem = document.createElement("li");
        historyItem.textContent = `${entry.amount} BDT donated to ${entry.title} on ${entry.date}`;
        historyList.appendChild(historyItem);
      });
    }
  });