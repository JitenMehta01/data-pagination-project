// variables

const itemsPerpage = 9; // how many students on each page

const listContainer = document.querySelector('.student-list'); // ul containing list items

const buttonContainer = document.querySelector('.link-list') // ul containing pagination buttons

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

function addPagination (list) {

  const noOfButtons = Math.round(list.length/itemsPerpage); // this calculates the amount of objects in the data list. Then divides it by the value of the iutemsperpage.
                                                            // The math.round rounds the above calculation to the nearest integer.
  
  buttonContainer.innerHTML = ''; // This clears the button ul container. Making sure there is nothing there before we append the buttons.

  for(let i =1; i <= noOfButtons; i++){
    const button = `
    <li>
    <button type="button">${i}</button>
    </li>
    `;
    buttonContainer.insertAdjacentHTML('beforeend', button); // This loop adds list items to the buttoContainer variable depending on the value of the noOfButtons variable.
  }


  const firstButton = buttonContainer.children[0];
  firstButton.children[0].className = 'active'; // This sets the first button, which is 1, with is a class of active. This indicates that the first page will be on view when it is loaded.

  buttonContainer.addEventListener('click', (e) =>{ // an event listener for the ulButton Container

    const pageNo = e.target.textContent; // this receives textContent of the button the user has clicked on. I.e the number.

    if(e.target.tagName === 'BUTTON'){ // this if statement checks if the user has clicked on a button within the container

        const pagButtons = buttonContainer.querySelectorAll('li button'); // this stores all the buttons in the container in this varable


        for(let i=0; i < pagButtons.length; i++){ // This loop will remove all buttons with class of active
          if(pagButtons[i].className === 'active'){
            pagButtons[i].classList.remove('active');
          }
        }

        e.target.className = 'active'; // This will set whatever button the user has clicked as active
    }
    showPage(data,parseInt(pageNo)); // the second arguement takes the number from the button the user has clicked on. 

  })
}


// Call functions


showPage(data, 1)
addPagination(data);

