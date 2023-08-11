import { NumberOfAttractionsData } from './scenic-spot/NumberOfAttractionsData.js'
import { NumberOfPlacesAccommodationData } from './scenic-spot/NumberOfPlacesAccommodationData.js'
import { RedScenicSpotData } from './scenic-spot/RedScenicSpotData.js'
import { CongestionIndexRankingData } from './scenic-spot/CongestionIndexRankingData.js'
import { ScenicTrafficData } from './scenic-spot/ScenicTrafficData.js'

import { wenbao } from './wenhua/wenbao.js'
import { bowuguan } from './wenhua/bowuguan.js'
import { feiyi } from './wenhua/feiyi.js'
import { MuseumVisitorsData } from './wenhua/MuseumVisitorsData.js'
import { RedRuinsData } from './wenhua/RedRuinsData.js'


import { gongyuan } from './jumin/gongyuan.js'
import { yundong } from './jumin/yundong.js'
import { huodong } from './jumin/huodong.js'
import { changsuo } from './jumin/changsuo.js'

import { HotelDensityData } from './Mechanism/HotelDensityData.js'
import { RevenueData } from './Mechanism/RevenueData.js'
import { ProgramData } from './Mechanism/programData.js'
import { HotelQuantityData } from './Mechanism/HotelQuantityData.js'

const PEOPLE_LIVELIHOOD = {
  NumberOfAttractionsData: NumberOfAttractionsData,
  NumberOfPlacesAccommodationData: NumberOfPlacesAccommodationData,
  CongestionIndexRankingData: CongestionIndexRankingData,
  ScenicTrafficData: ScenicTrafficData,
  RedScenicSpotData: RedScenicSpotData,
  wenbao: wenbao,
  bowuguan: bowuguan,
  feiyi: feiyi,
  gongyuan: gongyuan,
  yundong: yundong,
  huodong: huodong,
  changsuo: changsuo,
  RedRuinsData:RedRuinsData,
  HotelDensityData: HotelDensityData,
  HotelQuantityData: HotelQuantityData,
  RevenueData: RevenueData,
  ProgramData: ProgramData,
  MuseumVisitorsData: MuseumVisitorsData
}

export default PEOPLE_LIVELIHOOD