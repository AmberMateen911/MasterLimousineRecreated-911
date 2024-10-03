fetch('components/header.html')
    .then(response => response.text())  // Wait for the fetch to complete and convert response to text
    .then(data => {
        document.getElementById("header").innerHTML = data;  // Inserting text into the header element.
    })
    .catch(error => {
        console.error('Error fetching header:', error);
    });



// ---- HIDE NAVIGATION ABR
function toggleMenu() {
    let screenWidth = window.innerWidth;
    let menu = document.querySelector("#my-menu");
  
    if (screenWidth <= 425) {
      if (menu) {
        if (menu.style.display === "none" || menu.style.display === "") {
          menu.style.display = "flex"; // ----SHOW THE MENU
        } else {
         menu.style.display = "none"; // ----HIDE THE MENU
        }
      } else {
        console.error("Header element not found");
      }
    }
  }


// ----- LOAD FOOTER
fetch('components/footer.html')
    .then(response => response.text())  // Convert response to text
    .then(data => {
        document.getElementById("footer").innerHTML = data;  // Insert the text into the footer element
    })
    .catch(error => {
        console.error('Error fetching footer:', error);
    });




