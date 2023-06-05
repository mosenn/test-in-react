# Todo List Testing 

یک پروژه ساده todo list داریم با reactjs . 
<br/> 
<br/> 
دو کامپونت داریم یکی برای form که دو input دورنش قرار گرفته 
<br/>
<br/>
یگ کامپونت به اسم UserList که user های که درون input ها وارد می کنیم به ما نشون میده

<br/> 
<br/> 

<p align="center">
 <img src='https://github.com/mosenn/test-in-react/assets/91747908/4152719c-314c-495e-b647-70b8723b110c' alt="react component" />
 <p>
<br/> 
<br/> 
در این بخش می خوایم یک تست ساده برای کامپونت UserForm بنویسیم .
<br/> 
<br/> 
  قبلا اشاره کردیم که هر کامپونت رو یک unit در نظر می گیریم .
<br/> 
<br/>
  برا هر unit یک test می نویسیم که میشه همون unit test . 
  <br/>
  <br/> 
  کاری که پروژه تودو لیست ما به طور کلی انجام میده 
   <br/>
  <br/> 
   دو input اطلاعات کاربر رو می گیرند . 
     <br/>
  <br/> 
  در نهایت value اینپوت ها  ذخیره شده و به کامپونت UserList پاس داده میشه
       <br/>
  <br/> 
  درون کامپونت UserList اطلاعات رو نشون داده میشه به وسیله map . 
  

https://github.com/mosenn/test-in-react/assets/91747908/25c5c88d-5f52-4d93-b08f-48fff62fd828


  
<br/>
  <br/>
  
  یک فایل test درون پروژه ایجاد می کنیم اسم این فایل رو گذاشتیم UserForm.test.jsx 
<p align='center'>
<img src='https://github.com/mosenn/test-in-react/assets/91747908/14e2fd37-fca4-4a45-89af-8dab4714e886'/>
</p>

درون فایل test که ایجاد کردیم میایم کامپونتی که مد نظرمون هست رو تست کنیم رو import می کنیم .
```javascript
import UserForm from "./components/UseForm";
```

میایم testing-library/react رو import می کنیم در بخش قبل نصب کردیم 

```javascript
import { render, screen } from "@testing-library/react";
```

همینطور برای این که بتونیم به element های صحفه دسترسی داشته باشیم . 
<br/>
<br/>
میایم testing-library/jest-dom/extend-expect رو هم import می کنیم . 

```javascript
import "@testing-library/jest-dom/extend-expect";
```

کل import های که نیاز داریم به صورت یکجا :
```javascript
import UserForm from "./components/UseForm";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
```
<br/>
<br/>
قدم بعدی فانکشن ()test رو ایجاد می کنیم . 

```javascript
test("it show two inputs and a button", () => {}
```
گفتیم که می تونیم یک string قرار بدیم برای نشون دادن یک پیام مربوط به اون تست . 
<br/>
<br/>
از اونجای که قرار وجود داشتن input و button مربوط به کامپونت UserForm رو چک کنیم . 
<br/>
<br/>
پیام `it test two inptus and a button` رو قرار دادیم
<br/>
<br/>
البته شما می تونید هر چیزه دیگه ای بنویسید با توجه به نیاز خودتون 
