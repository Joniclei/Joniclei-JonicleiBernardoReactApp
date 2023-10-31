import "../css/style.css";

import img from '../img/logo.png';
import img2 from '../img/img2.avif'



export default function HomeScreen() {
  return (
    <div>
            {/* Começa aqui o carrossel  */}
            <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={img} className="d-block w-100" alt="..." style={{ width: '800px', height: '800px' }}/>
                    </div>
                    <div className="carousel-item">
                        <img src={img2} className="d-block w-100" alt="..."  style={{ width: '800px', height: '800px' }}/>
                    </div>
                  
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
       
        </div>
 
  )
}
