import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { SidebarProvider, SidebarTrigger } from './components/ui/sidebar.tsx'
import AppSidebar from './components/ui/shared/AppSidebar.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SidebarProvider>
      <AppSidebar />
      <main>
        <SidebarTrigger />
    
      </main>
    </SidebarProvider>
  </StrictMode>,
)
