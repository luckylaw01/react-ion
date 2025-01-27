import React from 'react'

const ChartBar = (props) => {

    let barFillHeight = '0%';

    if(props.maxValue > 0){
        barFillHeight = Math.round((props.value / props.maxValue) * 100) + '%';
    }

  return (
    <div className='char-bar'>
        <div className='char-bar__inner'>
            <div className='chart-bar__fill' style={{height: barFillHeight}}></div>
        </div>
        <div className='chart-bar__label'></div>
    </div>
  )
}

export default ChartBar
