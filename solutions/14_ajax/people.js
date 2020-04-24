
const peopleSection = document.getElementById('people');
const allPersonCards = [];

const getPeople = (numberOfPeople = 5) => {
  const url = `https://randomuser.me/api/?results=${numberOfPeople}`
  fetch(url)
    .then(res => res.json())
    .then(res => res.results)
    .then(people => people.map(p => onePersonCard(p)))
    .then(thesePersonCards => allPersonCards.unshift(...thesePersonCards))
    .then(() => peopleSection.innerHTML = allPersonCards.join(""))
}

document.addEventListener('DOMContentLoaded', e => getPeople(10));
document.getElementById("getPeople").addEventListener('click', e => getPeople());

function onePersonCard(person) {
  const { cell, email, gender, name: { first, last }, location: { street: { number, name }, city, state, country, postcode }, picture, phone, nat } = person;
  const onePerson = `
  <div class="peopleCard mdl-card mdl-shadow--2dp">
  <div class="mdl-card__title mdl-card--expand" style="background-image: url(${picture.large})">
    <h2 class="mdl-card__title-text">${first} ${last}</h2>
  </div>
  <div class="mdl-card__supporting-text">
    <table>
      <tbody>
      <tr><th>email:</th><td>${email}</td></tr>
      <tr><th>cell:</th><td>${cell}</td></tr>
      <tr><th>address:</th><td>${number} ${name}<br />${city}, ${state} ${postcode}<br />${country}</td></tr>
      </tbody>
    </table>
  </div>
  <div class="mdl-card__actions mdl-card--border">
    <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
      Update
    </a>
    <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
      Contact
    </a>
  </div>
  </div>
  `;
  return onePerson;
}