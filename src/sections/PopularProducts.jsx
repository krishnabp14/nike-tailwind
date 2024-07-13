import PopularProductCard from "../components/PopularProductCard";
import { products } from "../constants";

const PopularProducts = () => {
    return (
        <section className="max-container max-sm:mt-12">
            <div className="flex flex-col justify-start gap-5">
                <h2 className="text-4xl font-palanquin font-bold">Our <span className="text-coral-red">Popular</span> products</h2>
                <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">Experience top notch quality and style!!</p>
            </div>
            <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 flex-center items-center">
                {products.map((product) => {
                    return (
                        <PopularProductCard imgUrl={product.imgURL} name={product.name} price={product.price} />
                    )
                })}
            </div>
        </section>        
    )
}

export default PopularProducts;