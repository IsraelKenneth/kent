import React from 'react'
import "./extra.css"


const Loading = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <div className="cube-loader">
  <div className="cube cube1"></div>
  <div className="cube cube2"></div>
  <div className="cube cube3"></div>
  <div className="cube cube4"></div>
</div>
        </div>
    );
}

export default Loading