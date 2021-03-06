'use strict';

//Значит сейчас мы научимся следить за изменениями и применять их
//Ну например кто-то что-то написал в инпут или получили данные от сервака

const box = document.querySelector('.box');

let observer = new MutationObserver(MutationRecords => {
    console.log(MutationRecords);
});
// Итак, у нас получается такой синтаксис, в котором есть колбек функция, которую мы долджны вызвать
observer.observe(box, {
    childList: true,
});

observer.disconnect();

// первым аргументом у нас идет отслеживаемый элемент, а второе это конфиг с данными, за которыми мы можем следить
// Значит это у нас объект, в котором можно поместитьь следующее:

// childList	
// true, если необходимо наблюдать за добавлением или удалением дочерних элементов (Включая текстовые узлы (text nodes))

// attributes	
// true, если необходимо наблюдать за изменениями атрибутов целевого элемента.

// characterData	
// true, если необходимо наблюдать за изменениями значения текстового содержимого целевого узла (текстовых узлов дочернего элемента).

// subtree	
// true, если необходимо наблюдать за потомками целевого элемента. 

// attributeOldValue	
// true, если необходимо возвращать предыдущее значение атрибута. 

// characterDataOldValue	
// true, если необходимо возвращать предыдущее значение Data атрибута. 

// attributeFilter	
// Устанавливает массив названий атрибутов (без указания пространства имён), если требуется наблюдать за изменениями конкретных атрибутов. 

// В итоге мы получаем в консоль массив