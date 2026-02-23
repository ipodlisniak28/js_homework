/* ДЗ №4: Робота з об'єктами. */
   // Усі методи знаходяться строго всередині об'єкта.

var services = {
    "стрижка": "60 грн",
    "гоління": "80 грн",
    "Миття голови": "100 грн",

    /* 1. Метод для розрахунку загальної вартості (використовую keys) */
    price: function() {
        let total = 0;
        let keys = Object.keys(this); 
        
        for (let i = 0; i < keys.length; i++) {
            let key = keys[i];
            
            // Відбираємо тільки рядки з цінами, звертаємось через this[key]
            if (typeof this[key] === 'string') {
                total += parseFloat(this[key]);
            }
        }
        return total;
    },

    /* 2. Метод для мінімальної ціни (використовую values) */
    minPrice: function() {
        let min = Infinity;
        let values = Object.values(this); 
        
        for (let i = 0; i < values.length; i++) {
            let val = values[i];
            
            if (typeof val === 'string') {
                let currentPrice = parseFloat(val);
                if (currentPrice < min) {
                    min = currentPrice;
                }
            }
        }
        return min;
    },

    /* 3. Метод для максимальної ціни */
    maxPrice: function() {
        let max = 0;
        let keys = Object.keys(this);
        
        for (let i = 0; i < keys.length; i++) {
            let key = keys[i];
            
            if (typeof this[key] === 'string') {
                let currentPrice = parseFloat(this[key]);
                if (currentPrice > max) {
                    max = currentPrice;
                }
            }
        }
        return max;
    }
};

/* Додаю нову послугу по ходу роботи (за умовою ДЗ) */
services['Розбити скло'] = "200 грн";

/* Виводжу результати */
console.log("Загальна вартість послуг: " + services.price() + " грн");
console.log("Мінімальна ціна: " + services.minPrice() + " грн");
console.log("Максимальна ціна: " + services.maxPrice() + " грн");
