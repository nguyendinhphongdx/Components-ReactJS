import React from 'react';
import HeaderComponent from './headerComponent';
import TabsController from './tabsController';
import ToolbarComponent from './toolbarComponent';

function Home(){
    return(
        <div className="wrapper">
                <HeaderComponent></HeaderComponent>
                <TabsController></TabsController>
                <HomePage ></HomePage>
        </div>
    );
}
export default Home;
function HomePage(){
    return(
        <div id="homePage">
             <ToolbarComponent type="device"></ToolbarComponent>
        </div>
    )
}