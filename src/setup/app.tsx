import React, { Suspense } from 'react'
import Setup from './app.setup'

const App: React.FC = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Setup />
        </Suspense>
    )
}

export default App