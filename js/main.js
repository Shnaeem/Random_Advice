import axios from 'axios';
import dotenv from 'dotenv';
import { async } from 'q';
dotenv.config();


//----------------- API Call for Random Advice ------------------
const BASE_URL = process.env.BASE_URL;
const getTempData = document.getElementById('getTemp')
//const form = document.querySelector('form');

getTempData.addEventListener("click",(e)=>{
    e.preventDefault();
    //let city =cityName.value.toLowerCase()
    let url = `${BASE_URL}/advice`
                //https://api.adviceslip.com/advice

    axios.get(url)
        .then( (response) =>{
       //console.log(response);
            let tempoutput = document.querySelector('.tem');
            tempoutput.innerHTML= `${response.data.slip.advice}`
            // handle success

        })
        .catch( (error)=> {
            // handle error
            let tempoutputError = document.querySelector('.tem');
            tempoutputError.innerHTML= `Click again `
            //console.log(error);
        })
        })


//----------------- API Call for Advice by Searching ------------------


const SearchBar = document.getElementById('srchAdv')
const getTem = document.getElementById('SearchButton')


getTem.addEventListener("click",(e)=>{
    e.preventDefault();
    let SearchInput =SearchBar.value.toLowerCase()
    let url = `${BASE_URL}/advice/search/${SearchInput}`

    axios.get(url)
        .then( (response) =>{
       //console.log(response);
            let searchOutput = document.querySelector('.tem');
            searchOutput.innerHTML= `${response.data.slips[0].advice}`
            // handle success


        })
        .catch( (error)=> {
            // handle error
            let searchOutput = document.querySelector('.tem');
            searchOutput.innerHTML= `Please type another word we do not have advice for this word. `
            //console.log(error);
        })


        })
