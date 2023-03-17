import Header from "./Header";
import Footer from "./Footer";
import { layout } from "./Layout.module.css";

export function Layout(props) {
  return (
    <div className={layout}>
      <Header />
      <main>{props.children}</main>
      {/* exista children in props */}
      <Footer />
    </div>
  );
}
