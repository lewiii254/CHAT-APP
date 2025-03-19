import React from 'react'
import Sidebar from './sidebar'

const Main = () => {
  return (
    <div className='flex'>
        {/* Sidebar */}
        <section>
            <Sidebar />
        </section>
        
        {/* Chat update */}
        <section>
        <div>
            <h1>ChatUpdate</h1>
        </div>

        {/* Chat Screen */}
        <div>
            <h1>Chat Screen</h1>
        </div>
        </section>
      
    </div>
  );
};

export default Main;
