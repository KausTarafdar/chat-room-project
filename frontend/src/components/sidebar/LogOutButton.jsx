import {BiLogOut} from 'react-icons/bi'
import useLogOut from '../../hooks/useLogOut'

const LogOutButton = () => {

  const {loading, logout} = useLogOut()

  return (
    <div className='mt-auto'>
      {!loading ? (
        <BiLogOut className='w-6 h-6 text-green-600 cursor-pointer'
          onClick={logout}
        />
      ) : (
        <span className='loading loading-spinner'></span>
      )}
    </div>
  )
}

export default LogOutButton