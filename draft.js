// // обьявление переменной
// let number1 = 7; //let для значений, которые поменяются по ходу выполнения скрипта
// console.log(number1);
// number1 = 10;
// console.log(number1);

// const number2 = 7; //let для значений, которые непоменяются по ходу выполнения скрипта (95% случаев)
// console.log(number2);
// number2 = 10; //ошибка, значение уже занаято
// console.log(number2);

// // вывод значений пользователю

// const message1 = "JavaScript is great!";
// console.log("I think, that", message1); //вывод в консоль

// const message2 = "JavaScript is awesome!";
// alert(message2); //вывод в окно

// //получение даных от пользователя

// const isComing = confirm("Please confirm hotel reservation");
// console.log(isComing); //выводит окно подтверждения. При ок - true, при отмена - false

// const hotelName = prompt("Please enter desired hotel name");
// console.log(hotelName); // выводит поле для ввода. При ок - ввденный текст (даже пустой), при отмена - null

// // перевод значения в число

// const valueA = "5";
// console.log(Number(valueA)); //выведет число 5
// console.log(valueA); //выведет строку "5"
// console.log(typeof Number(valueA)); //выведет тип "число"
// console.log(typeof valueA);

// // "вытяжка" чисел из строк

// console.log(Number.parseInt("12.46qwe79")); // вытянет 12
// console.log(Number.parseInt("qweqwe")); // выведет NaN

// console.log(Number.parseFloat("12.46qwe79")); // может вытянеть дробные 12.46
// console.log(Number.parseFloat("qweqwe")); // NaN

// // проверка, числовое ли значение

// const validNumber = Number("51"); // 51
// console.log(Number.isNaN(validNumber)); // false

// const invalidNumber = Number("qweqwe"); // NaN
// console.log(Number.isNaN(invalidNumber)); // true

// // нюансы подсчёта чисел

// console.log("0.2+0.1=")
// console.log(0.2 + 0.1)

// //решение 1

// console.log(0.17 + 0.24); // 0.41000000000000003
// console.log((0.17 + 0.24).toFixed(2)); // 0.41

// //решение 2

// console.log(0.17 + 0.24); // 0.41000000000000003
// console.log((0.17 * 100 + 0.24 * 100) / 100); // 0.41

// // math

// console.log(Math.floor(1.7)); // 1 округление вниз

// console.log(Math.ceil(1.2)); // 2 округление вверх

// console.log(Math.round(1.2)); // 1 округление до ближайшего целого
// console.log(Math.round(1.5)); // 2

// console.log(Math.max(20, 10, 50, 40)); // 50 ищет наиболшее из выборки

// console.log(Math.min(20, 10, 50, 40)); // 10 ищет наименьшее из выборки

// console.log(Math.pow(2, 4)); // 16 возведение в степень

// console.log(Math.random()); // случайное число между 0 и 1 (с дробными)
// console.log(Math.random() * (10 - 1) + 1); // псевдослучайное число от 1 до 10 (с дробными)

// // Шаблонные строки

// const guestName = "Манго";
// const roomNumber = 207;
// const greeting = `Welcome ${guestName}, your room number is ${roomNumber}!`;
// console.log(greeting); // "Welcome Mango, your room number is 207!"

// // длинна строк

// const message = "Welcome to Bahamas!";
// console.log(message.length); // 19 пробелы тоже учитываются

// // Преобразование регистра

// const BRAND_NAME = "SAMSUNG";
// const userInput = "saMsUng";
// const normalizedToUpperCaseInput = userInput.toUpperCase(); //перевод в верхний регистр
// const normalizedToLowerCaseInput = userInput.toLowerCase(); //перевод в нижний регистр

// console.log(userInput); // 'saMsUng'
// console.log(userInput === BRAND_NAME); // false
// console.log(normalizedToUpperCaseInput); // 'SAMSUNG'
// console.log(normalizedToLowerCaseInput);
// console.log(normalizedToUpperCaseInput === BRAND_NAME); // true

// // поиск позиции в строке

// const message = "Welcome to Bahamas!";
// console.log(message.indexOf("to")); // 8 (начиная с 0)
// console.log(message.indexOf("hello")); // -1 (если не находит искомого, возвращает -1)

// // Поиск наличия элемента в строке

// const productName = "Ремонтный дроид";

// console.log(productName.includes("н")); // true
// console.log(productName.includes("Н")); // false
// console.log(productName.includes("дроид")); // true
// console.log(productName.includes("Дроид")); // false
// console.log(productName.includes("Ремонтный")); // true
// console.log(productName.includes("ремонтный")); // false

// // проверка окончания строки (надо разобраться нафиг оно надо)

// const jsFileName = "script.js";
// console.log(jsFileName.endsWith(".js")); // true

// const cssFileName = "styles.css";
// console.log(cssFileName.endsWith(".js")); // false

// // замена значений в строке

// const jsFileName = "script.js";
// const minifiedJsFileName = jsFileName.replace(".js", ".min.js"); //замена только одного значения
// console.log(minifiedJsFileName); // "script.min.js"

// const cssFileNames = "styles.css, about.css, portfolio.css";
// const minifiedCssFileNames = cssFileNames.replaceAll(".css", ".min.css"); //замена всех найденых значений
// console.log(minifiedCssFileNames); // "styles.min.css, about.min.css, portfolio.min.css"

// // создание копии строки от и до определенного значения

// const productName = "Repair droid";
// console.log(productName.slice(0, 4)); // "Repa"
// console.log(productName.slice(3, 9)); // "air dr"
// console.log(productName.slice(0, productName.length)); // "Repair droid"
// console.log(productName.slice(7, productName.length)); // "droid"

// логические операторы

// Запомните 6 ложных (falsy) значений, приводящихся к false в логическом преобразовании: 0, NaN, null, undefined, пустая строка и false.
// Абсолютно все остальное приводится к true.

// // and &&

// const age = 50;
// console.log(age > 10 && age < 30); // true && false -> false
// console.log(age > 80 && age < 120); // false && true -> false

// console.log(1 && 5); // true && true -> 5
// console.log(5 && 1); // true && true -> 1
// console.log(0 && 2); // false && true -> 0
// console.log(2 && 0); // true && false -> 0
// console.log("" && "Mango"); // false && true -> ""
// console.log("Mango" && ""); // true && false -> ""
// console.log("Mango" && "Poly"); // true && true -> "Poly"
// console.log("Poly" && "Mango"); // true && true -> "Mango"

// // or ||

// console.log(true || false); // true
// console.log(false || true); // true
// console.log(true || true); // true

// console.log(3 || false); // 3
// console.log(false || 3); // 3
// console.log(3 || true); // 3
// console.log(true || 3); // true

// // not ! меняет операнд на буль (если он им не является), а затем на противоположный

// console.log(!true); // false
// console.log(!false); // true
// console.log(!3); // !3 -> !true -> false
// console.log(!"Mango"); // !"Mango" -> !true -> false
// console.log(!0); // !0 -> !false -> true
// console.log(!""); // !"" -> !false -> true

// const isOnline = true;
// const isNotOnline = !isOnline; // !isOnline -> !true -> false