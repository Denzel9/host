import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from './components/layout/Layout'
import AuthProvider from './providers/AuthProvider'
import { BrowserRouter } from 'react-router-dom'
import { App } from './components/App'
import UserProvider from './providers/UserProvider'

const root = document.getElementById('root')

if (!root) throw new Error('root not found')

const container = createRoot(root)

container.render(
  <AuthProvider>
    <UserProvider>
      <BrowserRouter>
        <Layout>
          <App />
        </Layout>
      </BrowserRouter>
    </UserProvider>
  </AuthProvider>
)
