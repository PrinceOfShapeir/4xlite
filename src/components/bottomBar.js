import Navbar from 'react-bootstrap/Navbar'
import trees from "../tileset/trees.svg";
import grass from "../tileset/grass.svg";
import water from "../tileset/water.svg";
import hills from "../tileset/hills.svg";
import treesCity from "../tileset/treesCity.svg"
import hillsCity from "../tileset/hillsCity.svg"
import grassCity from "../tileset/grassCity.svg"
import "./navBar.css";
import {SingularEventCode} from "./events";



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
                                    <img src={selectedIsSettled ? grassCity : grass} alt="grass" />
                                    &nbsp;
                                    <p>You have {selectedIsSettled ? "settled" : "chosen"} grassland, which produces two food.</p>
                                    
                                </>

                            );
                        case "hills":
                            return(

                                <>
                                    <img src={selectedIsSettled ? hillsCity : hills} alt="hills" />
                                    &nbsp;
                                    <p>You have {selectedIsSettled ? "settled" : "chosen"} hills, which produces two production, and has a defensive bonus.</p>
                                </>

                            );
                        case "trees":
                            return(

                                <>
                                    <img src={selectedIsSettled ? treesCity : trees} alt="trees" />
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
const bottomCSS = {

    fontFamily: "URW Chancery L, Brush Script MT, cursive",
    backgroundColor: "rgb(237,237,95)",
    borderColor: "rgb(254,255,0)",
    borderStyle: "double",
    borderWidth: "0.5em",
    borderImageSlice: 1,

}

function bottomBar (props) {

    if (!props.endGame) {

        return (
           
                <Navbar className="bottomBar" expand="md" fixed="bottom">

                        {(props.turn===10) && ( 
                        
                            <p className="bottomAlert">A village elder comes to you in the dead of night, recounting a vision of doom. 
                            Within {props.endGameTurns} moons, they say, a great flood will inundate the land, erasing any and all trace of a once proud people.
                            As some of the villagers make to stitch together rafts and flee, you begin an impassioned plea not to abandon all that you have accomplished thus far. 
                            You have until then to rally the four tribes, to construct great works to hold back the waters, or else the land will descend once more into barbarism.</p>
                        
                        )}
                        &nbsp;
                        {props.turn!==10 && (
                            <div className="bottomAlert">
                                {props.currentEvent ? 
                                
                                //Event message
                                
                                (
                                    <> {!props.eventOutcome && (

                                        <p>{SingularEventCode[props.currentEvent].text} <br />
                                            <button type="button" onClick={()=>props.tallyEventOutcome(SingularEventCode[props.currentEvent].outcome1Payoffs, 1)}>{SingularEventCode[props.currentEvent].option1Text}</button>&nbsp;&nbsp;<button type="button"  onClick={()=>props.tallyEventOutcome(SingularEventCode[props.currentEvent].outcome2Payoffs, 2)}>{SingularEventCode[props.currentEvent].option2Text}</button>
                                        </p>
                                    )}

                                    {props.eventOutcome && (
                                        <div>
                                            <p><b>{SingularEventCode[props.currentEvent][`outcome${props.whichEventNumber}Title`]}</b></p>
                                            <p>
                                            {SingularEventCode[props.currentEvent][`outcome${props.whichEventNumber}Text`]}
                                            </p>
                                            <p><button type="button" onClick={props.killEvent}>{
                                            SingularEventCode[props.currentEvent][`endEventText${props.whichEventNumber}`]
                                            }
                                            </button></p>
                                        </div>

                                    )}
                                        
                                        
                                    
                                    </>
                                ) : (
                                <p>There are no current events.
                                </p>
                                
                                )}
                            </div>
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

        <Navbar bg="light" expand="md" fixed="bottom" style={bottomCSS}>
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