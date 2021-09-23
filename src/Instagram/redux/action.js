function AddinLikes(item){
    return {
        type:'AddinLikes',
        payload: item
    }
}
function RemovetoLikes(item){
    return {
        type: 'RemovetoLikes',
        payload: item
    }
}

export {AddinLikes, RemovetoLikes};