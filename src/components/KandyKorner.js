import React from "react"
import { LocationList } from "./locations/LocationList"
import { LocationProvider } from "./locations/LocationProvider"
import "./Kandy.css"

export const KandyKorner = () => (
    <>
        <h2>Kandy Korner</h2>
        <small>Diabeetus for all.</small>

        <h2>Locations</h2>
        <LocationProvider>
            <LocationList />
        </LocationProvider>
    </>
)