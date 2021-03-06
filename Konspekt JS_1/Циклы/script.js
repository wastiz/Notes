'use strict';

let num = 50;

while (num <= 55){
    console.log(num);
    num++;
}

//Альтернатива

do {
    console.log(num);
    num++;
}
while (num < 55);

//Еще Альтернатива, только более популярная, потому что можно подробнее расписать условия
let num2  = 50;
for (let i = 0; i <= 8; i++) {
    console.log(num2);
    num2++;
}

//Первое в цикле обычно создают переменную со значением
//Второе это условие, при котором остановится условие
//Третье это действие, которое мы совершаем
//Ну и собственно потом пишем, что мы выполняем

for (let i = 0; i < 8; i++) {
    if (i == 4) {
        console.log(i);
        break;
    } 
    console.log(i);
}
//Можем досрочно заканчивать условия при помощи break