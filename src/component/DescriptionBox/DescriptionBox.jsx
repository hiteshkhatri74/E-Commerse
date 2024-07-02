import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>

      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">
            Description
        </div>
        <div className="descriptionbox-nav-box fade">
            Reviews (122)
        </div>
      </div>

      <div className="descriptionbox-description">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo quae perferendis, qui deserunt voluptatum ad aliquam, totam hic quis sed numquam quas saepe, impedit eos est ratione dignissimos tempore eveniet.</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore dolorum ad doloribus, quibusdam magni quidem odit sequi enim! Impedit quidem quibusdam dolore sunt adipisci explicabo molestias atque inventore aperiam quas!</p>
      </div>
    </div>
  )
}

export default DescriptionBox
