
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


می خوایم برای text های درون این کامپونت و همینطور شرطی که داریم به وسیله vitest یک تست بنویسیم 

یک فایل به اسم App.test.jsx ایجاد می کنیم . 


<div align='center'>
<img src='https://github.com/mosenn/test-in-react/assets/91747908/d3dfecd0-c92c-43eb-b61b-e3ebeb8eda89' alt='test with vitest'>
</div>


درون فایل App.test.jsx شرو می کنیم به import کردن مواردی که نیاز داریم . 

```javascript
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { expect, test } from "vitest";
```
# testing-library/react

نباز به testing-library/react داریم برای screen, render , fireEvent . 

برای اینکه کامپونت مد نظر رو render کنیم که بعد بتونیم تست رو انجام بدیم به render نیاز داریم

از screen برای select کردن element های render شده استفاده می کنیم

برای اینکه بتونیم click یا هر event دیگه ای رو تست کنیم نیاز به fireEvent داریم .

# testing-library/jest-dom

برای اینکه بتونیم به یک سری متد ها درون test دسترسی داشته باشیم به jset-dom نیاز داریم . 

مثل : 
```javascript
 expect(button).toBeInTheDocument();
```

# vitest 

یک سری api یا همون فانکشن (متد) در اختیار ما قرار میده و می تونیم ازشون استفاده کنیم .

```javascript 
import { expect, test } from "vitest";
````
**نکته**: البته در این فایل تست expect , test رو هم import نشه از vitest به دلیل اینکه از react-library داریم استفاده می کنیم 

به صورت گلوبال به expect , test دسترسی داریم . اگر import vitest رو هم پاک کنیم test ما کار pass میشه .


# test one 

اولین تستی که می خوایم بنوسیم می خوایم چک کنیم ببینم در تگ h1 پیام مد نظر ما نوشته شده یا خیر . 

تگ h1 رو درون کامپونت App.jsx یک بار دیگه ببنیم : 

```javascript
 <h1 role="Hellow">Hello react</h1>
```

می خوایم ببنیم hello react درون تگ h1 هست یا خیر در واقع یک تست براش بنوسیم . 

همیشه اولین کاری که برای تست انجام میدیم این هست که فانکشن تست رو صدا می زنیم . 

```javascript
test("Take Hellow Message", () => {
});
```

این فانکشن در اصل از testing-library/react میاد . می تونیم از it هم استفاده کنیم که کار فانکشن test رو انجام میده 

در واقع it از vitest ایمپورت میشه : 
```javascript 
import {  it } from "vitest";
it("Take Hellow Message", () => {
});
``` 
در ادامه درون arrow function میایم کد های مربوط به test رو قرار میدیم . 

قدم اول render کردن کامپونت مورد نظر هست . 
```javascript
it("Take Hellow Message", () => {
  render(<App />);
});
```

قدم دوم گرفتن element یا tag مورد نظر مون هست . 
```javascript 
it("Take Hellow Message", () => {
  render(<App />);
  const hellowMessage = screen.getByRole("Hellow");

});
````
