import useApiConsumption from '../../hooks/useApiConsumption';
import Layout from "../../Components/Layout"
import Card from "../../Components/Card"
import CardSkeleton from '../../Components/CardSkeleton';

function Home() {

    const { data, loading, error } = useApiConsumption('https://fakestoreapi.com/products');
    return (
        <Layout>
            Home Page
            {loading && (
                <div className='grid gap-3 grid-cols-4 w-full max-w-screen-lg'>
                    <CardSkeleton />
                    <CardSkeleton />
                    <CardSkeleton />
                    <CardSkeleton />
                    <CardSkeleton />
                    <CardSkeleton />
                    <CardSkeleton />
                    <CardSkeleton />
                </div>
            )}
            {error && <p>Error: {error}</p>}
            <div className='grid gap-3 grid-cols-4 w-full max-w-screen-lg'>
                {
                    data && data.map((item)=>{
                        return <Card key={item.id} data={item}/>   
                    })
                } 
            </div>
        </Layout>
    )
}

export default Home