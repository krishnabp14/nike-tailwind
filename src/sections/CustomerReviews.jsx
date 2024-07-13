import ReviewCard from "../components/ReviewCard";
import { reviews } from "../constants";

const CustomerReviews = () => {
    return (
        <section className="max-container">
            <h3 className="font-palanquin font-bold text-center text-4xl">What our <span className="text-coral-red">Customers</span> Say ?</h3>
            <p className="info-text m-auto mt-4 max-w-lg text-center text-slate-gray">Here genuinue stories from our satisfied customers about their exceptional experience with us.</p>

            <div className="flex flex-1 justify-evenly items-center flex-col gap-14">
                {reviews.map((review) => {
                    return (
                        <ReviewCard imgUrl={review.imgURL} customerName={review.customerName} feedback={review.feedback} rating={review.rating}/>
                    )
                })}
            </div>

        </section>
    )
};

export default CustomerReviews;