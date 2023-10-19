import './style.css';
import cartWidget from '../cartWidget/cartWidget';

const navBar = () => {
    return(
        <div className="navBar-css">
            <div>
                <img alt="mascotalandia-petshop" src={'./logo-petshop.png'} width={'300px'}/>
            </div>
            <div>
                <ul className='lista'>
                    <li></li>
                    <li><button className='boton'>Comidas</button></li>
                    <li><button>Accesorios</button></li>
                    <li><button>Baño y peluqueria</button></li>
                    <li><button>Ofertas</button></li>
                    <li><button>Sucursales</button></li>
                </ul>
            </div>
            <cartWidget />
        </div>
    )
};


export default navBar;