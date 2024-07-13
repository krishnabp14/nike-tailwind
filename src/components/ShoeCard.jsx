const ShoeCard = ({imgUrl, changeBigShoeImage, bigShoeImage}) => {
    const handleClick = () => {
        if(bigShoeImage !== imgUrl.bigShoe) {
            changeBigShoeImage(imgUrl.bigShoe);
        }
    }
    
    return (
        <div className={`border-2 rounded-xl ${changeBigShoeImage === bigShoeImage ? 'border-coral-red' : 'border-transparent'} cursor-pointer max-sm:flex-1`}
        onClick={handleClick}>
            <img src={imgUrl} width={"150px"} height="150px" className="object-contain flex flex-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4" />
        </div>
    )
}

export default ShoeCard;