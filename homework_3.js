    
    /* ДЗ №3: Перевірка теорії ймовірності */


function checkProbabilityTheory(count) {
    /* 1. Змінні для збереження статистики */
    let evenCount = 0; /* парні */
    let oddCount = 0;  /* непарні */

    /* 2. Цикл генерації */
    for (let i = 0; i < count; i++) {
    /* Крок А: Генеруємо випадкове число */
    /* Нам треба діапазон 100 - 1000. Кількість варіантів: 1000 - 100 + 1 = 901 */
        let randomVal = Math.random() * 901; 

    /* Крок Б: Відкидаємо дробову частину */
    /* Приклад: якщо randomVal = 15.67 */
    /* 15.67 % 1 = 0.67 */
    /* 15.67 - 0.67 = 15 (отримали ціле число) */
        let integerPart = randomVal - (randomVal % 1);

    /* Крок В: Зсуваємо діапазон на 100 (щоб було від 100, а не від 0) */
        let finalNumber = integerPart + 100;

    /* 3. Перевірка на парність */
        if (finalNumber % 2 === 0) {
            evenCount++;
        } else {
            oddCount++;
        }
    }

    /* 4. Обчислення відсотків вручну */
    /* Формула: (кількість / загальну суму) * 100 */
    let evenPercentVal = (evenCount / count) * 100;
    let oddPercentVal = (oddCount / count) * 100;

    /* Відкидаємо дроби у відсотках тим самим методом (замість методу round) */
    let evenPercent = evenPercentVal - (evenPercentVal % 1);
    let oddPercent = oddPercentVal - (oddPercentVal % 1);

    /* 5. Вивід інформації */
    console.log("Кількість згенерованих чисел: " + count);
    console.log("Парних чисел: " + evenCount);
    console.log("Непарних чисел: " + oddCount);
    console.log("Відсоток парних до непарних: " + evenPercent + "% / " + oddPercent + "%");
}
    /* Тести */
    checkProbabilityTheory(100);
    checkProbabilityTheory(1000);
    checkProbabilityTheory(10000);

    // Перевірка зв'язку
