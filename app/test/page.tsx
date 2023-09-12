"use client";
import React from 'react'

export default async function page() {
 var formdata = new FormData()
 formdata.append('user_prompt', 'what does must offer')

 var requestOptions = {
   method: 'POST',
   body: formdata,

 }

 await fetch('http://127.0.0.1:5110/api/prompt_route', requestOptions)
   .then(response => response.text())
   .then(result => console.log(result))
   .catch(error => console.log('error', error))

  return <div>data</div>
}
