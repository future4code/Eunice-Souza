import React, { useState, useEffect } from 'react';
import { HomeProfile, Profile, ProfileImage } from './styled';
import axios from 'axios';



export const HomePage = () => {
    const [Profile, setProfile] = useState("Profile")

    const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/eunice-jesus-lovelace/person"
    useEffect(() => {
        getProfile(Profile)
    })

    const getProfile = () => {
        axios.get(url)
            .then((res) => {
                setProfile(res.data)
            })
            .cath((err) => {
                setProfile(err.response)
            })

        const setProfile = () => {
            setState = ('Profile')

        }

    }

    return (
        <div>
            <Profile>
                <ProfileImage src={profile.phofo} />
                <h2>{profile.name}</h2>
                <p>{profile.bio}, {profile.age}</p>
                <div>
                    <button onClick={chengeChoose}>yes</button>
                    <button onClick={chengeChoose}>not</button>
                </div>
            </Profile>
        </div>
    )
}



