// declare your functions here...
function paragraphSelector(){
  let pTags = document.querySelector('p');
  return pTags;
}

function lastImageSelector() {
  return $('img').last();
}

function divSelector(){
  return $('.pics');
}
function firstListItem(){
  return $('#pic-list li:first-child');
}
