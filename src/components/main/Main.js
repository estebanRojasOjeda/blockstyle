import React,{Component} from "react";
import SubContent from '../sub-content/SubContent';
import Advertisement from "../advertisement/Advertisement";
import style from "./main.module.css"


class Main extends Component{
    render(){
        return <div className={style.main}>
            <SubContent></SubContent>
            <SubContent></SubContent>
            <SubContent></SubContent>
            <Advertisement></Advertisement>
        </div>
    }
}

export default Main;