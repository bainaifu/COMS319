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