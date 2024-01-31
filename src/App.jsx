import Doc from "./Fragments/Doc";
import Extra from "./Fragments/Extra";
import Footer from "./Fragments/Footer";
import Graduate from "./Fragments/Graduate";
import Home from "./Fragments/Home";
import Navbar from "./Fragments/Navbar";
import News from "./Fragments/News";
import Profile from "./Fragments/Profile";
import Program from "./Fragments/Program";
import Reason from "./Fragments/Reason";
import PagesLayout from "./Layout/PagesLayout";

export default function App() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <PagesLayout>
        <Home />
      </PagesLayout>
      <PagesLayout>
        <Reason />
      </PagesLayout>
      <PagesLayout>
        <Profile />
      </PagesLayout>
      <PagesLayout>
        <Program />
      </PagesLayout>
      <div className="bg-slate-100">
        <PagesLayout>
          <Extra />
        </PagesLayout>
      </div>
      <PagesLayout>
        <News />
      </PagesLayout>
      <Doc />
      <PagesLayout>
        <Graduate />
      </PagesLayout>
      <Footer />
    </div>
  );
}
