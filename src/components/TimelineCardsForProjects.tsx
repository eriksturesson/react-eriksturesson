
import { createTheme } from '@mui/material/styles';

import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import powershellLogo from './img/powershell-logo.png';
import databaseImg from './img/database.png';
import schemalaggningsAppImage from './img/schemalaggningsapp.png';
import rotarywebsida from './img/rotarywebsida.png';
import typescriptLogo from './img/typescript-logo.png';
import nodejsLogo from './img/nodejs-logo.png';
import DataObjectIcon from '@mui/icons-material/DataObject';
import StorageIcon from '@mui/icons-material/Storage';
import JavascriptIcon from '@mui/icons-material/Javascript';
import HtmlIcon from '@mui/icons-material/Html';
import CssIcon from '@mui/icons-material/Css';
import LaptopIcon from '@mui/icons-material/Laptop';
import ScheduleIcon from '@mui/icons-material/Schedule';

export function CardPowershell() {
    return (
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="100%"
            image={powershellLogo}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Powershell
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lärde mig powershellscript för att exemeplvis lätt komma in i rätt projekt och undermappar med egna "erikcd" commandon, "erikrun" som kör olika program och "erikopen" för att öppna olika projekt från rätt directories.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }
  
  
  export function CardGDPR() {
    return (
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="100%"
            image={databaseImg}
            alt="GDPR-script i Powershell"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              GDPR-script i Powershell
            </Typography>
            <Typography variant="body2" color="text.secondary">
             Skapade ett program som går igenom samtliga filer (säkerhetskopior i mitt fall), gick igenom alla rader och identifierade en sträng som skulle tas bort och då raderades alla rader med detta.
             </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }
  
  export function CardRotaryWebsite() {
    return (
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="100%"
            image={powershellLogo}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Typescript
            </Typography>
            <Typography variant="body2" color="text.secondary">
             Lärde mig typescript för att i organisationen minska antalet framtida buggar och göra det enklare att få en överblick på koden. 
             </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }
  
  export function CardMatchingAlgo() {
    return (
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="100%"
            image={powershellLogo}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Typescript
            </Typography>
            <Typography variant="body2" color="text.secondary">
             Lärde mig typescript för att i organisationen minska antalet framtida buggar och göra det enklare att få en överblick på koden. 
             </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }
  
  export function CardTypescript() {
    return (
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="100%"
            image={powershellLogo}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Typescript
            </Typography>
            <Typography variant="body2" color="text.secondary">
             Lärde mig typescript för att i organisationen minska antalet framtida buggar och göra det enklare att få en överblick på koden. 
             </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }
  
  export function CardSchemalaggningsapp() {
    return (
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="100%"
            image={schemalaggningsAppImage}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Typescript
            </Typography>
            <Typography variant="body2" color="text.secondary">
             Lärde mig typescript för att i organisationen minska antalet framtida buggar och göra det enklare att få en överblick på koden. 
             </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }