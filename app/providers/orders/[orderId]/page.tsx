import { Container } from '@/components/container';
import {Record} from '@/components/record';

export default async function Home({params: {orderId}}: {
    params: {orderId: string}
}) {

    return (
        <Container className='max-w-6xl'>
            <h2 className='text-center text-3xl mb-10'>Detailed Order #{orderId}</h2>
            <Record/>
        </Container>
    )
}