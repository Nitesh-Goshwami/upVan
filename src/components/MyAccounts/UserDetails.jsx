import {
    Grid,
    TextField,
    Card,
    CardContent,
    Typography,
} from "@material-ui/core";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';


const UserForm = () => {
    return (
        <>
            <div>
                <Grid>
                    <Card
                        style={{
                            maxWidth: "100%",
                            padding: "20px 5px",
                            margin: "auto",
                            border: "none",
                            boxShadow: "1px 2px 1px 2px D3DEDC",
                            marginTop:"20px"
                        }}>
                        <CardContent>
                            <Typography
                                variant="body2"
                                color="textPrimary"
                                component="span" style={{ textAlign: "left" }}>
                                <h2>Peronal Information</h2><br />
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
                                            value={""}
                                        />
                                    </Grid>
                                    <Grid xs={12} sm={6} item>
                                        <TextField
                                            placeholder="Enter last name"
                                            label="Last Name"
                                            variant="outlined"
                                            fullWidth
                                            required
                                            value={""}
                                        />
                                    </Grid>
                                    <FormControl>
                                        <br />
                                        <FormLabel id="demo-row-radio-buttons-group-label" style={{ textAlign: "left", marginBottom: "10px" }}>Gender</FormLabel>
                                        <RadioGroup
                                            row
                                            aria-labelledby="demo-row-radio-buttons-group-label"
                                            name="row-radio-buttons-group" >
                                            <FormControlLabel value="female" control={<Radio size="small" />} label="Female" />
                                            <FormControlLabel value="male" control={<Radio size="small" />} label="Male" />
                                            <FormControlLabel value="other" control={<Radio size="small" />} label="Other" />
                                            {/* <FormControlLabel value="disabled" disabled control={<Radio size="small" />} label="other" /> */}
                                        </RadioGroup><br />
                                    </FormControl>

                                    <Grid item xs={8}>
                                        <Typography
                                            variant="body2"
                                            color="textPrimary"
                                            component="span" style={{ textAlign: "left" }}>
                                            <h2>Email Address</h2><br />
                                        </Typography>
                                        <TextField
                                            type="email"
                                            placeholder="Enter email"
                                            label="Email"
                                            variant="outlined"
                                            fullWidth
                                            required
                                            value={""}
                                        />
                                        <br />
                                    </Grid>
                                    <Grid item xs={8}>
                                        <Typography
                                            variant="body2"
                                            color="textPrimary"
                                            component="span" style={{ textAlign: "left" }}>
                                            <h2 style={{ marginTop: "20px" }}>Mobile Number</h2><br />
                                        </Typography>
                                        <TextField
                                            type="number"
                                            placeholder="Enter mobile number"
                                            label="Mobile"
                                            variant="outlined"
                                            fullWidth
                                            required
                                            value={""}
                                        />
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

export { UserForm };