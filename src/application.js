$(document).ready(function(){
    $('#principle').val(localStorage.getItem('principle'));
    $('#time').val(localStorage.getItem('time'));
    $('#rate').val(localStorage.getItem('rate'));
    
})

const interest=(p,t,r)=>{return ((p * t * r) / 100)}

function calculateInterest() {
    let principle;
    let time;
    let rate;

    principle = document.getElementById('principle').value;
    localStorage.setItem('principle', principle);

    time = document.getElementById('time').value;
    localStorage.setItem('time', time);
   
    rate = document.getElementById('rate').value;
    localStorage.setItem('rate', rate);
   
    var answer = interest(principle,time,rate);
    
    document.getElementById('AreaValue').value = answer;
}

const jokeURI = 'https://dog.ceo/api/breeds/image/random'

// fetch information
const getJoke = async () => {
    try {
        const response = await fetch(jokeURI)
        const obj = await response.json()
        console.log(`FETCHED. Response JSON ${obj}`)
        const joke = obj.message || 'No joke for you.'
        return joke
    } catch (error) { console.error(error) }
}
const updateWithJoke = async (event) => {
    try {
        document.querySelector('#dogarea').src = ''
        const answer = await getJoke()
        document.querySelector('#dogarea').src = answer
    } catch (error) { console.error(error) }
}
// document.getElementById('getscore').onclick(getJoke);
document.addEventListener('click', event => {
    if (event.target && event.target.id === 'getscore') { updateWithJoke(event) }
})