import "../../App.css"
import styled from 'styled-components';

export default function DirectoryList({ negocio, ...props }) {
    console.log("Here is your negocio", negocio);

    const CardContainer = styled.div`
        width: 285px;
        height: 500px;
        margin:0 auto;
        display: flex;
        flex-direction: column;
        border-radius: 25px;
        box-shadow: 0 2px 7px 1px rgba(31,31,31,0.2);
        background-color: #1d1f21;
        color: #fff;
        position: relative;
  `;


    return(


      <CardContainer>
        <div class="card-header">
          <h2 className="card-title">{negocio.name}</h2>
        </div>
        <img src={negocio.media} className="card-img-top"/>
        <div className="card-body">
          <p className="card-text">Categoria: {negocio.dv_category}</p>
          <h4 className="card-text bg-danger">Cashback: {negocio.dv_cashback}</h4>
        </div>
      </CardContainer>


    )
}
