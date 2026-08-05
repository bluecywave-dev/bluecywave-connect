import Header from '../components/navigation/Header'

function AppLayout({ children }) {
  return (
    <div>
      <Header />

      <main>
        {children}
      </main>
    </div>
  )
}

export default AppLayout