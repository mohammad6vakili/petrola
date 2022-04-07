export const AD_DATA="AD_DATA";
export const PROFILE="PROFILE";
export const CATEGORY="CATEGORY";
export const FILTER="FILTER";
export const CHECK_FIL="CHECK_FIL";
export const IS_FILTER="IS_FILTER";
export const COMPANY_INFO="COMPANY_INFO";
export const SELECT_FOR_CHAT="SELECT_FOR_CHAT";
export const MY_AD="MY_AD";
export const EDIT_ID="EDIT_ID";


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
export const setCompanyInfo=(data)=>{
    return(
        {
            type:COMPANY_INFO,
            payload:data
        }
    )
}
export const setSelectForChat=(data)=>{
    return(
        {
            type:SELECT_FOR_CHAT,
            payload:data
        }
    )
}
export const setMyAd=(data)=>{
    return(
        {
            type:MY_AD,
            payload:data
        }
    )
}
export const setEditId=(data)=>{
    return(
        {
            type:EDIT_ID,
            payload:data
        }
    )
}