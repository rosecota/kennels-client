import { useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom'
import { getAnimals, getAnimalsBySearchTerm } from "../../managers/animals"
import { Animal } from "./Animal"
import "./Animals.css"
import { AnimalSearch } from "./AnimalSearch"

export const AnimalList = () => {

  const [animals, setAnimals] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    if (searchTerm.length > 1) {
      getAnimalsBySearchTerm(searchTerm).then((animalsData) => setAnimals(animalsData))
    } else {
      getAnimals().then((animalsData) => setAnimals(animalsData))
    }
  }, [searchTerm])

  const onSearchTermChange = (value) => {
    setSearchTerm(value)
  }

  return (
    <>
      <h1>Animals</h1>
      <AnimalSearch onSearchTermChange={onSearchTermChange} searchTerm={searchTerm} />
      <div style={{ marginTop: "2rem" }}>
        <button className="btn btn-primary btn-sm" onClick={() => navigate("/animals/create")}>
          Make Reservation
        </button>
        <div className="animals">
          {
            animals.map(animal => <Animal key={animal.id} animal={animal} />)
          }
        </div>
      </div>
    </>
  )
}
