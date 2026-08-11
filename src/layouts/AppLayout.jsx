import Header from "../components/navigation/Header";

function AppLayout({ children }) {
  return (
    <>
      <Header />

      <main>
        {children}
      </main>
    </>
  );
}

export default AppLayout;