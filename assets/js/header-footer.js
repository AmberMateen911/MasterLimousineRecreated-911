fetch('components/header.html')
    .then(response => response.text())  // Wait for the fetch to complete and convert response to text
    .then(data => {
        document.getElementById("header").innerHTML = data;  // Inserting text into the header element.
    })
    .catch(error => {
        console.error('Error fetching header:', error);
    });



    


// Load footer
fetch('components/footer.html')
    .then(response => response.text())  // Convert response to text
    .then(data => {
        document.getElementById("footer").innerHTML = data;  // Insert the text into the footer element
    })
    .catch(error => {
        console.error('Error fetching footer:', error);
    });




