import React from 'react';
import { useState, useEffect } from 'react';
import './css/style.css';
import './css/loader.css';

import { Button } from 'reactstrap';
import { RandomReveal } from 'react-random-reveal'

import { getRandomFilm } from "./utils/films-api";
import { ModalCard } from "./utils/send-film-modal"

export default function HomePage() {
  const [filmTitle, setFilmTitle] = useState('');
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHideAddingForm, setIsHideAddingForm] = useState(true);

  return (
    <>
      {
        (
          isHideAddingForm ? (
            <div>

              <div className="hrefs">

                <div>
                  <Button className="addNewFilm" onClick={() => setIsHideAddingForm(false)}>
                    Dodaj Nowy Film
                  </Button>
                </div>

                <div>
                  <a href="/films">Wyświetl wszystkie tytuły</a>
                </div>

              </div>

              <Button className="hideBackground" onClick={() => {
                  setIsPlaying(false);
                  getRandomFilm().then(res => {
                    setFilmTitle(res.title);
                    setIsPlaying(true);
                  });

              }}>
                {(
                  isPlaying ? (
                  <div>
                    <RandomReveal isPlaying={isPlaying} duration={3} characters={filmTitle} />
                  </div>) : 'Losuj'
                )}
              </Button>

            </div>
          ) : <ModalCard close={(status) => setIsHideAddingForm(status)}/>
        )
      }
    </>
  );
}
