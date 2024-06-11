import { Color } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/colors`;

const getColors =  async (): Promise<Color[]> => {
    //console.log(URL)
    const res = await fetch(URL);
    return res.json();
}
 
export default getColors;