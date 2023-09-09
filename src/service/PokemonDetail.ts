import axios from 'axios'
import {POKEDEK_BASE_URL} from '@/Utils/constant'
import{IPokemonDetailresponse} from '@/interface/PokemonDetail'


interface IGetPokemonDetailResponse{
    status:number | undefined
    data:IPokemonDetailresponse
}
export const pokemonDetailService={
    
    getPokemonDetail:async (
        name:string,
    
        ):Promise<IGetPokemonDetailResponse> =>{
       const response= await axios.get(`${POKEDEK_BASE_URL}/pokemon/${name}`)
       return response
    },
 
}

