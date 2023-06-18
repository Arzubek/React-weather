export function getWeekdays(lang) {
  if (lang === "qq") {
    const weekdays = ['Yakshanbe', 'Duisenbe', 'Seshembe', 'Charshembe', 'Payshanbe', 'Juma', 'Shanbe'];
    const today = new Date().getDay(); // Получаем текущий день недели (0 - воскресенье, 1 - понедельник и т.д.)
    const weekdaysArray = ["Bugin'", `Erten'`];
    for (let i = 2; i < 10; i++) {
      const index = (today + i) % 7;
      weekdaysArray.push(weekdays[index]);
    }
  
    return weekdaysArray;
  }
  else {
    const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const today = new Date().getDay(); // Получаем текущий день недели (0 - воскресенье, 1 - понедельник и т.д.)
    const weekdaysArray = ['Today', 'Tomorrow'];
    for (let i = 2; i < 10; i++) {
      const index = (today + i) % 7;
      weekdaysArray.push(weekdays[index]);
    }
  
    return weekdaysArray;
  }
  
}

  // Пример использования