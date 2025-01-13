'use client';
import { useEffect, useState } from 'react';
import { client } from "@/sanity/lib/client";

async function getData() {
  const fetchData = await client.fetch(`*[_type == "product" && "women's clothing" in tags]{
    _id,
    name,
    price,
    discountPercentage,
    tags,
    "imageUrl": image.asset->url
  }`);
  return fetchData;
}

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getData();
      setData(result);
    };
    fetchData();
  }, []);

  return (
    <>
      {data.map((val: any) => (
        <div key={val._id}>
          <h1>{val.name}</h1>
          <p>{val.description}</p>
          <img src={val.imageUrl} alt={val.name} />
        </div>
      ))}
    </>
  );
}
