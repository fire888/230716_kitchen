/**
    
   .                         .
   .                         .  
   .                         .
        .                .
            .        .
                 .
 */

export const FACET33 = (() => {
    const arr = [
        [0, 0],
        [0, -1],
        [1, -1],
        [14, -9],
        [29, -9],
        [39, -1],
        [41, -1],
        [41, 0],
    ]

    return {
        type: 'dataFacetPoints',
        name: 'facet33',
        h: 9,
        w: 41,
        points: arr,
    }
})()
