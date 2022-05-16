import Header from "../header/header";
import Footer from "../footer/footer";

export default function Layout(props) {
  return (
    <div className="max-w-7xl mx-auto">
      <Header />
      {props.children}
      <Footer />
    </div>
  );
}
