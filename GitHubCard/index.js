/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

const request = axios.get('https://api.github.com/users/ShariqAli-Dev')
.then(response => document.querySelector('.cards').appendChild(createGitCard(response.data)))
.catch(error => console.log(error));


/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = ['tetondan', 'dustinmyers', 'justsml', 'luishrd', 'bigknell'];
followersArray.forEach(follower => {
  axios.get(`https://api.github.com/users/${follower}`)
  .then(response => document.querySelector('.cards').appendChild(createGitCard(response.data)))
  .catch(error => console.log(error));
});


/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

const createGitCard = ({ avatar_url, name, login, location, html_url, followers, following, bio }) => {
  // Creating Variables
  const divCard = document.createElement('div');
  const userImg = document.createElement('img');
  const cardInfoDiv = document.createElement('div');
  const h3 = document.createElement('h3');
  const usernameP = document.createElement('p');
  const locationP = document.createElement('p');
  const profileP = document.createElement('p');
  const profileA = document.createElement('a');
  const followersP = document.createElement('p');
  const followingP = document.createElement('p');
  const bioP = document.createElement('p');
  
  // Assigning Content
  divCard.classList.add('card');
  userImg.src = avatar_url;
  cardInfoDiv.classList.add('card-info');
  h3.classList.add('name')
  h3.textContent = name;
  usernameP.classList.add('username');
  usernameP.textContent = login;
  locationP.textContent = `Location: ${location}`;
  profileP.textContent = 'Profile:';
  profileA.href = html_url;
  profileA.textContent = html_url;
  followersP.textContent = `Followers: ${followers}`
  followingP.textContent = `Following: ${following}`
  bioP.textContent = bio;

  // Appending for structure
  divCard.appendChild(userImg);
  divCard.appendChild(cardInfoDiv);
  cardInfoDiv.appendChild(h3);
  cardInfoDiv.appendChild(usernameP);
  cardInfoDiv.appendChild(locationP);
  cardInfoDiv.appendChild(profileP);
  profileP.appendChild(profileA);
  cardInfoDiv.appendChild(followersP);
  cardInfoDiv.appendChild(followingP);
  cardInfoDiv.appendChild(bioP);

  return divCard;
}


/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
