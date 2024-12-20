'use client'
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCards from "../componentes/Item-cards";
import { use, useContext, useEffect, useState } from "react";
import { db } from "../componentes/Firebase";
import { getDocs, collection } from "firebase/firestore";


const querySnapshot = await getDocs(collection(db, 'grife_chic'))
function Moda_nacional() {
    const [data, setData] = useState([])

    function dadosFirebase() {
        let dados = []
        function pushDados() {
            querySnapshot.forEach(e => dados.push(e.data()))
        }
        pushDados()
        return dados
    }

    useEffect(() => {
        setData(dadosFirebase().filter(e => e.colecao == 'NACIONAL'))
    }, [])

    return (
        <div className='grid mb-5 W-100 bg-light overFlowContainer'>
            {data.map(e => {
                return (
                    <ItemCards nome={e.name} preco={e.preco} img={e.img} grade={e.grade} key={e.cod} ></ItemCards>
                )
            })}
        </div>
    )
}

export default Moda_nacional

