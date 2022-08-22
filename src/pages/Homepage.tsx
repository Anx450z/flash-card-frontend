import { useNavigate } from 'react-router-dom'
import Button from '../components/common/Button'
import { Card } from '../components/common/Card'
import FlashCard from '../components/FlashCard'


const Homepage = () => {
  const navigate = useNavigate()
  const handleLogin = () => navigate('/login')
  return (
    <>
      <div
        className="item-center mx-auto flex justify-center overflow-hidden
        py-5 transition-all duration-500 ease-in-out">
        <Card color="bg-white text-center">
          <h3 className=" text-2xl font-medium text-black/[0.7]"> Welcome to Flash Cards</h3>
          <div className="my-[3rem] py-3">
            <p>
              Flash Card App allows to remember important thing. Just put your question and answers
              you want to memories, and begin remembering.
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
            <p>Try above tutorial and see!</p>
          </div>
          <Button
            text="Join Now"
            type="expanded"
            onClick={handleLogin}
          />
        </Card>
      </div>
    </>
  )
}

export default Homepage
