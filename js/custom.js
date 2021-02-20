
$(document).ready(function() {
    //VARIABLES

//   search input of character
  const searchCharacter = document.getElementById('searchCharacter');
  //search input event listener
    searchCharacter.addEventListener('keyup', (e) => {
        //get input text
        const userText = e.target.value;

    });

        //FUNCTIONS
        async function findSuperhero(event) {
            event.preventDefault();
            var  marvelName = $('#searchCharacter').val();
            try {

                let response = await fetch(`https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${marvelName}&ts=1&apikey=a5b6d0b3f3c778cab9c9b5a5bfc6583f&hash=e35480ecc7d4f5491d5465f4c6f4a162`);

                let data = await response.json();
                console.log(data);
                let search = data.data.count;
                console.log(search);
                if ( search === 0){
                    $(".showNoResult").append(`<p class ="noresult"> 'No search found. Please try another one.'</p>`);
                } 
                else  {
                    
                    for (var i = 0;  i < data.data.results.length; i++) {  
                        let search = data.data.count;
                        let status = "404 Not Found";
                       
                        if (( search === 1) || ( search === 2) ){
                            $(".showResult-1").append(`<div class="card" id="showResult" >
                            <img src= ${data.data.results[i].thumbnail.path + '/portrait_xlarge.jpg'} class="card-img-top" alt="Image of ${data.data.results[i].name}">
                            <div class="card-body">
                                <h5 class="card-title">${data.data.results[i].name}</h5>
                                <p class="card-text description">${data.data.results[i].description}</p>
                            </div>
                          </div>`);

                            } else {
                                $(".showResult").append(`<div class="card" id="showResult" >
                                <img src= ${data.data.results[i].thumbnail.path + '/portrait_xlarge.jpg'} class="card-img-top" alt="Image of ${data.data.results[i].name}">
                                <div class="card-body">
                                <h5 class="card-title">${data.data.results[i].name}</h5>
                                <p class="card-text description">${data.data.results[i].description}</p>
                                </div>
                                </div>`);
                        }

                    }
                }
            } //- try closure
            
             catch (err) {
                alert(err); // TypeError: failed to fetch
                } //catch closure

        } //async closure

    
    // FUNCTION EXECUTIONS
        $("#searchBtn").click(function(event){
            $(".showResult").empty();
            $(".showResult-1").empty();
            $(".showNoResult").empty();
            findSuperhero(event);
            // myFunction (event);
        });  //function closure
        
    
});  //jquery plate
