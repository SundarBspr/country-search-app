export type dataType={
    name:string,
    population:number,
    region:string,
    capital:string,
    image:string,
}
export type countryListprop={
    props:{
        countries:dataType[]
    }
}
export type countryCardprop={
    props:{
        country:dataType
    }
}