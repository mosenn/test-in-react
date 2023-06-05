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

# Testing Function

درون فانکشن test یک arrow function داریم . 
<br/>
<br/>

درون این arrow function میایم کد های مربوط به test رو می نویسیم . 
<br/> 
<br/> 

# render 

از render برای render کردن کامپونتی که قرار هست مورد test قرار بگیره استفاده می کنیم . 
```javascript
test("it show two inputs and a button", () => {
render(<UserForm />)}
```
اگر کامپونت ما props رو داشت می تونیم props رو هم قرار بدیم

```javascript
test("it show two inputs and a button", () => {
render(<UserForm name="" />)}
```

# screen 

از screen برای select کردن element ها استفاده می کنیم . 
<br/>
<br/>
یه جواری مثل select کردن dom در javascript 

```javascript
test("it show two inputs and a button", () => {
render(<UserForm name="" />)
  const inputs = screen.getAllByRole("textbox");
  const button = screen.getByRole("button");
}
```

بعد از render کردن کامپونت UseForm به وسیله screen امدیم element های مد نظر رو select کردیم
<br/>
<br/>
از `getAllByeRole` استفاده شده که زمانی که بیشتر از یک element بخوایم select کنیم
<br/>
<br/>
استفاده میشه و به چیزی که داریم select می کنیم اشاره می کنه.
<br/>
<br/>
از `getByRole` برای select کردن تکی استفاده میشه که اینجا یک button انتخاب کردیم .

<br/>
<br/>
اشاره شد مثل select کردن در جاوا اسکریپت
<br/>
<br/>

```javascript
const inputs = document.querySelectorAll('.inputs')
const button = document.querySelector('button')
}
```
<br/>
<br/>

گفتیم که تمامی `textbox` ها رو بگیره که اشاره داره به 2 تا input درون کامپونت UseForm 
<br/>
<br/>
همینطور گفتیم که `button` رو هم بگیره button که درون کامپونت UseForm هست به اسم add user  

# expect

در نهایت میایم انتظاری که از کامپونت UserForm داریم می نویسیم .
<br/>
<br/>
در اینجا انتظار ما از کامپونت UserForm داشتن یک button و دو input هستش .

```javascript
test("it show two inputs and a button", () => {
render(<UserForm name="" />)
  const inputs = screen.getAllByRole("textbox");
  const button = screen.getByRole("button");
    expect(inputs).toHaveLength(2);
  expect(button).toBeInTheDocument();
}
```
که متغییر های تعریف شده inputs و button رو درونش قرار دادیم . 
<br/>
<br/>

در نهایت برای inptus گفتیم `(2)toHaveLength`  به این مغهوم که درون کامپونت UserForm 
<br/>
<br/>
انتظار داریم که 2 تا input وجود داشته باشه . 
<br/>
<br/>
برای `button` هم گفتیم `()toBeInTheDocument` به این مفهوم که انتظار داریم درون
<br/>
<br/>
کامپونت UserForm یک button وجود داشته باشه .
