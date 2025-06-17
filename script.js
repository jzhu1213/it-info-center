function checkAnswer(button, isCorrect) {
    const result = document.getElementById("quiz-result");
    if (isCorrect) {
      result.textContent = "✅ Correct!";
      result.style.color = "green";
    } else {
      result.textContent = "❌ Incorrect. Try again.";
      result.style.color = "red";
    }
  }
  
  // 🔧 Mock ServiceNow API Fetch (replace with real instance + auth)
  function fetchIncidents() {
    const incidentList = document.getElementById("incident-list");
    incidentList.innerHTML = "Loading...";
  
    // Replace this block with a real fetch if allowed
    setTimeout(() => {
      const mockData = [
        { number: "INC001", short_description: "Email outage" },
        { number: "INC002", short_description: "VPN access issue" },
      ];
      incidentList.innerHTML = "";
      mockData.forEach((incident) => {
        const li = document.createElement("li");
        li.textContent = `${incident.number}: ${incident.short_description}`;
        incidentList.appendChild(li);
      });
    }, 1000);
  }
  