import React, { useEffect, useState } from 'react';

function Landing() {

  const [brags, setBrags] = useState([]);
  const {VITE_API_BRAG} = import.meta.env

  useEffect(() => {
    let controller = new AbortController()
    let options = {
      method: 'GET',
      headers: {
        "Content-Type": "application/json"
      },
      signal: controller.signal
    }

    fetch(VITE_API_BRAG, options)
      .then(response => response.json())
      .then(data => setBrags(data))
      .catch(error => console.error('Error:', error))
      .finally(()=> controller.abort())
  }, []);

  return (
    <>
      <section className="hero">
        <div className="hero__texto">
          <img src="hero2.png" className="hero__textoImg" />
          <h2 className="hero__textoTitulo">
            Triage is first aid <br /> for your inbox.
          </h2>
          <p className="hero__textoP">
            Everything you loved about the <br />
            original Triage is back – only better. <br /> Download Triage 2 on
            the App Store <br /> today.
          </p>
          <img src="descarga.png" className="hero__textoImg" />
        </div>
        <div className="hero__img">
          <img src="hero.png" className="hero__imgImagen" />
        </div>
      </section>

      <section className="archive">
        <div className="archive__img">
          <img src="archive.png" className="archive__imgImagen" />
        </div>
        <div className="archive__texto">
          <img src="flecha.png" className="archive__textoImg" />
          <h2 className="archive__textoTitulo">Drag left to archive</h2>
          <p className="archive__textoP">
            Unread messages appear <br /> in a stack of cards, like <br />
            this.
          </p>
        </div>
      </section>

      <section className="keep">
        <div className="keep__texto">
          <img src="flecha2.png" className="keep__textoImg" />
          <h2 className="keep__textoTitulo">Drag right to keep</h2>
          <p className="keep__textoP">Or create your own custom workflow.</p>
        </div>
        <div className="keep__img">
          <img src="keep.png" className="keep__imgImagen" />
        </div>
      </section>
      <section className="expand">
        <div className="expand__img">
          <img src="expand.png" className="expand__imgImagen" />
        </div>
        <div className="expand__texto">
          <img src="flecha3.png" className="expand__textoImg" />
          <h2 className="expand__textoTitulo">Tap to expand</h2>
          <p className="expand__textoP">
            Open the message to <br /> view the whole thread.
          </p>
        </div>
      </section>
      <section className="reply">
        <div className="reply__texto">
          <img src="flecha4.png" className="reply__textoImg" />
          <h2 className="reply__textoTitulo">Reply in context</h2>
          <p className="reply__textoP">
            Send a quick reply without leaving the <br />
            app.
          </p>
        </div>
        <div className="reply__img">
          <img src="reply.png" className="reply__imgImagen" />
        </div>
      </section>

      <section className="cards">
        <div className="card1">
          <img src="card1.png" className="card__img" />
          <h3 className="card__texto">Works with Gmail, iCloud & IMAP</h3>
        </div>
        <div className="card2">
          <img src="card2.png" className="card__img" />
          <h3 className="card__texto">
            All processing <br />
            happens on device
          </h3>
        </div>

        <div className="card3">
          <img src="card3.png" className="card__img" />

          <h3 className="card__texto">
            Your data is <br />
            yours to stay
          </h3>
        </div>

        <div className="card4">
          <img src="card4.png" className="card__img" />

          <h3 className="card__texto">
            Supports <br /> dark mode
          </h3>
        </div>

        <div className="card5">
          <img src="card5.png" className="card__img" />

          <h3 className="card__texto">
            Free to use. Or pay <br />
            for more features.
          </h3>
        </div>
        <div className="card6">
          <img src="card6.png" className="card__img" />

          <h3 className="card__texto">
            Built & maintained <br />
            by indie developers
          </h3>
        </div>
      </section>
      <section className="brag">
        <h2 className="bragTitulo">Praise for Triage 1</h2>
        <div className="bragGaleria">
          {brags.map((brag, index) => (
            <div key={index} className="bragCard">
              <p className="brag__texto">{brag.texto}</p>
              <img src={brag.imagen} className="brag__img" />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Landing;
