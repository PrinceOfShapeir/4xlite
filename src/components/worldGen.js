

function waterProbability(x, y, size, probSeed = 0.9) {

    return Math.pow(probSeed, x) + Math.pow(probSeed, (size - 1 - y));
}
//we will just make the landProbs equal to each other

function terrainSelect(x, y, size, probSeed) {


    //params contains:
    //int size
    let randomNumber = Math.random();
    let waterProb = waterProbability(x,y,size, probSeed);

    if (randomNumber <= waterProb) {
        //console.log("water probability was " + waterProb)
        return "water";
    }
    else {
        randomNumber = Math.random();

        if(randomNumber<.33) {
            return "hills";
        } else if (randomNumber <.66){
            return "trees";
        } else {
            return "grass";
        }


    }
    

    //generate 2d array of size^2
    //copy to this.state.worldMap
    //place terrain according to probability set
    // edgeProbability, when x or y = 0, or size
    // edgeProbability: {water: }
}


function worldGen(size, waterProb) {

    let world = [];

    for (let i = 0; i < size; i++) {
        world.push([]);
        for (let z = 0; z < size; z++) {

            world[i][z] = {
                x: i,
                y: z,
                terrain: terrainSelect(i, z, size, waterProb),
                settled: false
            };

        }
    }
    //console.log(world);
    return world;
}

export default worldGen;