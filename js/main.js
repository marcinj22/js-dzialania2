function results(num1, num2) {

   let result1 = num1 + num2;
   console.log("Wynik dodawania wynosi " + result1);

   let result2 = num1 - num2;
   if (result2 < 0) {
       console.log("Wynik jest nieprawidłowy");
   } else {
       console.log("Wynik odejmowania wynosi " + result2);
   }

   let result3 = num2 - num1;
   if (result3 < 0) {
       console.log("Wynik jest nieprawidłowy");
   } else {
       console.log("Wynik odejmowania wynosi " + result3);
   }

   let result4 = num2 * num1;
   console.log("Wynik mnożenia wynosi " + result4);
}

results(27, 58)