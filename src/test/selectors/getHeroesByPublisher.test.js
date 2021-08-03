import { heroes } from '../../data/heroes';
import {getHeroesById} from '../../selectors/getHeroesById'
import React from 'react'

describe('',()=>{
    test(' id debe retornar falso al escribir otro',()=>{
        const id='dc-batman';
        const personaje=getHeroesById(id)
       const heroData= personaje.find((h)=>h.id===id)
       expect(heroData).toBe('string')
})
})