import { Injectable } from "@angular/core";
import { Lista } from "../models/lista.model";


@Injectable()
export class DeseosService{

    listas: Lista[] = [];

    constructor(){

        this.cargarStorage();

        // const lista1 = new Lista("Recolectar piedras del infinito");
        // const lista2 = new Lista("Vencer a los vengadores");

        // this.listas.push(lista1, lista2);

        // console.log(this.listas);
        
    }

    agregarList( lista: Lista){
        this.listas.push(lista);

        this.guardarStorage();
    }

    guardarStorage(){
        localStorage.setItem('data', JSON.stringify(this.listas));
    }

    cargarStorage(){
        if ( localStorage.getItem('data') ){
            this.listas = JSON.parse(localStorage.getItem('data'));
        }
    }

    borrarLista( lista: Lista ){
        this.listas = this.listas.filter( listaData => {
            return listaData.id != lista.id;
        } );

        this.guardarStorage();
    }

}