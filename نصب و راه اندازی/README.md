# vitejs در unit test نصب و راه اندازی

امروزه برای نصب ریکت از
استفاده میشه پس طبعا نیاز داریم که در قدم اول vitejs
رو نصب کنیم vitejs

### install

```javascript
npm create vite@latest
```

به روش های دیگه ای می تونید نصب رو انجام بدید که
مشاهده کنید vitejs می تونید درون سایت

### website

[https://vitejs.dev/guide/](https://vitejs.dev/guide/)

### install vitest

برای اینکه بتونیم تست رو درون
انجام بدیم نیاز داریم به یک کتابخونه به اسم vitejs
vitest

```javascript
npm install -D vitest
```

برنامه development از اونجا که تست صرفا در
استفاده میشه
استفاده شده -D از
قرار میگیره dev-dependency درون vitest در نتیجه

```javascript
"devDependencies": {"vitest": "^0.31.4"}
```

### vitest Website

[https://vitest.dev](https://vitest.dev)

### install testing Library

بعد از اینکه نصب انجام شد
نوبته نصب لایبری های تست هستش

```javascript
npm i jsdom
npm i @testing-library/jest-dom
npm i @testing-library/react
npm i @testing-library/user-event
```

می تونید همه رو یک جا به این صورت نصب کنید

```javascript
npm i jsdom @testing-library/jest-dom @testing-library/react @testing-library/user-event
```

### vitejs.config.js

زمانی که یک پروژه ریکت به وسیله
نصب می کنیم یک فایل برای ما ایجاد می کنه vitejs
vitejs.config.js به اسم
نیاز هست یک سری کانفیگ بهش اضافه کنیم

برای دیدن کانفیگ های بیشتر می تونید به لینک زیر مراجعه کنید

[ https://vitejs.dev/config](https://vitejs.dev/config)

```javascript
/// <reference types="vitest"/>
/// <reference types="vite/client"/>

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    css: true,
  },
});
```

در قسمت بالا 2 تا رفرنس داریم که هر دو نیاز هست اضافه شه
اشاره می کنه به
vitejs و vitest

```javascript
/// <reference types="vitest"/>
/// <reference types="vite/client"/>
```

دقت داشته باشید که حتما 3 تا بک اسلش رو بزارید
در غیر این صورت با ارور مواجه می شید

به صورت دیفالت هست و نیاز به نوشتن اش نیست `defineConfig`
اما چیزی که نیاز هست بهش اضافه کنیم
هستش test کانفیگ های مربوط به

```javascript
  test: {
    globals: true,
    environment: "jsdom",
    css: true,
  },
```

<html dir='rtl'>
<body>
<p>`globals`
اجازه میده فانکشنی رو به اسم 
<span>`test()`</span>
</p>
<p>
صدا بزنیم و بهش دسترسی داشته باشم</p>
</body>
</html>

<hr/>
اجازه میده که فانکشنی به اسم `globals`
رو صدا بزنیم و بهش دسترسی داشته باشیم `test()`

نوع متغییر رو مشخص می کنه `environment`
استفاده کنه jsdom که اینجا گفتیم از کتابخونه

می زاریم می تونیم برای استایل ها `true` زمانی که روی `css`
تست بنویسیم

### script Package.json

تنها کاری که مونده نیاز هست یک
اضافه کنیم package.json اسکریپت تست به

```javascript
  "scripts": {
    "test": "vitest",
  }
```

استفاده می کنیم `vitest` که از کتابخونه

خب کار های که بایدانجام میدادیم روانجام دادیم
ایجاد کنیم test می تونیم یک فایل
صرفا برای اینکه متوجه شیم که برنامه ما
اماده برای تست نویسی هست یا خیر
