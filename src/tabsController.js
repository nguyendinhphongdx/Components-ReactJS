import { ToggleButton, ToggleButtonGroup } from "react-bootstrap";

function TabsController(){
    var data = [
        {
            id: 0,
            title:'Device Center'
        },
        {
            id: 1,
            title:'Version Center'
        },
        {
            id:2,
            title:'Report Center'
        },
        {
            id: 3,
            title:'Logging Center'
        },
        {
            id: 4,
            title:'Object Center'
        },
    ];
    var element = data.map((item,index) =>{
        return (
            <ToggleButton name="options" onClick={(e)=>handleClick(e,item.id)} key={item.id} value={item.id}>{item.title}</ToggleButton> // not delete outterhtml
        );
    });
    return(
        <div className="TabsController">
            <ToggleButtonGroup type="radio" name="options" defaultValue={0} className="ToggleButton">
                {element}
            </ToggleButtonGroup>
            <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
            <ToggleButton value={1}>Radio 1 (pre-checked)</ToggleButton>
            <ToggleButton value={2}>Radio 2</ToggleButton>
            <ToggleButton value={3}>Radio 3</ToggleButton>
          </ToggleButtonGroup>
        </div>
    );
}
export default TabsController;
function handleClick(e,idPage) {
    e.preventDefault(); // is ePropagatting
    console.log(e.target)
    console.log(idPage)
    console.log(document.getElementById('homePage'));
}