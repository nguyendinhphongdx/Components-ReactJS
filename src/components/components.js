function Button(props){
    return (
        <button onClick={props.event}>{props.title}</button>
    );
}
function GroupSeach(props){
    return (
        <div className="group-search">
                <label>{props.label}</label>
                <input  type="text" placeholder={props.placeholder} />
                <i className="fas fa-search"></i>
        </div>
        
    );
}
function Combobox(props){
   // console.log(props.data);
    var resultOptions = props.data.map((item,index)=>{
        return (
             <option key={index} value={item.id}>{item.value}</option>
        );
    });
   // console.log({resultOptions});
    return (
        <div className="combobox">
                <label>{props.label}</label>
                <select>
                     {resultOptions}
                </select>
        </div>
    );
}
function ToolTaps(props){
        var data = props.data;
        var results = data.map((item,index)=>{
            return(
                <tr key={index}><td>{item.name}</td><td>{item.action}</td></tr>
            );
        });
        return (
            <div className="container-tooltaps">
                <table className="list">
                    <tbody>
                        {results}
                    </tbody>
                </table>
            </div>
        );
}
export default GroupSeach;
export  {Button,Combobox,ToolTaps};