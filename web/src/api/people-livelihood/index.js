import { HotelDensityData } from './Mechanism/HotelDensityData.js'
import { NumberOfAttractionsData } from './scenic-spot/NumberOfAttractionsData.js'
import { NumberOfPlacesAccommodationData } from './scenic-spot/NumberOfPlacesAccommodationData.js'
import { CongestionIndexRankingData } from './scenic-spot/CongestionIndexRankingData.js'
import { ScenicTrafficData } from './scenic-spot/ScenicTrafficData.js'
import { wenbao } from './wenhua/wenbao.js'
import { bowuguan } from './wenhua/bowuguan.js'
import { feiyi } from './wenhua/feiyi.js'
import { gongyuan } from './jumin/gongyuan.js'
import { yundong } from './jumin/yundong.js'
import { huodong } from './jumin/huodong.js'
import { changsuo } from './jumin/changsuo.js'

const PEOPLE_LIVELIHOOD = {
  NumberOfAttractionsData: NumberOfAttractionsData,
  NumberOfPlacesAccommodationData: NumberOfPlacesAccommodationData,
  CongestionIndexRankingData: CongestionIndexRankingData,
  ScenicTrafficData: ScenicTrafficData,
  wenbao: wenbao,
  bowuguan: bowuguan,
  feiyi: feiyi,
  gongyuan: gongyuan,
  yundong: yundong,
  huodong: huodong,
  changsuo: changsuo,
  HotelDensityData: HotelDensityData
}

export default PEOPLE_LIVELIHOOD