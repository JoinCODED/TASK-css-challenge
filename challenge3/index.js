function deleteItem(key) {
  alert(`You are trying to delete item of key ${key}`);
}

/** Don't touch this function
 *  This is a component that will be rendered inside the list
 */
const listComponent = (person) => `
    <div class="row" onclick="deleteItem(${person.key})" > ${person.name} | ${person.address}</div>
`;
/**
 * This function will render the list of id "rows" with the array defined in people.js
 */
function renderList() {
  document.getElementById("list").innerHTML = people
    .map(listComponent)
    .join("\n");
}
renderList();
