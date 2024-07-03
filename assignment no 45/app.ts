type car = {
    manufacture: string
      [key: string]: any;
 }
    
     function createCar(manufacture: string, model: string, optional: Record<string, any>): car {
         return{
             manufacture,
             model,
            ...optional
         }
     }
    
     const mycar: car = createCar("toyota","corolla", {color: "blue",year: "2024"})
    console.log(mycar)