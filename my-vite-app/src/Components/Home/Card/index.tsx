import { CardContent, Card as MuiCard, Typography } from "@mui/material";
import { ReactElement } from "react";

interface CardProps {
  title: string;
  date: string;
  imageHeight: string;
}

const Card = ({ title, date }: CardProps): ReactElement => {
  return (
    <MuiCard className="mb-4">
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {date}
        </Typography>
        <Typography variant="body1" className="mt-4">
          Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl.
          Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna
          enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non
          congue ullam corper. Praesent tincidunt sed tellus ut rutrum. Sed
          vitae justo condimentum, porta lectus vitae, ultricies congue gravida
          diam non fringilla.
        </Typography>
      </CardContent>
    </MuiCard>
  );
};

export default Card;
