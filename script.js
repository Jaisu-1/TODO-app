function newItem() {

  //Take item from the input field by sheer value and check if it exists;
  var item = document.getElementById("input").value;
  if(item.length <= 0)
  {
    return;
  }

  //Create a new node under ul/ li / li .. etc.
  var ul = document.getElementById("tasks");
  var li = document.createElement("li");
  li.appendChild(document.createTextNode("- " + item));
  ul.appendChild(li);

  //Empty the field again
  document.getElementById("input").value = "";

  //Clear the field when clicked
  li.onclick = removeItem;
}

document.body.onkeyup = function(e) {
  if (e.keyCode == 13) {
    newItem();
  }
};

function removeItem(e) {
  e.target.parentElement.removeChild(e.target);
}
