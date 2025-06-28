
import Banner from "./components/Banner";
import BookAppointment from "./components/BookAppointment";
import LifestyleSection from "./components/LifestyleSection";
import Navbar from "./components/Navbar";
import OurServices from "./components/OurServices";
import Review from "./components/Review";
import Videos from "./components/Videos";


export default function Home() {
  return (
   <div>

<Navbar></Navbar>
<Banner></Banner>
<LifestyleSection></LifestyleSection>
<BookAppointment></BookAppointment>
<OurServices></OurServices>
<Videos></Videos>
<Review></Review>
   </div>
  );
}
