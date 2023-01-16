//pasizymiu input, kad pasiimciau vartotojo ivesta reiksme
const country_name = document.getElementById('country_name');

//pasizymiu mygtuka, kad iskviesti funkcija
const my_button = document.querySelector('button');

const getCountryInfo = async (event) => {
    event.preventDefault();
    //pasitikrinu, ar gaunu ivesta vartotojo reiksme
    console.log(country_name.value);
    const country = country_name.value;

    try {
        const res = await fetch(`https://restcountries.com/v3.1/name/${country}`);
        const data = await res.json();
        console.log(data);
        
    } catch (error) {
        console.log(error);
    }

}

my_button.addEventListener('click', getCountryInfo);