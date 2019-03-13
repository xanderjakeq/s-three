import React from 'react'
import {ResponsiveRadar} from '@nivo/radar'

/**
 * Takes array of Audio features as props
 */
export default (props) => {
    console.log(props)
    if(!props.expandedTrack){
        return null
    }

    return(
        <div style= {{width: '350px', height:'350px', margin: '0 auto' }}>
                <ResponsiveRadar
                    data={[
                    {
                        "feature": "acousticness",
                        [props.expandedTrack.name]: props.audioFeatures[0].acousticness,
                        "you": .51,
                    },
                    {
                        "feature": "danceability",
                        [props.expandedTrack.name]: props.audioFeatures[0].danceability,
                        "you": .72,
                    },
                    {
                        "feature": "duration_ms",
                        [props.expandedTrack.name]: props.audioFeatures[0].duration_ms/316600,
                        "you": .116,
                    },
                    {
                        "feature": "energy",
                        [props.expandedTrack.name]: props.audioFeatures[0].energy,
                        "you": .106,
                    },
                    // {
                    //     "feature": "instrumentalness",
                    //     [props.expandedTrack.name]: props.audioFeatures[0].instrumentalness,
                    //     "you": .61,
                    // },
                    // {
                    //     "feature": "key",
                    //     [props.expandedTrack.name]: props.audioFeatures[0].key/11,
                    //     "you": .61,
                    // },
                    {
                        "feature": "liveness",
                        [props.expandedTrack.name]: props.audioFeatures[0].liveness * 2,
                        "you": .61,
                    },
                    // {
                    //     "feature": "mode",
                    //     [props.expandedTrack.name]: props.audioFeatures[0].mode,
                    //     "you": .61,
                    // },
                    // {
                    //     "feature": "speechiness",
                    //     [props.expandedTrack.name]: props.audioFeatures[0].speechiness,
                    //     "you": .61,
                    // },
                    {
                        "feature": "tempo",
                        [props.expandedTrack.name]: props.audioFeatures[0].tempo/250,
                        "you": .61,
                    },
                    {
                        "feature": "time_signature",
                        [props.expandedTrack.name]: props.audioFeatures[0].time_signature/5,
                        "you": .61,
                    },
                    {
                        "feature": "valence",
                        [props.expandedTrack.name]: props.audioFeatures[0].valence,
                        "you": .61,
                    }
                    ]}
                    keys={[
                        props.expandedTrack.name,
                        "you",
                    ]}
                    indexBy="feature"
                    maxValue="auto"
                    margin={{
                        "top": 70,
                        "right": 80,
                        "bottom": 40,
                        "left": 80
                    }}
                    curve="catmullRomClosed"
                    borderWidth={2}
                    borderColor="inherit"
                    gridLevels={5}
                    gridShape="circular"
                    gridLabelOffset={20}
                    enableDots={true}
                    dotSize={8}
                    dotColor="inherit"
                    dotBorderWidth={0}
                    dotBorderColor="#ffffff"
                    // enableDotLabel={true}
                    dotLabel="value"
                    dotLabelYOffset={-12}
                    colors="nivo"
                    colorBy="key"
                    fillOpacity={0.1}
                    animate={true}
                    motionStiffness={90}
                    motionDamping={15}
                    isInteractive={true}
                    legends={[
                        {
                            "anchor": "top-left",
                            "direction": "column",
                            "translateX": -50,
                            "translateY": -40,
                            "itemWidth": 80,
                            "itemHeight": 20,
                            "itemTextColor": "#999",
                            "symbolSize": 12,
                            "symbolShape": "circle",
                            "effects": [
                                {
                                    "on": "hover",
                                    "style": {
                                        "itemTextColor": "#000"
                                    }
                                }
                            ]
                        }
                    ]}
                />
        </div>
    )
}