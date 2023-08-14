import CardItem from "./CardItem";
import { useEffect, useState } from "react";

const CardList = () => {

    const [product, setProduct] = useState([]);
    useEffect(() => {
        const url = "http://localhost:3000/products";

        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                setProduct(json);
            } catch (error) {
                console.log("error", error);
            }
        };
        fetchData();
    }, []);
    console.log(product)

    const handleDelete = () => {
        console.log("Bé Heo")

    }

    return (
        <div>
            <p className="text-4xl font-semibold text-center">Our Products</p>
            <p className="text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                voluptatem doloremque
            </p>

            <div className="flex justify-center">
                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    { 
                      product.length > 0 && product.map((item, index) => (
                        <CardItem item={item} key={index}/>
                      ))
                    }
                </div>
            </div>
        </div>
    );
};

export default CardList;
