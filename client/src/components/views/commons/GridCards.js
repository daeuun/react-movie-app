import React from 'react'
import { Col } from 'antd';

function GridCards() {
  return (
        <Col lg={6} md={8} xs={24}>
            <div style={{ position: 'relative'}}>
                <a href={`/movie/${props.movieId}`}>
                    <img style={{ witdh: '100%', height:'320px' }} src={props.image} alt={props.movieName} />
                </a>
            </div>
        
        </Col>
    
  )
}

export default GridCards