import Input from "./components/Input";
import PokemonItems from "./components/PokemonItems";


const Home = () => {

  return (
    <main className='flex justify-center'>
        <div className= 'flex flex-col items-center max-w-2xl md:max-w-4xl mt-14 '>
            <h1 className='text-info text-5xl'>Pika stickers</h1>
            <Input />
            <PokemonItems />
        </div>
    </main>
  )
}

export default (Home)