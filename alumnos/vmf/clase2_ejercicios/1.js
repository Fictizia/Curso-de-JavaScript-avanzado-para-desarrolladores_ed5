function bubble(orderBox){
	// bucle para recorrer array
    for(i=0; i<(orderBox.length-1); i++) {
    	// bucle para ordenar array
    	for(j=0; j<(orderBox.length-i); j++){
    		// comparar
        	if(orderBox[j] > orderBox[j + 1]){
        		// cajón para reservar el valor
             	box = orderBox[j];
             	// guardamos el número menor
             	orderBox[j] = orderBox[j+1];
             	// asignamos el numero reservado en su lugar
             	orderBox[j+1] = box;
        	}
    	}
    }
return orderBox;
}

bubble([5,4,3,6,7,0]);

