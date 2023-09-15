import React from 'react'
import Layout from '../components/Layout/Layout'
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import MailIcon from '@mui/icons-material/Mail';
import CallIcon from '@mui/icons-material/Call';
import { Box,
   Table, 
   TableContainer,
    TableHead, 
    TableRow,
    TableCell, 
      Paper, 
      TableBody} from '@mui/material'

const Contact = () => {
  return (
    <Layout>
     <Box sx={{ my: 5, ml: 10, "& h4": { fontWeight: "bold", mb: 2 } }}>
      <h1 className='heading'>
        Contact My Resturant.
      </h1>
      <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem odio
          beatae ducimus magni nobis culpa praesentium velit expedita quae,
          corrupti, pariatur inventore laboriosam consectetur modi impedit
          error, repudiandae obcaecati doloribus.
      </p>
     </Box> 
     <Box sx={{ m: 3, 
     width: "600px" ,
      ml:10, 
      "@media (max-width:600px)":{
      width:"300px",

     },
     }}
     >
     <TableContainer component={Paper}>
      <Table aria-label="contact table">
        <TableHead>
        <TableRow>
        <TableCell sx={{ bgcolor: "black", color: "white"}}
        align='center'
        >
          Contact Details
        </TableCell>
       

        </TableRow>

        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>
           <SupportAgentIcon sx={{color: "red", pt: 1}}/> 18002345679 (Toll Free)

            </TableCell>
           </TableRow>
           <TableRow>
           <TableCell>
            
           <MailIcon sx={{color: "skyblue", pt: 1}}/> help@myrest.com
           </TableCell>
           </TableRow>
            
            <TableRow>
           
           <TableRow>
            <CallIcon sx={{color:"green", pt: 1}}/> 1234567890
           </TableRow>
          </TableRow>
        </TableBody>
      </Table>
     </TableContainer>
     </Box>
    </Layout>
    
  )
}

export default Contact
