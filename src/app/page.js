
import AboutUs from "./components/AboutUs";
import Banner from "./components/Banner";
import BookAppointment from "./components/BookAppointment";
import Booking from "./components/Booking";
import Footer from "./components/Footer";
import GetUsKnow from "./components/GetUsKnow";
import LifestyleSection from "./components/LifestyleSection";

import OurServices from "./components/OurServices";
import Review from "./components/Review";
import Videos from "./components/Videos";


export default function Home() {
  return (
   <div>


<Banner></Banner>
<LifestyleSection></LifestyleSection>
<BookAppointment></BookAppointment>
<OurServices></OurServices>
<Videos></Videos>
<Review></Review>
<AboutUs></AboutUs>
<Booking></Booking>
<GetUsKnow></GetUsKnow>

   </div>
  );
}
