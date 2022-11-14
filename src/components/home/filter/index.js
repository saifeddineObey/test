import React from "react";
import "./index.scss";

function FilterCard() {
  return (
    <div className="filter-card container">
      <div className="products-filter_wrap">
        <div
          id="mobile_filter_toggle"
          className="mobile_filter_toggle d-lg-none d-block"
          data-text-more="Filter anzeigen"
          data-text-less="Filter ausblenden">
      
          <div className="filter_text">Filter ausblenden</div>
          <div className="filter_icon">
            <i
              className="fa fa-chevron-circle-down icon-toggle"
              style={{transform:"rotate(180)" }}>
          
            </i>
          </div>
        </div>
        <div id="products-filter" className="products-filter">
          <div className="filter_item">
            <span className="filter-header">Kontogebühren</span>
            <select
              id="filter_checkboxes"
              className="vergleich_select"
              size="1"
              name="term">
              <option id="filter_all" name="filter_alle" value="alle">
                Alle
              </option>
              <option id="product_cost" name="product_cost" value="true">
                Kostenlose Kontoführung
              </option>
              <option id="incentive" name="incentive" value="true">
                Mit Startguthaben
              </option>
            </select>
          </div>
          <div className="filter_item">
            <span className="filter-header">Kontofeature</span>
            <select
              id="filter_checkboxes"
              className="vergleich_select"
              size="1"
              name="term">
              <option id="filter_all" name="filter_alle" value="alle">
                Alle
              </option>
              <option id="incoming_pm_min" name="incoming_pm_min" value="true">
                Ohne Mindestgeldeingang
              </option>
              <option id="partnercard" name="partnercard" value="true">
                Gemeinschaftskonto möglich
              </option>
            </select>
          </div>
          <div className="filter_item">
            <span className="filter-header">Geld abheben</span>
            <select
              id="filter_checkboxes"
              className="vergleich_select"
              size="1"
              name="term">
              <option id="filter_all" name="filter_alle" value="alle">
                Alle
              </option>
              <option id="atm_euro_fee" name="atm_euro_fee" value="true">
                Kostenlos Geld abheben EU
              </option>
              <option
                id="atm_international_fee"
                name="atm_international_fee"
                value="true">
                Kostenlos Geld abheben weltweit
              </option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterCard;
