import Head from 'next/head'
import Image from 'next/image'
import { PrismaClient } from '@prisma/client'
import Layout from '../layout/Layout'
import useApp from '../hooks/useApp'
import Producto from '../components/Producto'
export default function Home() {
  const { categoryActual } = useApp()
  return (
    <Layout pagina={`Menu ${categoryActual?.name}`}>
      <h1 className='text-4xl font-bold'>{categoryActual?.name}</h1>
      <p>Elige y personaliza tu pedido a continuación</p>
      <div className='grid gap-4 grid-cols-1 mt-2 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'>
        {categoryActual?.products?.map(p => (
          <Producto key={p.id} product={p} />
        ))}
      </div>

    </Layout>
  )
}

/* export const getServerSideProps = async () => {
  const prisma = new PrismaClient()
  const categories = await prisma.category.findMany();

  return {
    props: {
      categories,
    },
  };
} */
