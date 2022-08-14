import {
  Grid,
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
} from "@material-ui/core";
import gsap from "gsap";
import { useRef, useEffect, useState } from "react";
import { Heading } from "../PlantCollection";

const ContactForm = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    var details = {
      firstName: fname,
      lastName: lname,
      email: email,
      phone: phone,
      message: message,
    };
    console.log(details);
  };

  const formRef = useRef();
  useEffect(() => {
    gsap.from(formRef.current, {
      
      opacity: 0,
      duration: 1.1,
      delay: 0.3,

    });

    return () => {};
  }, []);
  return (
    <>
      <div ref={formRef}>
        <Grid>
          <Card
            style={{
              maxWidth: 450,
              padding: "20px 5px",
              margin: "20px auto",
              border: "none",
              boxShadow: "none",
            }}
          >
            <CardContent>
              <Heading>Contact Us</Heading>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                gutterBottom
              >
                Fill up the form and our team will get back to you within 24
                hours.
              </Typography>
              <form>
                <Grid container spacing={1}>
                  <Grid xs={12} sm={6} item>
                    <TextField
                      placeholder="Enter first name"
                      label="First Name"
                      variant="outlined"
                      fullWidth
                      required
                      value={fname}
                      onChange={(e) => setFname(e.target.value)}
                    />
                  </Grid>
                  <Grid xs={12} sm={6} item>
                    <TextField
                      placeholder="Enter last name"
                      label="Last Name"
                      variant="outlined"
                      fullWidth
                      required
                      value={lname}
                      onChange={(e) => setLname(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      type="email"
                      placeholder="Enter email"
                      label="Email"
                      variant="outlined"
                      fullWidth
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      type="number"
                      placeholder="Enter phone number"
                      label="Phone"
                      variant="outlined"
                      fullWidth
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="Message"
                      multiline
                      rows={4}
                      placeholder="Type your message here"
                      variant="outlined"
                      fullWidth
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      fullWidth
                      onClick={handleClick}
                    >
                      Submit
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </CardContent>
          </Card>
        </Grid>
      </div>
    </>
  );
};

export { ContactForm };
