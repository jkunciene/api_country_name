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
        //tikrinti, ar salies info jau yra, pasalinti sena informacija   
        if (document.querySelector('.one_country_info') != undefined) {
            const countries = document.querySelectorAll('.one_country_info');
            console.log(countries);
            for (let i = 0; i < countries.length; i++) {
                console.log(countries[i])
                countries[i].remove();
            }
        }
        //jei gauciau response daugiau ne viena sali
        data.map(one_country => {
            const one_country_info = document.createElement('div');
            one_country_info.className = 'one_country_info card row d-flex justify-content-center mt-4';
            one_country_info.innerHTML = `
            <img src="${one_country.flags.png}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${one_country.name.common}</h5>
                <p class="card-text">Population: ${one_country.capital[0]
                }</p>
                <p class="card-text">Population: ${one_country.population}</p>
         
       
        </div>
        `
            document.querySelector('.container').appendChild(one_country_info)
        })
    } catch (error) {
        console.log(error);
    }

}

my_button.addEventListener('click', getCountryInfo);