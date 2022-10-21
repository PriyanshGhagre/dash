import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { FiSettings } from 'react-icons/fi'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'

import { HomePage, Navbar, Footer, Sidebar, ThemeSettings } from './components'
import { Applicants, Status, Listings } from './pages'
import { useStateContext } from './contexts/ContextProvider'
import './App.css'

const App = () => {
    const { activeMenu } = useStateContext();
    return (
        <BrowserRouter>
            <div className="flex relative dark:bg-main-dark-bg">
                <div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>
                    <TooltipComponent content="Settings" postion="Top">
                        <button className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white" style={{ background: 'blue', borderRadius: '50%' }}>
                            <FiSettings />
                        </button>
                    </TooltipComponent>
                </div>
                {
                    activeMenu ?
                        (
                            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
                                <Sidebar />
                            </div>
                        )
                        :
                        (
                            <div className="w-0 dark:bg-secondary-dark-bg">
                                <Sidebar />
                            </div>
                        )
                }
                <div className={
                    `dark:bg-main-bg bg-main-bg min-h-screen w-full ${activeMenu ? 'md:ml-72' : 'flex-2'}`
                }>
                    <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg w-full navbar">
                        <Navbar />
                    </div>
                    <div>
                        <Routes>
                            {/* Dashboard */}
                            <Route path="/" element={<HomePage />} />
                            <Route path="/homepage" element={<HomePage />} />
                            {/* Pages */}
                            <Route path="/listings" element={<Listings />} />
                            <Route path="/applicants" element={<Applicants />} />
                            <Route path="/status" element={<Status />} />
                        </Routes>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App