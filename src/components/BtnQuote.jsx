import getRandomElementArray from "../utils/getRandomElementArray"



const BtnQuote = ({ setQuote, phrases, setNumberBg }) => {
const handleRandomPhrase= () =>{
    setQuote(getRandomElementArray(phrases))
    setNumberBg(getRandomElementArray([1,2,3,4]))

}


return (
    <button className="container__btn" onClick={handleRandomPhrase}>☘Prueba Tu Suerte☘</button>
)
}

export default BtnQuote