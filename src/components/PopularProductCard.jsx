import { star } from "../assets/icons";

const PopularProductCard = ({imgUrl, name, price}) => {
    return (
        <div className="flex flex-1 flex-center flex-col w-full max-sm:w-full max-lg:my-4">
            <img src={imgUrl} className="w-full" height={"250px"} />
            <div className="mt-8 ml-4 flex justify-start gap-3">
                <img src={star} width={"30px"} height={"30px"}/>
                <p className="font-montserrat text-xl leading-normal text-slate-gray">(4.5)</p>
            </div>
            <div className="mt-2 ml-4 flex flex-col gap-1">
                <p className="mt-2 text-2xl leading-normal font-semibold font-palanquin">{name}</p>
                <p className="mt-2 font-semibold font-montserrat text-coral-red text-2xl leading-normal">{price}</p>
            </div>
        </div>
    )
}

export default PopularProductCard;