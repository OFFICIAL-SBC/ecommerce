import useApiConsumption from '../../hooks/useApiConsumption';
import Layout from "../../Components/Layout"
import Card from "../../Components/Card"

function Home() {

    const { data, loading, error } = useApiConsumption('https://fakestoreapi.com/products');
    console.log(data, loading, error);

    return (
        <Layout>
            Home Page
            <Card/>
        </Layout>
    )
}

export default Home