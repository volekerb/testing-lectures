## Software testing lectures

Меня зовут Всеволод Брекелов.

Twitter: https://twitter.com/brekelov

Я проводил лекции в ИТМО по прикладному тестированию.

Все видео записи, домашние задания, дополнительные материалы можно найти здесь.

### Занятие 1. Основы теории.

- [Методологии разработки. Статья. Habrahabr](https://habr.com/ru/company/edison/blog/269789/)
- [Виды, типы тестирования, техники тест-дизайна. Статья.](https://dou.ua/forums/topic/13389/)
- [Лекция 1](ST.Lecture1.pdf)
- [Видео](https://youtu.be/nU9ByrAT2i0)

---
Домашнее чтиво:
- [https://martinfowler.com/articles/practical-test-pyramid.html](https://martinfowler.com/articles/practical-test-pyramid.html)
- [https://martinfowler.com/bliki/IntegrationTest.html](https://martinfowler.com/bliki/IntegrationTest.html)
- [https://martinfowler.com/bliki/TestDouble.html](https://martinfowler.com/bliki/TestDouble.html)

Домашнее видео (не то, о котором вы подумали):
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

### Занятие 4. Тестирование Backend. Введение. 

- [Лекция 4](ST.Lecture4.pdf)
- [Пример](https://spring.io/guides/tutorials/react-and-spring-data-rest/)
- [Видео](https://youtu.be/z-Yh0QlJGP4)

Ссылки HowToDo(гайды)

- [React + Redux + Spring](https://habr.com/ru/company/alfa/blog/340776/)
- [Пошагово UI на ReactJS + Backend на Java w/Sptring](https://spring.io/guides/tutorials/react-and-spring-data-rest/)
- [Chrome DevTools panel](https://developers.google.com/web/tools/chrome-devtools/network)
- [SoapUI test](https://www.soapui.org/getting-started/soap-test/)

Ссылки для ознакомления

- [Http протокол](https://developer.mozilla.org/ru/docs/Web/HTTP/Overview)
- [Серия постов про REST API простыми словами](https://habr.com/ru/post/483202/)
- [Postman and cUrl](https://www.taniarascia.com/making-api-requests-postman-curl/#:~:text=Postman%20is%20an%20API%20testing,to%20do%20the%20same%20tasks.)
- [Chrome DevTools panel](https://developers.google.com/web/tools/chrome-devtools/network)
- [Uber:Prototool for testing proto and not only for that](https://github.com/uber/prototool)

### Занятие 5. Тестирование Backend. Unit testing. Component testing.

- [Лекция 5]
- [Пример](lec_5_example)
- [Видео](https://youtu.be/nSwc_jeeVNw)

Ссылки
- [Видео Кирилла Толкачева про тестирование с Spring Boot](https://www.youtube.com/watch?v=uc-cfX-5wQA)
- [JUnit 5 User Guide](https://junit.org/junit5/docs/current/user-guide/)
- [TestContainers](https://www.testcontainers.org/)
- [Доклад Сергея Егорова про TestContainers](https://www.youtube.com/watch?v=GazYkGBamnE)
- [Доклад Анатолия Коровина про тестирование микросервис и очередей с TestContainers](https://www.youtube.com/watch?v=UeQfaulJJDo&t=4s)
- [Spring Testing Guide](https://spring.io/guides/gs/testing-web/)
- [Доклад от Marc Philipp про JUnit 5](https://www.youtube.com/watch?v=751gMXH-lEE)

---
Домашнее задание
Main часть:
Сделать сервис на Java+Spring+любая DB, который имеет как мин 1 Controller.
Написать Unit и Component тесты для этого сервиса. Использовать TestContainers для одного теста с DB. Использовать Mockito для мокирования тестов с внешним сервисом.
Написать документацию(README) какие тесты еще необходимо написать, но вы не успели.

Advanced часть:
Сделать взаимодействие сервиса и вашего Frontend приложения.
Сделать тесты на авторизацию.
Создать отдельные Spring Test Configruation, которые можно переключать с помощью флага при запуске тестов.
Сделать генерацию тестовой документации через Asci Doctor(Spring Rest Docs).

Bonus часть:

Придумать функциональность, с которой можно использовать очереди/стримы вида RabbitMQ/Kafka streams. Написать компонентные тесты на эту функциональность(используя TestContainers).

---
{#java #spring #springboot #springboottest #testcontainers #testng #junit5}

Вопросы для проверки знаний:
- Зачем нужен отдельный Config для тестов?
- Как можно создать отдельный Suite для запуска разных тестов?
- Можно ли в тесте создавать образ базы данных и работать с ней(не подымая саму базу данных для теста отдельно в окружении)?
- Как сделать параметризованный тест с JUnit?
- Есть ли hamcrest в JUnit 5?
- Почему JUnit 5 лучше TestNG? (или нет? =)

### Занятие 6. CI/CD. GitHub actions. Azure.

- [Лекция 6]
- [Пример]
- [Видео](https://youtu.be/nfVba1sglLs)

Ссылки
- [Видео Илья Климов про CI/CD](https://www.youtube.com/watch?v=CwU-OiS_PEQ)
- [Что такое CI/CD](https://selectel.ru/blog/what-is-ci-cd/)
- [GitHub Actions](https://github.com/features/actions)
- [Azure GitHub action](https://github.com/Azure/actions)
- [Spring Boot app to Azure](https://spring.io/guides/gs/spring-boot-for-azure/)
- [CI/CD с GitHub actions статья](https://habr.com/ru/post/476368/)
- [Spring example with CD to Azure](https://github.com/Azure-Samples/java-spring-petclinic)
- [Repo with GitHub actions step by step](https://github.com/qagid/github-actions)
- [Jenkins + Docker set up pipeline](https://www.youtube.com/watch?v=J0d-CbJKAwU)
- [React app GitHub actions example](https://dev.to/dyarleniber/setting-up-a-ci-cd-workflow-on-github-actions-for-a-react-app-with-github-pages-and-codecov-4hnp)
- [React app GitHub actions to AWS example](https://github.com/aws-samples/aws-starter-react-for-github-actions)
- [LazyDocker to manage docker images and containers](https://github.com/jesseduffield/lazydocker) 

---
Домашнее задание
Main часть:

Добавить GitHub action для запуска тестов на UI и Backend по пушу из в master ветку.

Advanced часть:

Добавить GitHub action для деплоя приложения UI+BE на Azure/Vercel/Яндекс Облако.

Bonus часть:

Использовать Kubernetes в Azure/Яндекс Облаке для разворачивания среды. 

---
{#githubActions #cicd #azure #cloud}

Вопросы для проверки знаний:
- Что такое CI/CD?
- Можно ли без Docker задеплоить приложение?
- Какие основные шаги прописываются в CI пайплайне для UI/BE?
- Можно ли настроить деплоймент на одно и тоже окружение из разных веток?
- Зачем нужно деплоить по комиту/пушу в мастер?

### Занятие 7. Reporting. BDD.

- [Лекция 7](ST.Lecture7.pdf)
- [Пример]
- [Видео](https://youtu.be/agEwIr05TRk)

Ссылки
- [Allure reporting](http://allure.qatools.ru/)
- [Allure doc](https://docs.qameta.io/allure/)
- [Allure examples](https://github.com/allure-examples)
- [BDD.Gherkin syntax](https://cucumber.io/docs/gherkin/)
- [Akita BDD framework used in Alpha-lab](https://github.com/alfa-laboratory/akita)

---
Домашнее задание

Bonus часть:

Использовать Allure reporting для написанных тестов. 

---
{#reporting #bdd #allure}

### Занятие 8. Contract tests. Pact. Spring cloud contract.

- [Лекция 8]
- [Пример]
- [Видео](https://youtu.be/QAmlyBdXjeY)

Ссылки
- [Pact workshop step by step](https://github.com/pact-foundation/pact-workshop-js)
- [Spring cloud contract examples](https://github.com/spring-cloud-samples/spring-cloud-contract-samples)
- [Spring cloud doc](https://cloud.spring.io/spring-cloud-contract/reference/html/using.html)
- [Pact broker](https://docs.pact.io/getting_started/sharing_pacts/)
- [Protocol buffers](https://developers.google.com/protocol-buffers)

---
Домашнее задание

Bonus часть:

Написать Pact-тесты к своему сервису.

---
{#contract-tests #pact #swagger}

### Занятие 9. A11Y. Instruments.

- [Лекция 9](ST.Lecture9.pdf)
- [Пример]
- [Видео](https://youtu.be/lzeWAL6rE_o)

Ссылки

- [Rus | Пошаговое руководство для тестировщиков по проверке доступности сайта](https://adequatica.medium.com/accessibility-testing-d10e9f613c4d)
- [WCAG doc](https://www.w3.org/WAI/WCAG21/Understanding/)
- [Rus | Веблайнд. Рекомендации](https://weblind.ru/inner.html#image-content)
- [Examples of accessibility patterns](https://www.accessibility-developer-guide.com/examples/)
- [Chrome Dev-tools how-to](https://www.smashingmagazine.com/2020/08/accessibility-chrome-devtools/)
- [Accessibility dev guide](https://www.accessibility-developer-guide.com/)
- [Udacity course about accessibility](https://www.udacity.com/course/web-accessibility--ud891)

---
Домашнее задание

Bonus часть:

Протестировать свой веб-сайт на а11y с помощью инструментов от Mozilla и Lighthouse. Пофиксить проблемы. Сделать автоматический тест с axe.

---
{#a11y}


### Занятие 10. Selenium. Selenide. Selenoid.

- [Лекция 10](ST.Lecture10.pdf)
- [Пример](https://github.com/selenide-examples)
- [Видео](https://youtu.be/G3HHvP_bUas)

Ссылки
- [Selenide + Selenoid configuration](https://habr.com/ru/post/473454/)
- [Selenium WebDriver step-by-step. PageObject](https://habr.com/ru/post/502292/)
- [Selenium Grid story](https://habr.com/ru/company/avito/blog/352208/)
- [Selenoid how-to install](https://medium.com/@eugenetruuts/how-to-install-selenoid-on-macos-751ee2955c70)

---
Домашнее задание

Main часть:
- Написать e2e тесты, используя Selenide.

Advanced часть:
- Настроить запуск тестов с Selenoid.

Bonus часть:
- Настроить генерацию отчетов с Allure report, сделав полный сетап в GitHub: e2e тесты с selenide запускаются с 
использованием Selenoid на разных окружениях(браузерах) параллельно и собирают отчет с помощью Allure Report.
- Написать статью как собрать такой сетап.  

---
{#selenium #selenide #selenoid #e2e-tests #parallel-run}


### Занятие 11. Performance testing.

- [Лекция 11](ST.Lecture11.pdf)
- [Пример](https://gitlab.com/tinkoffperfworkshop)
- [Видео](https://youtu.be/SEFqaGvcK-0)

Ссылки
- [Анализ ключевых показателей производительности](https://habr.com/ru/company/microsoft/blog/271547/)
- [ISTQB термины](https://www.rstqb.org/ru/istqb-downloads.html?file=files/content/rstqb/downloads/ISTQB%20Downloads/ISTQB_CTFL_PT_Syllabus_2018_Russian.pdf)
- [9 этапов тестирования](https://www.a1qa.ru/blog/9-etapov-testirovaniya-proizvoditelnosti/)
- [Доклад Андрея Акиньшина](https://www.youtube.com/watch?v=jZ0quqA1Fn8)
- [Доклад Владимира Ситникова про подвоные камни в нагрузочном тестировании](https://www.youtube.com/watch?v=3PWBBc7rZxw)
- [Доклад Алексея Лавренюка про Pandora](https://www.youtube.com/watch?v=lkusMkIniq0)

---
Домашнее задание

Main часть:
- Пройти воркшоп и выложить результат в гитхаб репозиторий.

Advanced часть:
- Настроить CI с Github actions.

Bonus часть:
- Настроить генерацию отчетов с Allure report.

Notes: отдельное спасибо Сергею Чепкасову и Максиму Рогожникову за отличный воркшоп.

---
{#performance #load #gatling #jmeter}


### Занятие 12. Best practices. Итоговая лекция.

- [Лекция 11](ST.Lecture12.pdf)
- [Видео](https://youtu.be/HcOyZTC77lc)
