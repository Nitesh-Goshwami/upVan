import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { MdShoppingBasket, MdManageAccounts, MdAccountBalanceWallet } from 'react-icons/md';
import { FaAddressCard } from 'react-icons/fa';
import styled from "styled-components";

const H4 = styled.h4`
  color: black;
  text-decoration: none;
  font-weight: normal;
  font-family: "Quattrocento", serif;
  margin-top:10px;
  &:hover {
    background-image: url(gardenn.jpeg);
    background-repeat: repeat;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: "Quattrocento", serif;
    -webkit-font-smoothing: antialiased;
  }
`;

export default function ControlledAccordions({ handleClick }) {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div style={{ width: "100%" }}>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header">
                    <div>
                        <Typography component="div" sx={{ width: '100%', flexShrink: 0, cursor: "pointer", }}>
                            <MdShoppingBasket></MdShoppingBasket> &nbsp; My Orders
                        </Typography>
                    </div>
                </AccordionSummary>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header">
                    <div>
                        <Typography component="div" sx={{ width: '100%', flexShrink: 0 }} style={{ marginBottom: "0px" }}>
                            <MdManageAccounts></MdManageAccounts> &nbsp; Account Settings
                        </Typography>
                    </div>

                </AccordionSummary>
                <AccordionDetails>
                    <Typography component="div" sx={{ color: 'text.secondary', textAlign: "left" }} 
                    style={{ marginLeft: "10%" }}>
                        <H4 onClick={() => { handleClick() }}>Personal Information</H4>
                        <H4 >Manage Information</H4>
                        <H4 >PAN Card Informtion</H4>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3bh-content"
                    id="panel3bh-header">
                    <div>
                        <Typography component="div" sx={{ width: '100%', flexShrink: 0 }}>
                            <MdAccountBalanceWallet></MdAccountBalanceWallet> &nbsp; Payments
                        </Typography>
                    </div>

                </AccordionSummary>
                <AccordionDetails>
                    <Typography component="div" sx={{ color: 'text.secondary', marginTop: "0%", textAlign: "left" }}
                        style={{ marginLeft: "10%" }}>
                        <H4 >Gift Cards</H4>
                        <H4  >Saved UPI</H4>
                        <H4 >Saved Cards</H4>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel4bh-content"
                    id="panel4bh-header">
                    <div>
                        <Typography component="div" sx={{ width: '100%', flexShrink: 0 }}>
                            <FaAddressCard></FaAddressCard> &nbsp; My Stuffs
                        </Typography>
                    </div>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography component="div" sx={{ color: 'text.secondary', marginTop: "0%", textAlign: "left" }}
                        style={{ marginLeft: "10%" }}>
                        <H4 >My Coupons</H4>
                        <H4 >My Review & Settings</H4>
                        <H4 >All Notifications </H4>
                        <H4 >My Wishlist </H4>
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}
