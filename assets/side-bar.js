fetch('components/side-bar.html')
  .then(response => response.text())
  .then(data => {
    document.getElementsByClassName("sidebar")[0].innerHTML = data;
  });