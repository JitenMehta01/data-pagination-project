// variables

const itemsPerpage = 9; // how many students on each page

const listContainer = document.querySelector('.student-list'); // ul containing list items

const buttonContainer = document.querySelector('.link-list') // ul containing pagination buttons

/*************************************************************************************************************************************************************
 * 
 * 
 * 
showPage function

- The aim of this function is to pull 9 objects from the data array and display them to the DOM. The properties and value from the object will be used to create a list item about a student.

- The function will take a specific set of objects from the array. For example, objects 1-9, 10-19 etc. Each set will have its own page

- The function will accept 2 arguements. The first will be the array holding the objects. Second will be a number representing a page. 

- The function will need several elements in order to work.

- They are:

  - 2 variables which represents where the set will begin and end. These varibles will hold a dynamic number values which will be used in indexes.

  - Making sure the ul holding all appended list items is clear.

  - A loop which loops over the data list.

  - A condition within the loop which checks the value of the index variables against the counter variable in the loop.

  - In the condition, the studentBuild function needs to be called. A object from the data list needs to be passed as an arguement. The function will return a list item.

  - That list item then needs to be appended to the DOM.
*
*/


function showPage (list, page){ // 2 args. first represents the data. The seconed represents a page.
  const startIndex = (page * itemsPerpage) - itemsPerpage; // The startIndex variable indicates where the set will begin.
  const endIndex = page * itemsPerpage; // The endIndex variable indicates where the set will end.

  listContainer.innerHTML = ''; // clears the ul container holding the list items.

  for(let i =0; i < list.length; i++){ // loops over the data
    if(i >= startIndex && i < endIndex){  // the code block in the if statement will only run if the value of i more or equal to the startIndex and less then the endIndex.
      let student = studentBuild(list[i]); // calls the studentBuild function and passes a object from the data arrray as an arguement. The i indicates which student will be through.
      listContainer.insertAdjacentHTML('beforeend', student); // The studentBuild function will return a list items. THis needs to be appended to the DOM.
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

/*************************************************************************************************************************************************************
 * 
 * 
 * 
addPagination function


* - The aim of this function is to append page buttons to the DOM. The buttons will have a click events. Once clicked, the set of list items on the page will change.

  - This function will hold 1 paremeter. The list paremeter represents the data.

  - The function will need several elements in order to work.

  - They are:

    - A variable which contains a page number, representing how many pages they will be. You can dynamically create this by dividing the data by the itemsperPage varaible.

    - clearing button container Ul. 

    - Then loop over the noOfbuttons variable and append a li with a button. store the li and button in a variable and append it to the DOM.
    
    - Giving the first appended button a class of 'active'

    - Adding a click event to the buttonContainer. In this click event there will need to be:

      - a reference to the textContent of the button the user has clicked on.

      - Making sure the target of the click is a button

        - Then get a reference to all appended buttons and looping over them. In the loop, remove all buttons with  a class of 'active';

        - Then add the className of 'active' to whatever the target of the click was.

      - Call te showpage function and pass the data and pageNo varible as an arguuement.
*/


function addPagination (list) {

  const noOfButtons = Math.round(list.length/itemsPerpage); // This dynamically creates a number value depending on the length of the data list and the value of itemsperPage
  buttonContainer.innerHTML = ''; // This clears the button ul container. Making sure there is nothing there before we append the buttons.

  for(let i =1; i <= noOfButtons; i++){ // This loop appends a list item and button to the DOM. The condition depends on the value of noOfButtons
    const button = `
    <li>
    <button type="button">${i}</button>
    </li>
    `;
    buttonContainer.insertAdjacentHTML('beforeend', button); // Appending list items and buttons to the DOM.
  }
  const firstButton = document.querySelector('.link-list > li > button');
  firstButton.className = 'active'; // This sets the first button, which is 1, with a class of active. This indicates that the first page will be on view when it is loaded.
  
  buttonContainer.addEventListener('click', (e) =>{ // an event listener for the ulButton Container
    const pageNo = e.target.textContent; // this stores the textContent of the button the user has clicked on. I.e the number.
    if(e.target.tagName === 'BUTTON'){ // this if statement checks if the user has clicked on a button within the container
        const pagButtons = buttonContainer.querySelectorAll('li button'); // this stores all the buttons in a variable
        for(let i=0; i < pagButtons.length; i++){ // 
          if(pagButtons[i].className === 'active'){ // This loop will remove all buttons with class of 'active'
            pagButtons[i].classList.remove('active');
          }
        }
        e.target.className = 'active'; // This will set whatever button the user has clicked as active
    }
    showPage(data,parseInt(pageNo)); // the second arguement takes the number from the button the user has clicked on. 
  });
}
// Call functions


showPage(data, 1)
addPagination(data);

