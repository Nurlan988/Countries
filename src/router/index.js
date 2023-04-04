import { Route, Routes } from "react-router-dom";
import { HomePage } from '../pages/HomePage'
import { NotFound } from '../pages/NotFound'
import { Details } from '../pages/Details'


export const RouterMain = ({ countries, setCountries }) => {
  return (
    <>
      <Routes >
        <Route path='/' element={<HomePage countries={countries} setCountries={setCountries} />} />
        <Route path="/country/:name" element={<Details />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
};