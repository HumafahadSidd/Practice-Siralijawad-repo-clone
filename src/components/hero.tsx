import { client } from "../../sanity-migration/sanityClient";

async function getData(){
    const fetchData= await  client.fetch( `*[_type == "product" && "featured" in tags]{
            _id,
          name,
          price,
          discountPercentage,
          tags,
          "imageUrl": image.asset->url
        }`)
    return fetchData
    }
    export default async function Hero (){
    const data =await getData();
    console.log(data)
    return (
    <>
    {
    data.map((val:any,i:any)=>{
    {<><h1>{val.title}</h1><h1>{val.discription}</h1></>}
    })
    })
        </>
    );
    }