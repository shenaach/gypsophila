import React from "react";
import Fade from "react-reveal/Fade";

import ImageArtist from "assets/images/artist.png";
import IconGaleri from "assets/images/icons/galeri.png";
import IconPaket from "assets/images/icons/paket.png";
import IconMUA from "assets/images/icons/mua.png";
import Button from "elements/Button";

export default function Hero(props) {
  function showMostPick() {
    window.scrollTo({
      top: props.refMostPicked.current.offsetTop - 30,
      behavior: "smooth",
    });
  }

  function showMostPickSmall() {
    window.scrollTo({
      top: props.refMostPickedSmall.current.offsetTop - 30,
      behavior: "smooth",
    });
  }

  return (
    <>
      <section className="d-none d-lg-block  bg-header">
        <div className="container">
          <div className="row align-items-center">
            <Fade bottom>
              <div className="col-6">
                <h1 className="font-weight-bold line-height-1 mb-3">
                  Tingkatkan Percaya Diri<br/>
                  Dengan Cantikmu
                </h1>
                <p
                  className="mb-3 font-weight-light text-white"
                  style={{ lineHeight: "170%" }}
                >
                  Kami Menyediakan Paket MakeUp Untuk Membantu Mempercantik Anda
                  Dalam Berbagai Acara Dengan MakeUp Artist Kami Yang Terpercaya
                </p>
                <Button
                  className="btn px-5"
                  hasShadow
                  isPrimary
                  onClick={showMostPick}
                >
                  Lihat Paket MakeUp
                </Button>
              </div>
            </Fade>
            <Fade right delay={300}>
              <div className="col-6 text-right">
                <img
                  src={ImageArtist}
                  alt="image artist"
                  className="img-fluid"
                  style={{ height:501 }}
                />
              </div>
            </Fade>
          </div>
        </div>
      </section>

      <section
        className="container d-block d-lg-none"
        style={{ marginTop: -20, marginBottom: 90 }}
      >
        <Fade bottom>
          <div className="row align-items-center">
            <div className="col-12  text-center">
              <h1 className=" h3 font-weight-bold line-height-1 mb-3">
                Tingkatkan Percaya Diri<br/>
                Dengan Cantikmu 
              </h1>
              <p
                className="mb-3 font-weight-light text-gray-500 "
                style={{ lineHeight: "170%" }}
              >
                Kami Menyediakan Paket MakeUp Untuk Membantu Mempercantik
                Anda Dalam Berbagai Acara Dengan MakeUp Artist Kami Yang Terpercaya.
              </p>
              <Button
                className="btn px-5"
                hasShadow
                isPrimary
                onClick={showMostPickSmall}
              >
                Lihat Paket MakeUp
              </Button>
            </div>
          </div>
        </Fade>
      </section>

      <div className="container pb-5">
        <div className="row justify-content-center">
          <Fade bottom delay={500}>
            <div className="col-10 info-panel">
              <div className="row">
                <div className="col-lg">
                  <img src={IconGaleri} className="float-left" alt="icon city" />
                  <h6 className="font-weight-bold">
                    7 Paket MakeUp
                  </h6>
                  <p className="text-gray-600">
                    Paket MakeUp sesuai acara yang dihadiri
                  </p>
                </div>
                <div className="col-lg">
                  <img
                    src={IconPaket}
                    className="float-left"
                    alt="icon city"
                  />
                  <h6 className="font-weight-bold">
                    15 MakeUp Artist
                  </h6>
                  <p className="text-gray-600">Artist profesional siap untuk anda</p>
                </div>
                <div className="col-lg">
                  <img
                    src={IconMUA}
                    className="float-left"
                    alt="icon city"
                  />
                  <h6 className="font-weight-bold">52 Foto Galeri</h6>
                  <p className="text-gray-600">Hasil Makeup oleh Artist kami</p>
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </>
  );
}
