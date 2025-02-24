export type user={
    name:string
}

export type individualDetail={
    label:string,
    value:string | number
}

export type campaignDetail={
    title:string,
    saved:number,
    calls:number,
    details:individualDetail[]
}