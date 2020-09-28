## Software testing lectures

Все видео записи, домашние задания, дополнительные материалы можно найти здесь.

### Занятие 1. Основы теории.

- [Методологии разработки. Статья. Habrahabr](https://habr.com/ru/company/edison/blog/269789/)
- [Виды, типы тестирования, техники тест-дизайна. Статья. Habrahabr](https://habr.com/ru/post/279535/)
- [Лекция 1](ST.Lecture1.pdf)
- [Видео](https://youtu.be/nU9ByrAT2i0)

---
Домашнее чтиво:
- [https://martinfowler.com/articles/practical-test-pyramid.html](https://martinfowler.com/articles/practical-test-pyramid.html)
- [https://martinfowler.com/bliki/IntegrationTest.html](https://martinfowler.com/bliki/IntegrationTest.html)
- [https://martinfowler.com/bliki/TestDouble.html](https://martinfowler.com/bliki/TestDouble.html)

Домашнее видео(не то, о котором вы подумали):
- [https://www.youtube.com/watch?v=L2c8awaHIAg](https://www.youtube.com/watch?v=L2c8awaHIAg) (ссылка на его примеры https://github.com/qala-io/test-pyramid)
- [https://www.youtube.com/watch?v=-q_9oPRAxFo](https://www.youtube.com/watch?v=-q_9oPRAxFo) (инструменты для тестировщика)

---
Полезные ссылки:
- [Блог Martin Fawler](https://martinfowler.com/testing/)
- [Блог Максима Шульги с отличными рекомендациями по книгам и статьям](https://www.maxshulga.ru/p/useful-books-review.html)
- [Блог от Google про тестирование](https://testing.googleblog.com/)

Telegram-каналы:
- [@js_for_testing](https://t.me/js_for_testing)
- [@selenide_ru](https://t.me/selenide_ru) (Selenide библиотека)
- [@qa_load](https://t.me/qa_load) (Чат перфоманс тестировщиков)
- [@qa_ru](https://t.me/qa_ru)
- [@qa_automation](https://t.me/qa_automation)
- [@qa_fin](https://t.me/qa_fin)
- [@heisenbugconf](https://t.me/heisenbugconf) (Чат конференции по тестированию Heisenbug)
- [@sqaunderhood](https://t.me/sqaunderhood)
- [@allure_ru](https://t.me/allure_ru) (Чат Allure репортинг фреймворка)
- [@qajuniors](https://t.me/qajuniors)
- [@serious_tester](https://t.me/serious_tester)
- [@aerokube](https://t.me/aerokube) (Чат ребят из команды Aerokube, которые делают Selenoid и Moon)

Youtube:
- [https://www.youtube.com/c/Heisenbugconf/videos](https://www.youtube.com/c/Heisenbugconf/videos) (Отличные видео с конференции Heisenbug)

### Занятие 2. Тестирование Frontend.

- [Лекция 2] TBD
- [Пример] TBD
- [Видео](https://youtu.be/AaPvh2-edaU)

- [Как стартовать приложение на React и разобраться быстро с TypeScript](https://github.com/typescript-cheatsheets/react)
- [Пошаговая инструкция для тестирования компонент на React c Jest и Enzyme](https://medium.com/devschacht/what-and-how-to-test-with-jest-and-enzyme-full-instruction-on-react-components-testing-d3504f3fbc54)
- [React Jest workshop](https://github.com/kentcdodds/react-jest-workshop)
- [Modern React testing](https://dev.to/sapegin/modern-react-testing-part-1-best-practices-1o93)
- [Testing library for React docs](https://testing-library.com/)
- [Jest test runner framework](https://jestjs.io/)
- [Playwright node.js library for cross-browser testing](https://github.com/microsoft/playwright)
- [Тестирование Angular приложений](https://medium.com/fafnur/%D1%82%D0%B5%D1%81%D1%82%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D1%81%D0%B5%D1%80%D0%B2%D0%B8%D1%81%D0%BE%D0%B2-%D0%B2-angular-%D1%81-%D0%BF%D0%BE%D0%BC%D0%BE%D1%89%D1%8C%D1%8E-jest-%D1%82%D0%B5%D1%81%D1%82%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D1%80%D0%B5%D0%B0%D0%BA%D1%82%D0%B8%D0%B2%D0%BD%D0%BE%D0%B9-%D0%B0%D1%81%D0%B8%D0%BD%D1%85%D1%80%D0%BE%D0%BD%D0%BD%D0%BE%D0%B9-%D0%BB%D0%BE%D0%B3%D0%B8%D0%BA%D0%B8-396ba5eca147)
- [Unit тестирование Angular 5](https://habr.com/ru/post/349380/)
- [Модульное тестирование Vue.js](https://ru.vuejs.org/v2/cookbook/unit-testing-vue-components.html)

Youtube:
- [Good video about frontend testing with Jasmine and Karma with samples](https://www.youtube.com/watch?v=zF1hlOxucHE)

Notes: Looks like Angular is dying and that's why Protractor probably won't be used much in a long term.
So use this video for understanding main principles and how you can handle jasmine, karma and mocking.

---
Домашнее задание

Main часть:
- Создать репозиторий на GitHub, в котором создать папку `client`
- В папке `client` создать приложение на React / Angular / Vue фреймворке на ваш выбор. У кого будет выбран самый редкий фреймворк -- получат дополнительные баллы.
- Требования к приложению: должно содержать несколько страниц с роутингом, обязательно содержать сервис, который общается с node.js бекендом.
- Присутствуют unit, component и e2e тесты в минимальном количестве 1шт каждый.

Advanced часть:
- Приложение содержит авторизацию и не собрано из генераторов вида JHipster.
- Написаны тесты для проверки авторизации
- Существует нескольно наборов тестов (несколько suites)

Bonus часть:
- Вы рассматриваете два любых фреймворка на выбор. Например: Mocha и Jest или Playwright и Cypress.
- Пишете примеры с каждым из фреймовокров для своего приложения.
- Короткая статья или заметки в чем именно для вас кажутся основные отличия.
- Делаете в своем репозитории на GitHub активным GitHub pages и размещаете эту статью там.

Вопросы для проверки знаний:
- Зачем e2e тесты, если можно писать компонентные тесты? Чем отличается e2e тест от компонентных?
- Терминология `describe` `it` `xit` мне понятна и я могу объяснить что это
- Что такое test runner?
- Тест зависит от запуска другого теста(ждет определенного состояния системы). Что может пойти не так?
- `beforeTest()`,`afterTest()` зачем это?
- Какие бывают `assertion frameworks`?
- Почему рекомендуется писать немного e2e тестов?
- Сколько проверок должно быть в одном юнит тесте?
- Как называются тесты, которые то проходят, то не проходят? Почему так бывает и что с ними делать?


### Занятие 3. Тестирование Frontend: e2e тестирование.

- [Лекция 3](https://miro.com/app/board/o9J_kkBAhy8=/)
- [Пример] TBD
- [Видео](https://youtu.be/jtu5DCmr3TA)

- [Playwright](https://github.com/microsoft/playwright)
- [Cypress](https://www.cypress.io/)
- [Webdriver.io](https://webdriver.io/)
- [e2e vs unit testing by Kent C. Dodds](https://kentcdodds.com/blog/unit-vs-integration-vs-e2e-tests)

---
Домашнее задание

Main часть:
- В первой части домашнего задания у вас уже есть приложение с юнит и компонентными тестами. Самое время дополнить его e2e тестами.
Необходимо написать не менее 5 тестов на каждом из фреймворков: Cypress и Playwright.

Advanced часть:
- Разобраться как с помощью Cypress и Playwright делать авторизацию в вашем приложении, чтобы каждый тест не проходил форму логина(авторизации).

Bonus часть:
- Написать e2e тесты, которые делают скриншот тестирование и запись видео. Найти дефекты, которые будут обнаружены с помощью видео или скриншот теста, но при этом найти их с помощью юнит или компонентных тестов не тривиально. 
- По результатам написать статью в ваш блог(блог на github pages, который вы делали в 1 дз)