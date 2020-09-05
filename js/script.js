// variables

const itemsPerpage = 9; // how many students on each page

const listContainer = document.querySelector('.student-list'); // ul containing list items


/*************************************************************************************************************************************************************
 * 
 * 
 * 
showPage function

- This section contains 2 functions.

- The first function is called Showpage. This function accepts 2 arguements. a array object and a number.
- The array contains 42 objects.
- The number represents what page the user will be on.

- First, the function has 2 variables. Startindex and endIndex
- These variables represents a window within the array object.
- When called uped, this window will be displayed to the DOM


- The listContainer variable (which contains each item) is set to an empty string to make sure nothing else is on the page.

- The array object is then looped upon. A for loop is used.

- In the loop there will be a conditional statement
- The condiditon will evaluate if the value of i is more or equal, more and less then the indexes stated in teh variabled (i.e the window)

- If true, the studentBuild function is called up and stored in a varaible called student.
- The studentBuild function will accept 1 arguement. a object from the list parameter.
- The i variable from the for loop will be used as a index value to indicate which item we want to pass as an arguement.
- The studentBuild function will then return a html snippet which needs to appended to the listContainer variable.

- We then use the insertAdjaceentHTML method to add each list item to the listContainer method.
*
*/


function showPage (list, page){
  const startIndex = (page * itemsPerpage) - itemsPerpage;
  const endIndex = page * itemsPerpage;

  listContainer.innerHTML = '';

  for(let i =0; i < list.length; i++){
    if(i >= startIndex && i < endIndex){
      let student = studentBuild(list[i]); // calls the student function and passes a list item as arguement.
      listContainer.insertAdjacentHTML('beforeend', student);
    } 
  }
}




function studentBuild (student){ // a function containing a template literal. This is how each student will be appended to the DOM.
  
 
  let studentItem = `
  <li class="student-item cf">
    <div class="student-details">
      <img class = 'avatar' src = ${student.picture.large}>
      <h3>${student.name.first} ${student.name.last} </h3>
      <span class="email">${student.email}</span>
    </div>
    <div class="joined-details">
      <span class="date">Joined ${student.registered.date}</span>
    </div>
  </li>
  `;

  return studentItem;
}

/*********************************************************************************************************************************************************************************** */

/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/



// Call functions
