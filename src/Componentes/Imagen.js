import React from 'react'; 

const Imagen = (props) => {

    const {largeImageURL, likes, previewURL,tags ,views} = props.imagen;

    return(
        <div className="col-12 colsm-6 clo-md-4 col-lg-3 mb-4">
            <div  className="card">
                <img src={previewURL} alt={tags} className='card-img-top' />
                <p className = " card-text">(likes) Me gusta</p>
                <p className= " card-text">(view) vistas</p>

                <a href= {largeImageURL} target="_blank" className=" btn btn-primary
                btn-block">
                    Ver  imagen </a>
            </div>
        </div>
    )  
}

export default Imagen;