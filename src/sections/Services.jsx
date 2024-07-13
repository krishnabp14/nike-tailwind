import ServiceComponent from "../components/ServiceComponent";
import { services } from "../constants";

const Services = () => {
    return (
        <>
        <h2 className="text-4xl font-palanquin mb-12 font-bold">Our <span className="text-coral-red">Services</span></h2>
        <section className="max-container flex flex-wrap gap-9 justify-center items-center">
            {services.map((service) => {
                return (
                    <ServiceComponent imgUrl={service.imgURL} label={service.label} subText={service.subtext}/>
                )
            })}
        </section>
        </>
    )
};

export default Services;