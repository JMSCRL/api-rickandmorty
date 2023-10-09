document.addEventListener("DOMContentLoaded", function() {
    fetch('https://api.sampleapis.com/rickandmorty/characters')
        .then(response => response.json())
        .then(data => {
            data.forEach(rickandmorty => {
                const rickandmortyDiv = document.createElement('div');
                rickandmortyDiv.innerHTML = `
                    <img src="${rickandmorty.image}" alt="${rickandmorty.rickandmorty}">
                    <p><strong>name:</strong> ${rickandmorty.name}</p>
                    <p><strong>status:</strong> ${rickandmorty.status}</p>
                    <p><strong>species:</strong> ${rickandmorty.species}</p>
                    <p><strong>type:</strong> ${rickandmorty.type}</p>
                    <p><strong>gender:</strong> ${rickandmorty.gender}</p>
                    <p><strong>origin:</strong> ${rickandmorty.origin}</p>
                `;
                document.getElementById('api-fetch').appendChild(rickandmortyDiv);
            });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
});
