import React from 'react';
import Brush from './../img/brush.svg';
import Objekt from './../img/object-select.svg';
import Megafon from './../img/megaphone.svg';
import Globus from './../img/globe-line.svg';

function Main() {
    return (
        <main>
            <h2 className="headlineSmallMain">What We Do</h2>
            <h3 className="headlineMain">We've got everything you need to launch and grow your business.</h3>
            <div>
                <div className="wrapBlockMain">
                    <img src={Brush} alt="Pinsel" className="icon" />
                    <div className="textBlockMain">
                        <h5 className="headlineTextBlockMain">Brand Identity</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere laudantium minima assumenda doloribus praesentium provident voluptatum culpa illum voluptatem ad, tenetur fugiat odio? Pariatur sit omnis alias accusantium dicta.</p>
                    </div>
                </div>
                <div className="wrapBlockMain">
                    <img src={Objekt} alt="Quadrat" className="icon" />
                    <div className="textBlockMain">
                        <h5 className="headlineTextBlockMain">Illustration</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere laudantium minima assumenda doloribus praesentium provident voluptatum culpa illum voluptatem ad, tenetur fugiat odio? Pariatur sit omnis alias accusantium dicta.</p>
                    </div>
                </div>
                <div className="wrapBlockMain">
                    <img src={Megafon} alt="Megaphone" className="icon" />
                    <div className="textBlockMain">
                        <h5 className="headlineTextBlockMain">Marketing</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere laudantium minima assumenda doloribus praesentium provident voluptatum culpa illum voluptatem ad, tenetur fugiat odio? Pariatur sit omnis alias accusantium dicta.</p>
                    </div>
                </div>
                <div className="wrapBlockMain">
                    <img src={Globus} alt="Globus" className="icon" />
                    <div className="textBlockMain">
                        <h5 className="headlineTextBlockMain">Web Design</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere laudantium minima assumenda doloribus praesentium provident voluptatum culpa illum voluptatem ad, tenetur fugiat odio? Pariatur sit omnis alias accusantium dicta.</p>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Main;