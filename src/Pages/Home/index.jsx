import useApiConsumption from '../../hooks/useApiConsumption';
import Layout from "../../Layout"
import Card from "../../Features/Store/Card"
import CardSkeleton from '../../Features/Store/CardSkeleton';
import ProductDetail from '../../Features/Store/ProductDetail';
import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';

function Home() {

    const context = useContext(ShoppingCartContext);
    const { data, loading, error } = useApiConsumption('https://fakestoreapi.com/products');
    
    
    return (
        <Layout css='flex flex-col items-center mt-10'>
            <div className="flex justify-center items-center w-80 relative mb-4">
                <h1 className="font-medium text-xl">Home Page</h1>
            </div>
            <input 
                type="text" 
                placeholder='Search for a product' 
                className='rounded-lg border-black border-2 w-80 p-4 mb-4'
                onChange={(event)=> context.setSearchByTitle(event.target.value)}
            />
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
                    data && data.filter(item => item.category.toLowerCase().includes(context.searchByCategory.toLowerCase())).filter(item => item.title.toLowerCase().includes(context.searchByTitle.toLowerCase())).map((item)=>{
                        return <Card key={item.id} data={item}/>   
                    })
                } 
            </div>
            <ProductDetail />
        </Layout>
    )
}

export default Home