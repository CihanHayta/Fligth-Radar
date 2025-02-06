import { createAsyncThunk } from "@reduxjs/toolkit";
import Api from "../../utils/api";

export const getFlights = createAsyncThunk("fligth/getFlights",
    async () => {

        const params = {
            bl_lat: '34.488131',
            bl_lng: '25.479116',
            tr_lat: '42.940058',
            tr_lng: '44.79308',
            speed: '50,9999'
        };

        const res = await Api.get("/flights/list-in-boundary", { params });

        const formatted = res.data.aircraft.map((i) => ({
            id: i[0],
            code: i[1],
            lat: i[2],
            lng: i[3],
            deg: i[4],
        }));

        return formatted;


    }
)


export const getDetails = createAsyncThunk("detail/getDetails", async (id) => {
    // parametreleri belirle
    const params = {
      flight: id,
    };
  
    // api'dan detaları al
    const res = await Api.get("/flights/detail", { params });
  
    
    // aksiyonun payload'ını belirle
    return res.data;
  });