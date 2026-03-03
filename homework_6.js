/* ДЗ №6: Параноя (Валідація Email) */

var arr = [
    {
        userName: "Test",
        lastName: "Test",
        email: "test.test@gmail.com"
    },
    {
        userName: "Dmitro",
        lastName: "Porohov",
        email: "dmitro.porohov@yahoo.com"
    },
    {
        userName: "Andrii",
        lastName: "",
        email: "andrii@mail.ru" // Нам такі не підходять
    }
];

// Наш масив для перевірки надійності адрес
var trustedEmails = [];

/* Пояснення по кожному фрагменту:
По-перше, ^ та $ - зрозуміло, це початок та кінець слова відповідно ;
По-друге, [a-zA-Z0-9]+ - перша частина імені: одна або більше латинських літер чи цифр ;
По-третє, (\.[a-zA-Z0-9]+)? - друга частина імені, котра може бути відсутня: 
одна або більше латинських літер чи цифр ;
По-четверте, @ - необхідний нам символ "равлик" ;
По-п'яте, (gmail\.com|yahoo\.com) - домени, котрі нам необхідні. */

var regex = /^[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)?@(gmail\.com|yahoo\.com)$/;

/* Перебірка нашого масиву через цикл, дістаючи адресу з поточного об'єкта та додаючи його
у наш масив, за умови якщо поточна адреса проходить нашу валідацію */

for (var i = 0; i < arr.length; i++) {
    var currentEmail = arr[i].email;

    if (regex.test(currentEmail)) {
        trustedEmails.push(currentEmail);
    }
}

console.log("Адреси, котрі пройшли нашу параною:", trustedEmails);
