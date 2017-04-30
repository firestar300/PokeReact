var expect = require('expect');

var PokeAPI = require('PokeAPI');

const REQUEST = 'http://pokeapi.co/api/v2/pokemon/';

describe('PokeAPI', () => {
  beforeEach(() => {
    localStorage.removeItem('pokemons');
  });

  it('should exist', () => {
    expect(PokeAPI).toExist();
  });

  describe('setPokemons', () => {
    it('should set all pokemons on localStorage', (done) => {
      PokeAPI.setAll().then(result => {
        expect(JSON.stringify(result)).toEqual(localStorage.getItem('pokemons'));
        done();
      });
    });
  });

  describe('getPokemons', () => {
    it('should return empty array for bad localStorage data', () => {
      var actualPokemons = PokeAPI.getAll();

      expect(actualPokemons).toEqual([]);
    });

    it('should return pokemons if valid array in localStorage', (done) => {
      PokeAPI.setAll().then(() => {
        var actualPokemons = PokeAPI.getAll();
        expect(actualPokemons).toEqual(JSON.parse(localStorage.getItem('pokemons')));
        done();
      });
    });
  });

  describe('suggests', () => {
    it('should filter pokemons by searchText', (done) => {
      PokeAPI.setAll().then(() => {
        var filteredPkmns = PokeAPI.suggest('Charizard');
        expect(filteredPkmns.length).toBe(3);
        done();
      });
    });

    it('should return nothing if searchText is empty', (done) => {
      PokeAPI.setAll().then(() => {
        var filteredPkmns = PokeAPI.suggest('');
        expect(filteredPkmns.length).toBe(0);
        done();
      });
    });
  });
});
