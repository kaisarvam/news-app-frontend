import React, { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import GoogleIcon from "@mui/icons-material/Google";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useForm } from "react-hook-form";
import useFireBase from "../../Hooks/useFireBase";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";



function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://lucid-bohr-a7a084.netlify.app/">
        Kaisar Sarwar
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function SignUpPage() {
  const navigate = useNavigate();
  const { user, RegisterUser, GoogleSignIn ,error,setError} = useFireBase();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    if (user.email) {
      navigate("/");
    }
    setUserData(user);
  }, [user,navigate]);

  const handleFromSubmit = (data) => {
    const displayName = data.name;
    const email = data.email;
    const password = data.password;
    console.log("found used data :", displayName, email, password);
    RegisterUser(email, password, displayName);
  };

  const notify = () => {
    toast.error(`${error} !!!`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
    setError(null);
  };

  if(error){
    notify();
  }

  return (
    <ThemeProvider theme={theme}>
        <ToastContainer />
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          component={Paper}
          elevation={6}
          square
        >
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign Up For New Account
            </Typography>
            {userData?.displayName && (
              <Typography
                variant="h3"
                sx={{ fontWeight: "bold", margin: "40px" }}
              >
                {userData?.displayName}
              </Typography>
            )}
            <form onSubmit={handleSubmit(handleFromSubmit)}>
              <TextField
                margin="normal"
                fullWidth
                id="name"
                label="Full name"
                name="name"
                autoComplete="name"
                autoFocus
                {...register("name", { required: "Required" })}
                error={!!errors.name}
                helperText={errors?.name ? errors.name.message : null}
              />
              <TextField
                margin="normal"
                fullWidth
                id="email"
                type="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                {...register("email", { required: "Required" })}
                error={!!errors.email}
                helperText={errors?.email ? errors.email.message : null}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                {...register("password", {
                  required: "Required",
                  minLength: 6,
                })}
                error={!!errors.password}
                helperText={errors?.password ? errors.password.message : null}
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign UP
              </Button>
              <Grid container>
                {/* <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid> */}
                <Grid item xs>
                  <Link href="/login" variant="body2">
                    {"Have an account? Log in"}
                  </Link>
                </Grid>
              </Grid>
            </form>

            <Grid container justifyContent="space-around">
              <Grid item sx={{ marginTop: "20px" }}>
                <Button variant="contained" onClick={GoogleSignIn}>
                  {" "}
                  <GoogleIcon
                    sx={{ color: " red", marginRight: "20px" }}
                  />{" "}
                  Signin With Google{" "}
                </Button>
              </Grid>
            </Grid>
            <Copyright sx={{ mt: 5 }} />
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
