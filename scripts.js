// // console.log("Hello World!");


const photoDatabase = [
    ["birds.jpg", "animals"], ["fish.jpg", "animals"], ["bird.jpg", "animals"], ["Elephant.jpg", "animals"], ["deer.jpg", "animals"], ["Tiger.jpg", "animals"], ["monkey.jpg", "animals"], ["eagle.jpg", "animals"], ["fox.jpg", "animals"], ["Polar bear.jpg", "animals"], 
    ["ai-gen (1).jpg", "AI"], ["ai-gen (2).jpg", "AI"], ["ai-gen (3).jpg", "AI"], ["ai-gen (4).jpg", "AI"], ["ai-gen (5).jpg", "AI"], ["ai-gen (6).jpg", "AI"], ["ai-gen (7).jpg", "AI"], ["ai-gen (8).jpg", "AI"], ["ai-gen (9).jpg", "AI"], ["ai-gen (10).jpg", "AI"], ["f.a.d (1).jpg", "foodAndDrink"], ["f.a.d (2).jpg", "foodAndDrink"], ["f.a.d (3).jpg", "foodAndDrink"], ["f.a.d (4).jpg", "foodAndDrink"], ["f.a.d (5).jpg", "foodAndDrink"],
    ["LS (1).jpg", "landscape"], ["LS (2).jpg", "landscape"], ["LS (3).jpg", "landscape"], ["LS (4).jpg", "landscape"], ["LS (5).jpg", "landscape"], ["LS (6).jpg", "landscape"], ["LS (7).jpg", "landscape"], ["LS (8).jpg", "landscape"],
    ["ni (1).jpg", "night"], ["ni (2).jpg", "night"], ["ni (3).jpg", "night"], ["ni (4).jpg", "night"], ["ni (5).jpg", "night"], ["ni (6).jpg", "night"], ["ni (7).jpg", "night"],
    ["people.jpg","people"],["People (1).jpg", "people"], ["People (2).jpg", "people"], ["People (3).jpg", "people"], ["People (4).jpg", "people"], ["People (5).jpg", "people"],
    ["WP (1).jpg", "wallpaper"], ["WP (2).jpg", "wallpaper"], ["WP (3).jpg", "wallpaper"], ["WP (4).jpg", "wallpaper"], ["WP (5).jpg", "wallpaper"], ["WP (6).jpg", "wallpaper"], ["WP (7).jpg", "wallpaper"], ["WP (8).jpg", "wallpaper"], ["WP (9).jpg", "wallpaper"], ["WP (10).jpg", "wallpaper"]
]

const baseFolder = "/images/"; // Base folder for all categories
const gallery = document.getElementById('photo-gallery');


// Function to render photos dynamically
function renderPhotos(categories) {
    gallery.innerHTML = ''; // Clear the gallery


    
    // Loop through the selected categories and generate photos
    photoDatabase.forEach(([filename, category]) => {
        if (categories.includes('all') || categories.includes(category)) {
            // Create a photo container
            const photoDiv = document.createElement('div');
            photoDiv.className = 'photo';

            // Create an image element
            const img = document.createElement('img');
            img.src = `${baseFolder}${category}/${filename}`; // Construct the path dynamically
            img.alt = `${category} photo`;
            
            
            // Append the image to the photo container
            photoDiv.appendChild(img);

            // Append the photo container to the gallery
            gallery.appendChild(photoDiv);
        }
    });



    // to display gallery like Pinterest
  
    new Masonry(gallery, {
        itemSelector: '.photo',  // Target photo elements
        columnWidth: '.photo',  // Use photo width for columns
        gutter: 10,             // Space between items
        fitWidth: true          // Center the gallery
    });

    
}

// Function to manage tab clicks
function manageTabs() {
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach((tab) => {
        tab.addEventListener('click', () => {
            const category = tab.dataset.category;
            const selectedCategories = category === 'all' ? ['all'] : [category];
            renderPhotos(selectedCategories);
        });
    });
}



document.addEventListener('DOMContentLoaded', () => {
    //manage userProfile
    const loggedInUser=JSON.parse(localStorage.getItem("loggedInUser"));

    if(loggedInUser){
        const loginLink=document.querySelector(".logIn");

        if (loginLink){
            const profileElement=document.createElement("a");
            profileElement.className="profile-info";
            profileElement.innerHTML= `<img src="./Images/profileAvatar.jpg" alt="Profile" class="Profile-icon" width="30"><br>
            <span class="username">${loggedInUser.username}</span>
            <button class="logout-button">log out</button>
            `;
            loginLink.parentNode.replaceChild(profileElement, loginLink);

            const logoutButton= document.querySelector(".logout-button");
            logoutButton.addEventListener("click",()=> {
                localStorage.removeItem("loggedInUser");
                window.location.href="login.html";
            });
        }
    }


    //render all photos on page load
    manageTabs(); // Set up tab click listeners
    renderPhotos(['all']); // Initial render of all categories
});


