const testimonialsContainer = document.querySelector('.testimonials-container');
const testimonial = document.querySelector('.testimonial');
const userImage = document.querySelector('.user-image');
const username = document.querySelector('.username');
const role = document.querySelector('.role');

function getUsers() {
    fetch("https://randomuser.me/api/?results=10")
    .then((results) => {
    return results.json();
    })
    .then((data) => {
        const user = data.results[0];
        testimonial.textContent = '';
        userImage.src = user.picture.large;
        username.textContent = user.name.first + ' ' + user.name.last;
        role.textContent = user.location.city;
    });
}
    
    getUsers();


   