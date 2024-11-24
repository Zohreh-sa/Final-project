// console.log("Hello World!");
const photoDatabase=[
    ["animal (1).jpg", "animals"], ["animal (2).jpg", "animals"], ["animal (3).jpg", "animals"], ["animal (4).jpg", "animals"], ["animal (5).jpg", "animals"], ["animal (6).jpg", "animals"], ["animal (7).jpg", "animals"], ["animal (8).jpg", "animals"],
    ["f.a.d (1).jpg", "foodAndDrink"], ["f.a.d (2).jpg", "foodAndDrink"], ["f.a.d (3).jpg", "foodAndDrink"], ["f.a.d (4).jpg", "foodAndDrink"], ["f.a.d (5).jpg", "foodAndDrink"],
    ["LS (1).jpg", "landscape"], ["LS (2).jpg", "landscape"], ["LS (3).jpg", "landscape"], ["LS (4).jpg", "landscape"], ["LS (5).jpg", "landscape"], ["LS (6).jpg", "landscape"], ["LS (7).jpg", "landscape"], ["LS (8).jpg", "landscape"], 
    ["ni (1).jpg", "night"], ["ni (2).jpg", "night"], ["ni (3).jpg", "night"], ["ni (4).jpg", "night"], ["ni (5).jpg", "night"], ["ni (6).jpg", "night"], ["ni (7).jpg", "night"], 
    ["People (1).jpg", "people"], ["People (2).jpg", "people"], ["People (3).jpg", "people"], ["People (4).jpg", "people"], ["People (5).jpg", "people"],
    ["WP (1).jpg", "wallpaper"], ["WP (2).jpg", "wallpaper"], ["WP (3).jpg", "wallpaper"], ["WP (4).jpg", "wallpaper"], ["WP (5).jpg", "wallpaper"], ["WP (6).jpg", "wallpaper"], ["WP (7).jpg", "wallpaper"], ["WP (8).jpg", "wallpaper"], ["WP (9).jpg", "wallpaper"], ["WP (10).jpg", "wallpaper"]
]



const baseFolder="images/";

const tabs=document.getElementById("tabs");
const categories=["all",... new setInterval(photoDatabase.map(photo=> photo[1]))]; 

const gallery = document.getElementById('photo-gallery');

// Function to render photos dynamically
function renderPhotos() {
    
   
    gallery.innerHTML = ''; // Clear the gallery

       
    // Loop through the selected categories and generate photos
    for (const photo of photoDatabase)
        if (photoDatabase[category]){

            photoDatabase[category].forEach((photo) => {
                // Create a photo container
                const photoDiv = document.createElement('div');
                photoDiv.className = 'photo';

                // Create an image element
                const img = document.createElement('img');
                img.src = `${baseFolder}${category}/${photo}`;
                img.alt = `${category} photo`;

                // Append the image to the photo container
                photoDiv.appendChild(img);
                // Append the photo container to the gallery
                gallery.appendChild(photoDiv);
            });
        }
    });

      // Initialize Masonry
    new Masonry(gallery, {
        itemSelector: '.photo',  // Target photo elements
        columnWidth: '.photo',  // Use photo width for columns
        gutter: 10,             // Space between items
        fitWidth: true          // Center the gallery
    });
}

function manageTabs(){
    //manage tabs click
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach((tab) => {
        tab.addEventListener('click', () => {
            const category = tab.dataset.category;
            if (category === 'all') {
                selectedCategories = Object.keys(photoDatabase);
            } else {
                selectedCategories = [category];
            }
            renderPhotos(selectedCategories);


        });

    });
}



// Render all photos on page load
document.addEventListener('DOMContentLoaded', () => {
    manageTabs(); //click on tabs
    renderPhotos(Object.keys(category));// initial render all categories
});

