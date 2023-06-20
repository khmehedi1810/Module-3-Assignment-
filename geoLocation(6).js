function getlocation(){
    navigator.geolocation.getCurrentPosition((position) => {
        let longitude = position.coords.longitude
        let latitude = position.coords.latitude

        console.log(`Longitude: ${longitude}`)
        console.log(`Latitude: ${latitude}`)
    })
    

    
}

getlocation()