
import './App.css';
import {Button,Combobox,ToolTaps} from './components/components';
import GroupSeach from './components/components';
var dataOptions = [ 
    {
    id: 0,
    value: 'option 0'
    },
    {
      id: 1,
      value: 'option 1'
    },
    {
      id: 2,
      value: 'option 2'
    },
    {
      id: 3,
      value: 'option 3'
    }
]
  var titleToolTaps =["name","action"]
  var dataToolTaps = [
    {
      id:0,
      name:"name 0",
      action:"delete"
    },
    {
      id:1,
      name:"name 1",
      action:"delete"
    },
    {
      id:2,
      name:"name 2",
      action:"delete"
    },
    {
      id:3,
      name:"name 0",
      action:"delete"
    },
    {
      id:4,
      name:"name 4",
      action:"delete"
    },{
      id:5,
      name:"name 5",
      action:"delete"
    }
  ]
function App() {
  return (
    <div className="App">
        <div className="button">
          <Button title="My Button" event={showLog} />
          <Button title="My Button" event={showLog} />
          <Button title="My Button" event={showLog} />
         </div>
         <div className="groupsearch">
          <GroupSeach label="Search" event={Search} placeholder="Search"></GroupSeach>
         </div>
        <div className="combobox">
          <Combobox label="Select" event={Search} data={dataOptions}></Combobox>
        </div>
        <div className="popup-tooltaps">
            <button id="id1" onClick={()=>controll_popup(1)} class>Show</button>
            <div className="toolTaps">
              <i className="fas fa-caret-up"></i>
              <GroupSeach label="Search" event={Search} placeholder="Search"></GroupSeach>
              <ToolTaps title={titleToolTaps} data={dataToolTaps}></ToolTaps>
            </div>
        </div>
        <div className="popup-tooltaps">
            <button id="id2" onClick={()=>controll_popup(2)} class>Show</button>
            <div className="toolTaps">
              <i className="fas fa-caret-up"></i>
              <GroupSeach label="Search" event={Search} placeholder="Search"></GroupSeach>
              <ToolTaps title={titleToolTaps} data={dataToolTaps}></ToolTaps>
            </div>
        </div>
    </div>
  );
}

export default App;
function showLog(){
  console.log('111');
}
function controll_popup(t){
    //document.querySelector('.toolTaps')[0].style.display = 'none';
    console.log(document.querySelector(`#id${t}~.toolTaps`));
    var popup =  document.querySelector(`#id${t}~.toolTaps`);
    if(popup.style.display === 'flex'){
      popup.style.display = 'none';
    } else{
      popup.style.display = 'flex';
    }
}
function Search(){
  console.log('search');
}