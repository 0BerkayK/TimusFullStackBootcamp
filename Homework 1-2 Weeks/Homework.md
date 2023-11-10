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
17) 2 elemanlı bir objenin key ve value değerlerinin karakter sayısı ile 2 farklı döngü
methodu kullanarak yeni bir obje oluşturunuz

```JavaScript

  let object = { 
  name:"Berkay",
  surname:"Korcum"
}



Object.keys(object).forEach(element => {
  
   object.name= element.length.toString()
      
});

console.log(object)  //  {name: '7', surname: 'Korcum'}

let array =Object.values(object)

for (let i = 0; i < array.length; i++) {
  
   object.surname=array[i].length
}

console.log(object)    // {name: '7', surname: 6}

```
    



18) Cookie, local storage ve session storage farkını tablo yapınız

<table style="width:100%">
  <tr>
    <th>Features</th>
    <th>Cookies</th>
    <th>Localstoreage</th>
    <th>sessionStorage</th>
  </tr>
  <tr>
    <td>Maksimum Data Size</td>
    <td>4kB</td>
    <td>5 MB</td>
    <td>5 MB</td>
  </tr>
  <tr>
    <td>Blockable by users</td>
    <td>Yes</td>
    <td>Yes</td>
    <td>Yes</td>
  </tr>
    <tr>
    <td>Auto expire</td>
    <td>Yes</td>
    <td>No</td>
    <td>Yes</td>
  </tr>
 <tr>
    <td>Supported Data Types</td>
    <td>String Only</td>
    <td>String Only</td>
    <td>String Only</td>
  </tr>
  <tr>
    <td>Browser Support</td>
    <td>Very High</td>
    <td>Very High</td>
    <td>Very High</td>
  </tr>
  <tr>
    <td>Accessible Server Side</td>
    <td>Yes</td>
    <td>No</td>
    <td>No</td>
  </tr>
    <tr>
    <td>Data Transferred on every HTTP request</td>
    <td>Yes</td>
    <td>No</td>
    <td>No</td>
  </tr>
 <tr>
    <td>Editable by users</td>
    <td>Yes</td>
    <td>Yes</td>
    <td>Yes</td>
  </tr>
  <tr>
    <td>Supported on SSL</td>
    <td>Yes</td>
    <td>n/a</td>
    <td>n/a</td>
  </tr>
  <tr>
    <td>Can be accessed on</td>
    <td>Server-Side & Client-Side</td>
    <td>Client-Side</td>
    <td>Client-Side</td>
  </tr>
    <tr>
    <td>Clearing/Deleting</td>
    <td>PHP,JS & automatic</td>
    <td>JS only</td>
    <td>JS & automatic</td>
  </tr>
 <tr>
    <td>Lifetime</td>
    <td>as specified</td>
    <td>till deleted</td>
    <td>till tab is closed</td>
  </tr>
   <tr>
    <td>Secure Data storeage</td>
    <td>no</td>
    <td>no</td>
    <td>no</td>
  </tr>
  
</table>

19) asenkron ve senkron işlem farkı nedir

- Senkron programlamada bir fonksiyon bitmeden diğeri çalışmaya başlamaz yani birbirlerini beklerler bekleyen fonksiyonun cevabı dönmeden diğerine geçilmez. Fakat asenkron fonksiyonlar aynı anda çalışmaya başlarlar ve birbirlerinin sonucunu beklemeden çalışmaya devam ederler. Hangisinin sonucu önce çıkarsa o sonuç gösterilir. Javascript’in çalışma mantığı single-thread şeklindedir ve asenkron çalışır. Yani bir satırı okuyup çıktısını bekleyip diğer satıra geçmez. Her bir satırı okur ve belirli bir sıraya yerleştirir. 

20) promise nedir ve neden ihtiyaç duyarız

