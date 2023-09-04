import Footer from "@/shared/footer";
import Navbar from "@/shared/navbar";

const RootLayout = ({ children }: any) => {
  return (
    <div>
      <Navbar />
      <div className="h-screen">{children}</div>

      <Footer />
    </div>
  );
};
export default RootLayout;
