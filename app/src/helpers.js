/**
 *  Average of every numeric property
 * @param {array} tracks 
 */
export const averagePerObjectProperty = (tracks) => {
    const all = tracks.reduce((taste, track) => {
        Object.keys(track).forEach(key => {
            if(typeof track[key] !== 'number' || key === 'id') return //skip non numeric properties and id
            if(!taste[key]){
                taste[key] = track[key]
            }else{
                taste[key] = taste[key] + track[key]
            }
        })
        return taste
    }, {})

    Object.keys(all).forEach(key => {
        all[key] = all[key]/tracks.length 
    })
    return all
}