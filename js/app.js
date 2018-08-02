document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const form = document.querySelector("#new-item-form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    // append list item to list
    // append list to div
    const readingListItem = document.createElement("li");
    // output from form

    const readingList = document.createElement("ul");

    const readingListDiv = document.querySelector("#reading-list");
    readingListDiv.appendChild(readingList);
    readingList.appendChild(readingListItem);



  });



});
