import React from "react";

function App() {
  const handleClick = async (amount) => {
    try {
      const response = await fetch(
        "http://localhost:2000/create-checkout-session",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            items: [{ id: 1, quantity: 1 }],
            amount: parseInt(amount),
          }),
        }
      );

      if (response.ok) {
        const { url } = await response.json();
        window.location = url;
        console.log(url);
      } else {
        const error = await response.json();
        throw new Error(error.error);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    // <div>
    //   <button onClick={() => handleClick(100)}>Pay $100</button>
    //   <button onClick={() => handleClick(200)}>Pay $200</button>
    //   <button onClick={() => handleClick(10)}>Pay $10</button>
    // </div>
    <div className="ap">
      <div class="rectangle" style={{ backgroundColor: "black" }}></div>
      <button onClick={() => handleClick(100)}>Pay $100</button>
      <div class="rectangle" style={{ backgroundColor: "red" }}></div>
      <button onClick={() => handleClick(200)}>Pay $200</button>
      <div class="rectangle" style={{ backgroundColor: "black" }}></div>
      <button onClick={() => handleClick(130)}>Pay $130</button>{" "}
      <div class="rectangle" style={{ backgroundColor: "red" }}></div>
      <button onClick={() => handleClick(1400)}>Pay $1400</button>
      <div class="rectangle" style={{ backgroundColor: "black" }}></div>
      <button onClick={() => handleClick(2100)}>Pay $2100</button>
      <div class="rectangle" style={{ backgroundColor: "red" }}></div>
      <button onClick={() => handleClick(110)}>Pay $110</button>{" "}
      <div class="rectangle" style={{ backgroundColor: "red" }}></div>
      <button onClick={() => handleClick(100)}>Pay $100</button>
      <div class="rectangle" style={{ backgroundColor: "black" }}></div>
      <button onClick={() => handleClick(1200)}>Pay $1200</button>
      <div class="rectangle" style={{ backgroundColor: "red" }}></div>
      <button onClick={() => handleClick(10)}>Pay $10</button>
    </div>
  );
}

export default App;
// "proxy": "http://localhost:3001",
