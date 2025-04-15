import React from 'react'
import PropTypes from 'prop-types'

function About({image,about}) {
  return (

        <aside>
            <img src={image} alt="blog logo" />
            <p>{about}</p>
        </aside>
    
  )
}
About.defaultProps = {
  image:"https://via.placeholder.com/215",
}

About.propTypes = {
  about: PropTypes.string,
  image: PropTypes.string,
};

export default About