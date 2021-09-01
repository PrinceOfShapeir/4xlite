import Navbar from 'react-bootstrap/Navbar'
import trees from "../tileset/trees.svg";
import grass from "../tileset/grass.svg";
import water from "../tileset/water.svg";
import hills from "../tileset/hills.svg";


function settlePrompt (settlers) {

    return (
        <p>You have {settlers} settlers. You should probably put them somewhere. You can do this by clicking on some non-watery terrain. </p>
    );

}




function terrainInfo (terrain, x, y, settle, settled, selectedIsSettled, turn, nextTurn, settlers) {
    let info = () => {
        switch (terrain) {

                        case "grass":
                            return(

                                <>
                                    <img src={grass} alt="grass" />
                                    &nbsp;
                                    <p>You have {selectedIsSettled ? "settled" : "chosen"} grassland, which produces two food.</p>
                                    
                                </>

                            );
                        case "hills":
                            return(

                                <>
                                    <img src={hills} alt="hills" />
                                    &nbsp;
                                    <p>You have {selectedIsSettled ? "settled" : "chosen"} hills, which produces two production, and has a defensive bonus.</p>
                                </>

                            );
                        case "trees":
                            return(

                                <>
                                    <img src={trees} alt="trees" />
                                    &nbsp;
                                    <p>You have {selectedIsSettled ? "settled" : "chosen"} forest, which produces one food and one production.</p>
                                </>

                            );
                        case "water":
                            return(

                                <>
                                    <img src={water} alt="water" />
                                    &nbsp;
                                    <p>You have {selectedIsSettled ? "settled" : "chosen"} water, which you were told not to do. Water produces one food, and one commerce point.</p>
                                </>

                            );
                        default:
                            return(
                                <>
                                <p>You have somehow chosen that which cannot be chosen. The FBI are on their way.</p>
                                &nbsp;
                                <p>{terrain}</p>
                                </>
                            );
                        


                    }


    }
    return (
        <>
                {
                    info()
                }
            {/*<p>The coordinates for this tile are {x}, {y}</p>*/}
            <br /> &nbsp;
            {(terrain!="water") && (!selectedIsSettled) && (settlers>0) && (<button type='button' onClick={()=>settle(x,y)}>Settle Here!</button>)}
        </>
    );



}

function bottomBar (props) {

    if (!props.endGame) {

        return (
            <Navbar bg="light" expand="md" fixed="bottom">
                {(props.turn===10) && ( 
                
                    <p>A village elder comes to you in the dead of night, recounting a vision of doom. 
                    Within {props.endGameTurns} moons, they say, a great flood will inundate the land, erasing any and all trace of a once proud people.
                    As some of the villagers make to stitch together rafts and flee, you begin an impassioned plea not to abandon all that you have accomplished thus far. 
                    You have until then to rally the four tribes, to construct great works to hold back the waters, or else the land will descend once more into barbarism.</p>
                
                )}
                &nbsp;
                {(props.settlers>0) && settlePrompt(props.settlers)}
                &nbsp;
                {props.selectedTerrain && terrainInfo(props.selectedTerrain, props.selectedTerrainX, props.selectedTerrainY, props.settle, props.settled, props.selectedIsSettled, props.turn, props.nextTurn, props.settlers)}
                &nbsp;
                {props.settled && ( <>
                    <p>Food: {props.food}</p>
                    <p>Production: {props.production}</p>
                    <p>Commerce: {props.commerce}</p>
                </>
                )}
                &nbsp;
                {(props.turn>10) && (<p>Turns until the Flood: {props.endGameTurns-props.turn}</p>)}
                &nbsp;
                {props.settled && (<button type="button" onClick={props.nextTurn}>End Turn {props.turn}</button>)}
            </Navbar>
        );
    } else return (

        <Navbar bg="light" expand="md" fixed="bottom">
            {(props.endGame==="Victory") ?
             ( <>
                    <Navbar.Text>Your people have tamed the waters and held back the tide. History will remember you as the first. </Navbar.Text>
                    &nbsp;
                    <Navbar.Text>Final city count: {props.cityCount}</Navbar.Text>
                </>
             )
             : (<p>You and your people sink beneath the waves. Forgotten like so many others.</p>)
              }
            </Navbar>        

    )



}


export default bottomBar;