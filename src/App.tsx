import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import AppRouter from "./router/AppRouter";

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Top Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1 ">
        <AppRouter />
      </main>

      {/* Footer with contact info */}
      <Footer />
    </div>
  );
}
