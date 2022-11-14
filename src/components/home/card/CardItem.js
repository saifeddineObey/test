import React from "react";
import "./CardItem.scss";

function CardItem() {
  return (
    <div className="card col-lg-5">
      <div className="row d-flex justify-content-between">
        <div className="teaserbox_special_text col-4">
          Empfehlung: Bestes kostenloses Konto
          <i className="fas fa-award"></i>
        </div>
        <div className="col-4 text-center teaserbox_logo">
          <a
            href="/"
            target="_blank"
            data-name="teaser-DKB Cash Girokonto"
            data-tracking-section="Girokonto"
            data-tracking-productname="DKB"
            data-tracking-productid="114"
            data-tracking-postid="1701"
            data-tracking-position="teaser-eins"
            data-tracking-logo-position="teaser-eins">
            <img
              width="200"
              height="100"
              src="https://finanzvergleich.com/wp-content/uploads/2018/05/dkb-logo.svg"
              className="attachment-full size-full wp-post-image ls-is-cached lazyloaded"
              alt="DKB Logo"
              data-orig-src="https://finanzvergleich.com/wp-content/uploads/2018/05/dkb-logo.svg"
            />
          </a>
          <div className="teaserbox_sterne">
            <div className="">

              <span
                className="fa fa-star"
                style={{ color: "yellow" }}></span>{" "}
              <span className="fa fa-star " style={{ color: "yellow" }}></span>{" "}
              <span className="fa fa-star " style={{ color: "yellow" }}></span>{" "}
              <span className="fa fa-star checked"></span>{" "}
              <span className="fa fa-star"></span>
            </div>
          </div>
        </div>
        <div className="teaserbox_note col-4 d-flex justify-content-center">
          <div
            className="product_note "
            data-id="1310"
            data-type="teaser"
            data-note="eins">
            <span className="note_outer note_content">1,2</span>
            <span className="note_text medium_text note_content">Sehr gut</span>
          </div>
        </div>
      </div>
      <div>
        <div className="teaserbox_bullets">
          <div className="feature_wrap">
            <span className="kk_feature_1 kk_feature most_important">
            <i class="fa fa-check-circle pt-1 px-1" aria-hidden="true" style={{ color: "#7ab51d" }}></i>
              <span className="kk_feature_text">
                Bei aktiver Nutzung kostenlos
                <span
                  className="tipr"
                  data-tip="Kostenlos ist das Konto bei einem Geldeingang von mind. 700 € im Monat und generell in den ersten 3 Monaten sowie für Kunden unter 28 Jahren."
                  data-hasqtip="0"
                  aria-describedby="qtip-0">
                  <i className="fa fa-info-circle vgl-icon-color-neutral px-1" style={{ color: "#333333" }}></i>
                </span>
              </span>
            </span>
            <span className="kk_feature_2 kk_feature most_important">
            <i class="fa fa-check-circle pt-1 px-1" aria-hidden="true" style={{ color: "#7ab51d" }}></i>
              <span className="kk_feature_text">
                Weltweit kostenlos abheben
                <span
                  className="tipr"
                  data-tip="Für Aktivkunden (Kunden mit einem Geldeingang von mind. 700 €/Monat in den letzten 3 aufeinanderfolgenden Monaten) sind Barabhebungen ab 50 € weltweit kostenlos."
                  data-hasqtip="1"
                  aria-describedby="qtip-0">
                  <i className="fa fa-info-circle vgl-icon-color-neutral px-1" style={{ color: "#333333" }}></i>
                </span>
              </span>
            </span>
            <span className="kk_feature_3 kk_feature most_important">
            <i class="fa fa-check-circle pt-1 px-1" aria-hidden="true" style={{ color: "#7ab51d" }}></i>
              <span className="kk_feature_text">Visa-Karte inklusive</span>
            </span>
          </div>
        </div>
      </div>
      <div className="teaserbox_cta text-center">
        <a
          href="/financeads.php?id=1701&amp;subid=76a8f651d8bcda6f"
          target="_blank"
          data-name="teaser-DKB Cash Girokonto"
          data-tracking-section="Girokonto"
          data-tracking-productname="DKB"
          data-tracking-productid="1701"
          data-tracking-postid="1701"
          data-tracking-position="teaser-eins">
          <span className="button">Zum Anbieter »</span>
        </a>
      </div>
    </div>
  );
}

export default CardItem;
