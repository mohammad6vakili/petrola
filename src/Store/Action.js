export const SIDE="SIDE";
export const AD_DATA="AD_DATA";
export const PROFILE="PROFILE";


export const setSide=(data)=>{
    return(
        {
            type:SIDE,
            payload:data
        }
    )
}
export const setAdData=(data)=>{
    return(
        {
            type:AD_DATA,
            payload:data
        }
    )
}
export const setProfile=(data)=>{
    return(
        {
            type:PROFILE,
            payload:data
        }
    )
}