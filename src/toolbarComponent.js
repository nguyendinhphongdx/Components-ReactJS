
function ToolbarComponent(props){
    var typepage = props.type;
    switch(typepage){
        case 'device':  return(
            <div className="toolbar-Component">
                <h1>this is toolbar</h1>
            </div>
        );
        case 'version' : return (
            <h1>found not page</h1>
        );
        default : return (
            <h1>found not page</h1>
        );
    }
   
}
export default ToolbarComponent;