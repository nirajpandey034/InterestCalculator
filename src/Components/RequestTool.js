import React, { useState, useEffect } from "react";

import { Grid, Container, TextField, Button, Typography } from "@mui/material";

import emailjs from "@emailjs/browser";

import {useNavigate} from 'react-router-dom';

function RequestTool() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [mailSentStatus, setMailSentStatus] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    if (title.length === 0 || description.length === 0)
      setIsButtonDisabled(true);
    else setIsButtonDisabled(false);
  }, [title, description]);

  const handleTitleChange = (e) => {
    let title = e.target.value;
    if (title) setTitle(title);
  };
  const handleDescriptionChange = (e) => {
    let description = e.target.value;
    if (description) setDescription(description);
  };

  const submitRequest = () => {
    const service_id = process.env.REACT_APP_SERVICE_ID;
    const template_id = process.env.REACT_APP_TEMPLATE_ID;
    const public_key = process.env.REACT_APP_PUBLIC_KEY;

    if ((title && title !== "") || (description && description !== "")) {
      emailjs
        .send(
          service_id,
          template_id,
          { tool_title: title, tool_description: description },
          public_key
        )
        .then(
          (result) => {
            setMailSentStatus(true);
            setTimeout(() =>{navigate('/')}, 3000);
          },
          (error) => {
            setMailSentStatus(false);
          }
        );
    }
  };
  return (
    <>
      <Container maxWidth="md">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              id="title"
              variant="outlined"
              placeholder="Title for the tool"
              sx={{ width: { xs: "90vw", sm: "70vw", md: "25rem" } }}
              onChange={(e) => handleTitleChange(e)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="description"
              multiline
              placeholder="Description of the tool"
              rows={5}
              variant="filled"
              sx={{
                width: { xs: "90vw", sm: "70vw", md: "25rem" },
              }}
              onChange={(e) => handleDescriptionChange(e)}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="outlined"
              disabled={isButtonDisabled}
              sx={{
                width: { xs: "80vw", sm: "60vw", md: "20rem" },
                textTransform: "none",
              }}
              onClick={submitRequest}
            >
              Submit Request
            </Button>
          </Grid>
          <Grid item xs={12}>
            {mailSentStatus !== null
              ? [
                  mailSentStatus === true ? (
                    <Typography variant="body1">
                      Request Sent Successfully, Redirecting to home in 3 Seconds..
                    </Typography>
                  ) : (
                    <Typography variant="body1">Request Failed, Please Try Again</Typography>
                  ),
                ]
              : null}
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default RequestTool;
