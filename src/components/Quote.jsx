


const Quote = ({ phrase }) => {
    
return (
    <p className="container__phrase"  >{phrase.phrase},<br /> <br /> <div>📖{phrase.author}</div></p>
    
)
}

export default Quote