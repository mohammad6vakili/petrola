export const AD_DATA="AD_DATA";
export const PROFILE="PROFILE";
export const CATEGORY="CATEGORY";


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
export const setCategory=(data)=>{
    return(
        {
            type:CATEGORY,
            payload:data
        }
    )
}