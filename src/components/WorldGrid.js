import trees from "../tileset/trees.svg";
import grass from "../tileset/grass.svg";
import water from "../tileset/water.svg";
import hills from "../tileset/hills.svg";
import treesCity from "../tileset/treesCity.svg"
import hillsCity from "../tileset/hillsCity.svg"
import grassCity from "../tileset/grassCity.svg"


function GridRow(row, selectTerrain) {
    let gridRow = [];
    //console.log("row is: ");
    //
    //console.log(row);

    for (let i in row) {
        let settled = row[i].settled;

        switch (row[i].terrain) {

            case "grass":
                gridRow.push(
                    //grassUrl
                    //<Col> image goes here </Col>
                    <td style={{padding: 0, margin: 0}}>
                        {(!settled) ? (<img src={grass} alt="grass" onClick={()=>selectTerrain("grass", row[i].x, row[i].y)}/>)
                        :(<img src={grassCity} alt="grassCity" onClick={()=>selectTerrain("grass", row[i].x, row[i].y)}/>)}
                        
                    </td>
                );
                break;
            case "trees":
                gridRow.push(
                    //treesUrl
                    <td style={{padding: 0, margin: 0}}>
                        {(!settled) ? 
                        (<img src={trees} alt="trees" onClick={()=>selectTerrain("trees", row[i].x, row[i].y)} />)
                        :(<img src={treesCity} alt="treesCity" onClick={()=>selectTerrain("trees", row[i].x, row[i].y)}/>)}
                        
                    </td>
                );
                break;
            case "hills":
                gridRow.push(
                    //hillsUrl
                    <td style={{padding: 0, margin: 0}}>
                        {(!settled) ? 
                        (<img src={hills} alt="hills" onClick={()=>selectTerrain("hills", row[i].x, row[i].y)} />)
                        :(<img src={hillsCity} alt="hillsCity" onClick={()=>selectTerrain("hills", row[i].x, row[i].y)}/>)}
                        
                    </td>
                );
                break;
            case "water":
                gridRow.push(
                    //waterUrl
                    <td style={{padding: 0, margin: 0}}>
                        <img src={water} alt="water" onClick={()=>selectTerrain("water", row[i].x, row[i].y)}/>
                    </td>
                );
                break;
            default:
                console.log("Error Default");
                gridRow.push(

                    //grassUrl
                    <td style={{padding: 0, margin: 0}}>
                        <img src={grass} alt="grass" onClick={()=>selectTerrain("grass", row[i].x, row[i].y)}/>
                    </td>
                );
                break;
        }
    }
    return (
        <tr style={{lineHeight: 0}}>
            {gridRow}
        </tr>        
    )

}

function GridCols (grid, selectTerrain) {

    let rowsArray = [];
    //console.log("here is the original grid, i think")
    //console.log(grid);
    for(let i in grid) {

        rowsArray.push(GridRow(grid[i], selectTerrain));

    }

    return rowsArray;


}

function Grid (grid, selectTerrain) {
    return (
        <>
            <table cellpadding="0" cellspacing="0" border="0" style={{borderCollapse: "collapse"}}>
                <thead>
                    <tr>
                        <th colspan="2">World Map</th>
                    </tr>
                </thead>
                <tbody>
                        {GridCols(grid, selectTerrain)}
                </tbody>

            </table>

        </>

    );

}

function worldGrid (grid, selectTerrain) {

    //grid comes from state

    //console.log(grid);

    

    return Grid(grid, selectTerrain);

}


export default worldGrid;