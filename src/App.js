import * as React from 'react';
import { BrowserRouter as Router, Routes, Link, Route } from 'react-router-dom';
import AnwendungHeader from "./komponenten/anwendungHeader";
import AnwendungFooter from "./komponenten/anwendungFooter";

//Allgemeine
import DatenschutzAnsicht from "./ansichten/allgemeine/datenschutzAnsicht";
import EinloggenAnsicht from "./ansichten/allgemeine/einloggenAnsicht";
import HomeAnsicht from "./ansichten/allgemeine/homeAnsicht";
import KontaktAnsicht from "./ansichten/allgemeine/kontaktAnsicht";
import NutzungsbedingungenAnsicht from "./ansichten/allgemeine/nutzungsbedingungenAnsicht";
import RegistrierenAnsicht from "./ansichten/allgemeine/registrierenAnsicht";
import WiederherstellenAnsicht from "./ansichten/allgemeine/wiederherstellenAnsicht";

//Kunde
import KundeDashboardAnsicht from "./ansichten/kunde/kundeDashboardAnsicht";
import KundeMeineBestellungenAnsicht from "./ansichten/kunde/kundeMeineBestellungenAnsicht";
import KundeMeineDatenAnsicht from "./ansichten/kunde/kundeMeineDatenAnsicht";
import KundeMeineZahlungenAnsicht from "./ansichten/kunde/kundeMeineZahlungenAnsicht";
import KundeProfilAnsicht from "./ansichten/kunde/kundeProfilAnsicht";

//verwaltung
import VerwaltungBenutzerAktualisierenAnsicht from "./ansichten/verwaltung/verwaltungBenutzerAktualisierenAnsicht";
import VerwaltungBenutzerDashboardAnsicht from "./ansichten/verwaltung/verwaltungBenutzerDashboardAnsicht";
import VerwaltungBenutzerGeschichteAnsicht from "./ansichten/verwaltung/verwaltungBenutzerGeschichteAnsicht";
import VerwaltungBenutzerNeuAnsicht from "./ansichten/verwaltung/verwaltungBenutzerNeuAnsicht";
import VerwaltungBenutzerVerwaltenAnsicht from "./ansichten/verwaltung/verwaltungBenutzerVerwaltenAnsicht";

import './App.css';

function App() {
  return (
    <Router>
        <AnwendungHeader/>
        <Routes>
          <Route path="/datenschutz" element={<DatenschutzAnsicht/>} />
          <Route path="/einloggen" element={<EinloggenAnsicht/>} />
          <Route exact path="/" element={<HomeAnsicht/>} />
          <Route path="/kontakt" element={<KontaktAnsicht />} />
          <Route path="/Nutzungsbedingungen" element={<NutzungsbedingungenAnsicht />} />
          <Route path="/registrieren" element={<RegistrierenAnsicht/>} />
          <Route path="/wiederherstellen" element={<WiederherstellenAnsicht/>} />
          
          <Route exact path="/kunde" element={<KundeDashboardAnsicht/>}/>
          <Route path="/kunde/bestellungen" element={<KundeMeineBestellungenAnsicht/>} />
          <Route path="/kunde/daten" element={<KundeMeineDatenAnsicht/>} />
          <Route path="/kunde/zahlungen" element={<KundeMeineZahlungenAnsicht/>} />
          <Route path="/kunde/profil" element={<KundeProfilAnsicht/>} />
          
          <Route exact path="/benutzer" element={<VerwaltungBenutzerDashboardAnsicht/>}/>
          <Route path="/benutzer/aktualisieren/:id" element={<VerwaltungBenutzerAktualisierenAnsicht/>} />
          <Route path="/benutzer/geschichte/:id" element={<VerwaltungBenutzerGeschichteAnsicht/>} />
          <Route path="/benutzer/neu" element={<VerwaltungBenutzerNeuAnsicht/>} />
          <Route path="/benutzer/verwalten" element={<VerwaltungBenutzerVerwaltenAnsicht/>} />
        </Routes>
        <AnwendungFooter/>
    </Router>
  );
}

export default App;
