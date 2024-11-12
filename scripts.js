// Asegúrate de que WebNN está disponible en el navegador                                                         
if ('ML' in navigator) {                                                                                          
    // Inicializa el contexto de WebNN                                                                            
    const context = navigator.ml.createContext();                                                                 
                                                                                                                  
    // Aquí iría el código para definir y cargar tu modelo, crear tensores, etc.                                  
    // Por ejemplo:                                                                                               
    // const model = await context.createModel(...);                                                              
    // const operandBuilder = new MLGraphBuilder(context);                                                        
    // ...                                                                                                        
                                                                                                                  
} else {                                                                                                          
    console.error('La API de WebNN no está disponible en este navegador.');                                       
}         