import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      {/* Header */}
      <Header />

      {/* Navigation */}
      <Navigation />

      {/* Main Content Area */}
      <main className="container-fluid mt-3">

        <div className="row">

          {/* Sidebar */}
          <aside className="col-md-3 mb-3">
            <Sidebar />
          </aside>
          {/* Main Section */}
          <section className="col-md-9">
            <MainContent />
          </section>

        </div>

      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;
