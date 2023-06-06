import { useEffect, useState } from 'react'
import { Container, AvatarContainer, Avatar, Degrade } from '../styled.components'
import BlackWidow from '../../assets/black-widow.png'
import { Movie, Item } from '../../interfaces/interface'

const Carousel = (): JSX.Element => {
    
    const [data, setData] = useState<Movie[]>([{
        name :"",
        description:"",
        thumbnail:""
    }])
    const getData = async(): Promise<void> => {
        const url = import.meta.env.VITE_BASE_URL
        const items = await fetch(url)
        const response: any = await items.json()
        const aItems = response.data.results.map((item: Item) => {
            const obj: Movie = {
                name: item.name,
                description: item.name,
                thumbnail: `${item.thumbnail.path}.${item.thumbnail.extension}`,
            }
            return obj
        })
        setData(aItems)
    }

    useEffect(() => {
        getData()
        console.log(data)
    }, [])

    return (
    <>
        { data.length > 0 ?
            <>
                <Container height={50} src={data[0].thumbnail}/>
                <AvatarContainer height={50}>
                    <Avatar height={50} src={BlackWidow}/>
                </AvatarContainer>
                <Degrade height={50}/>
            </> : <section className='loading'>Cargando...</section>
        }
    </>
    )
}

export default Carousel