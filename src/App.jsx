import React from "react";
import NavBar from "./sections/NavBar";
import Hero from "./sections/Hero";
import PopularProducts from "./sections/PopularProducts";
import Services from "./sections/Services";
import CustomerReviews from "./sections/CustomerReviews";

function App() {
  return (
    <div className="relative">
      <NavBar />
      <section className="xl:padding-l padding-b padding-r">
        <Hero />
      </section>
      <section className="padding">
        <PopularProducts />
      </section>
      <section className="padding-x py-10">
        <Services />
      </section>
      <section className="bg-pale-blue padding">
        <CustomerReviews />
      </section>
      <section className="padding-x padding-t pb-8 bg-black ">
        Footer
      </section>
    </div>
  )
}

export default App;