- Promise, asenkron işlemleri yönetmek için kullanılan bir araçtır. Bir olay meydana geldikten sonra yürütülecek kodu yazılabilir, ancak diğer kodun yürütülmesini engellenemez. Promise, henüz mümkün olmayan ama gelecekte bir noktada mevcut olacak bir değeri temsil eder.Promise, callback'leri kullanmaktan daha yapılandırılmış ve tahmin edilebilir bir şekilde asenkron işlemleri ele almanın bir yoludur. Asenkron bir işlemin tamamlandığında çağrılacak callback'leri kaydetmek için bir yol sağlar ve aynı zamanda işlem sırasında oluşabilecek hataların nasıl ele alınacağını da sağlar.

Bir Promise, üç duruma sahiptir:

- Pending (Beklemede): İlk durum, tamamlanmamış veya reddedilmemiş.
- Fulfilled (Tamamlanmış): İşlemin başarıyla tamamlandığı anlamına gelir.
- Rejected (Reddedilmiş): İşlemin başarısız olduğu anlamına gelir.

Bir Promise, tamamlandı veya reddedildi ise "settled" olarak adlandırılır.
Promise, iki ana yöntem sunar:
then: Bu yöntem, Promise'nin tamamlandığında çağrılacak bir callback'i kaydetmek için kullanılır. Callback, Promise'nin tamamlanma nedeni olan değerle çağrılır.
catch: Bu yöntem, Promise'nin reddedildiğinde çağrılacak bir callback'i kaydetmek için kullanılır. Callback, Promise'nin reddedilme nedeni olan hata ile çağrılır.

//Array Questions//

//var dolap = ["Shirt", "Pant", "TShirt"];

//1)


```JavaScript
// dolap.pop()

// console.log(dolap)

// Output  (2) ['Shirt', 'Pant']

```


//2)
```JavaScript
//dolap.splice(0,1,"Hat")

//console.log(dolap)

// Output  ['Hat', 'Pant', 'TShirt']

```


//3)
```JavaScript
//let result = Array.isArray(dolap)

//console.log(result)

// Output true

```


//4)
```JavaScript

//console.log(dolap.includes("Pant"))  // Output true

//console.log(dolap.some((n) => n === "Pant"))  // Output true

//console.log(dolap.find((item) => item === "Pant") !== undefined)
```


//5)
```JavaScript
// var dolap = ["Shirt", "Pant", "TShirt"];

//function sumOfCharacters() {

//  let result = dolap.map(eleman => eleman.length).reduce((acc,cur) => acc+cur)

//  return result
//}

//console.log(sumOfCharacters(dolap))

```


//6)
```JavaScript
//console.log(dolap);

//let Arr = [];
//for (let i = 0; i < dolap.length; i++) {
// Arr.push(dolap[i].toUpperCase());
//}

//console.log(Arr); // Output ['SHIRT', 'PANT', 'TSHIRT']

/*let Arr2 = [];

let i = 0;

while ((i < dolap.length)) {

  Arr2[i] = dolap[i].toString().toUpperCase();

  i++;
}

console.log(Arr2);  // Output ['SHIRT', 'PANT', 'TSHIRT'] */

/*let Arr3 = [];

let i = 0;

do {
  Arr3[i] = dolap[i].toUpperCase();
  i++;
} while (i < dolap.length);


console.log(Arr3);*/ // Output ['SHIRT', 'PANT', 'TSHIRT']

```


//7)
```JavaScript
//let converted  = Object.assign({}, dolap); // {0:"a", 1:"b", 2:"c"}

//console.log(converted)  // Output {0: 'Shirt', 1: 'Pant', 2: 'TShirt'}

```


//8)
```JavaScript
splice() => Arrayden çıkarıalan elemanları döndürür.
            Orjinal arrayi değiştirir.
            Arraye yeni eleman eklenebilir.
    
slice() =>  Arrayden seçilen elemanları döndürür.
            Orjinal arrayi değiştirmek.
            Arraye yeni eleman eklenemez  .

```

