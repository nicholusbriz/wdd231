const url = 'https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json';
const cards = document.querySelector('#cards');

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    //console.table(data.prophets);
    displayProphets(data.prophets);
}

const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
    // Create elements to add to the div.cards element
    let card = document.createElement('section');
    card.className = "card";
    let fullName = document.createElement('h2'); 
    fullName.className = "fullname";
    let dateOfBirth = document.createElement('p');
    dateOfBirth.className = "date-of-birth";
    let placeOfBirth = document.createElement('p');
    placeOfBirth.className = "place-of-birth";
    let portrait = document.createElement('img');
    portrait.className = "image";

    // Build the h2 content out to show the prophet's full name
    fullName.textContent = `${prophet.name} ${prophet.lastname}`; 
    // Build the image portrait by setting all the relevant attributes
    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
    portrait.setAttribute('loading', 'lazy');
    portrait.setAttribute('width', '340');
    portrait.setAttribute('height', '440');

    //Add date of birth child 
    dateOfBirth.textContent = `Date of Birth: ${prophet.birthdate}`;
    //Add place of birth
    placeOfBirth.textContent = `Place of Birth: ${prophet.birthplace}`;

    // Append the section(card) with the created elements
    card.appendChild(fullName); //fill in the blank
    card.appendChild(dateOfBirth);
    card.appendChild(placeOfBirth);
    card.appendChild(portrait);
    


    cards.appendChild(card);
  }); 
}

getProphetData();
