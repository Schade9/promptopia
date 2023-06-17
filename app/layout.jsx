import '@styles/globals.css';

export const metadata = {
    title: "Promtopia",
    description: 'Discover & Share AI Promtps',
}

const RootLayout = ({children}) => {
  return (
    <html>
        <body>
            <div className="main">
                <div className="gradient" />
            </div>

            <main className="app">
                {children}
            </main>
        </body>
    </html>
  )
}

export default RootLayout
