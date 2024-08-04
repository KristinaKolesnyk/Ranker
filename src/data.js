/*export const itemsByCategory = {
    "Movies": [
        {
            id: 1,
            name: 'Inception',
            criterions: [9, 9, 9, 8], // Special Effects, Cultural Impact, Entertainment Value, Technical Aspects
            URL: 'https://www.imdb.com/title/tt1375666/',
            rating: 8.8
        },
        {
            id: 2,
            name: 'The Matrix',
            criterions: [9, 9, 9, 9],
            URL: 'https://www.imdb.com/title/tt0133093/',
            rating: 9.0
        },
        {
            id: 3,
            name: 'Interstellar',
            criterions: [9, 8, 9, 9],
            URL: 'https://www.imdb.com/title/tt0816692/',
            rating: 8.8
        },
        {
            id: 4,
            name: 'The Dark Knight',
            criterions: [9, 9, 9, 9],
            URL: 'https://www.imdb.com/title/tt0468569/',
            rating: 9.0
        },
        {
            id: 5,
            name: 'Pulp Fiction',
            criterions: [8, 9, 9, 8],
            URL: 'https://www.imdb.com/title/tt0110912/',
            rating: 8.5
        },
        {
            id: 6,
            name: 'The Shawshank Redemption',
            criterions: [8, 9, 9, 9],
            URL: 'https://www.imdb.com/title/tt0111161/',
            rating: 8.8
        },
        {
            id: 7,
            name: 'The Godfather',
            criterions: [9, 9, 9, 9],
            URL: 'https://www.imdb.com/title/tt0068646/',
            rating: 9.0
        }
    ],
    "Favorite Food": [
        {
            id: 1,
            name: 'Pizza',
            criterions: [9, 9, 6, 7], // Taste, Appearance, Nutritional Value, Price
            URL: 'https://www.allrecipes.com/recipe/22180/pizza/',
            rating: 7.8
        },
        {
            id: 2,
            name: 'Sushi',
            criterions: [9, 8, 6, 7],
            URL: 'https://www.allrecipes.com/recipe/24239/sushi-roll/',
            rating: 7.5
        },
        {
            id: 3,
            name: 'Burger',
            criterions: [8, 8, 5, 6],
            URL: 'https://www.allrecipes.com/recipe/25473/the-perfect-basic-burger/',
            rating: 6.8
        },
        {
            id: 4,
            name: 'Pasta',
            criterions: [8, 8, 6, 7],
            URL: 'https://www.allrecipes.com/recipe/12089/good-ol-fashioned-pancakes/',
            rating: 7.3
        },
        {
            id: 5,
            name: 'Steak',
            criterions: [9, 9, 6, 8],
            URL: 'https://www.allrecipes.com/recipe/30522/marinated-flank-steak/',
            rating: 8.0
        }
    ],
    "Lovely Pets": [
        {
            id: 1,
            name: 'Dog',
            criterions: [9, 6, 7, 9], // Affection, Maintenance, Lifespan, Compatibility
            URL: 'https://www.akc.org/dog-breeds/',
            rating: 7.8
        },
        {
            id: 2,
            name: 'Cat',
            criterions: [8, 6, 7, 9],
            URL: 'https://www.cfa.org/Breeds',
            rating: 7.5
        },
        {
            id: 3,
            name: 'Parrot',
            criterions: [7, 6, 6, 7],
            URL: 'https://lafeber.com/pet-birds/breed/',
            rating: 6.5
        },
        {
            id: 4,
            name: 'Hamster',
            criterions: [6, 5, 5, 6],
            URL: 'https://www.rspca.org.uk/adviceandwelfare/pets/rodents/hamsters',
            rating: 5.5
        },
        {
            id: 5,
            name: 'Fish',
            criterions: [5, 5, 3, 5],
            URL: 'https://www.petmd.com/fish',
            rating: 4.5
        }
    ],
    "Cool Cars": [
        {
            id: 1,
            name: 'Tesla Model S',
            criterions: [9, 9, 9, 8], // Performance, Design, Comfort, Fuel Efficiency
            URL: 'https://www.tesla.com/models',
            rating: 8.8
        },
        {
            id: 2,
            name: 'BMW M3',
            criterions: [9, 8, 8, 7],
            URL: 'https://www.bmwusa.com/vehicles/m-models/m3.html',
            rating: 8.0
        },
        {
            id: 3,
            name: 'Audi R8',
            criterions: [9, 8, 7, 7],
            URL: 'https://www.audiusa.com/us/web/en/models/r8/r8-coupe/2022/overview.html',
            rating: 7.8
        },
        {
            id: 4,
            name: 'Mercedes-Benz S-Class',
            criterions: [9, 9, 9, 8],
            URL: 'https://www.mbusa.com/en/vehicles/class/s-class/sedan',
            rating: 8.8
        },
        {
            id: 5,
            name: 'Porsche 911',
            criterions: [9, 9, 8, 7],
            URL: 'https://www.porsche.com/usa/models/911/',
            rating: 8.3
        }
    ],
    "Best Games": [
        {
            id: 1,
            name: 'The Witcher 3',
            criterions: [9, 9, 9, 9], // Graphics, Gameplay, Storyline, Replay Value
            URL: 'https://thewitcher.com/en/witcher3',
            rating: 9.0
        },
        {
            id: 2,
            name: 'Cyberpunk 2077',
            criterions: [8, 7, 7, 7],
            URL: 'https://www.cyberpunk.net/',
            rating: 7.3
        },
        {
            id: 3,
            name: 'Red Dead Redemption 2',
            criterions: [9, 9, 9, 9],
            URL: 'https://www.rockstargames.com/reddeadredemption2/',
            rating: 9.0
        },
        {
            id: 4,
            name: 'GTA V',
            criterions: [8, 9, 9, 9],
            URL: 'https://www.rockstargames.com/V/',
            rating: 8.8
        },
        {
            id: 5,
            name: 'The Legend of Zelda',
            criterions: [9, 9, 9, 9],
            URL: 'https://www.zelda.com/',
            rating: 9.0
        }
    ],
    "Actors": [
        {
            id: 1,
            name: 'Leonardo DiCaprio',
            criterions: [9, 9, 9, 9], // Acting Skills, Charisma, Versatility, Popularity
            URL: 'https://www.imdb.com/name/nm0000138/',
            rating: 9.0
        },
        {
            id: 2,
            name: 'Johnny Depp',
            criterions: [9, 9, 9, 9],
            URL: 'https://www.imdb.com/name/nm0000136/',
            rating: 9.0
        },
        {
            id: 3,
            name: 'Robert Downey Jr.',
            criterions: [9, 9, 9, 9],
            URL: 'https://www.imdb.com/name/nm0000375/',
            rating: 9.0
        },
        {
            id: 4,
            name: 'Scarlett Johansson',
            criterions: [9, 9, 9, 9],
            URL: 'https://www.imdb.com/name/nm0424060/',
            rating: 9.0
        },
        {
            id: 5,
            name: 'Jennifer Lawrence',
            criterions: [9, 9, 8, 9],
            URL: 'https://www.imdb.com/name/nm2225369/',
            rating: 8.8
        }
    ]
};


export const criteriaByCategory = {
    "Movies": ["Special Effects", "Cultural Impact", "Entertainment Value", "Technical Aspects"],
    "Favorite Food": ["Taste", "Appearance", "Nutritional Value", "Price"],
    "Lovely Pets": ["Affection", "Maintenance", "Lifespan", "Compatibility"],
    "Cool Cars": ["Performance", "Design", "Comfort", "Fuel Efficiency"],
    "Best Games": ["Graphics", "Gameplay", "Storyline", "Replay Value"],
    "Actors": ["Acting Skills", "Charisma", "Versatility", "Popularity"]
};
*/