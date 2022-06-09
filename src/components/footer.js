import bild1 from './../img/salat.jpeg'
import bild2 from './../img/pizza.jpeg'
import bild3 from './../img/frikadellen.jpeg'
import bild4 from './../img/glass.jpeg'
import bild5 from './../img/pizza2.jpeg'
import bild6 from './../img/scampi.jpeg'
import bild7 from './../img/spagetthi.jpeg'
import bild8 from './../img/teller.jpeg'

const Footer = () => {
    return (
        <footer>
            <div className="wrapBlockFooter">
                <img src={bild1} alt="Salat" className="imgFooter" />
                <h4 className="headlineBlue">Fusce dictum finibus</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto!</p>
                <h5 className="price">$45/$55</h5>
            </div>
            <div className="wrapBlockFooter">
                <img src={bild2} alt="Pizza" className="imgFooter" />
                <h4 className="headlineBlue">Aliquam sagittis</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto!</p>
                <h5 className="price">$65/$70</h5>
            </div>
            <div className="wrapBlockFooter">
                <img src={bild3} alt="Frikadellen" className="imgFooter" />
                <h4 className="headlineBlue">Sed varius turpis</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto!</p>
                <h5 className="price">$30.50</h5>
            </div>
            <div className="wrapBlockFooter">
                <img src={bild4} alt="Glas" className="imgFooter" />
                <h4 className="headlineBlue">Aliquam sagittis</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto!</p>
                <h5 className="price">$25.50</h5>
            </div>
            <div className="wrapBlockFooter">
                <img src={bild5} alt="Pizza" className="imgFooter" />
                <h4 className="headlineBlue">Maecenas eget justo</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto!</p>
                <h5 className="price">$25.50</h5>
            </div>
            <div className="wrapBlockFooter">
                <img src={bild6} alt="Scampi" className="imgFooter" />
                <h4 className="headlineBlue">Quisque et fekis eros</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto!</p>
                <h5 className="price">$25.50</h5>
            </div>
            <div className="wrapBlockFooter" >
                <img src={bild7} alt="Spaghetti" className="imgFooter" />
                <h4 className="headlineBlue">sed ultricies dui</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto!</p>
                <h5 className="price">$25.50</h5>
            </div>
            <div className="wrapBlockFooter">
                <img src={bild8} alt="Teller" className="imgFooter" />
                <h4 className="headlineBlue">Donec porta consequat</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto!</p>
                <h5 className="price">$25.50</h5>
            </div>
        </footer>
    );
}

export default Footer;