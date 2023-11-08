# Homework 

## Questions

1)JavaScript nedir ve tarihsel gelişiminden bahsedin ?

JavaScript (genellikle JS olarak kısaltılır), HTML ve CSS ile birlikte World Wide Web'in temel teknolojilerinden biri olan programlama dilidir.

JavaScript, 1995 yılında bir Netscape çalışanı olan Brandan Eich tarafından geliştirilmiştir. İlk ortaya çıktığı dönemde söz konusu yazılımın adı Mocha idi. Sonradan Mona adını alan yazılım, zaman içerisinde LiveScript ve en son da JavaScript adı ile anılmıştır..

Standartlaşma (1997): JavaScript, European Computer Manufacturers Association (ECMA) tarafından standartlaştırıldı ve ECMAScript adını aldı. ECMAScript, JavaScript dilinin resmi tanımını içerir.

Ajax ve Web 2.0 (2000’lerin başları): JavaScript, Asynchronous JavaScript and XML (Ajax) teknikleri sayesinde web uygulamalarında daha etkileşimli ve hızlı kullanıcı deneyimleri sunmaya başladı. Web 2.0 konsepti ile birlikte, JavaScript'in rolü daha da önemli hale geldi.

JQuery ve Diğer Kütüphaneler (2000’lerin ortaları): jQuery gibi kütüphaneler, JavaScript kodunu daha kolay ve tarayıcılar arası uyumluluğu artırarak yazmayı sağladı. Bu dönemde, birçok JavaScript çerçevesi ve kütüphanesi ortaya çıktı

Node.Js ve Server-Side JavaScript (2009): Ryan Dahl tarafından geliştirilen Node.js, JavaScript'i sadece tarayıcıda değil, sunucu tarafında da çalıştırmak için bir platform sağladı. Bu, JavaScript'in geniş bir kullanım alanına sahip olmasını sağladı.

ECMAScript 6 (2015): ES6 veya ECMAScript 2015, bir dizi yeni özellik, sözdizimi iyileştirmeleri ve modern programlama paradigmalarını ekleyerek JavaScript'i güçlendirdi.

Modern Gelişmeler (Sonraki Yıllar): Son yıllarda, JavaScript'in popülerliği giderek arttı. Framework'ler ve kütüphaneler arasında Angular, React, ve Vue.js gibi araçlar, modern web uygulamalarının geliştirilmesinde etkili bir şekilde kullanılıyor.

2)Java ile javascript arasındaki fark nedir?

- Java bir OOP programlama dilidir, Java Script bir OOP komut listesi oluşturma dilidir.
- Java, sanal makinede veya tarayıcıda çalışan uygulamalar oluşturur, JavaScript kodu sadece tarayıcıda çalıştırılır.
- Java kodunun derlenmesi gerekir, JavaScript kodları metinlerden oluşur.
- Farklı eklentiler gerektirirler.

3)Javascript teki veri tipleri nelerdir açıklayınız

Javascript'de Primitive ve Reference olarak iki tip veri türü içerir.

### Primitive Veri Tipleri

Temel veri türleridir ve değer ataması yapılırken değerin kendisi atanır.

**String:**

- String veri tipi içerisinde metinsel ifadeleri saklar.
  
```JavaScript
let fullName = "Berkay Korcum"
```

**Number:**

- Sayısal veri türüdür, içinde tamsayıları ve ondalık sayıları saklar.
  
```JavaScript
let age = 26
```

**Boolean:**

- Boolean veri tipi içerisinde mantıksal verileri saklar. True ve False olarak iki değer alır.
  
```JavaScript
var condition = true
console.log(condition) // Output : true
```

**Undefined:**

- Bir değişkene değer atanmazsa, bir değişkenin değeri yoksa undefined olarak ifade edilir.
  
```JavaScript
var x;  // Output : undefined
```

**Null:**

- Javascript’ de null primative bir değer olmasına rağmen ,bir object olarak algılanır. Yani tanımladığınız bir veri içine null değer attığınızda bellekte bir alan tahsis edilir ancak içerisinde bir değer olmadığını söylemiş oluruz.
  
**Symbol:**

- Sembol türü, nesneler için benzersiz tanımlayıcılar oluşturmak için kullanılır. ECMAScript 6 ile beraber 2015 senesinde son olarak eklenen bir veri türüdür. Özellikleri eşsiz (unique) ve değiştirilemez (immutable) olan nesnelerdir.
  
```JavaScript
let name = Symbol();
console.log(typeof id)  // Output : symbol
```
### Reference Veri Tipleri

Nesne türü özel bir tür olarak geçer. Reference veri tipinde nesneler veri koleksiyonlarını ve daha karmaşık varlıkları depolamak için kullanılır.

**Object:**

- JavaScript de nesneler birden fazla karmaşık veriyi içerir.Nesne özellikleri ise virgülle (,) ayrılmış olarak key : value çiftleri olarak yazılır.
  
```JavaScript
let person =  {
   id:"1",
   name: 'Berkay',
   surname: 'Korcum'
   age : 26,
   
}
```

**Array:**

-  Array tipi, sıralı veri koleksiyonlarını içerir. Öğelere index ile erişim sağlayabiliriz.
  
```JavaScript
let cars = ["BMW","Mercedes","Fiat"];
cars[0] // Output => "BMW"
```
**Function:**

- Javascript' de fonksiyonlar da bir object olarak nitelendirilir.JavaScript fonksiyonları ise nesnelerden bağımsız olarak belirli işlevleri yerine getiren program parçalarıdır.
  
```JavaScript
function writeMessage() {
 console.log( 'Hello World' );
}
 writeMessage() // // Output => "Hello World"
```

**Date:**

- Güncel tarihi ve saati döndürür.
  
