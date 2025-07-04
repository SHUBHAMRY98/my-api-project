import { fetchdata } from "@/pages/api/api";

export async function serverSideApi(){
    const data=fetchdata();
    return {props:{data}}
    
}