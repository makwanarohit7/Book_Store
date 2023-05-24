import { Breadcrumbs, Button, Divider, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import { TextField } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Searchbar from "../Components/Searchbar";

function Login() {
  const breadcrumbs = [
    <Link to={"/"} underline="hover" key="1" color="inherit" href="/">
      Home
    </Link>,

    <Typography key="2" color={{ color: "#f14d54" }}>
      Login
    </Typography>,
  ];
  return (
    <div className="flex-1 ">
      <Header />
      <Searchbar />
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
        sx={{
          display: "flex",
          marginTop: "50px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {breadcrumbs}
      </Breadcrumbs>
      <Typography
        variant="h4"
        sx={{
          display: "flex",
          marginTop: "50px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Login or Create an Account
      </Typography>
      <div className="flex items-center justify-center m-6">
        <div className="border-t-2 border-[#f14d54] w-32"></div>
      </div>
      <div className="grid grid-cols-2 gap-36 mt-12 ">
        <div className="ml-40">
          <Typography variant="h6">New Customer</Typography>
          <Divider
            sx={{
              marginTop: "20px",
            }}
          />
          <Typography variant="body2" sx={{ marginTop: "20px" }}>
            Reagine
          </Typography>
        </div>
        <div>
          <Typography variant="h6">Ragistered Customers</Typography>
          <Divider
            sx={{
              marginTop: "20px",
              marginRight: "160px",
            }}
          />
          <Typography variant="body2" sx={{ marginTop: "20px" }}>
            Please enter the following information to create your account
          </Typography>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Login;
