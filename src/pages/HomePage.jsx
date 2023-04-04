import axios from 'axios';
import { useEffect, useState } from "react";
import { ALL_COUNTRIES } from "../components/config";
import {List} from '../components/List';
import {Card} from '../components/Card';
import { Controls } from "../components/Controls";
import { useNavigate } from 'react-router-dom';


export const HomePage = ({countries, setCountries}) => {
  const [filteredCountries, setFilteredCountries] = useState([...countries]);

  const navigate = useNavigate();

  const handleSearch = (search, region) => {
    let data = [...countries];

    if(region) {
      data = data.filter(country => country.region.includes(region))
    }
    if(search) {
      data = data.filter(country => country?.name.toLowerCase().includes(search.toLowerCase()) || '')
    }
    setFilteredCountries(data)
  }
  
  useEffect(() => {
    if (!filteredCountries.length) {
      axios.get(ALL_COUNTRIES).then(({ data }) => setCountries(data))
    }
    //eslint-disable-next-line
  }, [])
  
  useEffect(() => {
    handleSearch();
    // eslint-disable-next-line
  }, [countries]);

  return(
    <>
      <Controls onSearch={handleSearch} />
      <List>
        {filteredCountries.map((country) => {
          const coutryInfo = {
            img: country.flags.png,
            name: country.name,
            info: [
              {
                title:  'Population',
                description: country.population.toLocaleString()
              },
              {
                title:  'Region',
                description: country.region
              },
              {
                title:  'Capital',
                description: country.capital
              }
            ],
          }
          return(
            <Card 
              key={country.name} 
              onClick={()=> navigate(`/country/${country.name}`)} 
              {...coutryInfo}
            />
          )
        })}
      </List>
    </>
  )
}