import axios from 'axios'
import {POKEDEK_BASE_URL} from '@/Utils/constant'
import{IPokemonListresponse} from '@/interface/PokemonList'


interface IGetPokemonListResponse{
    status:number | undefined
    data:IPokemonListresponse
}
export const pokemonListService={
    
    getPokemonList:async (
        limit?:number,offset?:number
        ):Promise<IGetPokemonListResponse> =>{
       const response= await axios.get(`${POKEDEK_BASE_URL}/pokemon?limit=${limit||151}&offset=${offset||0}`)
       return response
    },
 
}

