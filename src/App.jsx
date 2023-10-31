import {
  Hero,
  PopularProducts,
  Services,
  Subscribe,
  SuperQuality,
  CustomerReviews,
  Footer,
  SpecialOffer,
} from "./sections/Index";
import Nav from "./components/Nav";
const App = () => {
  return (
    <main className="relative">
      <Nav />
      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero />
      </section>
      <section className="padding xl:padding-l">
        <PopularProducts />
      </section>
      <section className="padding bg-slate-100">
        <SuperQuality />
      </section>
      <section className="padding-x py-10">
        <Services />
      </section>
      <section className="padding">
        <SpecialOffer />
      </section>
      <section className="padding bg-pale-blue">
        <CustomerReviews />
      </section>
      <section className="padding-x sm:py-32 p-16 w-full">
        <Subscribe />
      </section>
      <section className="pb-8 bg-black  padding-t">
        <Footer />
      </section>
    </main>
  );
};

export default App;
