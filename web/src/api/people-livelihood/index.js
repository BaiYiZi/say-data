import { NumberOfAttractionsData } from './scenic-spot/NumberOfAttractionsData.js'
import { NumberOfPlacesAccommodationData } from './scenic-spot/NumberOfPlacesAccommodationData.js'

import { HotelDensityData } from './Mechanism/HotelDensityData.js'
import { RevenueData } from './Mechanism/RevenueData.js'
import { ProgramData } from './Mechanism/programData.js'
import { HotelQuantityData } from './Mechanism/HotelQuantityData.js'

const PEOPLE_LIVELIHOOD = {
  NumberOfAttractionsData: NumberOfAttractionsData,
  NumberOfPlacesAccommodationData: NumberOfPlacesAccommodationData,

  HotelDensityData: HotelDensityData,
  HotelQuantityData: HotelQuantityData,
  RevenueData: RevenueData,
  ProgramData: ProgramData
}

export default PEOPLE_LIVELIHOOD