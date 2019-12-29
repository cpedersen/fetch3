'use strict';

function getDogImage(dog_type) {
  fetch(`https://dog.ceo/api/breed/${dog_type}/images/random`)
    .then(response => response.json())
    .then(responseJson => 
      printResults(responseJson, dog_type))
    .catch(error => alert('Something went wrong. Try again later.'));
}

function printResults(responseJson, dog_type) {
  // replace with the dog image
  if (responseJson.status != "success") {
    console.log(`Couldn't find a ${dog_type}`);
    $('.results-img').replaceWith(
      `<img src="OhShit.jpg" class="results-img" width="300" height="300">`
    )
  } else {
    console.log(`Found a ${dog_type}`);
    $('.results-img').replaceWith(
      `<img src="${responseJson.message}" class="results-img">`
    )

  }
  //display the results section
  $('.results').removeClass('hidden');
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    let dog_type = $("#dog-type").val();
    getDogImage(dog_type);
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});