import { useState } from "react"
import {supabase} from "../products"

export const useSupabase = () => {
    const [products, setProducts] = useState<any[]>([]);
    const [filterData,setFilterData]=useState<any>([]);
    const [singleProduct,setSingleProduct]=useState<any>([]);
    const [mensProduct, setMensProduct] = useState<any>([]);
    const [womensProduct, setWomensProduct] = useState<any>([]);
    
    const getDataFromSupabase = async () => {
        const { data, error } = await supabase.from('products').select('*');
        if (data) {
            setProducts(data);
        }
        if (error) {
            console.error(error);
        }
    };


    
//FilterData from supabase
    const getFilterData = async (query:string) => {
        const { data, error } = await supabase.from('products').select('*').or(`title.ilike.%${query}%,description.ilike.%${query}%,category.ilike.%${query}%`);
        if (data) {
            setFilterData(data);
            console.log(data);
        }
        if (error) {
            console.error(error);
        }
    };

   
//getDatabyId==>singleData
const getSingleProduct = async (id:number)=>{
    let {data, error} = await supabase.from('products').select('*').eq('id', id);
    if(data){
        setSingleProduct(data);
    }
    if(error){
        console.log(error);
    }
}

//get mens clothing for homepage
const getMensClothing = async () => {
    let {data, error} = await supabase.from('products').select('*').ilike('category', `men's clothing`);
    if(data){
        setMensProduct(data);
    }
    if(error){
        console.log(error);
        
    }
}
//get womens clothing for homepage
const getWomensClothing = async () => {
    let {data, error} = await supabase.from('products').select('*').ilike('category', `women's clothing`);
    if(data){
        setWomensProduct(data);
    }
    if(error){
        console.log(error);
        
    }
}


    return {
        products,
        filterData,
        singleProduct,
        getSingleProduct,
        getDataFromSupabase,
        getFilterData,
        mensProduct,
        getMensClothing,
        womensProduct,
        getWomensClothing
    };
};
