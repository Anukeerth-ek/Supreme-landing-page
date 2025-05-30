import ContactForm from "./components/HomeSections/ContactForm";
import Footer from "./components/HomeSections/Footer";
import MarketingPage from "./components/HomeSections/MarketingPage";
import HomePage from "./components/HomeSections/VehicleDetailPage";
import Navbar from "./components/Navbar";

export default function Home() {
     return (
          <>
               <Navbar />
               <MarketingPage />
               <HomePage />
               <ContactForm/>
               <Footer/>
          </>
     );
}
