import React from 'react';




function AppSplash(props) {


    return (
        <div className="App">

            <p>
                This is my submission for the august <a
                    className="App-link"
                    href="https://mintbean.io/meets/d51762d5-b874-4cc1-a420-ff316600192f"
                    target="_blank"
                    rel="noopener noreferrer"
                >Mintbean Hackathon.</a>
            </p>
            <p>This intended to be a mock up of a 4x game, featuring procedural world generation.</p>

            <h4>Play Music</h4>
            <iframe width="250" height="250" src="https://www.youtube-nocookie.com/embed/videoseries?list=PL18D349C72C3BB0D5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <p>
                <button type='button' onClick={props.toggleSplash}>
                    Just take me to the game already!
                </button>
            </p>


        </div>
    );


}

export default AppSplash;