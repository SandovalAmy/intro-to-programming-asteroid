//Insert Copyright Text in Footer
const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector("footer");
const copyright = document.createElement("p");
copyright.innerHTML = `&copy Amy Jen Sandoval ${thisYear}`;
footer.appendChild(copyright);

//Create List of Skills
const skills = ["React", "JavaScript", "HTML", "CSS"];
const skillsSection = document.getElementById("skills");
const skillsList = skillsSection.querySelector("ul");

//Create a for loop to iterate over your skills Array, starting at index 0
for (let i = 0; i < skills.length; i++) {
  //inside the loop, create a new list item element
  let skill = document.createElement("li");
  //set the inner text of skill variable to the value of the current Array element
  skill.innerHTML = `${skills[i]}`;
  //append the skill element to the skillsList element
  skillsList.appendChild(skill);
}
