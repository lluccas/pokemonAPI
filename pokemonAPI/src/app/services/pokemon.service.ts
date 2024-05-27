import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private apiUrl = 'https://pokeapi.co/api/v2';

  async getPokemons(limit: number, offset: number) {
    const response = await axios.get(`${this.apiUrl}/pokemon?limit=${limit}&offset=${offset}`);
    return response.data.results;
  }

  async getPokemonDetails(name: string) {
    const response = await axios.get(`${this.apiUrl}/pokemon/${name}`);
    return response.data;
  }
}
