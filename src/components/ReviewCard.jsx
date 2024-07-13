import { star } from "../assets/icons";

const ReviewCard = ({imgUrl, customerName, rating, feedback}) => {
    return (
        <div className="flex justify-center items-center flex-col">
            <img src={imgUrl} className="rounded-full object-cover w-[120px] h-[120px] mt-8" />
            <p className="mt-6 text-center info-text">{feedback}</p>
            <div className="mt-4 flex flex-center items-center justify-center gap-[4]">
                <img src={star} width={24} height={24} className="object-contain m-0"/>
                <p className="text-xl font-montserrat text-slate-gray">{rating}</p>
            </div>
            <h3 className="mt-1 font-palanquin text-3xl text-center font-bold">{customerName}</h3>
        </div>
    )
}

export default ReviewCard;