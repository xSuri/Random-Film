import React from 'react';
import { useState, useEffect } from 'react';
import './css/style.css';

import { FaReplyAll, FaPlus, FaTrashAlt } from "react-icons/fa";
import { Button } from 'reactstrap';

import { getAllFilms } from "../HomePage/utils/films-api";
import { ModalCard } from "../HomePage/utils/send-film-modal";

import { deleteTitle } from "../HomePage/utils/films-api";

export default function HomePage() {
  const [filmsArr, setFilmsArr] = useState([]);
  const [isHideAddingForm, setIsHideAddingForm] = useState(true);

  useEffect(() => {
    getAllFilms().then(films => setFilmsArr(films));
  }, [filmsArr]  )

  return (
    <>
      {(

        isHideAddingForm ? (

          <>
            <nav>
              <a href="/"> <FaReplyAll className="reply" /> </a>
            </nav>

            <div>

              {
                filmsArr.map(film => (
                  <div className="film" key={film.id}>
                    <p> {film.title} </p>
                    <FaTrashAlt className="trash" onClick={() => deleteTitle(film.id)}/>
                  </div>
                ))
              }

            </div>

            <footer>
              <Button className="close" onClick={() => setIsHideAddingForm(false)}>
                <FaPlus className="plus" />
              </Button>
            </footer>
          </>

        ) : <ModalCard close={(status) => setIsHideAddingForm(status)}/>

        )}

    </>
  );
}
