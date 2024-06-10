import axios from 'axios'
import './Catalog.scss'
import { useEffect, useState } from 'react'
import { Card } from '../../components/Card/Card'

export const Catalog = () => {

    const [error, setError] = useState('')

    const getAllPhotos = async (e) => {
        try {
            const resp = await axios('https://jsonplaceholder.typicode.com/photos')
            console.log(resp.data)
            setError('')
        } catch(err) {
            switch(err.response.status) {
                case 404:
                    setError('Товар не найден')
                    break
                case 401:
                    setError('Лимит исчерпан')
                    break
                case 500:
                    setError('Ошибка системы, обратитесь в службу поддержки')
            }
        }
    }

    useEffect(() => {
        getAllPhotos()
    },[])

    return (
        <>
            <section className="catalog">
                <div className="container grid">
                    <Card />
                    <Card />
                    <p style={{ color:'#f00' }}>{ error }</p>
                </div>
            </section>
            
            
        </>
    )
}