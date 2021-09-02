export const  SingularEventCode = {


         tribalVillageFound: {

        
            text: "Scouts report an abandoned tribal village not far from here. Do you investigate? ",

            option1Text: "Ignore",
            option2Text: "Explore",

            outcome1Title: "Can't Be Bothered",
            outcome2Title: "Research Found!", 

            outcome1Text:"We have better things to do.",

            outcome2Text:"Stumbling through the abandoned huts, your scouts make a momentous find. You have discovered the Manhattan Project!",

            outcome1Payoffs: {
                food: 0,
                production: 10,
                commerce: 0,
                fpy: 0,
                ppy: 0,
                cpy: 0
            },

            outcome2Payoffs: {

                food: 0,
                production: -5,
                commerce: 0,
                fpy: 0,
                ppy: 0,
                cpy: 0
            },

            endEventText1: "By focusing, we will gain a bonus to our productivity!",
            endEventText2: "What is this I don't even"

        
        },



        strangerInAStrangeLand: {

        
            text: "A strange man washes ashore, wearing odd clothes and speaking unintelligible syllables. After learning some local speech, he purports to be something called a 'CEO' of a 'company' named 'Quantum and Time.' He asks what year it is. ",

            option1Text: "Sacrifice",
            option2Text: "Adapt",

            outcome1Title: "Human Sacrifice",
            outcome2Title: "Immured In The Temple", 

            outcome1Text:"The strange barbarian has been sent by the gods, and to the gods he must return.",

            outcome2Text:"The strange man is clearly insane. The shamans suggest shackling him in a temple, to channel his lunacy through prayer.",

            outcome1Payoffs: {
                food: 5,
                production: -1,
                commerce: 0,
                fpy: 0,
                ppy: 0,
                cpy: 0
            },

            outcome2Payoffs: {

                food: -5,
                production: -5,
                commerce: 10,
                fpy: 0,
                ppy: 0,
                cpy: 0
            },

            endEventText1: "Looks like meat's back on the menu, boys!",
            endEventText2: "But we will have to pay for his upkeep!"

        
        },


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
            },

            endEventText1: "A sign of our divine right to rule!",
            endEventText2: "No, no. Dig up, stupid!"
        
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

