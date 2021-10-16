1. At line 12, it would output "3", because i was originally set to 0, and compare to the price.length which is 3, every time i is less than price.length, the loop would excute and i would increment, it compared 3 times, so i would be increment to 3.
2. At line 13, it would output "150", the first iteration of the for loop, variable discountedPrice is assigned to price[i] * (1 - discount), so it's 50, and the loop will excute second time, and assigned discountedPrice to 100, and the loop excute again, and finally assigned it to 150. 
3. At line 14, it would output "150", similar to the last question, discountedPrice is set to 50 in the iteration of the for loop, and finalPrice = Math.rount(dicountedPrice * 100) / 100, which is still 50, and when it's the last iteration, discountPrice is set to 150, and finalPrice = Math.rount(dicountedPrice * 100) / 100, so 150.
4. It would return a list called discounted that contain the final prices [50, 100, 150], because the for loop excuted 3 times and each time it calculate the finalPrice and push it to the discounted list.But there's nothing that would output to the screen since there's no print statement.
5. Error, the error would say that i is not defined, because we are using the "let" keyword to declare the variable i, and we declared inside the for loop block, then i would be used inside the block. Anywhere else would be undefiend. 
6. Error, similar reason as the last question, we defined discountedPrice inside the for loop block using the let keyword, so we can only use it inside the block. Since console.log(discountedPrice) is outside of the scope, it would be "dicountedPrice is not defined" error.
7. At line 14, it would output "150", because we declared the variable finalPrice using the let keyword inside the function discountedPrices, so we can use the variable anywhere inside the function. Then we did similar calculation for finalPrice in question 3, so the result is 150.
8. The function would return a list called discounted that contains the finalPrices [50, 100, 150]. Since discounted is declared using the let keyword inside the function, then we can use it anywhere in the function. Then every time we calculate the finalPrice, we push it into the dicountedPrice list, and then return it. However, it would not print anything to the screen, since there's no print statement.
9. Error, it would give the "i is not defined" error. Since i is declared inside the for loop block using the "let" keyword, so i can only be used inside the block, and at line 11, it tries to access i, therefore, it would be an error.
10. At line 12, it would output"3", because constant variable length is set to be the length of prices which is 3, and this value cannot be modified, and line 12 it output the length to the screen which is 3.
11. The function will return a list called discounted that contains the discountedPrices [50, 100, 150]. But it would not print it to the screen, since there is no print statement. Even though it uses the keyword const to declare variable "discountedPrice" and constant varible cannot be changed, but it is done inside the for loop, so each iteration, it uses const to declare discountedPrice once, and push it to the discounted list, then discountedPrice is done after the iteration. The next iteration, a new discountedPrice will be declared using the const keyword. So it will not produce an error.
12. A. student.name
    B. student['Grad Year']
    C. student.greeting()
    E. student.courseLoad[0]  
    D. student['Favorite Teacher']['name']
13. A. '32'     since intergers map to their exact string representation
    B. 1        '3' is converted to number 3
    C. 3        since null is treated as 0
    D. '3null'  since '3' is a string and null is a string
    E. 4        since true is treated as 1, 3+1 = 4
    F. 0        since false is treated as 0, and null is 0, so 0+0 = 0
    G. '3undefined'   '3' is treated as a string and undefined is a string
    H. NaN      since "-" is not working for two strings, or a number with a string

14. A. true     string '2' becomes a number 2
    B. false    since it compare to the first number of both string, and 2 > 1
    C. true     string '2' becomes a number 2, so 2 = 2 is true
    D. false    the strict equality operator === checks equality without type conversion
    E. false    true can convert to number 1, 1 is not equal to 2
    F. true     since the Boolean(2) is evaluated as true, then true === true

15. === the strict equality check doesn't allow type conversion, so if x and y are different types, x === y immediately return false. == can do type conversion, so '2' == 2 will evaluate to true. == cannot differentiate 0 from false; === can.
    
16. answer in part2-question16.js
    
17. 

