import { useState } from "react"
import {supabase} from "../products"

export const useSupabase = () => {
    const [products, setProducts] = useState<any[]>([]);
    const [filterData,setFilterData]=useState<any>([]);

    
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

   

    return {
        products,
        filterData,
        getDataFromSupabase,
        getFilterData
    };
};
