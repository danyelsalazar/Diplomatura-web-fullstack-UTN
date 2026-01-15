const fetchFruitData = async () => {
    try{
        const response = await fetch("https://wizard-world-api.herokuapp.com/spells")
        const data = await response.json()
        console.log(data);
        
        data.forEach(posima => {
            console.log(posima.name);
            
        });
    }
    catch(e){
        console.log(e);
        
    }
}
fetchFruitData()