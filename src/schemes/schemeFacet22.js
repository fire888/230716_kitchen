/**
    
   .                         .
   .                         .  
   .                         .
        .                .
            .        .
                 .
 */

 export const FACET22 = (() => {
    const arr = [
        [0, 0],
        [0, -1],
        [13,-9],
        [26, -1],
        [26, 0]
    ]
    
    return {
        type: 'dataFacetPoints',
        name: 'facet22',
        h: 9,
        w: 26,
        points: arr,
    }
})()
