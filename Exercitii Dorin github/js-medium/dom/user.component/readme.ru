> КОМПОНЕНТЫ - важный ключевой термин в модерн разработке. Каждый компонент обычно является свободной / независимой частью логической структуры, которую можно легко интегрировать в разные приложения*

---

* Суть примера - научить вас делать простые ФЕ компоненты и использовать в DOM.
* !Важно понимать, что чаще всего у компонента в памяти есть какие-то данные (data), в нашем случае это свойства объекта "User", есть состояния, и есть представление (то как компонента выглядит в UI)
   

В этом примере вы должны объявить класс с именем "User", который при создании новых объектов
должен установить следующие характеристики (атрибуты, свойства):
* username - имя пользователя
* email - адрес электронной почты
* avatar - адрес аватара
* created - дата регистрации пользователя
* selected - является ли объект в "активном визуальном состоянии" (напр - как при наведении, или при клике)
Класс также должен содержать несколько методов:
* constructor() - установит начальные значения свойств
* render() - отображает HTML-представление (фрагмент) этого профиля пользователя (используя DOM объекты)
* select() - установит состояние "выбран" пользователю
* unselect() - установит состояние "не выбран" пользователю
  

## На основе [структуры](.) выполнить следующие пункты:
1. Дополнить конструктор так, чтобы он присвоил новому объекту пользователя вышеуказанные свойства
2. Написать код метода "render()" так, чтобы он создал структуру DOM (фрагмент) с данными пользователя и стилем из константы **USER_STYLES** и добавил его внутрь DOM > div#users:
   - Фрагмент рендера DOM пользователя должен соответствовать 
   ```html
   <div class="user" style="<!-- USER_STYLES -->">
       <img src="<!-- avatar -->">
       <h2><!-- username --> (<!-- email -->) </h2>
       <hr>
       <small><!-- created --></small>
   </div>
   ```  
3. В процессе рендеринга объект пользователя запоминает в себе **ссылку** на DOM - фрагмент (div) в котором он ввыводится (это часто называют "кэширование").
4. Написать логику метода select(), который изменит состояние свойства "selected" в **true** и присвоит цвет текста и фона **div**-у, в котором он отрендерился, из значений "selectedColor", "selectedBackgroundColor"  - **USER_STYLES**
5. Написать логику метода unselect(), который противодействует методу "select()"
6. Далее, написать код "generate_users()" **script.js** так чтобы в массиве "users" было созданно 3 объекта и Класса **User**
7. Далее, написать код "render_users()" **script.js** так, чтобы из массива "users" вывести все 3 объекта в **div#users**
8. После чего вызвать метод users[0].select(); если код написан правильно, то первый **div.user**  должен изменится в стиле
9. Далее, вызвать метод users[0].unselect(); если код написан правильно, то первый **div.user** должен изменится в стиле - переходя обратно в обычное состояние
---
ВОПРОС - что означает **const** префикс который мы использовали при объявлении некоторых значений в коде?