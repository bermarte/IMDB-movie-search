// export const init = async () => {
//   const res = await fetch('/api');
//   const data = await res.json();
//   console.log(data);
// };
export const init = () => {
  console.log('client loaded');
}
const form = document.querySelector('form');
const searchInput = document.querySelector('input');
const resultsList = document.querySelector('#results');

const BASE_URL = 'http://localhost:3000/';

form.addEventListener('submit', formSubmitted);

function formSubmitted(event){
  event.preventDefault();
  const searchTerm = searchInput.value;
  console.log('form submitted', searchTerm);
  getSearchResults(searchTerm)
    .then(showResults);
}

function getSearchResults(searchTerm){
  return fetch(`${BASE_URL}search/${searchTerm}`)
    .then(res => res.json());
}

function showResults(results){
  results.forEach(movie => {
    const li = document.createElement('li');
    const img = document.createElement('img');
    li.appendChild(img);
    img.src = movie.image;
    const a = document.createElement('a');
    a.classList.add("ml-2");
    a.textContent = movie.title;
    a.href = 'movie.html?imdbID=' + movie.imdbID;
    li.appendChild(a);
    resultsList.appendChild(li);
  });
}
