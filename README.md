1. React ничего не знает о работе с сервером - это задача других библиотек
2. Сетевой код следует изолировать от кода компонентов
3. Если необходимо, трансформируйте данные до того, как их получит компонент
4. Обрабатывайте состояния "загрузка" и "ошибка"
5. Разделяйте ответственность компонентов:
   логику и рендеринг

---

## Ract lifecycle

**MOUNT**
constructor() => render() => componentDidMount()

---

**UPDATE**
NewState
=> render() => componentDidUpdate(prevState, prevProps)
setState

---

**UNMOUNTING**
componentWillUnmount()

---

**ERROR**
componentDidCatch(error, info)

---

React.Children()
React.cloneElement()

## Important information

Компоненты высшего порядка - ф-ции, возвращащие компонент

Компонент-класс можно разбивать на 2 компонента по смыслу:

- занимается отрисовкой (отвечает за UI)
- отвечает за логику

Композиция функций - применение одной ф-ции к результату другой 

const { 
        Provider : swapiProvider,
        Consumer : swapiConsumer } = React.createService()
Consumer_syntax: 
    {
        (args) => {
            return (...);
        }
    }