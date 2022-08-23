import { useNavigate } from 'react-router-dom'
import Button from '../components/common/Button'
import { Card } from '../components/common/Card'
import FlashCard from '../components/FlashCard'

const backdrop = require('../assets/backdrop.jpg')
const Homepage = () => {
  const navigate = useNavigate()
  const handleLogin = () => navigate('/login')
  return (
    <>
      <img className="z-[-1] fixed w-screen h-screen border-2 mt-10" src={backdrop} alt="test"/>
      <div
        className={`item-center flex h-screen justify-center overflow-hidden
        py-5 transition-all duration-500 ease-in-out`}>
        <div>
          <Card color="mt-[25%] text-center top-[10%]  z-[1] bg-white">
            <h3 className=" text-2xl font-bold text-black/[0.7]"> Welcome to Flash Cards !</h3>
            <div className="my-[3rem] py-3">
              <p>
                Flash Card App allows to remember important thing. Just put your question and
                answers you want to memories...
              </p>
              <div className="my-4 p-4">
                <FlashCard
                  question="Click here to reveal answer"
                  answer="Great!, you now how to use app!!"
                  tag="tutorial"
                  flashColor="#fff1cc"
                  createdAt={new Date().toDateString()}
                  updatedAt={new Date().toDateString()}
                  id={0}
                  user_id={0}
                  favorite={true}
                />
              </div>
              <p>Try above tutorial and see!, you can create multiple cards like this.</p>
            </div>
            <Button text="Join Now" type="expanded" onClick={handleLogin} />
          </Card>
        </div>
      </div>
    </>
  )
}

export default Homepage
