import axios from 'axios';


export const getPlacesData = async(type, sw, ne) => {
    try{
        const {data : {data}} = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
          params: {
            bl_latitude: sw.lat,
            tr_latitude: ne.lat,
            bl_longitude: sw.lng,
            tr_longitude: ne.lng
          },
          headers: {
            'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
            'x-rapidapi-key': '36d8261b23msh3e7c3b0500255fcp146863jsn4782b2d60612'
          }
        })
        return data
    }
    catch(error){
        console.log(error);
    }
}   