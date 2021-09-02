import React, { Component } from "react"
import worldGen from "./worldGen"
import worldGrid from "./WorldGrid";
import bottomBar from "./bottomBar";
import {events} from "./events";


class GameScreen extends Component {
    constructor() {
        super();
        this.state = {
            worldGen: false,
            worldMap: null,
            worldSize: 50,
            settlers: 1,
            settled: false,
            selectedTerrain: null,
            turn: 0,
            food: 0,
            production: 0,
            commerce: 0,
            foodIncome: 0,
            foodConsumption: 0,
            commerceIncome: 0,
            productionIncome: 0,
            endGame: null,
            cityCount: 0,
            endGameTurns: 60,
            eventsOrder: events(),
            currentEvent: null,
            eventOutcome: false,
            whichEventNumber: null
        }

        this.killEvent = () => {

            if(this.state.currentEvent) {
                this.setState({
                    currentEvent: null,
                    eventOutcome: false,
                    whichEventNumber: null
                })
            }


        }


        this.tallyEventOutcome = (payoffs, whichEventNumber) => {

            console.log(`Should be firing event outcome ${whichEventNumber}`);

            return this.setState({
                food: this.state.food + payoffs.food,
                production: this.state.production + payoffs.production,
                commerce: this.state.commerce + payoffs.commerce,
                eventOutcome: true,
                whichEventNumber: whichEventNumber
            });


        }

        this.fireEvent = () => {

            //check for eventOrder.length before activating this function

            //console.log("event should have fired...");
            

            let events = [...this.state.eventsOrder];

            let currentEvent = events.pop();

            console.log(currentEvent);

            return this.setState({
                currentEvent: currentEvent,
                eventsOrder: events
            });
        }

        this.defeat = () => {

            this.setState({
                worldMap: worldGen(this.state.worldSize, 1)
            })

        }
        this.endGame = () => {

            let victoryCondition = this.state.production - 100 >= 0;
            //victory

            if(victoryCondition) {

                return this.setState({
                    endGame: "Victory"
                })
            } else {

                this.setState({
                    endGame: "Defeat"
                });

                return this.defeat();
            }


            //defeat

        }
        this.nextTurn = () => {

            if(this.state.turn>=this.state.endGameTurns) {
                return this.endGame();
            }

            if(this.state.eventsOrder.length>0&&!this.state.currentEvent) {

                if(Math.random()<=0.20) {

                    this.fireEvent();

                }



            }


            let foodBalance = this.state.foodIncome - this.state.foodConsumption;
            let productionBalance = this.state.productionIncome;
            let commerceBalance = this.state.commerceIncome;

            if(this.state.food>10){
                console.log("Should be spawning a new pop");
                foodBalance = foodBalance - 10;
                this.setState({
                    settlers: this.state.settlers + 1
                })
            }

            return this.setState({
                turn: this.state.turn + 1,
                food: this.state.food + foodBalance,
                production: this.state.production + productionBalance,
                commerce: this.state.commerce + commerceBalance
            });

        }

        this.generateWorld = () => {
            return this.setState({
                worldMap: worldGen(this.state.worldSize),
                worldGen: !this.state.worldGen
            })

        }

        this.setSize = (event) => {

            return this.setState({
                worldSize: event.target.value
            })

        }

        this.selectTerrain = (terrain, x, y) => {

            return this.setState({
                selectedTerrain: terrain,
                selectedTerrainX: x,
                selectedTerrainY: y
            })

        }


        this.settle = (x,y) => {

            //ultimately we would probably want to keep a primitive array to map the settled areas
            //but for now we can just dump everything into the world map
            let gridCopy = JSON.parse(JSON.stringify(this.state.worldMap));

            gridCopy[x][y].settled = true;

            switch(gridCopy[x][y].terrain){

                case "grass":
                    console.log("adding grassland income");
                    this.setState({
                        foodIncome: this.state.foodIncome + 2
                    });
                    break;
                case "hills":
                    console.log("Adding hills income");
                    this.setState({
                        productionIncome: this.state.productionIncome + 2
                    });
                    break;
                case "trees":
                    console.log("adding trees income");
                    this.setState({
                        foodIncome: this.state.foodIncome + 1,
                        productionIncome: this.state.productionIncome + 1
                    });
                    break;
                default:
                    console.log("settlers are having trouble cultivating the land");
                    break;

            }


            this.setState({worldMap: gridCopy})
            return this.settledCallBack();

        }

        this.settledCallBack = () => {

            return this.setState({
                settled: true,
                settlers: this.state.settlers-1,
                foodConsumption: this.state.foodConsumption + 1,
                cityCount: this.state.cityCount + 1
            })

        }

        this.renderWorldGenTemplate = () => {

            return (
                <>
                    <p>Here is a primordial world without parameters.</p>
                    <p>What is the size of this world?</p>
                    <form>
                        <label>Selected map type is {this.state.worldSize>30 ? ("Pangaea") : ("Archipelago")}</label><br />
                        <input type="number" name="size" min="20" max="100" value={this.state.worldSize} onChange={this.setSize}></input>
                        <button type='button' onClick={this.generateWorld}>Generate World</button>
                    </form>

                </>
            );


        }


    }

    render() {
        return (
            <>
                {!this.state.worldGen && (<this.renderWorldGenTemplate />)}
                {this.state.worldMap && worldGrid(this.state.worldMap, this.selectTerrain)}
                {this.state.worldMap && bottomBar({
                    settled: this.state.settled, 
                    settlers: this.state.settlers, 
                    selectedTerrain: this.state.selectedTerrain,
                    selectedTerrainX: this.state.selectedTerrainX,
                    selectedTerrainY: this.state.selectedTerrainY,
                    selectedIsSettled: this.state.worldMap[this.state.selectedTerrainX|0][this.state.selectedTerrainY|0].settled,
                    turn: this.state.turn,
                    food: this.state.food,
                    commerce: this.state.commerce,
                    production: this.state.production,
                    settle: this.settle,
                    nextTurn: this.nextTurn, 
                    endGame: this.state.endGame,
                    cityCount: this.state.cityCount,
                    endGameTurns: this.state.endGameTurns,
                    currentEvent: this.state.currentEvent,
                    killEvent: this.killEvent,
                    eventOutcome: this.state.eventOutcome,
                    tallyEventOutcome: this.tallyEventOutcome,
                    whichEventNumber: this.state.whichEventNumber
                    })}
                
            </>
        );
    }

}

export default GameScreen;