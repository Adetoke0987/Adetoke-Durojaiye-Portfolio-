let roles = document.getElementById("rolecontainer");
let jobRoles = ["Full Stack Developer", "Software Engineer", "Web Developer"];
let index = 0;
let charIndex = 0;

function displayJobRoles() {
    const currentRole = jobRoles[index];
    const displayedText = currentRole.substring(0, charIndex + 1);
    roles.textContent = displayedText + (charIndex % 2 === 0 ? "|" : " ");
    roles.style.opacity = 1;

    if (charIndex < currentRole.length) {
        charIndex++;
    } else {
        setTimeout(() => {
            roles.style.opacity = 0;
            charIndex = 0;

            index = (index + 1) % jobRoles.length;
        }, 1000);
    }
}

displayJobRoles();

setInterval(displayJobRoles, 150);