1)
```JavaScript
const arr = [1, 2, 3, 4, 5, 6, 7, 7, 8, 6, 10];


const findRepeatedNumbers = (arr) =>
arr.filter((number, element) => arr.indexOf(number) !== element);
const repeatedNumbers = findRepeatedNumbers(arr);
console.log(repeatedNumbers);

```

2)  
```JavaScript
const removedArray = [...new Set(arr)]

console.log(removedArray) // 1.Option



const arr = [1, 2, 3, 4, 5, 6, 7, 7, 8, 6, 10];

const removedArray = arr.filter((value,index,self) => {

  return self.indexOf(value)===index;
})

console.log(removedArray)  // 2.Option

```
3)

```JavaScript
const arr = [1, 2, 3, 4, 5, 6, 7, 7, 8, 6, 10];

console.log(Math.max(...arr))

console.log(Math.min(...arr))

const max = arr.reduce((a, b) => Math.max(a, b), -Infinity);

console.log(max)

const min = arr.reduce((a, b) => Math.min(a, b));

console.log(min)

```


```JavaScript
// Bu kodun çıktısı nedir neden ?
function job() {
return new Promise(function(resolve, reject) {
reject();
});
}
let promise = job();
promise
.then(function() {
console.log('Success 1');
})
.then(function() {
console.log('Success 2');
Ödev 3
})
.then(function() {
console.log('Success 3');
})
.catch(function() {
console.log('Error 1');
})
.then(function() {
console.log('Success 4');
});


```

- Promise nesnesi Resolve ve Reject adında iki tane parametre alır 
ve olumlu durumlarda Resolve ile belirtilen işlemlerin, olumsuz durumlarda da Reject ile 
belirtilen işlemlerin yapılacağına dair güvence verir. 
Promise yapısı olumlu sonuçları .then(), olumsuz sonuçları da .catch() ile karşılar.

İlk durumda fonksiyonun içinde reject () olduğu için reject() durumunda catch() bloğu çalışır

Konsolda Error 1 yazısını görürüz.

Sonrasında ise catch() tamamlandığı için ona bağlı olan en sondaki .then() bloğunu çalışır.

Konsolda Success 4 yazısını görürüz


```JavaScript
// Bu kodun çıktısı nedir neden ?
function job(state) {
return new Promise(function(resolve, reject) {
if (state) {
resolve('success');
} else {
reject('error');
}
});
}
let promise = job(true);
promise
.then(function(data) {
console.log(data);
return job(true);
})
.then(function(data) {
if (data !== 'victory') {
throw 'Defeat';
}
return job(true);
})
.then(function(data) {
console.log(data);
})
.catch(function(error) {
console.log(error);
return job(false);
})
.then(function(data) {
Ödev 4
console.log(data);
return job(true);
})
.catch(function(error) {
console.log(error);
return 'Error caught';
})
.then(function(data) {
console.log(data);
return new Error('test');
})
.then(function(data) {
console.log('Success:', data.message);
})
.catch(function(data) {
console.log('Error:', data.message);
});


```

- job fonksiyonu gelen state e göre resolve ve reject döndürür. 
  True değerinde resolve, False değerinde reject döndürür.

 // 1.Adımda state true olarak fonksiyona gider ve konsolda=> "success" yazar ve diğer then zincirine true return olur.
 // 2.Adımda return edilen değer "victory" eşit olmadığı için konsolda => "Defeat" yazılır. devamında ise ilk catch bloğu çalışır.
 // 3.Adımda fonksiyondaki else bloğuna gider ve konsolda => "error" yazılır. bu işlemden sonra diğer then zincirine false olarak return olur
 // 4.Adımda false döndüğü için diğer catch bloğuna işlem gönderilir ve ekranda => "Error caught" yazılır. diğer then bloğuna geçer burada ise yeni error nesnesi oluşturur.
 // 5.Adımda ise son then bloğu çalışır ekrana "Success : test" yazar. Burda test yazmasının sebebi bir önceki then bloğunda ("test") adında yeni bir nesne tanımlamamızdır.
