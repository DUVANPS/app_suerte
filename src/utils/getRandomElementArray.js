const getRandomElementArray = (arr) =>{
const indexRandom = Math.floor( Math.random() * arr.length)

return arr[indexRandom]

}
export default getRandomElementArray


// Esta linea de codigo me genera un elemento random de un array