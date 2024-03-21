// Write your JavaScript code here!

window.addEventListener("load", function () {

    let form = document.querySelector("form[data-testid='testForm']");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        let pilotNameInput = document.querySelector("input[name='pilotName']").value;
        let copilotNameInput = document.querySelector("input[name='copilotName']").value;
        let fuelLevelInput = document.querySelector("input[name='fuelLevel']").value;
        let cargoMassInput = document.querySelector("input[name='cargoMass']").value;

        // Validate pilot and co-pilot names
        if (!isNaN(pilotNameInput) || !isNaN(copilotNameInput)) {
            alert("Pilot and co-pilot names cannot be a number!");
            return;
        }

        formSubmission(document, document.getElementById("faultyItems"), pilotNameInput, copilotNameInput, fuelLevelInput, cargoMassInput);
        // Ensures faultyItems list visibility when everything is good to go
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
