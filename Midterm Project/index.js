fetch("./data.json")
    .then(response => response.json())
    .then(mySeeds => loadSeeds(mySeeds));
function loadSeeds(mySeeds) {
    console.log(mySeeds);
    var mainContainer = document.getElementById("row-product-seeds");
    console.log(mainContainer);
    let seeds = mySeeds['seeds'];
    for (let seed of seeds) {
        console.log(seed);
        let div = document.createElement("div");
        div.innerHTML = `<br>
        <div class="col">
                        <div class="card" style="box-shadow: none; border: 0cap;">
                            <img class='seeds-image' src=${seed.url} alt=${seed.description}>
                            <div class="card-body">
                                <h6>${seed.description}</h6>
                                <p class="card-text">${seed.price}</p>
                            </div>
                        </div>
                    </div>
        `;
        mainContainer.appendChild(div);
    }
}

fetch("./data.json")
    .then(response => response.json())
    .then(myTools => loadTools(myTools));
function loadTools(myTools) {
    console.log(myTools);
    var mainContainer = document.getElementById("row-product-tools");
    console.log(mainContainer);
    let tools = myTools['tools'];
    for (let tool of tools) {
        console.log(tool);
        let div = document.createElement("div");
        div.innerHTML = `<br>
        <div class="col">
                        <div class="card" style="box-shadow: none; border: 0cap;">
                            <img class='seeds-image' src=${tool.url} alt=${tool.description}>
                            <div class="card-body">
                                <h6>${tool.description}</h6>
                                <p class="card-text">${tool.price}</p>
                            </div>
                        </div>
                    </div>
        `;
        mainContainer.appendChild(div);
    }
}

fetch("./data.json")
    .then(response => response.json())
    .then(myFertilizers => loadFertilizers(myFertilizers));
function loadFertilizers(myFertilizers) {
    console.log(myFertilizers);
    var mainContainer = document.getElementById("row-product-fertilizers");
    console.log(mainContainer);
    let fertilizers = myFertilizers['fertilizers'];
    for (let fertilizer of fertilizers) {
        console.log(fertilizer);
        let div = document.createElement("div");
        div.innerHTML = `<br>
        <div class="col">
                        <div class="card" style="box-shadow: none; border: 0cap;">
                            <img class='seeds-image' src=${fertilizer.url} alt=${fertilizer.description}>
                            <div class="card-body">
                                <h6>${fertilizer.description}</h6>
                                <p class="card-text">${fertilizer.price}</p>
                            </div>
                        </div>
                    </div>
        `;
        mainContainer.appendChild(div);
    }
}

fetch("./data.json")
    .then(response => response.json())
    .then(mySoils => loadSoils(mySoils));
function loadSoils(mySoils) {
    console.log(mySoils);
    var mainContainer = document.getElementById("row-product-soils");
    console.log(mainContainer);
    let soils = mySoils['soils'];
    for (let soil of soils) {
        console.log(soil);
        let div = document.createElement("div");
        div.innerHTML = `<br>
        <div class="col">
                        <div class="card" style="box-shadow: none; border: 0cap;">
                            <img class='seeds-image' src=${soil.url} alt=${soil.description}>
                            <div class="card-body">
                                <h6>${soil.description}</h6>
                                <p class="card-text">${soil.price}</p>
                            </div>
                        </div>
                    </div>
        `;
        mainContainer.appendChild(div);
    }
}