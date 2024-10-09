const reducer = (count,action) => {

    switch(action.type){
        case "inc":
            return(count += 1);

        case "dec":
           let  newCount = 0; 
           count >= 1? (newCount = count -1) : (newCount = 0)
            return newCount

        default:
        return count;
       
    }
}

export default reducer