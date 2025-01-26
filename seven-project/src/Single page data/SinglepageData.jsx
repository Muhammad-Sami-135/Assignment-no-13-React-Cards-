import React from "react";
import { useParams } from "react-router-dom";
import { productData } from "../Data/Data";
import { Card } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";

export const SinglepageData = () => {
  const { id } = useParams();

  const pro = productData.filter((e, i) => {
    return id == e.id;
  });

  console.log(pro);

  return (
    <>
      <div>
        {pro.map((e, i) => {
          return (
            <Card
              sx={{
                width: "70%",
                textAlign: "center",
                boxShadow: "0 0 10px black",
                margin: "50px auto",
                borderRadius: "10px",
                padding: "20px",
              }}
            >
              <CardActionArea>
                <CardMedia
                  style={{ width: "35%", margin: "0 auto" }}
                  component="img"
                  image={e.image}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h4"
                    component="div"
                    style={{ fontWeight: "bold" }}
                  >
                    {e.title}
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    style={{ fontWeight: "bold" }}
                  >
                    Price : {e.price}/-
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ color: "text.secondary", textAlign: "justify" }}
                  >
                    {e.description}
                  </Typography>
                  <Typography variant="body1" sx={{ color: "text.secondary" }}>
                    <h4>Rating : {e.rating.rate}</h4>
                    <h4>Count : {e.rating.count}</h4>
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  style={{
                    backgroundColor: "black",
                    padding: "5px 8px",
                    color: "white",
                  }}
                  size="large"
                  color="primary"
                  onClick={() => {
                    history.back();
                  }}
                >
                  Back
                </Button>
              </CardActions>
            </Card>
          );
        })}
      </div>
    </>
  );
};
