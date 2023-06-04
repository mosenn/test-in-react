# Testing In Reactjs with Vitejs

می خوایم در مورد تست نویسی صحبت کنیم

این ریپازیتوری به شما کمک می کنه که بتونید

برای برنامه های ریکتی خودتون تست بنویسید

# چرا باید تست بنویسیم ؟

تست نویسی یک امر مهم در برنامه نویسی هست

می تونیم از پیش امدن خیلی از مشکلات جلوگیری کنیم

```diff

+ حتما شنیدید که پیشگیری بهتر از درمان است

```

تست نویسی به ما کمک می کنه که قبل از اینکه بخوایم

پروژه رو تحویل بدیم یا درون مارکت منتشر کنیم

از مشکلات برنامه مطلع شیم و اگر جای از برنامه مشکل داشت رفع اش کنیم

## اگر برنامه ما با مشکل منتشر شه یا تحویل داده شه چه اتفاقی می افته ؟

هزینه مالی و زمانی زیادی می بره تا مشکلات برنامه حل شه

چه شرکت چه فریلنسر .. اگر که پروژه بعد از تحویل مشکلاتی داشته باشه

از اعتبار شرکت و فریلنسر کاهش پیدا می کنه , و مشتری خودتون رو از دست میدید

حتی اگر پروژه ماله خودتون هم باشه فیکس کردن باگ ها بعد از کلی کد

وقت گیر و طاقات فرسا هست .. و اصلا برای پروژه های بزرگ همراه با ضرر مالی

خب شاید پیش خودتون بگید که خب این که مشکلی نیست همیشه به طور دستی

هم خودم و هم چند نفر دیگه برنامه رو تست می کنند

خب درسته تا حدی و ما نیاز داریم بعضی از بخش ها رو به این صورت تست کنیم

اما اگر پروژه خیلی گسترده باشه ؟ و هر دفعه نیاز به درخواست دادن و گرفتن اطلاعات باشه به طور مثال چی ؟

اگر شما چیزی رو جا انداختید و فراموش کردید تست کنید چطور ؟

اگر پروژه انقد بزرگ باشه که تمام اجزاش ممکنه به هم متصل باشند

با تغییر چند خط کد ممکنه بقیه بخش های پروژه هم دست خوش تغییر شن
ایا واقعا کار منطقی هست که هر دفعه به طور دستی وقت بزارید و برنامه رو با هر بار تغییر تست کنید ؟

**_! خودتون کمی فکر کنید _**
