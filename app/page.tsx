'use client';
import {  withAuthenticator } from "@aws-amplify/ui-react";
import awsconfig from "../amplify_outputs.json";
import { Amplify } from "aws-amplify";
import Button from '@mui/material/Button';
import { Box } from "@mui/material";
import { useRouter } from "next/navigation";






Amplify.configure(awsconfig);




function Home({  signOut, user }: any) {
  const route = useRouter();

  const goToAddRoomPage=()=>{
    route.push("/hotel/room/add");
  }

  return (
    <Box sx={{width:"80%",margin:'auto'}}>
      welcome {user.username} <br />
      <Button variant="contained" onClick={goToAddRoomPage}>Go to add room page</Button>
      <br />
      <Button variant="outlined" onClick={signOut}>Sign out</Button>
    </Box>         
  );
}

export default withAuthenticator(Home, {hideSignUp: true});