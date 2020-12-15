const personA = {
    name: 'Perico',
    age: 26,
    city: 'Reus'
}
const sumar = ()=>{
    personA.age = personA.age + 1
    // personA.age += 1
    // personA.age ++
    render()
}
const restar = ()=>{
    personA.age = personA.age - 1
    // personA.age -= 1
    // personA.age -- 
    render()
}
const reset = ()=>{
    personA.age = 0
    render()
}


const appRoot = document.getElementById('appRoot')
const render = ()=>{
    const template = (
        <div>
            <h1>Nombre: {personA.name}</h1>
            <p>Edad: {personA.age}</p>
            <p>Ciudad: {personA.city}</p>
            <button onClick={sumar}>+1</button>
            <button onClick={restar}>-1</button>
            <button onClick={reset}>reset</button>
        </div>
    )
    
    ReactDOM.render(template, appRoot)
}
render()