export const AD_DATA="AD_DATA";
export const PROFILE="PROFILE";
export const CATEGORY="CATEGORY";
export const FILTER="FILTER";
export const CHECK_FIL="CHECK_FIL";
export const IS_FILTER="IS_FILTER";


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
export const setFilter=(data)=>{
    return(
        {
            type:FILTER,
            payload:data
        }
    )
}
export const setCheckFil=(data)=>{
    return(
        {
            type:CHECK_FIL,
            payload:data
        }
    )
}
export const setIsFilter=(data)=>{
    return(
        {
            type:IS_FILTER,
            payload:data
        }
    )
}