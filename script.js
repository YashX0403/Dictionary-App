const dictionary = (word)=>{
    const url = 'https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary?word=bright';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '70002d4190mshf4a91741e1dc2cfp108604jsn100021e70ff4',
		'x-rapidapi-host': 'dictionary-by-api-ninjas.p.rapidapi.com'
	}
};
 fetch('https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary?word=' + word,options)
      .then(response => response.json())
      .then((response) =>{
        console.log(response)
        wordheading.innerHTML = response.word;
        definition.innerHTML = response.definition;
      } )
      .catch(err =>console.error(err));
}
searchbtn.addEventListener("click", (e)=>{
    e.preventDefault();
    dictionary(searchinput.value)
})