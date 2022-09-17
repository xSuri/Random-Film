import React from 'react';
import { useState, useEffect } from 'react';

import { Card } from '@mui/material';
import { FaRegCheckCircle, FaRegTimesCircle } from "react-icons/fa";
import { Typography, CardContent } from '@mui/material';
import { Input, Button } from 'reactstrap';

import { postNewFilmTitle } from './films-api';

export function ModalCard({close = (status) => status}) {

  const [message, setMessage] = useState('');

  return (
    <Card className="modal" variant="outlined">
        <Button className="close">
          <FaRegTimesCircle className="close" onClick={() => close(true)}/>
        </Button>

        <CardContent className="card">

          <Typography sx={{fontSize: 30}} gutterBottom>
            Dodaj nowy film
          </Typography>

          <Typography variant="body2">

            <Input className="input" value={message} onChange={(text) => setMessage(text.target.value)}/>
            <Button className="check">
              <FaRegCheckCircle className="check" onClick={() => {
                if(message !== '' && message !== undefined && message !== null){
                  postNewFilmTitle(message);
                  close(true);
                }
              }}/>
            </Button>

          </Typography>

        </CardContent>
      </Card>
  )
}
