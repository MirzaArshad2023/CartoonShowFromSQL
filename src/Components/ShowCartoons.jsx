import { useEffect } from "react"
import { useState } from "react"
import axios from "axios"
import TicketDisplay from "./TicketDisplay"
import DisplayCartoonShows from "./DisplayCartoonShows"

export default function ShowCartoons()
{
    const [cartoons, setCartoons] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        const fetchTvShows = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/tvshows');
             
                setCartoons(response.data.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching cartoons:', error);
                setLoading(false); // Ensure loading state is set to false on error
            }
        };

        fetchTvShows();

     }, [])
    return(
       <><h1>Cartoons!!</h1>
        {loading? <div>Loading...</div>: <DisplayCartoonShows tvShows={cartoons}></DisplayCartoonShows>}
       </>
    )
}