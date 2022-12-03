import React from 'react'
import ResponsiveAppBar from '../ResponsiveAppBar'
import ToTopButton from '../ToTopButton'

function LayoutWrapper({children}) {
  return (
    <div>
        <ResponsiveAppBar/>
        <div style={{marginTop:"100px"}}>
          <ToTopButton/>
        {children}
        </div>
    </div>
  )
}

export default LayoutWrapper