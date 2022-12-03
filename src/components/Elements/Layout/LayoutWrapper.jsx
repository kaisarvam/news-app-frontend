import React from 'react'
import ResponsiveAppBar from '../ResponsiveAppBar'

function LayoutWrapper({children}) {
  return (
    <div>
        <ResponsiveAppBar/>
        <div style={{marginTop:"100px"}}>
        {children}
        </div>
    </div>
  )
}

export default LayoutWrapper