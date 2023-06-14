const response = {
    "data": {
      "pokemon_v2_pokemonitem": [
        {
          "pokemon_id": 12,
          "item_id": 199,
          "id": 1
        },
        { 
          "pokemon_id": 12,
          "item_id": 199,
          "id": 2
        },
        {
          "pokemon_id": 12,
          "item_id": 199,
          "id": 3
        },
        {
          "pokemon_id": 12,
          "item_id": 199,
          "id": 4
        },
        {
          "pokemon_id": 12,
          "item_id": 199,
          "id": 5
        },
        {
          "pokemon_id": 12,
          "item_id": 199,
          "id": 6
        },
        {
          "pokemon_id": 12,
          "item_id": 199,
          "id": 7
        },
        {
          "pokemon_id": 12,
          "item_id": 199,
          "id": 8
        },
        {
          "pokemon_id": 12,
          "item_id": 199,
          "id": 9
        },
        {
          "pokemon_id": 12,
          "item_id": 199,
          "id": 10
        }
      ]
    }
  };

  
  test('Pokemon item response is correct', () => {
    expect(response.data.pokemon_v2_pokemonitem).toHaveLength(10);
  
    response.data.pokemon_v2_pokemonitem.forEach((item, index) => {
      expect(typeof item.pokemon_id).toBe('number');
      expect(typeof item.item_id).toBe('number');
      expect(typeof item.id).toBe('number');
      //
      //
      expect(item.id).toBe(index + 1);
    });
  });
    