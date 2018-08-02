document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const form = document.querySelector("#new-item-form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const inputTitle = event.target.title.value;
    const inputAuthor = event.target.author.value;
    const inputCategory = event.target.category.value;

    const readingListItem = document.createElement("li");
    readingListItem.textContent = `${inputTitle}, by ${inputAuthor}, ${inputCategory}`;
    // output from form

    const readingList = document.createElement("ul");

    const readingListDiv = document.querySelector("#reading-list");
    readingListDiv.appendChild(readingList);
    readingList.appendChild(readingListItem);



  });



});
