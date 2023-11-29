const API_URL =
  "https://fsa-crud-2aa9294fe819.herokuapp.com/api/2310-FSA-ET-WEB-PT-SF/events";

const state = {
  parties: [],
};

// selecting the UL
const partiesList = document.querySelector("#parties");

// selecting the form
const addPartyForm = document.querySelector("#addParty");
// adding event listener to form



// Update the state with data from the API

async function getParties() {
  try {
    // get data from the URL
    const response = await fetch(API_URL);
    // turn data from fetch request into JSON
    const partiesData = await response.json();
    // update state with the fetched data
    state.parties = partiesData.data;
  } catch (error) {
    console.log(error);
    console.log("Error!!! Try again");
  }
}

// ------------ RENDER PARTIES VIA DOM -------------

function renderParties() {
  //if state is empty, display message
  if (!state.parties.length) {
    partiesList.innerHTML = "<li>NO PARTIES AVAILABLE!</li>";
    return;
  }

  const partyCards = state.parties.map((party) => {
    //create an <li> to house the artist info
    const partyLi = document.createElement("li");
    // update the innerText of the <li> with the desired info
    partyLi.innerText = ;
    // create the delete button with each <li>
    partyLi.innerHTML = "<button>DELELTE</button>";

    return partyLi;
  });

  partiesList.replaceChildren(...partyCards);

  // ----------- add parties function ------------------ >

  async function addParties(event) {
    event.preventDefault();
  }
}
