/**
                 .
                 .
             .   .
         .
      .
    .
  .
 .
 .

 */

 export const FACET14 = (() => {
    const startAngle = Math.PI * 1.5
    const endAngle = Math.PI
    const n = 12
    const R = 6
    const step = (endAngle - startAngle) / (n - 1)

    const arr = [[0, 0]]
    for (let i = 1; i < n; ++i) {
        arr.push([
            Math.cos(startAngle + (i * step)) * R + R,
            Math.sin(startAngle + (i * step)) * R,
        ])
    }
    arr.push([
        arr[arr.length - 1][0],
        arr[arr.length - 1][1] + 1.5,
    ])
    return {
        type: 'dataFacetPoints',
        name: 'facet11',
        h: 7.5,
        w: 6,
        points: arr,
    }
})()
