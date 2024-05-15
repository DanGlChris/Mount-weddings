async function loadNavBar() {
    const rawResponse = await fetch('menubar.html');
    const template = await rawResponse.text();
    
    const targetElements = document.getElementsByClassName('.navbar_');

    [...targetElements].forEach((element) => {
        element.innerHTML = template;
    });
    Array.from(targetElements).forEach((element) => {
        element.addEventListener('click', () => {
            loadNavBar();
        });
    })
    
}
window.onload = () => {
    loadNavBar();
  };
