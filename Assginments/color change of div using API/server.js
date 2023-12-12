const inputE1 = document.getElementById("Shiva")
console.log(inputE1.Value);
const date = inputE1.Value 

 async function fetchColorByDate(date) {
    
      const apiUrl =`https://colors.zoodinkers.com/api?date=${date}`;
      const response = await fetch(apiUrl);
      const data = await response.json();
      console.log(data.color);
      return data.color; // Assuming the API returns an object with a 'color' property

    }
  
    // Example usage: fetch color for a specific date
  const specificDate = date;
  fetchColorByDate(specificDate);