```JavaScript
let time = new Date();
```
4)null ile undefined arasıdaki fark nedir açıklayınız ?

- Undefined, bir değer hakkında hiçbir bilginin bilinemediği kısımdır;türü yok ve bu kapsamda daha önce hiç referans alınmadığı, “değer yok” anlamına gelir. Başlatılmamış değişkenler, eksik parametreler ve bilinmeyen değişkenler bu değere sahiptir. Null, varlığın bilindiği yer, ancak değerin ne olduğu bilinmemektedir.

5)NaN nedir açıklayınız

- JavaScript ile bir değişkenin sayı olup olmadığını NaN (Not a Number) anahtar kelimesiyle öğrenebiliriz.

6)Javascript’te yorum satırı eklemenin kaç farklı yolu vardır

- // Yorum satırı kullanımlı

- /* Çoklu Yorum Satırı Kullanımı */

olmak üzere iki tane vardır.

7)Global değişken ne demektir açıklayınız

- Bir fonksiyonun dışında tanımlanan değişkene global değişken adı verilir. Global değişkenlere bir web sayfasındaki tüm komut dosyaları ve fonksiyonlar erişebilir.

8)Javascript’te this anahtar kelimesi nedir açıklayınız

- Javascript'de this ait olduğu nesneyi ifade eder. this kelimesini bir fonksiyonun içerisinde tanımladığınızda ise ortada this’in bulunduğu herhangi bir object olmadığı için yine en yakınındaki dala sarılan this kelimesi global olan window object’ini referans gösterir.

9)Her iki işaret de eşitlik kontrolü yapıyor. 

== kullandığımız zaman karşılaştırılan değerlerin tiplerine bakmadan kontrolü yapar. 
=== kullandığımız zaman tiplerinin de aynı olması beklenir.

```JavaScript
let x = 5;

let y = "5"

console.log(x==y) Output => true

console.log(x===y) Output => false

```

10) let var const farkını tablo yapınız

<table style="width:100%">
  <tr>
    <th>Scope</th>
    <th>Tekrar Tanımlama</th>
    <th>Değer Değiştirme</th>
  </tr>
  <tr>
    <td>Var</td>
    <td>+</td>
    <td>+</td>
  </tr>
  <tr>
    <td>Let</td>
    <td>-</td>
    <td>+</td>
  </tr>
    <tr>
    <td>Const</td>
    <td>-</td>
    <td>-</td>
  </tr>
  
</table>

11) Arrow fonksiyonun normal fonksiyondan farkları nelerdir

- Arrow fonksiyonu normal fonksiyondan ayıran en önemli özelliklerden biri fonksiyonun içerisinde arguments nesnesine ulaşama imkanı vermemesidir.

12) Swich bloğu içinde hatasız nasıl değişken tanımlanır

```JavaScript

let condition;
  switch (condition) {
  case 1:
    statements
  case 2:
    statements
  // …
 
  default:
    statements
}

```
13) Pure fonksiyon ne demektir açıklayınız

- Pure (Saf) functionlar aldıkları argümanlar üzerinde, bellekte ve I/O da yan etkisi olabilecek hiç bir değişiklik yapmayan ve yan etkisi bulunmayan fonksiyonlardır. Bir pure funksiyonun aynı argümanlar ile her zaman, her makinede aynı sonucu vermesi beklenir ve bu argümanlar saklı, sınıf içindeki diğer elemanlar, kullanıcı girişi olmamalıdır.

14) Rest operatör nedir örnekle açıklayınız

- Rest Parametresi, fonksiyonlara sınır sayısı olmadan parametre geçmemize olanak verir ve bizim isteğimiz harici kalan tüm öğeleri bir dizide toplar.

```JavaScript

function restOperator(id,name,...place){

  console.log(id);
  console.log(name); 
  console.log(place); 

  }

  restOperator(1,"Berkay","Istanbul"); 
  
   Output :    1 
               Berkay
               ['Istanbul']

  restOperator(1,"Berkay","Istanbul", "Kadıköy");

     Output :  1 
               Berkay
               ['Istanbul', 'Kadıköy']
  
  
}

```

15) Object destructuring nedir örnekle açıklayınız

- Destructuring bir obje veya bir array içinden her bir elemanın alınıp bir değişken içine kaydedilmesi.

```JavaScript

let university = {

  name: "Eskişehir Osmangazi University",
  year: 1970,
  location: "Eskişehir"

};

let {name} = university;

console.log(name) // Output :  Eskişehir Osmangazi University

```

16) 2 elemanlı bir objeyi 6 farklı şekilde oluşturunuz

```JavaScript
let person = {
  name:"Berkay",
  surname:"Korcum"
}

console.log(person)


const users = (name,surname) => {
    const person = {}

    person.name=name;
    person.surname=surname;

    return person;

}

const user1 = users("Berkay","Korcum")

console.log(user1)



const users = (name,surname) => {
  const person = {}
  person.name=name;
  person.surname=surname;

  merge(person,methods);

  return person;
}

const methods = {

}

const merge = function(obj, methods) {
  for (const key in methods) {
    obj[key] = methods[key];
  }
}

const user1 = users("Berkay","Korcum");

console.log(user1)



const users = (name,surname) => {
  const person = Object.create(methods)

  person.name=name;
  person.surname=surname;

  return person;
}

const methods = {

}

const user1 = users("Berkay", "Korcum")

console.log(user1)





const Person = function(name, surname) {
  this.fistName = name;
  this.lastName = surname;
}

Person.prototype = function() {
  
}

const user1 = new Person('Berkay', 'Korcum');

console.log(user1)



class Person {
  constructor(name,surname){
    this.name=name;
    this.surname=surname;
  }
}

const user1 = new Person("Berkay","Korcum")

console.log(user1)


```


