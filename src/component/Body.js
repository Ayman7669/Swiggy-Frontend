import React from "react";
import resArr from "../utils/dummydata.js";
import RestaurantCard from "./RestaurantCard";

const Body = ()=>{
        console.log(resArr);
    return <div>
        
        {resArr.map((res)=>{
            return <RestaurantCard key={res.id} resdata={res}/>
        })}
    </div>
    }
export default Body;