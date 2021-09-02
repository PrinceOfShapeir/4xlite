export const  SingularEventCode = {

        meteorite: {
        
            text: "As you gaze upon the multitude of stars in the night sky, a bright orange fireball lights up the firmament. Panting for breath, you race to the scene. Inside a smoking crater, you find a glowing hunk of rock. As it cools, you notice an otherworldy silvery metallic sheen, the likes of which you have never seen. You claim it in the name of your people. You make it into ",

            option1Text: "Swords",
            option2Text: "Plowshares",

            outcome1Title: "Ancestral Sword Gained",
            outcome2Title: "Water From The Earth", 

            outcome1Text:"The sword is heavy and quite unwieldy, yet the villagers are in awe of the sight of it. Tributes pour in, and soon your coffers are full.",
            outcome2Text:"Loathe to sully the sacred iron, the villagers implement it as a tool of divination. The dowsing rod strikes fresh water. You have invented the well.",

            outcome1Payoffs: {
                food: 0,
                production: 0,
                commerce: 10,
                fpy: 0,
                ppy: 0,
                cpy: 0
            },

            outcome2Payoffs: {

                food: 10,
                production: 0,
                commerce: 0,
                fpy: 0,
                ppy: 0,
                cpy: 0
            }        
        
        }
    }




export function events () {
    //todo: randomize their order here or in gamescreen
    let eventsOrder = Object.keys(SingularEventCode);

    

        for(let i in eventsOrder){

            let swap = Math.floor(Math.random() * Math.floor(eventsOrder.length));
            
            [eventsOrder[i],eventsOrder[swap]] = [eventsOrder[swap], eventsOrder[i]];
        }

    return eventsOrder;


    
    
}

