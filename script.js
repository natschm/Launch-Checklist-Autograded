// // Write your JavaScript code here!

// window.addEventListener("load", function() {

//     let listedPlanets;
//     // Set listedPlanetsResponse equal to the value returned by calling myFetch()
//     let listedPlanetsResponse;
//     listedPlanetsResponse.then(function (result) {
//         listedPlanets = result;
//         console.log(listedPlanets);
//     }).then(function () {
//         console.log(listedPlanets);
//         // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
//     })

//  });

// Write your JavaScript code here!

window.addEventListener("load", function () {

    let form = document.querySelector("form[data-testid='testForm']");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        let pilotNameInput = document.querySelector("input[name='pilotName']").value;
        let copilotNameInput = document.querySelector("input[name='copilotName']").value;
        let fuelLevelInput = document.querySelector("input[name='fuelLevel']").value;
        let cargoMassInput = document.querySelector("input[name='cargoMass']").value;

        formSubmission(document, document.getElementById("faultyItems"), pilotNameInput, copilotNameInput, fuelLevelInput, cargoMassInput);
        // Additional logic to ensure faultyItems list visibility when everything is good to go
        let faultyItems = document.getElementById("faultyItems");
        if (faultyItems.style.visibility !== "visible") {
            faultyItems.style.visibility = "hidden"; // Hide faultyItems if everything is good to go
        }
    });

    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        let randomPlanet = pickPlanet(result);
        addDestinationInfo(document, randomPlanet.name, randomPlanet.diameter, randomPlanet.star, randomPlanet.distance, randomPlanet.moons, randomPlanet.image);
    }).catch(function (error) {
        console.error('Error fetching planetary data:', error);
    });
});
