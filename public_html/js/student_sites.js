//web2.js
// i use a console.log() to make sure the .js is loading. But then comment it out as soon as it is working
//console.log('js/student_sites.js loaded');

//this puts today's date in the calendar icon
const calDate = document.querySelector("#cal text");
//console.log(calDate.innerHTML);

let today = new Date();
calDate.innerHTML = today.getDate();

//this script scrolls to an anchor element, when a user clicks a link that begins with #
  //select all links that begin with #
  //should I make this more specific? i.e. add a class or something?
  var anchorLinks = document.querySelectorAll('[href^="#"]');

    //add event listeners to those links
  Array.from(anchorLinks).forEach(function(element) {
    //console.log(element);
    //when a user clicks a link, call the scrollFunction
    element.addEventListener('click', scrollFunction);
  });

  function scrollFunction(event){
    //console.log('clicked: ' + this.getAttribute('href'));
    //stop the default event (going directly the to the element)
    event.preventDefault();
    //get the clicked element by the link's href attribute, but remove the first character: #
     
    document.querySelector(this.getAttribute("href")).scrollIntoView({ behavior: 'smooth', block: 'start' });
    //console.log(document.querySelector(this.getAttribute("href")).scrollTop);

  }

  //code to display student sites
  let sections;
  const studentSites = document.querySelector('#student-sites');
  const studentsArticle = document.querySelector('#students');
fetch('js/students_a2024.json')
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    //console.log(data);

    // sort data 
    data.sections.forEach(section => {
      
      section.students.sort((a, b) => {
          const nameA = a.firstName.toUpperCase();
          const nameB = b.firstName.toUpperCase();
          return nameA < nameB ? -1 : (nameA > nameB ? 1 : 0);
      });
    });
    //console.log(JSON.stringify(data, null, 2));
    data.sections.forEach(displaySection); //pass individual students

  });


  //console.log(studentsArticle);
const classTimes = ["Cohort 2024"];
  function displaySection(section, index){
  	//console.log(section.students);
  	
  	let article = document.createElement('article');
  	let h4 = document.createElement('h4');
    h4.innerHTML = classTimes[index];
    article.appendChild(h4);
   

  	section.students.forEach(function(student){
      //console.log(student);
			let a = document.createElement('a');
			a.innerHTML = student.firstName;
			a.href = `https://${student.userName.normalize("NFD").replace(/[\u0300-\u036f]/g, "")}${student.studentNumber}.582helvetica.com`;
			a.id = student.studentNumber;
      a.target = '_blank';
			article.appendChild(a);
  	});
  	studentSites.appendChild(article);

  }

//update calendar date
//calculate time from visit to midnight then set an interval for every 24 hours after
let now = new Date();

let updateDate = setTimeout(setIntervalTimer,(24 - now.getHours() - (now.getMinutes() / 60 )) * 3600000);

function setIntervalTimer() {
  setInterval(() => {
    setClock();
  }, 86400000);
}

function setClock() {
  let today = new Date();
  calDate.innerHTML = today.getDate();
}


