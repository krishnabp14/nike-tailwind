const Button = ({label, iconUrl}) => {
    return (
        <button className="rounded-full flex justify-center items-center gap-2 px-7 py-4 border text-lg leading-none bg-coral-red text-white">
            {label}
            <img src = {iconUrl} className="ml-2 rounded-full w-5 h-5" />
        </button>
    )
}

export default Button;