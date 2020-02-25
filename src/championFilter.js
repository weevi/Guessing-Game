import ChampionsData from './champions.json'

export function championFilter(){
      const keys = Object.keys(ChampionsData)
        const randomKey = Math.floor(Math.random() * keys.length)
        const champObject = ChampionsData[randomKey]
        const champData = [];
        Object.keys(champObject).forEach(key => champData.push({name: key, value: champObject[key]}))
        return champData;
      }

      export default championFilter
      