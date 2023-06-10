
# text & condition test 
در این قسمت یک پروژه react رو داریم که حاوی چند tag p و یک tag h1 رو داریم . 

همینطور یک button که وظیفه true / false کردن یک state رو داره . 

با true و false شدن state یک text که درون tag p قرار داره تغییر می کنه . 

 کامپونت app.jsx به صورت زیر هست :



```javascript
import { useState } from "react";

function App() {
  const [showMessage, setShowMessage] = useState(true);

  const handleMessage = () => {
    setShowMessage(!showMessage);
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      <h1 role="Hellow">Hello react</h1>
      <p role="vitest">this test text with vitest</p>
      <button onClick={handleMessage}>Change Message</button>
      <p role="showMessage"> {showMessage ? " hi ✌" : " bye 👀"}</p>
    </div>
  );
}

export default App;
 
```
