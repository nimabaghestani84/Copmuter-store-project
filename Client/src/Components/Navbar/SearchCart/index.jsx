import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export default function SearchCart({image,title,id}) {
  return( 
    <Link to={`/product-ditail/${id}/${title.replaceAll(" ", "-")}`}>
  <Stack direction={"row"}
  width={'80%'}
  height={'10vh'}
  alignItems={'center'}
  justifyContent={'space-between'}
  >
    <Box
    sx={{
        width:'50%',
        height:'100%',
        bgcolor:'white',
        gap:'10px',
        display:'flex',
        flexDirection:'row'
        }}
        >

<Box component={'img'} 
src={image}
alt={title}
sx={{
    width:'100%',
    height:'100%',
    objectFit:'contain',
    }}/>
</Box>
<Box sx={{width:'250px',height:'100%',display:'flex',direction:'row',alignItems:'center',justifyContent:'start'}}>
<Typography sx={{color:'text.main'}}>{title.slice(0,18)}...</Typography>
</Box>
  </Stack>
</Link>
  )
}
